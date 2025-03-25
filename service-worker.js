self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('contatos-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/assets/icon.png',
                '/css/styles.css',
                '/js/script.js'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
