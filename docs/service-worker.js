/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8412f7e14e12f7c9ed9cf0e4762c7217"
  },
  {
    "url": "assets/css/1.styles.e3518659.css",
    "revision": "c875a569e3a65d9584f3fb5119d41920"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.45c6d715.js",
    "revision": "fe241e4dcd830a97d76b2d05faaa4859"
  },
  {
    "url": "assets/js/app.a16d263f.js",
    "revision": "2d41336b2fd3d25960b701352e30c2fa"
  },
  {
    "url": "index.html",
    "revision": "d1373d106b408569f132ae97d2e7079f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
