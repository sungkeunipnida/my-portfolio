self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("portfolio-cache-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/logo_s_192x192-v2.png",
        "/logo_s_512x512-v2.png",
        "/apple-touch-icon-v2.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
