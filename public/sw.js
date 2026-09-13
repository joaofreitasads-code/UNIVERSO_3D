// Service Worker for Portal 3D - Ultra-fast caching
const CACHE_NAME = 'portal3d-cache-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/poster-apresentacao.webp',
  '/selo-garantia-14-dias.webp'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('Pre-cache issue:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Skip non-GET requests or checkout/tracking requests
  if (event.request.method !== 'GET') return;
  if (url.hostname.includes('facebook') || url.hostname.includes('ggcheckout')) return;

  // Stale-While-Revalidate for images, assets, fonts
  if (
    url.pathname.endsWith('.webp') ||
    url.pathname.endsWith('.png') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.css') ||
    url.hostname.includes('fonts.gstatic.com') ||
    url.hostname.includes('fonts.googleapis.com')
  ) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        const cachedResponse = await cache.match(event.request);
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        }).catch(() => cachedResponse);

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Network-First for HTML navigation
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const resClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, resClone);
          });
          return response;
        })
        .catch(() => caches.match('/index.html') || caches.match('/'))
    );
  }
});
