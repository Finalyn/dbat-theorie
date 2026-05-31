const CACHE = "dbat-entraineur-v5";
const FILES = [
  "./",
  "./index.html",
  "./exam.html",
  "./stats.html",
  "./manifest.json",
  "./logo.svg",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png",
  "./data/materiaux-2018.json",
  "./data/materiaux-2019.json",
  "./data/materiaux-2021.json",
  "./data/materiaux-2022.json",
  "./data/materiaux-2023.json",
  "./data/materiaux-mix.json",
  "./data/construction-2018.json",
  "./data/construction-2019.json",
  "./data/construction-2021.json",
  "./data/construction-2022.json",
  "./data/construction-2023.json",
  "./data/construction-mix.json",
  "./data/visualisation-2018.json",
  "./data/visualisation-2019.json",
  "./data/visualisation-2021.json",
  "./data/visualisation-2022.json",
  "./data/visualisation-2023.json",
  "./data/visualisation-mix.json"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fetchPromise = fetch(e.request).then(resp => {
        if (resp && resp.status === 200 && resp.type === "basic") {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => cached);
      return cached || fetchPromise;
    })
  );
});
