"use strict";var precacheConfig=[["/React/index.html","60ea0b43b977087d76c3c791132d3bb6"],["/React/static/css/main.1ae12f66.css","b35662c0c3a082c0d618c56936c2b948"],["/React/static/js/main.e43ba875.js","06d352245426ed345dd6d550de08374c"],["/React/static/media/C++-white.d9f03fbb.png","d9f03fbbe1017ced49070baa9be29159"],["/React/static/media/Javascript-white.2c1b9de7.png","2c1b9de75efdbff5ae8eb8d79de45acf"],["/React/static/media/Pedro.e402be26.jpg","e402be265f0639fbcbbf955e2b2b7e8b"],["/React/static/media/React-white.8b02a882.png","8b02a882042585f358b6623a861ae601"],["/React/static/media/Ruby on Rails-white.2b9e76a5.png","2b9e76a5674df54c7c628bc8e76a1f92"],["/React/static/media/arrow-white.470fe803.svg","470fe80387eb92fc9c91298a4d6e5501"],["/React/static/media/linkedin-white.516a67d1.png","516a67d197cc06d03e32996f5ef98a8c"],["/React/static/media/php-white.43e56f44.png","43e56f44b346ed69b62dd9ec2aaa0dfd"],["/React/static/media/seta2.bfc53b6a.svg","bfc53b6a6bee1a0b135dddd79dd8468d"],["/React/static/media/telegram-white.426d7c1e.png","426d7c1e4fcc3ddb5bf0a0f445ac7e5e"],["/React/static/media/whatsapp-white.cd445a07.png","cd445a07e3139f50fb6f8ac88e8a96e1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/React/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});