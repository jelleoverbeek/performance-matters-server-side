// Force serviceworker to activate
self.addEventListener('install', event => event.waitUntil(
    caches.open('adamstreets-v1')
        // Add all those files to the cache
        .then(cache => cache.addAll([
            'manifest.json',
            'sw.js',
            '/css/style-min.css',
            '/js/bundle.js',
            '/img/timeline-line.svg',
            '/img/timeline-end.svg',
            '/img/timeline-end-active.svg',
            '/img/timeline-mid.svg',
            '/img/timeline-mid-active.svg',
            '/img/timeline-start.svg',
            '/img/timeline-start-active.svg',
            '/',
        ]))
        // Force service worker to start
        .then(self.skipWaiting())
));

// Add fetch event listener
self.addEventListener('fetch', event => {
    const request = event.request;

    // Function that
    event.respondWith(

        // Normal fetch request
        fetch(request)
            .catch(err => fetchFile(request.url))
            .catch(err => fetchFile('/'))
    );
});

function fetchFile(url) {
    return caches.open('adamstreets-v1')

        // Fetch file with the same url
        .then(cache => cache.match(url))

        // Reject the promise if there is no response
        .then(response => response ? response : Promise.reject());
}