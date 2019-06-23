self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('cichetto').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles/build.css',
        '/main.js',
        '/assets/rodrigocichetto-default.jpg',
        '/assets/bg-dev.jpg',
        '/assets/bg-photographer.jpg',
        '/assets/bg-facebook.jpg',
        '/assets/bg-instagram.jpg',
        '/assets/bg-medium.jpg',
        '/assets/rodrigocichetto-photo.jpg',
      ])
    })
  )
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  )
})
