const CACHE_NAME = 'jt-portfolio-v1'
const ASSETS = [
  '/', '/index.html',
  '/resume/resume_full.pdf', '/resume/resume_mini.pdf',
  '/favicon.svg', '/og-image.png'
]
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)))
})
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
})
