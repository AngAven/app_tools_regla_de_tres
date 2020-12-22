const VERSION = 'v1'

self.addEventListener('install', event => {
    // console.log(event)
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request

    if (request.method !== 'GET'){
        console.log('No se tienen métodos GET')
        return
    }

    // Buscar en cache si lo tenemos
    event.respondWith(cachedResponse(request))

    // Actualizar cache
    event.waitUntil(updateCache(request))
})

async function precache(){
    const cache = await caches.open(VERSION)
    return cache.addAll([
                './',
                'index.html',
                'index.css',
                './assets/normalize.css',
                './assets/index.js'
    ])
}

async function cachedResponse(request) {
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)
    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request.url, response)
}