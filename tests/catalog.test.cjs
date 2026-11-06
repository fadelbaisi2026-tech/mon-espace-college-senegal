'use strict';

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');
const assert = require('node:assert/strict');

const root = path.join(__dirname, '..');
const appSource = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const htmlSource = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'manifest.webmanifest'), 'utf8'));

const catalogMatch = appSource.match(/const seedResources = (\[[\s\S]*?\n\]);/);
assert.ok(catalogMatch, 'The seed catalog must remain a JSON-compatible array.');
const catalog = JSON.parse(catalogMatch[1]);

const allowedHosts = new Set([
  'sunumaths.com',
  'www.sunumaths.com',
  'img1.wsimg.com',
  'senprof.education.sn',
  'senprof2.education.sn',
  'apprendre.auf.org',
  'topeducationsn.com',
  'www.topeducationsn.com'
]);

test('catalog resource IDs are unique', () => {
  const ids = catalog.map(resource => resource.id);
  assert.equal(new Set(ids).size, ids.length);
});

test('all catalogue links are HTTPS PDF files from approved hosts', () => {
  assert.equal(catalog.length, 131, 'Update this expected count when the catalogue changes intentionally.');
  for (const resource of catalog) {
    assert.equal(typeof resource.url, 'string', resource.id + ' must have a URL.');
    const url = new URL(resource.url);
    assert.equal(url.protocol, 'https:', resource.id + ' must use HTTPS.');
    assert.match(url.pathname, /\.pdf$/i, resource.id + ' must point to a PDF path.');
    assert.ok(allowedHosts.has(url.hostname.toLowerCase()), resource.id + ' uses an unapproved host.');
  }
});

test('PDF URL validation accepts secure PDFs and rejects unsafe schemes', () => {
  const start = appSource.indexOf('function isPdfUrl(value)');
  const end = appSource.indexOf('function esc(value)', start);
  assert.ok(start >= 0 && end > start, 'PDF validation helpers must exist.');

  const context = vm.createContext({
    window: { location: { href: 'https://college.example/', origin: 'https://college.example/' } }
  });
  vm.runInContext(appSource.slice(start, end), context);

  const result = vm.runInContext(
    "({ secure: isPdfUrl('https://docs.example/cours.pdf?download=1'), sameOrigin: isPdfUrl('/fichiers/cours.pdf'), httpExternal: isPdfUrl('http://docs.example/cours.pdf'), script: isPdfUrl('javascript:alert(1)//cours.pdf') })",
    context
  );
  assert.equal(result.secure, true);
  assert.equal(result.sameOrigin, true);
  assert.equal(result.httpExternal, false);
  assert.equal(result.script, false);
});

test('personal records remain visible when their local PDF must be reimported', () => {
  const start = appSource.indexOf('function isPdfUrl(value)');
  const end = appSource.indexOf('function esc(value)', start);
  const context = vm.createContext({
    seedResources: [],
    state: {
      resources: [
        { id: 'restored-file', personal: true, fileName: 'cours.pdf', url: '', needsFile: true },
        { id: 'unsafe-link', personal: false, url: 'javascript:alert(1)//cours.pdf' }
      ]
    },
    window: { location: { href: 'https://college.example/', origin: 'https://college.example/' } }
  });
  vm.runInContext(appSource.slice(start, end), context);

  const ids = Array.from(vm.runInContext('allResources().map(resource => resource.id)', context));
  assert.deepEqual(ids, ['restored-file']);
});

test('the page exposes unique IDs for backup and PDF fallback controls', () => {
  const ids = Array.from(htmlSource.matchAll(/\bid="([^"]+)"/g), match => match[1]);
  assert.equal(new Set(ids).size, ids.length, 'HTML element IDs must be unique.');
  for (const id of ['backupExportBtn', 'backupImportBtn', 'backupFileInput', 'reattachFileInput', 'pdfViewerStatus', 'pdfOpenSource']) {
    assert.ok(ids.includes(id), 'Missing expected control: ' + id);
  }
});

test('PWA manifest references an existing scalable icon', () => {
  assert.ok(Array.isArray(manifest.icons) && manifest.icons.length > 0);
  for (const icon of manifest.icons) {
    assert.ok(fs.existsSync(path.join(root, icon.src.replace(/^\.\//, ''))), 'Missing manifest icon: ' + icon.src);
  }
});
