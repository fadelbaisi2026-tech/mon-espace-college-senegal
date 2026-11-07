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


test('Physique-Chimie resources use live, proxy-allowed PDF hosts', () => {
  const resources = readSeedResources().filter(item => item.subject === 'Physique-Chimie');
  assert.ok(resources.length >= 20, 'the Physics-Chemistry catalogue must remain populated');
  assert.equal(
    resources.filter(item => item.url.startsWith('https://topeducationsn.com/')).length,
    0,
    'the unavailable Top Education host must not be used by Physics-Chemistry resources'
  );

  for (const resource of resources) {
    assert.doesNotThrow(
      () => pdfHandler.parseAllowedPdfUrl(resource.url),
      resource.id + ' must be accepted by the PDF proxy'
    );
  }

  assert.ok(resources.some(item => item.grade === '4e' && item.source.startsWith('ADEM-Dakar')),
    'the fourth-grade ADEM fascicule must be present');
  assert.ok(resources.some(item => item.grade === '3e' && item.source.startsWith('ADEM-Dakar')),
    'the third-grade ADEM fascicule must be present');

  const appSource = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  assert.ok(appSource.includes("'senprof2.education.sn'"),
    'the browser must send SenProf2 PDFs through the same-origin PDF proxy');
});


test('ADEM Physics-Chemistry fascicules are classified as exercises, not courses', () => {
  const resources = readSeedResources();
  for (const id of ['pc4-comp2', 'pc3-bfem16']) {
    const item = resources.find(resource => resource.id === id);
    assert.ok(item, id + ' must remain in the catalogue');
    assert.equal(item.kind, 'Exercices', id + ' must be classified as exercises');
    assert.ok(item.title.toLocaleLowerCase('fr-FR').includes('exercices'),
      id + ' must clearly identify the fascicule as an exercise resource');
    assert.deepEqual(catalog.libraryCategories(item), ['Exercices'],
      id + ' must not appear under Cours');
  }

  for (const id of ['pc-wahab-course-4e', 'pc-wahab-course-3e-physics', 'pc-wahab-course-3e-chemistry']) {
    const item = resources.find(resource => resource.id === id);
    assert.ok(item, id + ' must remain available');
    assert.deepEqual(catalog.libraryCategories(item), ['Cours', 'Exercices'],
      id + ' contains lesson material and applications');
  }
});


test('remote PDFs, including the fourth-grade Physics-Chemistry course, stay in the in-app reader', () => {
  const appSource = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  const htmlSource = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
  const cardStart = appSource.indexOf('function resourceCard(item)');
  const cardEnd = appSource.indexOf('\nconst LIBRARY_SUBJECTS', cardStart);
  const cardSource = appSource.slice(cardStart, cardEnd);
  assert.ok(cardSource.includes('data-open-pdf='), 'remote PDFs must use the in-app PDF button');
  assert.doesNotMatch(cardSource, /target="_blank"/, 'resource cards must not open PDFs in another tab');
  assert.match(htmlSource, /id="pdfFrame"/, 'the in-app PDF frame must be present');
  assert.doesNotMatch(htmlSource, /target="_blank"/, 'the PDF viewer must not offer a link that opens another tab');
  assert.doesNotMatch(htmlSource, /id="pdfSourceLink"/, 'the external source link must be removed from the PDF reader');
});

test('the fourth-grade Physics-Chemistry course uses Wahab Diop’s 54-page lesson booklet', () => {
  const item = readSeedResources().find(resource => resource.id === 'pc-wahab-course-4e');
  assert.ok(item, 'the fourth-grade course must remain available');
  assert.equal(item.kind, 'Cours et exercices');
  assert.match(item.title, /Cahier de leçons.*4e.*Wahab Diop/);
  assert.match(item.url, /fascicule-sciences-physiques-4eme-_wahabdiop\.pdf\?/);
  assert.match(item.source, /BST Liberté III.*Wahab Diop/);
  assert.deepEqual(catalog.libraryCategories(item), ['Cours', 'Exercices']);
});

test('the IREMPT fourth-grade Physics-Chemistry lessons are included and proxy-allowed', () => {
  const resources = readSeedResources();
  const expected = [
    'pc-irempt-4e-c1-melanges', 'pc-irempt-4e-c2-structure',
    'pc-irempt-4e-c3-mole', 'pc-irempt-4e-c4-reaction',
    'pc-irempt-4e-p2-grandeurs', 'pc-irempt-4e-p3-masse',
    'pc-irempt-4e-p4-poids', 'pc-irempt-4e-p6-lumiere',
    'pc-irempt-4e-p8-optique'
  ];
  for (const id of expected) {
    const item = resources.find(resource => resource.id === id);
    assert.ok(item, id + ' must be present in the fourth-grade catalogue');
    assert.equal(item.grade, '4e');
    assert.equal(item.subject, 'Physique-Chimie');
    assert.equal(item.source, 'IREMPT · UCAD');
    assert.equal(item.kind, 'Cours et exercices');
    assert.doesNotThrow(() => pdfHandler.parseAllowedPdfUrl(item.url), id + ' must be accepted by the PDF proxy');
  }
  assert.equal(new Set(resources.map(item => item.id)).size, resources.length, 'resource identifiers must remain unique');
  const appSource = fs.readFileSync(path.join(__dirname, '..', 'app.js'), 'utf8');
  assert.ok(appSource.includes("'irempt.ucad.sn'"), 'IREMPT PDFs must be sent through the same-origin PDF proxy');
});
