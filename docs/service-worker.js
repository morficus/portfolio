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
    "revision": "136a0812a78418d185abf08791e80aee"
  },
  {
    "url": "assets/css/9.styles.aa18329c.css",
    "revision": "c875a569e3a65d9584f3fb5119d41920"
  },
  {
    "url": "assets/img/bandwidth-utilization-comparison.44fd17a7.png",
    "revision": "44fd17a7bb824fb2cd6537e393a3eea0"
  },
  {
    "url": "assets/img/grow-calculator-dashboard.b588bb5e.gif",
    "revision": "b588bb5ea044a772a658d306bbc59197"
  },
  {
    "url": "assets/img/grow-calculator-landing.e5add5b5.png",
    "revision": "e5add5b5c7daa6c9388ec4ebde960117"
  },
  {
    "url": "assets/img/grow-calculator-location.0637bf80.gif",
    "revision": "0637bf800fe379eb7fe5c2859b0b5103"
  },
  {
    "url": "assets/img/musical-turk-file-upload.3a893501.gif",
    "revision": "3a893501cee1f845cacd1222a2f92b06"
  },
  {
    "url": "assets/img/musical-turk-landing.65e92bac.png",
    "revision": "65e92bacf4cdda3df9fb02c92e5b27ae"
  },
  {
    "url": "assets/img/musical-turk-test-coverage-1.c773a7e7.png",
    "revision": "c773a7e7147a460e64d74e0315ef4b06"
  },
  {
    "url": "assets/img/musical-turk-test-coverage-2.34bea86e.png",
    "revision": "34bea86ea19d89b2b958ce569d845fa5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.5c0a2243.js",
    "revision": "cb1fd705ecd87d23f566978ad50c01a4"
  },
  {
    "url": "assets/js/1.8533c7d0.js",
    "revision": "edc376b990434f1df511e5d8ff4468a1"
  },
  {
    "url": "assets/js/2.b82b7f44.js",
    "revision": "a22cfc19cbf1294f1f313b3aedd64e6b"
  },
  {
    "url": "assets/js/3.c12699ea.js",
    "revision": "dd8bc9506aaeb1ee1f6e9f91e5081eb6"
  },
  {
    "url": "assets/js/4.e25da5f7.js",
    "revision": "e42022abccfbb8d5c79a30cecb019700"
  },
  {
    "url": "assets/js/5.0677b5c9.js",
    "revision": "7f88c10cfe8c2406e602e1be78406508"
  },
  {
    "url": "assets/js/6.c5e4d489.js",
    "revision": "c5dd6effa05a1f7750be899653397ab0"
  },
  {
    "url": "assets/js/7.227746ed.js",
    "revision": "72f093e5993481ad69f5b765385b8eb1"
  },
  {
    "url": "assets/js/8.f08eae5c.js",
    "revision": "8be326fd6a820fe31faf3644bd8aa048"
  },
  {
    "url": "assets/js/app.357a2071.js",
    "revision": "cc6db48b03588077c6c959c5252aae4e"
  },
  {
    "url": "HOME.html",
    "revision": "314b3fe5cea521bf0ef2f7e1422bc3a5"
  },
  {
    "url": "index.html",
    "revision": "10fd84f3186f50beb5109ef56ecb1011"
  },
  {
    "url": "portfolio/grow-vs-buy-calculator.html",
    "revision": "8216fcca951596dcb7ed4ff6977ac436"
  },
  {
    "url": "portfolio/index.html",
    "revision": "edcb9dbdc9c6aba0b1b51b56f6d131f7"
  },
  {
    "url": "portfolio/musical-turk.html",
    "revision": "e09b770b4f18a2b5e1948ea617c21069"
  },
  {
    "url": "portfolio/simple-as-can-be.html",
    "revision": "780771b345fa9257e4ec8b2f67aeead9"
  },
  {
    "url": "portfolio/telemetry-data-viz.html",
    "revision": "905caf58e5e27b466cd67f22bf5bc625"
  },
  {
    "url": "portfolio/xml-to-rest-api-facaed.html",
    "revision": "fb865059a8b0e66f5d3606a81cabf5b8"
  },
  {
    "url": "resume/index.html",
    "revision": "5f5e18af0d5d0e7269c397a97ca25a86"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
