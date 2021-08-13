const CACHE_NAME = "moviedb_cache_v1";
var urlsToCache = ["/"]

self.addEventListener("install", function (event) {
    event.waitUtil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log("cace opened")
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch",function (event) {  
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response) return response;
                return fetch(event.request);
            })
    )
    
})


//  går ind og griber fetch call
//  går ind og checker vores caches og hvis der er lager i caches så er det den vi bruger 
//  hvis ikke så fetch vi et nyt 