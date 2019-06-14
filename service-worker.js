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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2017/10/像素与viewport概念/index.html",
    "revision": "8e909191e4315cc4f7b725e996da1664"
  },
  {
    "url": "404.html",
    "revision": "a49793079f1749f1f1d98b9fc86cb35b"
  },
  {
    "url": "assets/css/0.styles.4df469de.css",
    "revision": "a2bcc90afd244f6df013878ba6e1745d"
  },
  {
    "url": "assets/img/iconfont.cdd1cd30.svg",
    "revision": "cdd1cd303d5828d17626ebbe95966b50"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9b3fc98c.js",
    "revision": "9da72f13b9d099778c53c51c5075d1f6"
  },
  {
    "url": "assets/js/10.8947d071.js",
    "revision": "6e5b992990b4254a518f35e7cfc87d27"
  },
  {
    "url": "assets/js/11.8ea5f161.js",
    "revision": "622eb2af2734098c0a7a970f675f53be"
  },
  {
    "url": "assets/js/12.38e0d7ae.js",
    "revision": "465db08d704ed09f8a8bf3e94820b932"
  },
  {
    "url": "assets/js/13.22238cbf.js",
    "revision": "a5cedcd44916c4b765e47ebe3f648cc1"
  },
  {
    "url": "assets/js/14.ba9a284d.js",
    "revision": "e790ffd9d5ea2dacbfd2c08d21a40315"
  },
  {
    "url": "assets/js/15.511230e9.js",
    "revision": "2fb0b16ecc1ba60877b0dce9ae954243"
  },
  {
    "url": "assets/js/2.944f7132.js",
    "revision": "8a5cac625b7b784f309acbe81673c811"
  },
  {
    "url": "assets/js/4.22fce7d1.js",
    "revision": "241abb82e34bb52261b50695da846648"
  },
  {
    "url": "assets/js/5.3b4f2fa9.js",
    "revision": "aa496a0640b16aee884dce0f8205c310"
  },
  {
    "url": "assets/js/6.fb77b85f.js",
    "revision": "3dc16260754fd49d45a97b5ad285f436"
  },
  {
    "url": "assets/js/7.bfe9b2c8.js",
    "revision": "cc8cf71032f36a5648766a11544677e4"
  },
  {
    "url": "assets/js/8.031e5b0d.js",
    "revision": "8b80d6d16b3d104214b943f0d3ca0bf2"
  },
  {
    "url": "assets/js/9.cb7b77ae.js",
    "revision": "2303316f224e0f8923e7b3d83ef9fc0f"
  },
  {
    "url": "assets/js/app.8def3490.js",
    "revision": "e2cb71ae81d6dbf38aafdbdd56514bde"
  },
  {
    "url": "blog/index.html",
    "revision": "d3c695ef61c573ed6bf6845209c0eec7"
  },
  {
    "url": "categories/index.html",
    "revision": "f47b01a1c19c1fb4295310cdf99ec0d4"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "fa4d6f192b11e2a7bcaf816985ae41f1"
  },
  {
    "url": "hy.jpg",
    "revision": "39a777c22e840b0469249f05d2f70bb0"
  },
  {
    "url": "index.html",
    "revision": "d83de9a3de00a20bfbdcab36c77b28c2"
  },
  {
    "url": "logo.jpg",
    "revision": "520cf00678363bffafec3d7c2054b7dc"
  },
  {
    "url": "tags/css.html",
    "revision": "cd6d9f846baa928b0a412bc5f393f69b"
  },
  {
    "url": "tags/index.html",
    "revision": "82bc21ee5c65a6882b5a8304e4e8eca4"
  },
  {
    "url": "tags/web前端.html",
    "revision": "be2ac5e9fc70f061fa14dabb9a6cccbe"
  },
  {
    "url": "tags/响应式.html",
    "revision": "d5b4777b6393044e31fdb229d70061f0"
  },
  {
    "url": "tags/移动端.html",
    "revision": "6ac200c09fbd47cff342e72c88d0a14f"
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
