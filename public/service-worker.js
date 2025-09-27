// 새 빌드가 있으면 기존 워커 무시하고 즉시 교체
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

// 새 워커가 모든 탭/창에 바로 적용되도록
self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());
});

// 네트워크 우선 전략 (항상 최신 파일 불러오기)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
