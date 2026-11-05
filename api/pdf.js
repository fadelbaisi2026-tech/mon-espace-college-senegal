'use strict';

const { Readable } = require('stream');

const ALLOWED_HOSTS = new Set([
  'sunumaths.com',
  'img1.wsimg.com',
  'senprof.education.sn',
  'senprof2.education.sn',
  'apprendre.auf.org',
  'topeducationsn.com',
  'reseauscolaire.com',
  'www.halwar.sn'
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
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return sendError(res, 405, 'Méthode non autorisée.');
  }

  try {
    const rawUrl = typeof req.query.url === 'string' ? req.query.url : '';
    if (!rawUrl || rawUrl.length > 2048) {
      return sendError(res, 400, 'Adresse PDF manquante ou trop longue.');
    }

    let target = parseAllowedPdfUrl(rawUrl);
    const requestHeaders = {
      'User-Agent': 'Mozilla/5.0 (compatible; MonEspaceCollegePDF/1.0)',
      'Accept': 'application/pdf,application/octet-stream;q=0.9,*/*;q=0.5'
    };
    if (typeof req.headers.range === 'string') {
      requestHeaders.Range = req.headers.range;
    }
    if (typeof req.headers['if-range'] === 'string') {
      requestHeaders['If-Range'] = req.headers['if-range'];
    }

    let upstream;
    for (let redirects = 0; redirects <= 5; redirects += 1) {
      upstream = await fetch(target.toString(), {
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
        continue;
      }
      break;
    }

    if (!upstream || (!upstream.ok && upstream.status !== 206)) {
      const status = upstream && upstream.status === 404 ? 404 : 502;
      return sendError(res, status, 'Le fichier PDF est indisponible à sa source. Réessaie plus tard.');
    }

    const contentType = (upstream.headers.get('content-type') || '').toLowerCase();
    if (contentType && !/(application\/pdf|application\/octet-stream|application\/x-pdf|binary\/octet-stream)/i.test(contentType)) {
      return sendError(res, 502, 'La source a renvoyé une page web au lieu d’un fichier PDF.');
    }

    res.statusCode = upstream.status;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename="document.pdf"');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800');

    for (const header of ['content-length', 'content-range', 'accept-ranges', 'last-modified', 'etag']) {
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
    if (status >= 500) console.error('Erreur du relais PDF :', error);
    return sendError(res, status, error.message || 'Impossible de charger ce PDF pour le moment.');
  }
};
