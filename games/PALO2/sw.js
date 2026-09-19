// FlatFast PWA Service Worker
const CACHE_NAME = 'ff-pwa-palo2-1789823826731';

// Install event - activate worker immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event - clean up stale caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name.startsWith('ff-pwa-cache-') && name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - cache-first with network fallback for static assets, network-first for navigation
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Only handle GET requests and http/https schemes
  if (request.method !== 'GET') return;
  if (!request.url.startsWith('http://') && !request.url.startsWith('https://')) return;

  // Audio / video range requests or special endpoints pass directly to network
  if (request.headers.get('range')) return;

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const cachedResponse = await cache.match(request);
      if (cachedResponse) {
        // Fetch in background to update cache (stale-while-revalidate)
        fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
              cache.put(request, networkResponse.clone());
            }
          })
          .catch(() => { /* ignore offline / network errors in background update */ });
        return cachedResponse;
      }

      // If not in cache, fetch from network and cache
      return fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            cache.put(request, networkResponse.clone());
          }
          return networkResponse;
        })
        .catch(() => {
          // If offline and requesting html navigation, fallback to root index
          if (request.mode === 'navigate') {
            return cache.match('./index.html') || cache.match('./');
          }
        });
    })
  );
});
