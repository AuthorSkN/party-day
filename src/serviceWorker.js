
export function register(config) {
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
          navigator.serviceWorker.register('service-worker.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
          }).catch(function (err) {
            console.log(err)
          });
        });
      } else {
        console.log('service worker is not supported');
      }
    });
  }

// Set this to true for production
var doCache = false;

// Name our cache
var CACHE_NAME = 'my-pwa-cache-v1';

// Delete old caches that are not our current one!
self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key)
            return caches.delete(key);
          }
        }))
      )
  );
});

// The first time the user starts up the PWA, 'install' is triggered.
self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(
              [
                '/'
              ]
            );
          }
    ));
  }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
self.addEventListener('fetch', function(event) {
    if (doCache) {
      event.respondWith(
          caches.match(event.request).then(function(response) {
              return response || fetch(event.request);
          })
      );
    }
});



export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
