
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

var doCache = false;

var CACHE_NAME = 'my-pwa-cache-v1';

window.self.addEventListener("activate", event => {
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

window.self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
      fetch("asset-manifest.json").then(response => {
        response.json()
      })
      .then(assets => {
        const urlsToCache = [
          "/",
          assets["main.js"],
          
        ]
        cache.addAll(urlsToCache)
        console.log('cached');
      })
    }));
  }
});

window.self.addEventListener('fetch', function(event) {
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
