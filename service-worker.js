self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('fetch',e=>e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))));