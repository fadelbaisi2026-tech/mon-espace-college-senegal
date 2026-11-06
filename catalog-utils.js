(function attachCatalogUtils(root) {
  'use strict';
  function normalizeKind(kind) {
    return String(kind || 'Autre').toLocaleLowerCase('fr-FR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  function isPdfUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return false;
    try {
      const url = new URL(value.trim());
      return url.protocol === 'https:' && !url.username && !url.password && !url.port && /\.pdf$/i.test(url.pathname);
    } catch { return false; }
  }
  function isAssessmentKind(kind) {
    const value = normalizeKind(kind);
    return ['devoir','examen','composition','epreuve','annale','bfem','test','evaluation','controle','interrogation','sujet','concours'].some(term => value.includes(term));
  }
  function displayResourceKind(item) {
    const kind = String(item && item.kind || 'Autre');
    const value = normalizeKind(kind);
    if (value.includes('cours') && value.includes('exercice')) return kind;
    if (value.includes('exercice')) return 'Exercices';
    if (isAssessmentKind(kind)) return 'Devoirs';
    return kind;
  }
  function libraryCategories(item) {
    const kind = normalizeKind(item && item.kind);
    const categories = [];
    if (kind.includes('cours')) categories.push('Cours');
    if (kind.includes('exercice')) categories.push('Exercices');
    if (isAssessmentKind(kind)) categories.push('Devoirs');
    if (!categories.length && kind.includes('fascicule')) categories.push('Cours');
    if (!categories.length) categories.push('Autres');
    return [...new Set(categories)];
  }
  function isLocalPdfResource(item) {
    return Boolean(item && item.fileId && (/\.pdf$/i.test(String(item.fileName || '')) || item.fileType === 'application/pdf'));
  }
  const api = Object.freeze({isPdfUrl,isAssessmentKind,displayResourceKind,libraryCategories,isLocalPdfResource});
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (root) root.MonEspaceCatalogUtils = api;
})(typeof window !== 'undefined' ? window : globalThis);
