/* Gutter Sketch service worker (v3.10). Keeps a copy of the app on the iPad so it opens at a house with no signal.
   Cache-first with a background refresh: the iPad shows the last copy it has and quietly downloads a newer one;
   the new version is used on the next launch (the app shows a toast when one has arrived). Holds no job data,
   no prices and no keys: only the app file, its icon and the two PDF libraries it loads from cdnjs. */
const SHELL = 'gs-shell-v1';
const APP = new URL('gutter-sketch.html', self.registration.scope).href;
const ICON = new URL('icon-180.png', self.registration.scope).href;
const JSPDF = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
const PDFJS = ['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js', 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js'];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL);
    await c.addAll([APP, ICON]);
    for (const u of [JSPDF, ...PDFJS]) { try { await c.add(new Request(u, {mode: 'cors'})); } catch (err) {} }   /* best effort: the app still works without PDF export offline */
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== SHELL) await caches.delete(k);
    await self.clients.claim();
  })());
});

async function refreshApp(c, req) {   /* fetch the app in the background; if it changed, store it and tell open pages */
  try {
    const fresh = await fetch(req, {cache: 'no-cache'});
    if (!fresh || !fresh.ok) return;
    const old = await c.match(req);
    const [a, b] = await Promise.all([fresh.clone().text(), old ? old.clone().text() : Promise.resolve('')]);
    if (a !== b) {
      await c.put(req, fresh);
      for (const cl of await self.clients.matchAll({type: 'window'})) cl.postMessage({type: 'update-ready'});
    }
  } catch (err) {}
}

self.addEventListener('fetch', e => {
  const u = e.request.url;
  if (e.request.method !== 'GET') return;
  if (u.split('?')[0] === APP || u.split('?')[0] === ICON || u === JSPDF || PDFJS.includes(u)) {
    e.respondWith((async () => {
      const c = await caches.open(SHELL);
      const key = (u.split('?')[0] === APP) ? APP : e.request;
      const hit = await c.match(key);
      if (hit) { if (key === APP) e.waitUntil(refreshApp(c, APP)); return hit; }
      try { const net = await fetch(e.request); if (net && net.ok) c.put(key, net.clone()); return net; }
      catch (err) { return new Response('Gutter Sketch is not cached on this iPad yet. Open it once with signal.', {status: 503, headers: {'Content-Type': 'text/plain'}}); }
    })());
  }
});

self.addEventListener('message', e => { if (e.data && e.data.type === 'skip-waiting') self.skipWaiting(); });
