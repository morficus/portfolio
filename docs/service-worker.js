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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9cd36ba59d4332ffaf2eacd83144d257"
  },
  {
    "url": "assets/css/0.styles.4568b041.css",
    "revision": "2ed4c8df4ff33bc36857f179247b429c"
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
    "url": "assets/js/10.abc5bdda.js",
    "revision": "6212dd1b9e462758dbb41982d36e1631"
  },
  {
    "url": "assets/js/11.9d4d9509.js",
    "revision": "67271d714c4219e964ee7113477d65ad"
  },
  {
    "url": "assets/js/12.10465731.js",
    "revision": "d4df6bfc4a6f0eb9e8e9215e02898556"
  },
  {
    "url": "assets/js/2.861402b7.js",
    "revision": "2ff2705e890b878913a9dfcd10aada51"
  },
  {
    "url": "assets/js/3.c95546f0.js",
    "revision": "015098ad26b05f91df9cf99db480d128"
  },
  {
    "url": "assets/js/4.ddcbf3d9.js",
    "revision": "9300e994bc90d6441fab5b107433ad27"
  },
  {
    "url": "assets/js/5.80a36e56.js",
    "revision": "61c5ae44d6f1b5cc0e8fe4181da74f11"
  },
  {
    "url": "assets/js/6.5faed990.js",
    "revision": "c4f3af99a2504b4d0ef909ff7a0e3e34"
  },
  {
    "url": "assets/js/7.52339273.js",
    "revision": "96996863a3e0e612acaa720bb5ae3c8b"
  },
  {
    "url": "assets/js/8.ebc906bb.js",
    "revision": "20f13034e6ed42e3e1ca4e4e846fd3bb"
  },
  {
    "url": "assets/js/9.2de94c6f.js",
    "revision": "6f524d603a883624f13fc2b983ef6d7c"
  },
  {
    "url": "assets/js/app.57bf59ce.js",
    "revision": "377f0e04d3577e765d43ef4116b74a66"
  },
  {
    "url": "HOME.html",
    "revision": "15dea430a814fa1195d96af77455d7c5"
  },
  {
    "url": "index.html",
    "revision": "b4de169146268592b5078f519a719240"
  },
  {
    "url": "portfolio/grow-vs-buy-calculator.html",
    "revision": "e894ddc53e3b2390181290a629fcc47d"
  },
  {
    "url": "portfolio/index.html",
    "revision": "26d030a9c5bf16216fb31933495d1970"
  },
  {
    "url": "portfolio/musical-turk.html",
    "revision": "5648f66e258b26d65bf3d1838abd210f"
  },
  {
    "url": "portfolio/simple-as-can-be.html",
    "revision": "7b996324c663d2d8c4f7e7459ea5b2c6"
  },
  {
    "url": "portfolio/telemetry-data-viz.html",
    "revision": "52cf3bcaba0667ef89392bffe0e46a04"
  },
  {
    "url": "portfolio/xml-to-rest-api-facaed.html",
    "revision": "de80ca2821b4118ecda905f9575a1005"
  },
  {
    "url": "resume/index.html",
    "revision": "247b937538a906f212cfe84e81ec9cfb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
