'use strict';

const { Readable } = require('stream');

const ALLOWED_HOSTS = new Set([
  'sunumaths.com',
  'img1.wsimg.com',
  'senprof.education.sn',
  'senprof2.education.sn',
  'apprendre.auf.org',
  'topeducationsn.com',
  'www.topeducationsn.com'
]);

function parseAllowedPdfUrl(raw) {
  let url;
  try {
    url = new URL(raw);
  } catch {
    throw Object.assign(new Error('Adresse PDF invalide.'), { statusCode: 400 });
  }

  if (
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.port ||
    !ALLOWED_HOSTS.has(url.hostname.toLowerCase()) ||
    !/\.pdf$/i.test(url.pathname)
  ) {
    throw Object.assign(new Error('Cette source PDF n’est pas autorisée.'), { statusCode: 403 });
  }

  return url;
}

async function fetchResponseHeaders(url, options, timeoutMs = 15000) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }
}

function redirectToOriginalPdf(res, target) {
  res.statusCode = 302;
  res.setHeader('Location', target.toString());
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end();
}

function sendError(res, statusCode, message) {
  if (res.headersSent) {
    res.destroy();
    return;
  }
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.end(message);
}

module.exports = async function pdfProxy(req, res) {
  let target = null;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return sendError(res, 405, 'Méthode non autorisée.');
  }

  try {
    const rawUrl = typeof req.query.url === 'string' ? req.query.url : '';
    if (!rawUrl || rawUrl.length > 2048) {
      return sendError(res, 400, 'Adresse PDF manquante ou trop longue.');
    }

    target = parseAllowedPdfUrl(rawUrl);
    const requestHeaders = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Accept': 'application/pdf,application/octet-stream;q=0.9,*/*;q=0.8',
      'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7',
      'Referer': target.origin + '/'
    };
    if (typeof req.headers.range === 'string') {
      requestHeaders.Range = req.headers.range;
    }
    if (typeof req.headers['if-range'] === 'string') {
      requestHeaders['If-Range'] = req.headers['if-range'];
    }

    let upstream;
    for (let redirects = 0; redirects <= 5; redirects += 1) {
      upstream = await fetchResponseHeaders(target.toString(), {
        method: req.method,
        headers: requestHeaders,
        redirect: 'manual'
      });

      if ([301, 302, 303, 307, 308].includes(upstream.status)) {
        const location = upstream.headers.get('location');
        if (!location || redirects === 5) {
          return sendError(res, 502, 'La source du PDF redirige vers une adresse indisponible.');
        }
        target = parseAllowedPdfUrl(new URL(location, target).toString());
        if (upstream.body) await upstream.body.cancel().catch(() => {});
        continue;
      }
      break;
    }

    if (!upstream || (!upstream.ok && upstream.status !== 206)) {
      if (!upstream || [403, 429, 500, 502, 503, 504].includes(upstream.status)) {
        return redirectToOriginalPdf(res, target);
      }
      return sendError(res, upstream.status === 404 ? 404 : 502, 'Le fichier PDF est indisponible à sa source.');
    }

    const contentType = (upstream.headers.get('content-type') || '').toLowerCase();
    const isPdfContent = ['application/pdf', 'application/octet-stream', 'application/x-pdf', 'binary/octet-stream']
      .some(type => contentType.includes(type));
    if (contentType && !isPdfContent) {
      return redirectToOriginalPdf(res, target);
    }

    res.statusCode = upstream.status;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="document.pdf"');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');

    const upstreamIsEncoded = Boolean(upstream.headers.get('content-encoding'));
    for (const header of ['content-length', 'content-range', 'accept-ranges', 'last-modified', 'etag']) {
      if (header === 'content-length' && upstreamIsEncoded) continue;
      const value = upstream.headers.get(header);
      if (value) res.setHeader(header, value);
    }

    if (req.method === 'HEAD') {
      return res.end();
    }

    if (!upstream.body) {
      return sendError(res, 502, 'La source a renvoyé un fichier PDF vide.');
    }

    Readable.fromWeb(upstream.body).on('error', () => {
      if (!res.headersSent) sendError(res, 502, 'Erreur pendant le transfert du PDF.');
      else res.destroy();
    }).pipe(res);
  } catch (error) {
    const status = Number.isInteger(error.statusCode) ? error.statusCode : 502;
    if (status >= 500) {
      console.error('Erreur du relais PDF :', error);
      if (target && status === 502) return redirectToOriginalPdf(res, target);
    }
    return sendError(res, status, error.message || 'Impossible de charger ce PDF pour le moment.');
  }
};

// Exported for dependency-free regression tests.
module.exports.parseAllowedPdfUrl = parseAllowedPdfUrl;
