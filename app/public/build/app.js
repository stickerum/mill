var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/data/instagram-photos.json":
/*!*********************************************!*\
  !*** ./frontend/data/instagram-photos.json ***!
  \*********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

eval("module.exports = {\"data\":[{\"link\":\"https://www.instagram.com/stickerum/p/BqzWkq8hGXm/\",\"imageUrl\":\"https://scontent.cdninstagram.com/vp/0e699166bb496fd08817ddca0a893bc0/5D4C4FBF/t51.2885-15/e35/s320x320/46408649_357620155065781_1516230376415336782_n.jpg?_nc_ht=scontent.cdninstagram.com\"},{\"link\":\"https://www.instagram.com/stickerum/p/Bp4E_vqhCT2/\",\"imageUrl\":\"https://scontent.cdninstagram.com/vp/5e00e1655b15dca81c6e4612896a4122/5D4AC7E0/t51.2885-15/e35/s320x320/44000109_642594292804842_1649959224171897569_n.jpg?_nc_ht=scontent.cdninstagram.com\"},{\"link\":\"https://www.instagram.com/stickerum/p/Biyv_vHgk1C/\",\"imageUrl\":\"https://scontent.cdninstagram.com/vp/463946d86ccbef453b774d455548ea5c/5D4E18F3/t51.2885-15/e35/s320x320/31386515_1302453623232572_962437450171416576_n.jpg?_nc_ht=scontent.cdninstagram.com\"},{\"link\":\"https://www.instagram.com/stickerum/p/BinB7RFg3Uz/\",\"imageUrl\":\"https://scontent.cdninstagram.com/vp/632f29c718ca4eb2c97a0021c3229d4a/5D0C71C4/t51.2885-15/e35/s320x320/31425107_774881996038973_195335902896062464_n.jpg?_nc_ht=scontent.cdninstagram.com\"},{\"link\":\"https://www.instagram.com/stickerum/p/BiCyk0qARpz/\",\"imageUrl\":\"https://scontent.cdninstagram.com/vp/5001ec9961001104ab30ad9330cd69a6/5D191361/t51.2885-15/e35/s320x320/31023974_1897960193549361_7710516896860209152_n.jpg?_nc_ht=scontent.cdninstagram.com\"},{\"link\":\"https://www.instagram.com/stickerum/p/Bh_VZ99g5_J/\",\"imageUrl\":\"https://scontent.cdninstagram.com/vp/a0ee89c39ee5446b3283561acdd475dc/5D0D01E0/t51.2885-15/e35/s320x320/30855327_785494608314894_3068450130911821824_n.jpg?_nc_ht=scontent.cdninstagram.com\"},{\"link\":\"https://www.instagram.com/stickerum/p/Bhjcdy7ASMU/\",\"imageUrl\":\"https://scontent.cdninstagram.com/vp/6eb4cd08b2c118fd78e0968bb6460be2/5D29F9EB/t51.2885-15/e35/s320x320/30087590_177587069556733_5875728536119017472_n.jpg?_nc_ht=scontent.cdninstagram.com\"},{\"link\":\"https://www.instagram.com/stickerum/p/BhLwf9wlgVf/\",\"imageUrl\":\"https://scontent.cdninstagram.com/vp/0eac0e309b5ecf8ff004284d50fffa38/5D17AD19/t51.2885-15/e35/s320x320/30086678_180199915959074_879791060941799424_n.jpg?_nc_ht=scontent.cdninstagram.com\"},{\"link\":\"https://www.instagram.com/stickerum/p/Bf333_WFOwE/\",\"imageUrl\":\"https://scontent.cdninstagram.com/vp/fb62f885cc2b7715c075a73edc824d15/5D113748/t51.2885-15/e35/s320x320/28429989_245852645957373_675807219920404480_n.jpg?_nc_ht=scontent.cdninstagram.com\"}]};\n\n//# sourceURL=webpack://%5Bname%5D/./frontend/data/instagram-photos.json?");

/***/ }),

/***/ "./frontend/entry.js":
/*!***************************!*\
  !*** ./frontend/entry.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entry_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entry.pcss */ \"./frontend/entry.pcss\");\n/* harmony import */ var _entry_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_entry_pcss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/landing-page */ \"./frontend/js/landing-page.js\");\n/* harmony import */ var _js_landing_page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_landing_page__WEBPACK_IMPORTED_MODULE_1__);\n/**\n * Import CSS files\n * @todo create another entry point with css\n */\n\n/**\n * Landing page scripts\n */\n\n\n\n//# sourceURL=webpack://%5Bname%5D/./frontend/entry.js?");

/***/ }),

/***/ "./frontend/entry.pcss":
/*!*****************************!*\
  !*** ./frontend/entry.pcss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://%5Bname%5D/./frontend/entry.pcss?");

/***/ }),

/***/ "./frontend/js/instagram.js":
/*!**********************************!*\
  !*** ./frontend/js/instagram.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Load JSON data with medias\n */\nvar instagramData = __webpack_require__(/*! ../data/instagram-photos.json */ \"./frontend/data/instagram-photos.json\");\n/**\n * Return integer from 0 to target number\n *\n * @param {integer} number\n *\n * @return {integer}\n */\n\n\nvar rand = function rand(number) {\n  return Math.floor(Math.random() * number);\n};\n/**\n * Generate random RGBA color string with a target alpha channel\n *\n * @param {integer} alpha\n *\n * @return {string}\n */\n\n\nvar generateColor = function generateColor() {\n  var alpha = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.25;\n  return \"rgba(\".concat(rand(256), \", \").concat(rand(256), \", \").concat(rand(256), \", \").concat(alpha, \"})\");\n};\n/**\n * Add photos from instagram to wrapper\n */\n\n\nmodule.exports = function () {\n  /**\n   * Append photos elements into the target wrapper\n   *\n   * @param {string} wrapperId\n   */\n  var init = function init() {\n    var wrapperId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'instagram-grid';\n    var instagramPhotoBlock = document.getElementById(wrapperId);\n\n    if (instagramPhotoBlock) {\n      instagramData.data.forEach(function (item) {\n        /**\n         * Get data for an image\n         */\n        var link = item.link;\n        var src = item.imageUrl;\n        /**\n         * Create image-link element\n         */\n\n        var photoWrapper = document.createElement('a');\n        /**\n         * Add style class\n         */\n\n        photoWrapper.classList.add('instagram-grid__photo');\n        /**\n         * Set up link's params\n         */\n\n        photoWrapper.href = link;\n        photoWrapper.target = '_blank';\n        /**\n         * Set photo as background image\n         */\n\n        photoWrapper.style.background = 'url(' + src + ') no-repeat center center';\n        photoWrapper.style.backgroundSize = 'cover';\n        /**\n         * Generate random background color for tile while image not loaded\n         */\n\n        photoWrapper.style['background-color'] = generateColor();\n        /**\n         * Add image block to the wrapper\n         */\n\n        instagramPhotoBlock.appendChild(photoWrapper);\n      });\n    }\n  };\n\n  return {\n    init: init\n  };\n}();\n\n//# sourceURL=webpack://%5Bname%5D/./frontend/js/instagram.js?");

/***/ }),

/***/ "./frontend/js/landing-page.js":
/*!*************************************!*\
  !*** ./frontend/js/landing-page.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Document ready function wrapper\n *\n * @param {function} f\n */\nvar docReady = function docReady(f) {\n  return /in/.test(document.readyState) ? window.setTimeout(docReady, 9, f) : f();\n};\n/**\n * Main script\n */\n\n\nvar stickerum = function () {\n  /**\n   * Define modules\n   */\n  var deeplinker = __webpack_require__(/*! @codexteam/deeplinker */ \"./node_modules/@codexteam/deeplinker/dist/deeplinker.js\");\n\n  var instagram = __webpack_require__(/*! ./instagram */ \"./frontend/js/instagram.js\");\n  /**\n   * Initial function\n   */\n\n\n  var init = function init() {\n    console.info('Stickerum is ready!');\n    deeplinker.init();\n    instagram.init();\n  };\n  /**\n   * Start script when page is loaded\n   */\n\n\n  docReady(init);\n}();\n\nmodule.exports = stickerum;\n\n//# sourceURL=webpack://%5Bname%5D/./frontend/js/landing-page.js?");

/***/ }),

/***/ "./node_modules/@codexteam/deeplinker/dist/deeplinker.js":
/*!***************************************************************!*\
  !*** ./node_modules/@codexteam/deeplinker/dist/deeplinker.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(e,n){ true?module.exports=n():undefined}(window,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.r=function(e){Object.defineProperty(e,\"__esModule\",{value:!0})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,\"a\",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p=\"\",t(t.s=0)}([function(e,n,t){\"use strict\";var o,r,i,u,c,f=\"function\"==typeof Symbol&&\"symbol\"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&\"function\"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?\"symbol\":typeof e};\n/**\n * Helps to set link with custom protocol (to open apps) and usual link (for webpages) to a button\n *\n * @author Taly Guryn <https://github.com/talyguryn>\n * @license MIT\n */e.exports=(o=function(e){\"object\"!==(void 0===e?\"undefined\":f(e))&&c(\"Passed element is not an object\");var n=e.dataset.link||e.href,t=e.dataset.appLink;i(t,n)},r=function(e){e||c(\"Can not open app, because appLink is undefined\");var n=document.createElement(\"iframe\");n.style.display=\"none\",document.body.appendChild(n),null!==n&&(n.src=e)},i=function(e,n){var t=!1;window.addEventListener(\"pagehide\",function(){t=!0},!1),window.addEventListener(\"blur\",function(){t=!0},!1),r(e),setTimeout(function(){t||u(n)},100)},u=function(e){e||c(\"Can not open page because link is undefined\"),window.open(e,\"_blank\")},c=function(e){throw Error(\"[Deeplinker] \"+e)},{click:o,init:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:\".deeplinker\",n=document.querySelectorAll(e);n.length&&Array.prototype.slice.call(n).forEach(function(e){e.addEventListener(\"click\",function(n){n.preventDefault(),o(e)})})},tryToOpenApp:r})}])});\n\n//# sourceURL=webpack://%5Bname%5D/./node_modules/@codexteam/deeplinker/dist/deeplinker.js?");

/***/ })

/******/ });