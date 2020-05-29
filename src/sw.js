importScripts("workbox-v3.6.3/workbox-sw.js");

workbox.setConfig({modulePathPrefix : 'workbox-v3.6.3/'});

const precacheManifest = [];

workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);