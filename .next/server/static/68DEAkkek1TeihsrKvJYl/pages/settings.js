module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		51: 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"0":"9398d137c20cea61322b"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/bfT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIRequest; });
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rP/q");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const TOKEN = 'token';
class APIRequest {
  constructor() {
    _defineProperty(this, "token", null);
  }

  setAuthHeaderToken(token) {
    this.token = token;
  }
  /**
   * Parses the JSON returned by a network request
   *
   * @param  {object} response A response from a network request
   *
   * @return {object}          The parsed JSON from the request
   */


  parseJSON(response) {
    if (response.status === 204 || response.status === 205) {
      return null;
    }

    return response.json();
  }
  /**
   * Checks if a network request came back fine, and throws an error if not
   *
   * @param  {object} response   A response from a network request
   *
   * @return {object|undefined} Returns either the response, or throws an error
   */


  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    if (response.status === 401) {
      if (false) {}

      throw new Error('Forbidden in the action!');
    } // const error = new Error(response.statusText) as any;
    // error.response = response;
    // throw error;


    throw response.clone().json();
  }

  request(url, method, body, headers) {
    const verb = (method || 'get').toUpperCase();
    const updatedHeader = Object.assign({
      'Content-Type': 'application/json',
      // TODO - check me
      Authorization: this.token || (false ? undefined : '')
    }, headers || {});
    return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__[/* isUrl */ "b"])(url) ? url : `${process.env.API_ENDPOINT || "https://api.dtest.live"}${url}`, {
      method: verb,
      headers: updatedHeader,
      body: body ? JSON.stringify(body) : null
    }).then(this.checkStatus).then(this.parseJSON);
  }

  buildUrl(baseUrl, params) {
    if (!params) {
      return baseUrl;
    }

    const queryString = Object.keys(params).map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k])).join('&');
    return `${baseUrl}?${queryString}`;
  }

  get(url, headers) {
    return this.request(url, 'get', null, headers);
  }

  post(url, data, headers) {
    return this.request(url, 'post', data, headers);
  }

  put(url, data, headers) {
    return this.request(url, 'put', data, headers);
  }

  del(url, data, headers) {
    return this.request(url, 'delete', data, headers);
  }

  upload(url, files, options = {
    onProgress: function () {},
    method: 'POST'
  }) {
    const uploadUrl = Object(_lib_string__WEBPACK_IMPORTED_MODULE_3__[/* isUrl */ "b"])(url) ? url : `${"https://api.dtest.live"}${url}`;
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener('progress', event => {
        if (event.lengthComputable) {
          options.onProgress({
            percentage: event.loaded / event.total * 100
          });
        }
      });
      req.addEventListener('load', () => {
        const success = req.status >= 200 && req.status < 300;
        const response = req.response;

        if (!success) {
          return reject(response);
        }

        resolve(response);
      });
      req.upload.addEventListener('error', () => {
        reject(req.response);
      });
      const formData = new FormData();
      files.forEach(f => formData.append(f.fieldname, f.file, f.file.name));
      options.customData && Object.keys(options.customData).forEach(fieldname => typeof options.customData[fieldname] !== 'undefined' && formData.append(fieldname, options.customData[fieldname]));
      req.responseType = 'json';
      req.open(options.method || 'POST', uploadUrl);
      let token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get(TOKEN);

      if (!token) {
        token = false ? undefined : '';
      }

      if (token) {
        req.setRequestHeader('Authorization', token);
      }

      req.send(formData);
    });
  }

}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("utMG");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7cpM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EmailTemplateService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emailTemplateService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class EmailTemplateService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  findAll() {
    return this.get('/mailer/templates');
  }

  findById(id) {
    return this.get(`/mailer/templates/${id}`);
  }

  update(id, payload) {
    return this.put(`/mailer/templates/${id}`, payload);
  }

}
const emailTemplateService = new EmailTemplateService();

/***/ }),

/***/ "Abbm":
/***/ (function(module, exports) {



/***/ }),

/***/ "Bfpx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("TW7V");
/* harmony import */ var _page_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("r1gO");
/* harmony import */ var _page_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_less__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/common/layout/page.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Page extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      className,
      children,
      loading = false,
      inner = true
    } = this.props;
    const loadingStyle = {
      height: 'calc(100vh - 184px)',
      overflow: 'hidden'
    };
    return __jsx("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
        contentInner: inner
      }),
      style: loading ? loadingStyle : null,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, loading ? __jsx(_base_loader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
      spinning: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 20
      }
    }) : '', children);
  }

}

/***/ }),

/***/ "CLrh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ auth_service["a" /* authService */]; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ user_service["a" /* userService */]; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ perfomer_category_service["a" /* performerCategoryService */]; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ performer_service["a" /* performerService */]; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ tokenPackageService; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ orderService; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ refundRequestService; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ earningService; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ payoutRequestService; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ studio_service["a" /* studioService */]; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ payment_service["a" /* paymentService */]; });

// UNUSED EXPORTS: AuthService, UserService, PostService, postService, PerformerCategoryService, PerformerService, VideoService, videoService, OrderService, RefundRequestService, PayoutRequestService, StudioService, BannerService, bannerService, PaymentService, EmailTemplateService, emailTemplateService

// EXTERNAL MODULE: ./src/services/auth.service.ts
var auth_service = __webpack_require__("LLt/");

// EXTERNAL MODULE: ./src/services/user.service.ts
var user_service = __webpack_require__("ITiG");

// EXTERNAL MODULE: ./src/services/post.service.ts
var post_service = __webpack_require__("Co7z");

// EXTERNAL MODULE: ./src/services/perfomer-category.service.ts
var perfomer_category_service = __webpack_require__("Mwzl");

// EXTERNAL MODULE: ./src/services/performer.service.ts
var performer_service = __webpack_require__("XQPl");

// EXTERNAL MODULE: ./src/services/video.service.ts
var video_service = __webpack_require__("hIKl");

// EXTERNAL MODULE: ./src/services/api-request.ts
var api_request = __webpack_require__("/bfT");

// CONCATENATED MODULE: ./src/services/token-package.service.ts


class token_package_service_TokenPackageService extends api_request["a" /* APIRequest */] {
  create(payload) {
    return this.post("/admin/package/token", payload);
  }

  list(query) {
    return this.get(this.buildUrl("/admin/package/token/search", query));
  }

  update(id, payload) {
    return this.put("/admin/package/token/" + id, payload);
  }

  delete(id) {
    return this.del("/admin/package/token/" + id);
  }

  findOne(id) {
    return this.get("/admin/package/token/" + id + "/view");
  }

}

const tokenPackageService = new token_package_service_TokenPackageService();
// CONCATENATED MODULE: ./src/services/order.service.ts
// import { IGalleryCreate } from 'src/interfaces';

class order_service_OrderService extends api_request["a" /* APIRequest */] {
  search(payload) {
    return this.get(this.buildUrl(`/orders/search`, payload));
  }

  findById(id) {
    return this.get(`/orders/details/` + id);
  }

  update(id, data) {
    return this.put(`/orders/` + id + '/update', data);
  }

}
const orderService = new order_service_OrderService();
// CONCATENATED MODULE: ./src/services/refund-request.service.ts

class refund_request_service_RefundRequestService extends api_request["a" /* APIRequest */] {
  search(query) {
    return this.get(this.buildUrl('/refund-requests/search', query));
  }

  update(id, payload) {
    return this.post(`/refund-requests/status/${id}`, payload);
  }

}
const refundRequestService = new refund_request_service_RefundRequestService();
// CONCATENATED MODULE: ./src/services/earning.service.ts


class earning_service_EarningService extends api_request["a" /* APIRequest */] {
  search(query) {
    return this.get(this.buildUrl('/earning/admin/search', query));
  }

  stats(params) {
    return this.get(this.buildUrl('/earning/admin/stats', params));
  }

}

const earningService = new earning_service_EarningService();
// CONCATENATED MODULE: ./src/services/payout-request.service.ts

class payout_request_service_PayoutRequestService extends api_request["a" /* APIRequest */] {
  search(query) {
    return this.get(this.buildUrl('/payout-requests/search', query));
  }

  update(id, payload) {
    return this.post(`/payout-requests/status/${id}`, payload);
  }

  findById(id) {
    return this.get(`/payout-requests/admin/${id}`);
  }

}
const payoutRequestService = new payout_request_service_PayoutRequestService();
// EXTERNAL MODULE: ./src/services/studio.service.ts
var studio_service = __webpack_require__("D9zB");

// EXTERNAL MODULE: ./src/services/banner.service.ts
var banner_service = __webpack_require__("Kmg5");

// EXTERNAL MODULE: ./src/services/payment.service.ts
var payment_service = __webpack_require__("j6h8");

// EXTERNAL MODULE: ./src/services/email-template.service.ts
var email_template_service = __webpack_require__("7cpM");

// CONCATENATED MODULE: ./src/services/index.ts
















/***/ }),

/***/ "Co7z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PostService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class PostService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  create(payload) {
    return this.post('/admin/posts', payload);
  }

  search(query) {
    return this.get(this.buildUrl('/admin/posts/search', query));
  }

  findById(id) {
    return this.get(`/admin/posts/${id}/view`);
  }

  update(id, payload) {
    return this.put(`/admin/posts/${id}`, payload);
  }

  delete(id) {
    return this.del(`/admin/posts/${id}`);
  }

}
const postService = new PostService();

/***/ }),

/***/ "D9zB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StudioService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return studioService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class StudioService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  create(payload) {
    return this.post('/studio/register', payload);
  }

  update(id, payload) {
    return this.put(`/studio/${id}/update`, payload);
  }

  search(query, headers) {
    return this.get(this.buildUrl('/studio/search', query), headers);
  }

  findById(id) {
    return this.get(`/studio/${id}/view`);
  }

  updateStudioCommission(id, payload) {
    return this.put(`/studio/commission/${id}`, payload);
  }

  getUploadDocumentUrl(id) {
    if (id) {
      return `${"https://api.dtest.live"}/studio/${id}/documents/upload`;
    } else {
      return `${"https://api.dtest.live"}/studio/documents/upload`;
    }
  }

}
const studioService = new StudioService();

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "Hz3a":
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "ITiG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class UserService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  me(headers) {
    return this.get('/users/me', headers);
  }

  updateMe(payload) {
    return this.put('/admin/users', payload);
  }

  create(payload) {
    return this.post('/admin/users', payload);
  }

  update(id, payload) {
    return this.put(`/admin/users/${id}`, payload);
  }

  getAvatarUploadUrl(userId) {
    if (userId) {
      return `${"https://api.dtest.live"}/admin/users/${userId}/avatar/upload`;
    }

    return `${"https://api.dtest.live"}/users/avatar/upload`;
  }

  uploadAvatarUser(file, userId) {
    return this.upload(`/admin/users/${userId}/avatar/upload`, [{
      file,
      fieldname: 'avatar'
    }]);
  }

  search(query) {
    return this.get(this.buildUrl('/admin/users/search', query));
  }

  findById(id) {
    return this.get(`/admin/users/${id}/view`);
  }

  exportCsv(query) {
    return "https://api.dtest.live" + this.buildUrl('/admin/users/export/csv', _objectSpread({}, query));
  }

}
const userService = new UserService();

/***/ }),

/***/ "JC3Y":
/***/ (function(module, exports) {

module.exports = require("react-draft-wysiwyg");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Kmg5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export BannerService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bannerService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class BannerService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  create(data) {
    return this.post('/admin/banners', data);
  }

  uploadBanner(file, payload, onProgress) {
    return this.upload('/admin/banners/upload', [{
      fieldname: 'banner',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

  search(query) {
    return this.get(this.buildUrl('/admin/banners/search', query));
  }

  findById(id) {
    return this.get(`/admin/banners/${id}/view`);
  }

  update(id, payload) {
    return this.put(`/admin/banners/${id}`, payload);
  }

  delete(id) {
    return this.del(`/admin/banners/${id}`);
  }

}
const bannerService = new BannerService();

/***/ }),

/***/ "LLt/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AuthService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authService; });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/bfT");


class AuthService extends _api_request__WEBPACK_IMPORTED_MODULE_1__[/* APIRequest */ "a"] {
  async login(data) {
    return this.post('/auth/users/login', data);
  }

  setToken(token) {
     false && false; // https://github.com/js-cookie/js-cookie
    // since Safari does not support, need a better solution

    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "b"], token);
    this.setAuthHeaderToken(token);
  }

  getToken() {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "b"]);

    if (token) {
      return token;
    }

    return !token && false ? localStorage.getItem(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "b"]) : null;
  }

  removeToken() {
    js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.remove(_api_request__WEBPACK_IMPORTED_MODULE_1__[/* TOKEN */ "b"]);
     false && false;
  }

  updatePassword(password, userId, source) {
    const url = userId ? '/auth/users/password' : '/auth/users/me/password';
    return this.put(url, {
      userId,
      password,
      source
    });
  }

  forgotPassword(email, type) {
    const data = {
      email,
      type
    };
    return this.post('/auth/users/forgot', data);
  }

}
const authService = new AuthService();

/***/ }),

/***/ "Mwzl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PerformerCategoryService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return performerCategoryService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class PerformerCategoryService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  create(payload) {
    return this.post('/admin/performer-categories', payload);
  }

  search(query) {
    return this.get(this.buildUrl('/admin/performer-categories/search', query));
  }

  findById(id) {
    return this.get(`/admin/performer-categories/${id}/view`);
  }

  update(id, payload) {
    return this.put(`/admin/performer-categories/${id}`, payload);
  }

  delete(id) {
    return this.del(`/admin/performer-categories/${id}`);
  }

}
const performerCategoryService = new PerformerCategoryService();

/***/ }),

/***/ "N94E":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPostDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Co7z");
var _jsxFileName = "/var/www/admin.dtest.live/src/components/post/select-post-dropdown.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
class SelectPostDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_initalData", []);

    _defineProperty(this, "state", {
      data: []
    });

    _defineProperty(this, "handleSearch", value => {
      const q = value.toLowerCase();

      const filtered = this._initalData.filter(p => {
        return p.slug.includes(q) || (p.title || '').toLowerCase().includes(q);
      });

      this.setState({
        data: filtered
      });
    });
  }

  componentDidMount() {
    this.loadPosts();
  }

  async loadPosts(q) {
    // TODO - should check for better option?
    const resp = await _services_post_service__WEBPACK_IMPORTED_MODULE_3__[/* postService */ "a"].search({
      limit: 1000
    });
    this._initalData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"])(resp.data.data, i => i.slug);
    this.setState({
      data: [...this._initalData]
    });
  }

  render() {
    const {
      data
    } = this.state;
    const {
      disabled,
      value,
      defaultValue,
      onSelect
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      showSearch: true,
      value: value,
      placeholder: this.props.placeholder,
      style: this.props.style,
      defaultActiveFirstOption: false,
      showArrow: true,
      filterOption: false,
      onSearch: this.handleSearch,
      onChange: value => onSelect(value, data.find(d => d._id === value)),
      notFoundContent: null,
      defaultValue: defaultValue,
      disabled: disabled,
      allowClear: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, this.state.data.map(p => __jsx(Option, {
      key: p._id,
      value: p._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, p.slug), " / ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 43
      }
    }, p.title)))));
  }

}

/***/ }),

/***/ "NsEo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export arrayToTree */
/* unused harmony export pathMatchRegexp */
/* unused harmony export queryAncestors */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getResponseError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return validateUsername; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return downloadCsv; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVM");
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CLrh");



/**
 * Convert an array to a tree-structured array.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @param   {string}    parentId       The alias of the parent ID of the object in the array.
 * @param   {string}    children  The alias of children of the object in the array.
 * @return  {array}    Return a tree-structured array.
 */

function arrayToTree(array, id = 'id', parentId = 'pid', children = 'children') {
  const result = [];
  const hash = {};
  const data = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(array);
  data.forEach((item, index) => {
    hash[data[index][id]] = data[index];
  });
  data.forEach(item => {
    const hashParent = hash[item[parentId]];

    if (hashParent) {
      !hashParent[children] && (hashParent[children] = []);
      hashParent[children].push(item);
    } else {
      result.push(item);
    }
  });
  return result;
}
/**
 * Whether the path matches the regexp if the language prefix is ignored, https://github.com/pillarjs/path-to-regexp.
 * @param   {string|regexp|array}     regexp     Specify a string, array of strings, or a regular expression.
 * @param   {string}                  pathname   Specify the pathname to match.
 * @return  {array|null}              Return the result of the match or null.
 */

function pathMatchRegexp(regexp, pathname) {
  return path_to_regexp__WEBPACK_IMPORTED_MODULE_1__["pathToRegexp"](regexp).exec(pathname);
}
/**
 * In an array of objects, specify an object that traverses the objects whose parent ID matches.
 * @param   {array}     array     The Array need to Converted.
 * @param   {string}    current   Specify the object that needs to be queried.
 * @param   {string}    parentId  The alias of the parent ID of the object in the array.
 * @param   {string}    id        The alias of the unique ID of the object in the array.
 * @return  {array}    Return a key array.
 */

function queryAncestors(array, current, parentId, id = 'id') {
  const result = [current];
  const hashMap = new Map();
  array.forEach(item => hashMap.set(item[id], item));

  const getPath = current => {
    const currentParentId = hashMap.get(current[id])[parentId];

    if (currentParentId) {
      result.push(hashMap.get(currentParentId));
      getPath(hashMap.get(currentParentId));
    }
  };

  getPath(current);
  return result;
}
function getResponseError(data) {
  if (!data) {
    return '';
  }

  if (Array.isArray(data.message)) {
    const item = data.message[0];

    if (!item.constraints) {
      return data.error || 'Bad request!';
    }

    return Object.values(item.constraints)[0];
  } // TODO - parse for langauge or others


  return typeof data.message === 'string' ? data.message : 'Bad request!';
}
function validateUsername(text) {
  return /^[a-zA-Z0-9]+$/.test(text);
}
function downloadCsv(url, filename) {
  let promise = new Promise(async (resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.onload = () => {
      let blob = new Blob([xhr.response], {
        type: 'text/csv'
      });
      let href = URL.createObjectURL(blob);
      let a = document.createElement('a');
      a.href = href;
      a.setAttribute('download', filename);
      a.click();
      URL.revokeObjectURL(href);
      resolve({
        success: true
      });
    };

    xhr.onerror = err => {
      reject(err);
    };

    xhr.open('GET', url);
    xhr.setRequestHeader('Authorization', _services_index__WEBPACK_IMPORTED_MODULE_2__[/* authService */ "a"].getToken());
    xhr.responseType = 'blob';
    xhr.send();
  });
  return promise;
}

/***/ }),

/***/ "RPRI":
/***/ (function(module, exports) {

module.exports = require("draftjs-to-html");

/***/ }),

/***/ "TW7V":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Abbm");
/* harmony import */ var _loader_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_loader_less__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/common/base/loader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Loader = ({
  spinning = false,
  fullScreen = false
}) => {
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("loader", {
      hidden: !spinning,
      fullScreen: fullScreen
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "warpper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, "LOADING")));
};

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "XQPl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PerformerService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return performerService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class PerformerService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  create(payload) {
    return this.post('/admin/performers', payload);
  }

  update(id, payload) {
    return this.put(`/admin/performers/${id}`, payload);
  }

  search(query) {
    return this.get(this.buildUrl('/admin/performers/search', query));
  }

  searchOnline(query) {
    return this.get(this.buildUrl('/admin/performers/online', query));
  }

  findById(id) {
    return this.get(`/admin/performers/${id}/view`);
  }

  getUploadDocumentUrl(id) {
    return `${"https://api.dtest.live"}/admin/performers/documents/upload`;
  }

  getAvatarUploadUrl() {
    return `${"https://api.dtest.live"}/admin/performers/avatar/upload`;
  }

  updateCommissionSetting(id, payload) {
    return this.put(`/admin/performer-commission/${id}`, payload);
  }

  exportCsv(query) {
    return "https://api.dtest.live" + this.buildUrl('/admin/performers/export/csv', _objectSpread({}, query));
  }

}
const performerService = new PerformerService();

/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "d6Hq":
/***/ (function(module, exports) {

module.exports = require("html-to-draftjs");

/***/ }),

/***/ "hIKl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VideoService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return videoService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class VideoService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  search(query) {
    return this.get(this.buildUrl('/admin/performer-assets/videos/search', query));
  }

  findById(id) {
    return this.get(`/admin/performer-assets/videos/${id}/view`);
  }

  update(id, payload) {
    return this.put(`/admin/performer-assets/videos/${id}`, payload);
  }

  uploadVideo(files, payload, onProgress) {
    return this.upload('/admin/performer-assets/videos/upload', files, {
      onProgress,
      customData: payload
    });
  }

  delete(id) {
    return this.del(`/admin/performer-assets/videos/${id}`);
  }

}
const videoService = new VideoService();

/***/ }),

/***/ "j6h8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PaymentService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return paymentService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class PaymentService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  search(query) {
    return this.get(this.buildUrl('/transactions/admin/search', query));
  }

  paymentInformationSearch(query) {
    return this.get(this.buildUrl('/payment-information/search', query));
  }

  detail(id) {
    return this.get('/payment-information/' + id + '/view');
  }

}
const paymentService = new PaymentService();

/***/ }),

/***/ "nXVM":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "r1gO":
/***/ (function(module, exports) {



/***/ }),

/***/ "rP/q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isUrl; });
/* unused harmony export capitalizeFirstLetter */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatId; });
function isUrl(url) {
  return url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null;
}
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function formatId(id) {
  return id.slice(16, 24).toUpperCase();
}

/***/ }),

/***/ "utMG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/common/layout/page.tsx
var page = __webpack_require__("Bfpx");

// EXTERNAL MODULE: ./src/components/common/base/loader.tsx
var loader = __webpack_require__("TW7V");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// CONCATENATED MODULE: ./src/components/file/image-upload.tsx
var _jsxFileName = "/var/www/admin.dtest.live/src/components/file/image-upload.tsx";

var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const ext = file.name.split('.').pop().toLowerCase();
  const isImageAccept = ".jpeg, .jpg, .png".split(',').map(item => item.trim()).indexOf(`.${ext}`);

  if (isImageAccept === -1) {
    external_antd_["message"].error(`You can only upload ${".jpeg, .jpg, .png"} file!`);
  }

  const isLt2M = file.size / 1024 / 1024 < ("2" || false);

  if (!isLt2M) {
    external_antd_["message"].error(`Image must smaller than ${"2" || false}MB!`);
  }

  return isImageAccept > -1 && isLt2M;
}

class image_upload_ImageUpload extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: false,
      imageUrl: this.props.imageUrl
    });

    _defineProperty(this, "handleChange", info => {
      if (info.file.status === 'uploading') {
        this.setState({
          loading: true
        });
        return;
      }

      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.setState({
            imageUrl,
            loading: false
          });
          this.props.onUploaded && this.props.onUploaded({
            response: info.file.response,
            base64: imageUrl
          });
        });
      }
    });
  }

  render() {
    const {
      options = {}
    } = this.props;

    const uploadButton = __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, this.state.loading ? __jsx(icons_["LoadingOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 31
      }
    }) : __jsx(icons_["PlusOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 53
      }
    }), __jsx("div", {
      className: "ant-upload-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }
    }, "Upload"));

    const {
      imageUrl
    } = this.state;
    const {
      headers,
      uploadUrl
    } = this.props;
    return __jsx(external_antd_["Upload"], {
      name: options.fieldName || 'file',
      listType: "picture-card",
      className: "avatar-uploader",
      showUploadList: false,
      action: uploadUrl,
      beforeUpload: beforeUpload,
      onChange: this.handleChange,
      headers: headers,
      accept: ".jpeg, .jpg, .png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, imageUrl ? __jsx("img", {
      src: imageUrl,
      alt: "file",
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }) : uploadButton);
  }

}
// CONCATENATED MODULE: ./src/components/file/sound-upload.tsx
var sound_upload_jsxFileName = "/var/www/admin.dtest.live/src/components/file/sound-upload.tsx";

var sound_upload_jsx = external_react_default.a.createElement;

function sound_upload_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function sound_upload_getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function sound_upload_beforeUpload(file) {
  const isLt2M = file.size / 1024 / 1024 < ("5" || false);

  if (!isLt2M) {
    external_antd_["message"].error(`Image must smaller than ${"2" || false}MB!`);
  }

  return isLt2M;
}

class sound_upload_SoundUpload extends external_react_["PureComponent"] {
  constructor(props) {
    super(props);

    sound_upload_defineProperty(this, "handleChange", info => {
      const {
        onUploaded
      } = this.props;

      if (info.file.status === 'uploading') {
        this.setState({
          loading: true
        });
      }

      if (info.file.status === 'done') {
        this.setState({
          loading: false
        });
      }

      let fileList = [...info.fileList];
      fileList = fileList.slice(-1);
      fileList = fileList.map(file => {
        if (file.response) {
          const {
            data
          } = file.response;
          file.url = data.url;
          file.uid = data._id;
          file.name = data.name;
          file.status = 'done';
          onUploaded && onUploaded({
            response: info.file.response
          });
          this.setState({
            loading: false
          });
        }

        return file;
      });
      this.setState({
        fileList
      });
    });

    this.state = {
      loading: false
    };
  }

  componentDidMount() {
    const {
      fileUrl
    } = this.props;

    if (fileUrl) {
      this.setState({
        fileList: [{
          uid: '-1',
          name: fileUrl,
          status: 'done',
          url: fileUrl
        }]
      });
    }
  }

  render() {
    const {
      options = {}
    } = this.props;
    const {
      fileList,
      loading
    } = this.state;
    const {
      headers,
      uploadUrl
    } = this.props;

    const UploadButton = () => sound_upload_jsx("div", {
      __self: this,
      __source: {
        fileName: sound_upload_jsxFileName,
        lineNumber: 93,
        columnNumber: 7
      }
    }, sound_upload_jsx(external_antd_["Button"], {
      type: "primary",
      loading: loading,
      __self: this,
      __source: {
        fileName: sound_upload_jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }
    }, sound_upload_jsx(icons_["PlusOutlined"], {
      __self: this,
      __source: {
        fileName: sound_upload_jsxFileName,
        lineNumber: 95,
        columnNumber: 11
      }
    }), " Upload"));

    return sound_upload_jsx(external_antd_["Upload"], {
      name: options.fieldName || 'file',
      showUploadList: {
        showPreviewIcon: true,
        showRemoveIcon: false,
        showDownloadIcon: false
      },
      fileList: fileList,
      multiple: false,
      listType: "text",
      className: "avatar-uploader",
      action: uploadUrl,
      beforeUpload: sound_upload_beforeUpload,
      onChange: this.handleChange,
      headers: headers,
      accept: "audio/*",
      __self: this,
      __source: {
        fileName: sound_upload_jsxFileName,
        lineNumber: 100,
        columnNumber: 7
      }
    }, sound_upload_jsx(UploadButton, {
      __self: this,
      __source: {
        fileName: sound_upload_jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }));
  }

}
// EXTERNAL MODULE: ./src/services/auth.service.ts
var auth_service = __webpack_require__("LLt/");

// EXTERNAL MODULE: ./src/services/setting.service.ts
var setting_service = __webpack_require__("zM0U");

// EXTERNAL MODULE: ./src/lib/utils.ts
var utils = __webpack_require__("NsEo");

// EXTERNAL MODULE: ./src/components/post/select-post-dropdown.tsx
var select_post_dropdown = __webpack_require__("N94E");

// CONCATENATED MODULE: ./pages/settings/index.tsx
var settings_jsxFileName = "/var/www/admin.dtest.live/pages/settings/index.tsx";

var settings_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { settings_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function settings_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const WYSIWYG = dynamic_default()(() => __webpack_require__.e(/* import() */ 0).then(__webpack_require__.bind(null, "KJL1")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("KJL1")],
    modules: ['@components/wysiwyg']
  }
});
const {
  Option
} = external_antd_["Select"];

class settings_Settings extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    settings_defineProperty(this, "footerContent", '');

    settings_defineProperty(this, "state", {
      updating: false,
      loading: false,
      selectedTab: 'general',
      list: []
    });

    settings_defineProperty(this, "formRef", void 0);

    settings_defineProperty(this, "dataChange", {});

    settings_defineProperty(this, "smtpInfo", {
      host: '',
      port: 465,
      secure: true,
      auth: {
        user: '',
        password: ''
      }
    });
  }

  componentDidMount() {
    this.formRef = Object(external_react_["createRef"])();
    this.loadSettings();
  }

  async onMenuChange(menu) {
    await this.setState({
      selectedTab: menu.key
    });
    await this.loadSettings();
  }

  async loadSettings() {
    const {
      selectedTab
    } = this.state;

    try {
      await this.setState({
        loading: true
      });
      const resp = await setting_service["a" /* settingService */].all(this.state.selectedTab);
      this.dataChange = {};

      if (selectedTab === 'mailer' && resp.data && resp.data.length) {
        const info = resp.data.find(data => data.key === 'smtpTransporter');
        if (info) this.smtpInfo = info.value;
      }

      this.setState({
        list: resp.data
      });
    } catch (e) {
      const error = await Promise.resolve(e);
      external_antd_["message"].error(Object(utils["b" /* getResponseError */])(error));
    } finally {
      await this.setState({
        loading: false
      });
    }
  }

  async submit() {
    try {
      await this.setState({
        updating: true
      });

      for (const key of Object.keys(this.dataChange)) {
        await setting_service["a" /* settingService */].update(key, this.dataChange[key]);
      }

      external_antd_["message"].success('Updated setting successfully');
    } catch (e) {
      const error = await Promise.resolve(e);
      external_antd_["message"].error(Object(utils["b" /* getResponseError */])(error));
    } finally {
      await this.setState({
        updating: false
      });
    }
  }

  renderUpload(setting, ref) {
    if (!setting.meta || !setting.meta.upload) {
      return null;
    }

    const uploadHeaders = {
      authorization: auth_service["a" /* authService */].getToken()
    };
    return settings_jsx("div", {
      style: {
        padding: '10px 0'
      },
      key: `upload${setting._id}`,
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }
    }, setting.meta.image ? settings_jsx(image_upload_ImageUpload, {
      imageUrl: setting.value,
      uploadUrl: setting_service["a" /* settingService */].getFileUploadUrl(),
      headers: uploadHeaders,
      onUploaded: resp => {
        const formInstance = this.formRef.current;
        ref.current.input.value = resp.response.data.url;
        formInstance.setFieldsValue({
          [setting.key]: resp.response.data.url
        });
        this.dataChange[setting.key] = resp.response.data.url;
      },
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }) : settings_jsx(sound_upload_SoundUpload, {
      fileUrl: setting.value,
      uploadUrl: setting_service["a" /* settingService */].getFileUploadUrl(),
      headers: uploadHeaders,
      onUploaded: resp => {
        const formInstance = this.formRef.current;
        ref.current.input.value = resp.response.data.url;
        formInstance.setFieldsValue({
          [setting.key]: resp.response.data.url
        });
        this.dataChange[setting.key] = resp.response.data.url;
      },
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }));
  }

  setVal(field, val) {
    this.dataChange[field] = val;
  }

  setObject(field, val) {
    if (field === 'user' || field === 'pass') {
      this.smtpInfo.auth[field] = val;
    } else {
      this.smtpInfo[field] = val;
    }

    this.dataChange.smtpTransporter = this.smtpInfo;
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  renderFormItem(setting) {
    var _setting$value, _setting$value2, _setting$value3, _setting$value4, _setting$value4$auth, _setting$value5, _setting$value5$auth, _setting$meta, _setting$meta2;

    const {
      updating
    } = this.state;
    let type = setting.type;

    if (setting.meta && setting.meta.textarea) {
      type = 'textarea';
    }

    const ref = Object(external_react_["createRef"])();

    switch (type) {
      case 'textarea':
        return settings_jsx(external_antd_["Form"].Item, {
          label: setting.name,
          key: setting._id,
          extra: setting.description,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 167,
            columnNumber: 11
          }
        }, settings_jsx(external_antd_["Input"].TextArea, {
          defaultValue: setting.value,
          onChange: val => this.setVal(setting.key, val.target.value),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }
        }));

      case 'text-editor':
        return settings_jsx(external_antd_["Form"].Item, {
          label: setting.name,
          key: setting._id,
          help: setting.description,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 180,
            columnNumber: 11
          }
        }, settings_jsx(WYSIWYG, {
          onChange: ({
            html
          }) => this.setVal(setting.key, html),
          html: setting.value,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }
        }));

      case 'checkbox':
        return settings_jsx(external_antd_["Form"].Item, {
          label: setting.name,
          key: setting._id,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 186,
            columnNumber: 11
          }
        }, settings_jsx(external_antd_["Checkbox"].Group, {
          options: setting.meta.options,
          onChange: checkedValues => this.setVal(setting.key, checkedValues),
          defaultValue: setting.value,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }
        }));

      case 'number':
        return settings_jsx(external_antd_["Form"].Item, {
          label: setting.name,
          key: setting._id,
          extra: setting.description,
          name: setting.key,
          rules: [{
            validator: (_, value) => {
              if (typeof value !== 'number') {
                return Promise.reject('This field must be a number!');
              }

              if (setting.meta && typeof setting.meta.min !== 'undefined' && value < setting.meta.min) {
                return Promise.reject('Minimum ' + setting.meta.min);
              }

              if (setting.meta && typeof setting.meta.min !== 'undefined' && value > setting.meta.max) {
                return Promise.reject('Maximum ' + setting.meta.max);
              }

              return Promise.resolve();
            }
          }],
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 199,
            columnNumber: 11
          }
        }, settings_jsx(external_antd_["InputNumber"], {
          style: {
            width: '100%'
          },
          step: setting.meta && typeof setting.meta.step !== 'undefined' ? setting.meta.step : 1,
          defaultValue: setting.value,
          onChange: val => this.setVal(setting.key, val),
          min: setting.meta && typeof setting.meta.min !== 'undefined' ? setting.meta.min : Number.MIN_SAFE_INTEGER,
          max: setting.meta && typeof setting.meta.max !== 'undefined' ? setting.meta.max : Number.MAX_SAFE_INTEGER,
          type: "number",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 230,
            columnNumber: 13
          }
        }));

      case 'boolean':
        return settings_jsx("div", {
          className: "ant-row ant-form-item ant-form-item-with-help",
          key: setting._id,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 255,
            columnNumber: 11
          }
        }, settings_jsx("div", {
          className: "ant-col ant-col-4 ant-form-item-label",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 259,
            columnNumber: 13
          }
        }, settings_jsx("label", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 260,
            columnNumber: 15
          }
        }, setting.name)), settings_jsx("div", {
          className: "ant-col ant-col-16 ant-form-item-control",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 262,
            columnNumber: 13
          }
        }, settings_jsx(external_antd_["Switch"], {
          defaultChecked: setting.value,
          onChange: val => this.setVal(setting.key, val),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 263,
            columnNumber: 15
          }
        }), settings_jsx("div", {
          className: "ant-form-item-explain",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 267,
            columnNumber: 15
          }
        }, setting.description)));

      case 'commission':
        return settings_jsx(external_antd_["Form"].Item, {
          name: setting.key,
          label: setting.name,
          key: setting._id,
          extra: setting.description,
          rules: [{
            validator(_, v) {
              if (parseInt(v) > 100 && parseInt(v) < 0) {
                return Promise.reject('Please input number 0-100');
              }

              return Promise.resolve();
            }

          }],
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 273,
            columnNumber: 11
          }
        }, settings_jsx(external_antd_["InputNumber"], {
          min: 0,
          max: 100,
          defaultValue: setting.value,
          onChange: val => this.setVal(setting.key, val),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 289,
            columnNumber: 13
          }
        }));

      case 'mixed':
        return settings_jsx("div", {
          className: "ant-row ant-form-item ant-form-item-with-help",
          key: setting._id,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 299,
            columnNumber: 11
          }
        }, settings_jsx("div", {
          className: "ant-col ant-col-4 ant-form-item-label",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 300,
            columnNumber: 13
          }
        }, settings_jsx("label", {
          htmlFor: "setting-name",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 301,
            columnNumber: 15
          }
        }, setting.name)), settings_jsx("div", {
          className: "ant-col ant-col-20 ant-form-item-control",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 305,
            columnNumber: 13
          }
        }, settings_jsx("div", {
          className: "ant-form-item",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 306,
            columnNumber: 15
          }
        }, settings_jsx("div", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 307,
            columnNumber: 17
          }
        }, settings_jsx("label", {
          htmlFor: "host-name",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 308,
            columnNumber: 19
          }
        }, "Host"), settings_jsx(external_antd_["Input"], {
          defaultValue: setting === null || setting === void 0 ? void 0 : (_setting$value = setting.value) === null || _setting$value === void 0 ? void 0 : _setting$value.host,
          onChange: val => this.setObject('host', val.target.value),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 311,
            columnNumber: 19
          }
        })), settings_jsx("div", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 316,
            columnNumber: 17
          }
        }, settings_jsx("label", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 317,
            columnNumber: 19
          }
        }, "Port"), settings_jsx(external_antd_["Input"], {
          defaultValue: setting === null || setting === void 0 ? void 0 : (_setting$value2 = setting.value) === null || _setting$value2 === void 0 ? void 0 : _setting$value2.port,
          onChange: val => this.setObject('port', val.target.value),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 318,
            columnNumber: 19
          }
        })), settings_jsx("div", {
          style: {
            margin: '10px 0'
          },
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 323,
            columnNumber: 17
          }
        }, settings_jsx("label", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 324,
            columnNumber: 19
          }
        }, settings_jsx(external_antd_["Checkbox"], {
          defaultChecked: (setting === null || setting === void 0 ? void 0 : (_setting$value3 = setting.value) === null || _setting$value3 === void 0 ? void 0 : _setting$value3.secure) || false,
          onChange: e => this.setObject('secure', e.target.checked),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 325,
            columnNumber: 21
          }
        }), ' ', "Secure (true for port 465, false for other ports)")), settings_jsx("div", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 330,
            columnNumber: 17
          }
        }, settings_jsx("label", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 331,
            columnNumber: 19
          }
        }, "Auth user"), settings_jsx(external_antd_["Input"], {
          defaultValue: setting === null || setting === void 0 ? void 0 : (_setting$value4 = setting.value) === null || _setting$value4 === void 0 ? void 0 : (_setting$value4$auth = _setting$value4.auth) === null || _setting$value4$auth === void 0 ? void 0 : _setting$value4$auth.user,
          onChange: val => this.setObject('user', val.target.value),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 332,
            columnNumber: 19
          }
        })), settings_jsx("div", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 337,
            columnNumber: 17
          }
        }, settings_jsx("label", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 338,
            columnNumber: 19
          }
        }, "Auth password"), settings_jsx(external_antd_["Input"], {
          defaultValue: setting === null || setting === void 0 ? void 0 : (_setting$value5 = setting.value) === null || _setting$value5 === void 0 ? void 0 : (_setting$value5$auth = _setting$value5.auth) === null || _setting$value5$auth === void 0 ? void 0 : _setting$value5$auth.pass,
          onChange: val => this.setObject('pass', val.target.value),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 339,
            columnNumber: 19
          }
        }))), settings_jsx("div", {
          className: "ant-form-item-explain",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 345,
            columnNumber: 15
          }
        }, setting.description), settings_jsx("div", {
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 346,
            columnNumber: 15
          }
        }, settings_jsx(external_antd_["Button"], {
          disabled: updating,
          loading: updating,
          onClick: this.verifyMailer.bind(this),
          type: "link",
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 347,
            columnNumber: 17
          }
        }, "Once saved, click here to send a testing email using this configuration above"))));

      case 'radio':
        return settings_jsx(external_antd_["Form"].Item, {
          label: setting.name,
          key: setting._id,
          help: setting.description,
          extra: setting.extra,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 354,
            columnNumber: 11
          }
        }, settings_jsx(external_antd_["Radio"].Group, {
          onChange: val => this.setVal(setting.key, val.target.value),
          defaultValue: setting.value,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 355,
            columnNumber: 13
          }
        }, (_setting$meta = setting.meta) === null || _setting$meta === void 0 ? void 0 : _setting$meta.value.map(v => settings_jsx(external_antd_["Radio"], {
          value: v.key,
          checked: this.dataChange[setting.key] === v.key,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 360,
            columnNumber: 17
          }
        }, v.name))));

      case 'post':
        return settings_jsx(external_antd_["Form"].Item, {
          label: setting.name,
          key: setting._id,
          help: setting.description,
          extra: setting.extra,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 372,
            columnNumber: 13
          }
        }, settings_jsx(select_post_dropdown["a" /* SelectPostDropdown */], {
          defaultValue: setting.value,
          onSelect: val => this.setVal(setting.key, val),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 373,
            columnNumber: 19
          }
        }));

      case 'dropdown':
      case 'radio':
        return settings_jsx(external_antd_["Form"].Item, {
          label: setting.name,
          key: setting._id,
          help: setting.description,
          extra: setting.extra,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 381,
            columnNumber: 11
          }
        }, settings_jsx(external_antd_["Select"], {
          onChange: val => this.setVal(setting.key, val),
          defaultValue: setting.value,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 382,
            columnNumber: 13
          }
        }, (_setting$meta2 = setting.meta) === null || _setting$meta2 === void 0 ? void 0 : _setting$meta2.value.map(v => settings_jsx(Option, {
          value: v.key,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 385,
            columnNumber: 17
          }
        }, v.name))));

      default:
        return settings_jsx(external_antd_["Form"].Item, {
          label: setting.name,
          key: setting._id,
          help: setting.description,
          extra: setting.extra,
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 396,
            columnNumber: 11
          }
        }, settings_jsx(external_antd_["Input"], {
          defaultValue: setting.value,
          ref: ref,
          key: `input${setting._id}`,
          onChange: val => this.setVal(setting.key, val.target.value),
          __self: this,
          __source: {
            fileName: settings_jsxFileName,
            lineNumber: 402,
            columnNumber: 13
          }
        }), this.renderUpload(setting, ref));
    }
  }

  async verifyMailer() {
    try {
      this.setState({
        updating: true
      });
      await setting_service["a" /* settingService */].verifyMailer();
      external_antd_["message"].success('We\'ve sent and test email, please check your email inbox or spam folder');
    } catch (e) {
      const err = await Promise.resolve(e);
      external_antd_["message"].error(err && err.errno ? err.errno : 'Could not verify this SMTP transporter');
    } finally {
      this.setState({
        updating: false
      });
    }
  }

  render() {
    const {
      updating,
      selectedTab,
      list,
      loading
    } = this.state;
    const fixedTabs = ['commission', 'ccbill', 'custom'];
    const layout = fixedTabs.includes(selectedTab) ? {
      labelCol: {
        span: 8
      },
      wrapperCol: {
        span: 16
      }
    } : {
      labelCol: {
        span: 4
      },
      wrapperCol: {
        span: 16
      }
    };
    const initialValues = {};
    list.forEach(item => {
      initialValues[item.key] = item.value;
    });
    return settings_jsx(external_react_["Fragment"], {
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 446,
        columnNumber: 7
      }
    }, settings_jsx(head_default.a, {
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 447,
        columnNumber: 9
      }
    }, settings_jsx("title", {
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 448,
        columnNumber: 11
      }
    }, "Site Settings")), settings_jsx(page["a" /* default */], {
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 450,
        columnNumber: 9
      }
    }, settings_jsx("div", {
      style: {
        marginBottom: '20px'
      },
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 451,
        columnNumber: 11
      }
    }, settings_jsx(external_antd_["Menu"], {
      onClick: this.onMenuChange.bind(this),
      selectedKeys: [selectedTab],
      mode: "horizontal",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 452,
        columnNumber: 13
      }
    }, settings_jsx(external_antd_["Menu"].Item, {
      key: "general",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 457,
        columnNumber: 15
      }
    }, "General"), settings_jsx(external_antd_["Menu"].Item, {
      key: "email",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 458,
        columnNumber: 15
      }
    }, "Email"), settings_jsx(external_antd_["Menu"].Item, {
      key: "custom",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 459,
        columnNumber: 15
      }
    }, "Custom"), settings_jsx(external_antd_["Menu"].Item, {
      key: "commission",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 460,
        columnNumber: 15
      }
    }, "Commission"), settings_jsx(external_antd_["Menu"].Item, {
      key: "ccbill",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 461,
        columnNumber: 15
      }
    }, "CCbill"), settings_jsx(external_antd_["Menu"].Item, {
      key: "mailer",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 462,
        columnNumber: 15
      }
    }, "SMTP"), settings_jsx(external_antd_["Menu"].Item, {
      key: "analytics",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 463,
        columnNumber: 15
      }
    }, "Google Analytics"), settings_jsx(external_antd_["Menu"].Item, {
      key: "default-price",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 464,
        columnNumber: 15
      }
    }, "Default Price"), settings_jsx(external_antd_["Menu"].Item, {
      key: "customText",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 465,
        columnNumber: 15
      }
    }, "Custom Text"), settings_jsx(external_antd_["Menu"].Item, {
      key: "ant",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 466,
        columnNumber: 15
      }
    }, "Ant Media"), settings_jsx(external_antd_["Menu"].Item, {
      key: "currency",
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 467,
        columnNumber: 15
      }
    }, "Currency"))), loading ? settings_jsx(loader["a" /* default */], {
      spinning: true,
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 472,
        columnNumber: 13
      }
    }) : settings_jsx(external_antd_["Form"], _extends({}, layout, {
      layout: fixedTabs.includes(selectedTab) ? 'vertical' : 'horizontal',
      name: "setting-frm",
      onFinish: this.submit.bind(this),
      initialValues: initialValues,
      ref: this.formRef,
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 474,
        columnNumber: 15
      }
    }), list.map(setting => this.renderFormItem(setting)), settings_jsx(external_antd_["Form"].Item, {
      wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
        offset: 4
      }),
      style: {
        textAlign: 'right'
      },
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 483,
        columnNumber: 17
      }
    }, settings_jsx(external_antd_["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: updating,
      disabled: updating,
      __self: this,
      __source: {
        fileName: settings_jsxFileName,
        lineNumber: 487,
        columnNumber: 19
      }
    }, "Submit")))));
  }

}

/* harmony default export */ var settings = __webpack_exports__["default"] = (settings_Settings);

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zM0U":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SettingService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return settingService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class SettingService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  public() {
    return this.get(this.buildUrl('/settings/public'));
  }

  all(group = '') {
    return this.get(this.buildUrl('/admin/settings', {
      group
    }));
  }

  update(key, value) {
    return this.put(`/admin/settings/${key}`, {
      value
    });
  }

  getFileUploadUrl() {
    return `${"https://api.dtest.live"}/admin/settings/files/upload`;
  }

  verifyMailer() {
    return this.post('/mailer/verify');
  }

}
const settingService = new SettingService();

/***/ })

/******/ });