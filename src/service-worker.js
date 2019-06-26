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
        '/assets/fonts/indieflower_v10_m8JVjfNVeKWVnh3QMuKkFcZVaUuH99GUDg.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmSU5fCBc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmSU5fBxc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2',
        '/assets/fonts/roboto_v19_KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2',
        '/assets/fonts/roboto_v19_KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2',
        '/assets/fonts/roboto_v19_KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2',
        '/assets/fonts/roboto_v19_KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2',
        '/assets/fonts/roboto_v19_KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2',
        '/assets/fonts/roboto_v19_KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2',
        '/assets/fonts/roboto_v19_KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2',
        '/assets/fonts/roboto_v19_KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2'
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
