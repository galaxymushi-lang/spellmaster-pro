const CACHE_NAME='spellmaster-v2';
const ASSETS=['index.html','manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(nr=>{if(nr.ok){const clone=nr.clone();caches.open(CACHE_NAME).then(c=>c.put(e.request,clone))}return nr}).catch(()=>caches.match('index.html'))))});
self.addEventListener('message',e=>{if(e.data==='skipWaiting')self.skipWaiting()});
