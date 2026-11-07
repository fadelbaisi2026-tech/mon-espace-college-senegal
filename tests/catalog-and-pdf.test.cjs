'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const catalog = require('../catalog-utils.js');
const pdfHandler = require('../api/pdf.js');

function readSeedResources() {
  const source = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  const marker = 'const seedResources = ';
  const start = source.indexOf(marker);
  assert.notEqual(start, -1, 'seedResources declaration must exist');
  const jsonStart = start + marker.length;
  const end = source.indexOf('\n];', jsonStart);
  assert.notEqual(end, -1, 'seedResources array must close');
  return JSON.parse(source.slice(jsonStart, end + 2));
}

function createResponse() {
  return {
    statusCode: 200,
    headers: {},
    body: '',
    writableEnded: false,
    setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
    end(body = '') { this.body = body; this.writableEnded = true; },
    destroy() { this.destroyed = true; }
  };
}

test('resource categories keep exercises separate from assessments', () => {
  assert.deepEqual(catalog.libraryCategories({ kind: 'Exercices' }), ['Exercices']);
  assert.deepEqual(catalog.libraryCategories({ kind: 'Cours et exercices' }), ['Cours', 'Exercices']);
  assert.deepEqual(catalog.libraryCategories({ kind: 'Épreuves' }), ['Devoirs']);
  assert.deepEqual(catalog.libraryCategories({ kind: 'Fascicule' }), ['Cours']);
  assert.equal(catalog.displayResourceKind({ kind: 'Exercices' }), 'Exercices');
  assert.equal(catalog.displayResourceKind({ kind: 'Épreuves' }), 'Devoirs');
});

test('PDF URL validation accepts only direct HTTPS PDF URLs', () => {
  assert.equal(catalog.isPdfUrl('https://example.org/fichier.pdf'), true);
  assert.equal(catalog.isPdfUrl('https://example.org/fichier.PDF?v=2#page=3'), true);
  assert.equal(catalog.isPdfUrl('http://example.org/fichier.pdf'), false);
  assert.equal(catalog.isPdfUrl('javascript:alert(1).pdf'), false);
  assert.equal(catalog.isPdfUrl('https://example.org/fichier.pdf.html'), false);
  assert.equal(catalog.isPdfUrl('https://user:pass@example.org/fichier.pdf'), false);
  assert.equal(catalog.isPdfUrl('not a url'), false);
});

test('the landing panel is shown only at the root of the library', () => {
  assert.equal(catalog.isLibraryLandingView('', {}), true);
  assert.equal(catalog.isLibraryLandingView('svt', {}), false);
  assert.equal(catalog.isLibraryLandingView('', { grade: '6e' }), false);
  assert.equal(catalog.isLibraryLandingView('', { grade: '6e', subject: 'SVT' }), false);
  assert.equal(catalog.isLibraryLandingView('', { grade: 'Toutes' }), false);
});

test('local files are visible by PDF name or MIME type', () => {
  assert.equal(catalog.isLocalPdfResource({
    fileId: 'file-1', fileName: 'cours-sans-extension', fileType: 'application/pdf'
  }), true);
  assert.equal(catalog.isLocalPdfResource({ fileId: 'file-2', fileName: 'cours.pdf' }), true);
  assert.equal(catalog.isLocalPdfResource({ fileId: 'file-3', fileName: 'photo.png', fileType: 'image/png' }), false);
  assert.equal(catalog.isLocalPdfResource({ fileName: 'cours.pdf' }), false);
});

test('all catalogue URLs are HTTPS PDFs and allowed by the PDF proxy', () => {
  const resources = readSeedResources();
  assert.ok(resources.length > 0, 'seeded library must not be empty');
  const ids = resources.map(resource => resource.id);
  assert.equal(new Set(ids).size, ids.length, 'resource ids must be unique');

  for (const resource of resources) {
    assert.equal(catalog.isPdfUrl(resource.url), true, resource.id + ' must have a valid PDF URL');
    assert.doesNotThrow(() => pdfHandler.parseAllowedPdfUrl(resource.url), resource.id + ' must be allowed by proxy');
  }
});

test('PDF proxy rejects unsupported methods and non-allowlisted hosts', async () => {
  const methodResponse = createResponse();
  await pdfHandler({ method: 'POST', headers: {}, query: {} }, methodResponse);
  assert.equal(methodResponse.statusCode, 405);
  assert.equal(methodResponse.headers.allow, 'GET, HEAD');

  const hostResponse = createResponse();
  await pdfHandler({
    method: 'GET',
    headers: {},
    query: { url: 'https://untrusted.example/document.pdf' }
  }, hostResponse);
  assert.equal(hostResponse.statusCode, 403);
});


test('subject cards follow a mobile-first responsive grid', () => {
  const styles = fs.readFileSync(path.join(__dirname, '..', 'styles.css'), 'utf8');
  const mobileStart = styles.lastIndexOf('@media(max-width:680px){');
  const mobileEnd = styles.indexOf('\n}', mobileStart);
  assert.notEqual(mobileStart, -1, 'mobile breakpoint must exist');
  assert.notEqual(mobileEnd, -1, 'mobile breakpoint must close');
  const mobileStyles = styles.slice(mobileStart, mobileEnd);

  assert.match(styles, /\.subject-grid\{grid-template-columns:minmax\(0,1fr\)\}/,
    'one column is the default layout');
  assert.match(styles, /@media\(min-width:681px\)\{\.subject-grid,\.category-grid\{grid-template-columns:repeat\(2,minmax\(0,1fr\)\)\}/,
    'tablet layout uses two columns');
  assert.match(styles, /@media\(min-width:981px\)\{\.subject-grid,\.category-grid\{grid-template-columns:repeat\(3,minmax\(0,1fr\)\)\}/,
    'desktop layout uses three columns');
  assert.match(mobileStyles, /\.subject-grid \.subject-tile\{min-height:88px;padding:14px 16px\}/,
    'mobile subject cards have a comfortable touch target');
  assert.doesNotMatch(mobileStyles, /\.subject-grid\{grid-template-columns:repeat\(2/,
    'mobile subject cards must not be squeezed into two columns');
});
