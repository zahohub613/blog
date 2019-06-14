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
    "revision": "bc072246a206fc595dcb814b47c36636"
  },
  {
    "url": "404.html",
    "revision": "0a1d2358afb9e9cebb9f2c37bba2898b"
  },
  {
    "url": "about/index.html",
    "revision": "8c1e776dfb1f9ec0eaf47a6e086118a3"
  },
  {
    "url": "assets/css/0.styles.2c16f28a.css",
    "revision": "ca85e00e516ba06fdf9500f258527343"
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
    "url": "assets/js/1.5978baf6.js",
    "revision": "0568b355a6830393ea2386dafac53ab4"
  },
  {
    "url": "assets/js/10.7f66d121.js",
    "revision": "76b768d4286a4ac425cb79abca271ee8"
  },
  {
    "url": "assets/js/11.6ef8f462.js",
    "revision": "b4f535112b7782b734a77d249e9b1f5a"
  },
  {
    "url": "assets/js/12.280ef991.js",
    "revision": "d06043d55df82f39e4d9d65a93500a59"
  },
  {
    "url": "assets/js/13.04a6a4db.js",
    "revision": "5e1503b1de25a88db4de77166b96eb4d"
  },
  {
    "url": "assets/js/14.d74eae31.js",
    "revision": "40b5a7b3b23e473d01b5128dbe83d6d1"
  },
  {
    "url": "assets/js/15.b47a4472.js",
    "revision": "45cdd87978f319f81033de0b731feea5"
  },
  {
    "url": "assets/js/16.c818180e.js",
    "revision": "b3f716fb2aa11041e00e12fb52d95003"
  },
  {
    "url": "assets/js/17.f664e396.js",
    "revision": "687483e13066f5d6b3d9970d8b8b2a4c"
  },
  {
    "url": "assets/js/2.1c65852a.js",
    "revision": "cee0644b4f1b92d424ca9d60bcb5bf06"
  },
  {
    "url": "assets/js/4.f6dd58a5.js",
    "revision": "52ae24d0dca4beac3c45cbb41edc2c1a"
  },
  {
    "url": "assets/js/5.cdf672a8.js",
    "revision": "c17f798292140a3d3771305019e076a8"
  },
  {
    "url": "assets/js/6.985ec5d9.js",
    "revision": "f82776b7c2424e664481e909594e54d5"
  },
  {
    "url": "assets/js/7.ac3b5ef4.js",
    "revision": "e518fc8814e34be70179604cac639e14"
  },
  {
    "url": "assets/js/8.0d678f2b.js",
    "revision": "0d5077c4d5d8f9a74caf232425b45264"
  },
  {
    "url": "assets/js/9.869c2e77.js",
    "revision": "1e27d15e4d98e10586f29e1597bf026a"
  },
  {
    "url": "assets/js/app.4abc9b0c.js",
    "revision": "446c30e505993d176b07086cb0f586c2"
  },
  {
    "url": "blog/index.html",
    "revision": "95199241db881196121ad5dcc2746f9c"
  },
  {
    "url": "book/index.html",
    "revision": "c5abc62e37ebcd360650515b5ad0e975"
  },
  {
    "url": "categories/index.html",
    "revision": "57b5bc2f3e8e214d2ee2af4c707e0847"
  },
  {
    "url": "categories/前端技术.html",
    "revision": "bfcd8f29e08babaaaa5ff0df9d50daff"
  },
  {
    "url": "hy.jpg",
    "revision": "39a777c22e840b0469249f05d2f70bb0"
  },
  {
    "url": "index.html",
    "revision": "fa53ba7450453201104c2ca05f349761"
  },
  {
    "url": "logo.jpg",
    "revision": "520cf00678363bffafec3d7c2054b7dc"
  },
  {
    "url": "tags/css.html",
    "revision": "b4346f9bf7010e1e62968e5f324e2f05"
  },
  {
    "url": "tags/index.html",
    "revision": "14bba5c88ef6eb7af3cb9c19a3b0a137"
  },
  {
    "url": "tags/web前端.html",
    "revision": "a4d83cf95f826c17fcfd6459cd824f46"
  },
  {
    "url": "tags/响应式.html",
    "revision": "eb905ff797013d7fbe4f47a51813efb2"
  },
  {
    "url": "tags/移动端.html",
    "revision": "e99b90223d2dd8e08bceca94c1ed0424"
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
