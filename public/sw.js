const CACHE_NAME = 'portal3d-assets-v2';

const STATIC_ASSETS = [
  '/models-carrossel/sonic-vermelho.webp',
  '/models-carrossel/sonic-azul.webp',
  '/models-carrossel/sub-zero.webp',
  '/images/poster-apresentacao.webp',
  '/images/poster-notebook.webp',
  '/images/oferta-vip.webp',
  '/images/garantia-14-dias.webp',
  '/images/mercado-1.webp',
  '/images/mercado-2.webp',
  '/images/mercado-3.webp',
  '/images/depoimentos/depoimento-1.webp',
  '/images/depoimentos/depoimento-2.webp',
  '/images/depoimentos/depoimento-3.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // High performance cache-first for images & fonts
  if (
    request.destination === 'image' ||
    request.destination === 'font' ||
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.jpg') ||
    url.hostname.includes('imgur.com') ||
    url.hostname.includes('universo3d.online') ||
    url.hostname.includes('fonts.gstatic.com')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return networkResponse;
        }).catch(() => cached);
      })
    );
  }
});
