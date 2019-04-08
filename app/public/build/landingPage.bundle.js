!function(t){var n={};function e(c){if(n[c])return n[c].exports;var o=n[c]={i:c,l:!1,exports:{}};return t[c].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,c){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:c})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(e.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(c,o,function(n){return t[n]}.bind(null,o));return c},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=3)}([,,,function(t,n,e){e(4),t.exports=e(8)},function(t,n,e){var c,o;t.exports=(c=e(5),o=e(6),c.init(),void o.init())},function(t,n,e){window,t.exports=function(t){var n={};function e(c){if(n[c])return n[c].exports;var o=n[c]={i:c,l:!1,exports:{}};return t[c].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,c){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:c})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=0)}([function(t,n,e){"use strict";var c,o,r,a,i,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};
/**
 * Helps to set link with custom protocol (to open apps) and usual link (for webpages) to a button
 *
 * @author Taly Guryn <https://github.com/talyguryn>
 * @license MIT
 */t.exports=(c=function(t){"object"!==(void 0===t?"undefined":s(t))&&i("Passed element is not an object");var n=t.dataset.link||t.href,e=t.dataset.appLink;r(e,n)},o=function(t){t||i("Can not open app, because appLink is undefined");var n=document.createElement("iframe");n.style.display="none",document.body.appendChild(n),null!==n&&(n.src=t)},r=function(t,n){var e=!1;window.addEventListener("pagehide",function(){e=!0},!1),window.addEventListener("blur",function(){e=!0},!1),o(t),setTimeout(function(){e||a(n)},100)},a=function(t){t||i("Can not open page because link is undefined"),window.open(t,"_blank")},i=function(t){throw Error("[Deeplinker] "+t)},{click:c,init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".deeplinker",n=document.querySelectorAll(t);n.length&&Array.prototype.slice.call(n).forEach(function(t){t.addEventListener("click",function(n){n.preventDefault(),c(t)})})},tryToOpenApp:o})}])},function(t,n,e){var c=e(7),o=function(t){return Math.floor(Math.random()*t)};t.exports={init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"instagram-grid",n=document.getElementById(t);n&&c.data.forEach(function(t){var e=t.link,c=t.imageUrl,r=document.createElement("a");r.classList.add("instagram-grid__photo"),r.href=e,r.target="_blank",r.style.background="url("+c+") no-repeat center center",r.style.backgroundSize="cover",r.style["background-color"]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.25;return"rgba(".concat(o(256),", ").concat(o(256),", ").concat(o(256),", ").concat(t,")")}(),n.appendChild(r)})}}},function(t){t.exports={data:[{link:"https://www.instagram.com/stickerum/p/BqzWkq8hGXm/",imageUrl:"https://scontent.cdninstagram.com/vp/0e699166bb496fd08817ddca0a893bc0/5D4C4FBF/t51.2885-15/e35/s320x320/46408649_357620155065781_1516230376415336782_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/Bp4E_vqhCT2/",imageUrl:"https://scontent.cdninstagram.com/vp/5e00e1655b15dca81c6e4612896a4122/5D4AC7E0/t51.2885-15/e35/s320x320/44000109_642594292804842_1649959224171897569_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/Biyv_vHgk1C/",imageUrl:"https://scontent.cdninstagram.com/vp/463946d86ccbef453b774d455548ea5c/5D4E18F3/t51.2885-15/e35/s320x320/31386515_1302453623232572_962437450171416576_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/BinB7RFg3Uz/",imageUrl:"https://scontent.cdninstagram.com/vp/632f29c718ca4eb2c97a0021c3229d4a/5D0C71C4/t51.2885-15/e35/s320x320/31425107_774881996038973_195335902896062464_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/BiCyk0qARpz/",imageUrl:"https://scontent.cdninstagram.com/vp/5001ec9961001104ab30ad9330cd69a6/5D191361/t51.2885-15/e35/s320x320/31023974_1897960193549361_7710516896860209152_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/Bh_VZ99g5_J/",imageUrl:"https://scontent.cdninstagram.com/vp/a0ee89c39ee5446b3283561acdd475dc/5D0D01E0/t51.2885-15/e35/s320x320/30855327_785494608314894_3068450130911821824_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/Bhjcdy7ASMU/",imageUrl:"https://scontent.cdninstagram.com/vp/6eb4cd08b2c118fd78e0968bb6460be2/5D29F9EB/t51.2885-15/e35/s320x320/30087590_177587069556733_5875728536119017472_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/BhLwf9wlgVf/",imageUrl:"https://scontent.cdninstagram.com/vp/0eac0e309b5ecf8ff004284d50fffa38/5D17AD19/t51.2885-15/e35/s320x320/30086678_180199915959074_879791060941799424_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/Bf333_WFOwE/",imageUrl:"https://scontent.cdninstagram.com/vp/fb62f885cc2b7715c075a73edc824d15/5D113748/t51.2885-15/e35/s320x320/28429989_245852645957373_675807219920404480_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/BfPnvLAF5Zt/",imageUrl:"https://scontent.cdninstagram.com/vp/89b8419a7463000792fd2bf8e43e3739/5D19905D/t51.2885-15/e35/s320x320/27575123_223476851555063_2724416090791739392_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/BfKhifWldAX/",imageUrl:"https://scontent.cdninstagram.com/vp/4b77edd85ada6c3069a194760ed7aea5/5D4ADEFB/t51.2885-15/e35/s320x320/27881062_2003533403238884_20046789918851072_n.jpg?_nc_ht=scontent.cdninstagram.com"},{link:"https://www.instagram.com/stickerum/p/BfAK-h8Fer_/",imageUrl:"https://scontent.cdninstagram.com/vp/a4adfdf474ef616b2b2cbd42981ed2eb/5D2A235A/t51.2885-15/e35/s320x320/27578401_103420537148669_7793925702914408448_n.jpg?_nc_ht=scontent.cdninstagram.com"}]}},function(t,n,e){}]);