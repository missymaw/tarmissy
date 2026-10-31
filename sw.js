const CACHE_NAME = 'tarjetas-digitales-v2';
const SCOPE_URL = self.registration.scope;

const FILES = [
  'index.html',
  'config.js',
  'config-plantillas.js',
  'manifest.webmanifest',
  'favicon.svg',
  'assets/base.css',
  'assets/motor.js',
  'assets/preview-shell.js',
  'assets/imagenes/missy01.jpg',
  'assets/imagenes/LEEME.txt',
  'plantillas/a1-gallery.js',
  'plantillas/ali-animus.js',
  'plantillas/chonkylotus.js',
  'plantillas/chrls-dsgn.js',
  'plantillas/cyberpunk-neon-animado.js',
  'plantillas/dribbble.js',
  'plantillas/elena-tiffany.js',
  'plantillas/everylunaever.js',
  'plantillas/faymas.js',
  'plantillas/finstey.js',
  'plantillas/juls-passion.js',
  'plantillas/lilly-vinnily.js',
  'plantillas/mariana-gomes.js',
  'plantillas/olivia-brooke.js',
  'plantillas/sarah-anderson.js',
  'plantillas/tali-edri.js',
  'plantillas/valerie-senior.js',
  'plantillas/yumie-tsuchinoko.js'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(FILES.map(path => new URL(path, SCOPE_URL).href));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());

  // Se conservan las cachés anteriores.
  // Las solicitudes nuevas usan únicamente CACHE_NAME.
});

self.addEventListener('fetch', event => {
  const request = event.request;

  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const isConfig = /\/config\.js$/.test(url.pathname);

    if (isConfig) {
      try {
        const fresh = await fetch(request, { cache: 'no-store' });

        if (fresh && fresh.ok) {
          await cache.put(request, fresh.clone());
          return fresh;
        }

        const cachedConfig = await cache.match(request);
        if (cachedConfig) return cachedConfig;

        return fresh;
      } catch (error) {
        const cachedConfig = await cache.match(request);
        if (cachedConfig) return cachedConfig;
      }
    }

    const cached = await cache.match(request);

    if (cached) return cached;

    try {
      const response = await fetch(request);

      if (response && response.ok) {
        await cache.put(request, response.clone()).catch(() => {});
      }

      return response;
    } catch (error) {
      if (request.mode === 'navigate') {
        const fallback = await cache.match(
          new URL('index.html', SCOPE_URL).href,
          { ignoreSearch: true }
        );

        if (fallback) return fallback;
      }

      return new Response('recurso no disponible sin conexión', {
        status: 503,
        headers: {
          'Content-Type': 'text/plain; charset=utf-8'
        }
      });
    }
  })());
});