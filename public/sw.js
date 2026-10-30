const CACHE_NAME = 'chiraphat-shell-v2'
const APP_SHELL = ['/', '/manifest.webmanifest', '/app-icon.svg']

async function cacheResponse(request, response) {
  try {
    await caches.open(CACHE_NAME).then((cache) => cache.put(request, response.clone()))
  } catch (error) {
    console.warn('Unable to cache response for offline use:', error)
  }
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      await cache.addAll(APP_SHELL)
      const page = await cache.match('/')
      const html = await page.text()
      const appAssets = [...html.matchAll(/\/assets\/[^"' ]+\.(?:js|css)/g)]
        .map(([assetUrl]) => assetUrl)
      await cache.addAll(appAssets)
      await self.skipWaiting()
    })(),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith('chiraphat-shell-') && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      ))
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const requestUrl = new URL(request.url)

  if (request.method !== 'GET' || requestUrl.origin !== self.location.origin) {
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        let response
        try {
          response = await fetch(request)
        } catch (error) {
          const cachedPage = await caches.match('/')
          if (cachedPage) {
            return cachedPage
          }
          throw error
        }

        if (response.ok) {
          await cacheResponse('/', response)
        }
        return response
      })(),
    )
    return
  }

  event.respondWith(
    (async () => {
      const cachedResponse = await caches.match(request)
      if (cachedResponse) {
        return cachedResponse
      }

      const response = await fetch(request)
      if (response.ok) {
        await cacheResponse(request, response)
      }
      return response
    })(),
  )
})
