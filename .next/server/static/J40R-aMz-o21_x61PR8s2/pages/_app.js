module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+E3a":
/***/ (function(module, exports) {



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

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

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

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "Abbm":
/***/ (function(module, exports) {



/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

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

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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

/***/ "Lmjj":
/***/ (function(module, exports) {



/***/ }),

/***/ "MWqi":
/***/ (function(module, exports) {

module.exports = require("reselect");

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

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RfFk":
/***/ (function(module, exports) {

module.exports = require("react-perfect-scrollbar");

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

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

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "next-cookies"
var external_next_cookies_ = __webpack_require__("3i/4");
var external_next_cookies_default = /*#__PURE__*/__webpack_require__.n(external_next_cookies_);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");
var external_next_redux_wrapper_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_wrapper_);

// EXTERNAL MODULE: external "next-redux-saga"
var external_next_redux_saga_ = __webpack_require__("pEZS");
var external_next_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_next_redux_saga_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/lib/redux.ts
var redux = __webpack_require__("vo7w");

// CONCATENATED MODULE: ./src/redux/ui/actions.ts

const updateUIValue = Object(redux["a" /* createAction */])('updateUIValue');
const loadUIValue = Object(redux["a" /* createAction */])('loadUIValue');
// CONCATENATED MODULE: ./src/redux/ui/reducers.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // TODO - 

const reducers_initialState = {
  collapsed: false,
  theme: 'light',
  siteName: 'Admin panel',
  logo: '/logo-white.svg',
  fixedHeader: false
};
const uiReducers = [{
  on: updateUIValue,

  reducer(state, data) {
    if (false) {}

    return Object.assign(_objectSpread({}, state), data.payload);
  }

}, {
  on: loadUIValue,

  reducer(state) {
    const newVal = {};

    if (false) {}

    return _objectSpread(_objectSpread({}, state), newVal);
  }

}];
/* harmony default export */ var reducers = (Object(external_lodash_["merge"])({}, Object(redux["c" /* createReducers */])('ui', [uiReducers], reducers_initialState)));
// EXTERNAL MODULE: ./src/redux/user/actions.ts
var actions = __webpack_require__("x7is");

// CONCATENATED MODULE: ./src/redux/user/reducers.ts
function reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducers_ownKeys(Object(source), true).forEach(function (key) { reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const user_reducers_initialState = {
  current: {
    _id: null,
    avatar: '/user.png',
    name: '',
    email: ''
  },
  updating: false,
  updateSuccess: false
};
const userReducers = [{
  on: actions["d" /* updateCurrentUser */],

  reducer(state, data) {
    return reducers_objectSpread(reducers_objectSpread({}, state), {}, {
      current: data.payload
    });
  }

}, {
  on: actions["e" /* updateCurrentUserAvatar */],

  reducer(state, data) {
    return reducers_objectSpread(reducers_objectSpread({}, state), {}, {
      current: reducers_objectSpread(reducers_objectSpread({}, state.current), {}, {
        avatar: data.payload
      })
    });
  }

}, {
  on: actions["g" /* updateUserSuccess */],

  reducer(state, data) {
    return reducers_objectSpread(reducers_objectSpread({}, state), {}, {
      updatedUser: data.payload
    });
  }

}, {
  on: actions["c" /* setUpdating */],

  reducer(state, data) {
    return reducers_objectSpread(reducers_objectSpread({}, state), {}, {
      updating: data.payload
    });
  }

}, {
  on: actions["b" /* setUpdateStatus */],

  reducer(state, data) {
    return reducers_objectSpread(reducers_objectSpread({}, state), {}, {
      updateSuccess: data.payload
    });
  }

}, {
  on: actions["a" /* setReducer */],

  reducer(state, data) {
    return reducers_objectSpread(reducers_objectSpread({}, state), {}, {
      [data.payload.field]: data.payload.data
    });
  }

}];
/* harmony default export */ var user_reducers = (Object(external_lodash_["merge"])({}, Object(redux["c" /* createReducers */])('user', [userReducers], user_reducers_initialState)));
// EXTERNAL MODULE: ./src/redux/auth/actions.ts
var auth_actions = __webpack_require__("kXO4");

// EXTERNAL MODULE: ./pages/auth/login.tsx
var login = __webpack_require__("fY9I");

// CONCATENATED MODULE: ./src/redux/auth/reducers.ts
function auth_reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function auth_reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { auth_reducers_ownKeys(Object(source), true).forEach(function (key) { auth_reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { auth_reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function auth_reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const auth_reducers_initialState = {
  loggedIn: false,
  authUser: null
};
const authReducers = [{
  on: login["default"],

  reducer(state) {
    return auth_reducers_objectSpread(auth_reducers_objectSpread({}, state), {}, {
      login: {
        requesting: false,
        error: null
      }
    });
  }

}, {
  on: auth_actions["c" /* loginSuccess */],

  reducer(state, data) {
    return auth_reducers_objectSpread(auth_reducers_objectSpread({}, state), {}, {
      loggedIn: true,
      login: {
        requesting: false,
        error: null,
        data: data.payload,
        success: true
      }
    });
  }

}, {
  on: auth_actions["b" /* loginFail */],

  reducer(state, data) {
    return auth_reducers_objectSpread(auth_reducers_objectSpread({}, state), {}, {
      loggedIn: false,
      login: {
        requesting: false,
        error: data.payload,
        success: false
      }
    });
  }

}, {
  on: auth_actions["e" /* logoutSuccess */],

  reducer(state) {
    return auth_reducers_objectSpread(auth_reducers_objectSpread({}, state), {}, {
      logout: {
        success: true
      }
    });
  }

}];
/* harmony default export */ var auth_reducers = (Object(external_lodash_["merge"])({}, Object(redux["c" /* createReducers */])("auth", [authReducers], auth_reducers_initialState)));
// CONCATENATED MODULE: ./src/redux/settings/actions.ts

const updateSettings = Object(redux["a" /* createAction */])('UPDATE_SETTINGS');
// CONCATENATED MODULE: ./src/redux/settings/reducers.ts
function settings_reducers_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function settings_reducers_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { settings_reducers_ownKeys(Object(source), true).forEach(function (key) { settings_reducers_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { settings_reducers_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function settings_reducers_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // TODO -

const settings_reducers_initialState = {
  countries: []
};
const settingReducers = [{
  on: updateSettings,

  reducer(state, data) {
    return settings_reducers_objectSpread(settings_reducers_objectSpread({}, state), data.payload);
  }

}];
/* harmony default export */ var settings_reducers = (Object(external_lodash_["merge"])({}, Object(redux["c" /* createReducers */])('settings', [settingReducers], settings_reducers_initialState)));
// CONCATENATED MODULE: ./src/redux/rootReducer.ts

 // load reducer here





const rootReducer_reducers = Object(external_lodash_["merge"])(reducers, user_reducers, auth_reducers, settings_reducers);
/* harmony default export */ var rootReducer = (Object(external_redux_["combineReducers"])(rootReducer_reducers));
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./src/services/index.ts + 5 modules
var services = __webpack_require__("CLrh");

// CONCATENATED MODULE: ./src/redux/user/sagas.ts





const userSagas = [// TODO - defind update current user or get from auth user info to reload current user data if needed
{
  on: actions["f" /* updateUser */],

  *worker(data) {
    try {
      yield Object(effects_["put"])(Object(actions["c" /* setUpdating */])(true));
      const updated = yield services["k" /* userService */].updateMe(data.payload);
      yield Object(effects_["put"])(Object(actions["d" /* updateCurrentUser */])(updated.data));
      yield Object(effects_["put"])(Object(actions["b" /* setUpdateStatus */])(true)); // if this is current user, reload user info?
    } catch (e) {// TODO - alert error
    } finally {
      yield Object(effects_["put"])(Object(actions["b" /* setUpdateStatus */])(false));
      yield Object(effects_["put"])(Object(actions["c" /* setUpdating */])(false));
    }
  }

}];
/* harmony default export */ var sagas = (Object(external_lodash_["flatten"])([Object(redux["d" /* createSagas */])(userSagas)]));
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./src/redux/actions.ts

const setReadyState = Object(redux["a" /* createAction */])('APP_STATE_SUCCESS');
const resetAppState = Object(redux["a" /* createAction */])('APP_STATE_RESET');
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// CONCATENATED MODULE: ./src/redux/auth/sagas.ts









const authSagas = [{
  on: auth_actions["a" /* login */],

  *worker(data) {
    try {
      const payload = data.payload;
      const resp = (yield services["a" /* authService */].login(payload)).data; // store token, update store and redirect to dashboard page

      yield services["a" /* authService */].setToken(resp.token);
      const userResp = (yield services["k" /* userService */].me()).data;

      if (!userResp.roles.includes('admin')) {
        external_antd_["message"].error('You don\'t have permission to access this page');
        return yield Object(auth_actions["d" /* logout */])();
      }

      yield Object(effects_["put"])(Object(actions["d" /* updateCurrentUser */])(userResp));
      yield Object(effects_["put"])(Object(auth_actions["c" /* loginSuccess */])());
      router_default.a.push('/dashboard');
    } catch (e) {
      const error = yield Promise.resolve(e);
      yield Object(effects_["put"])(Object(auth_actions["b" /* loginFail */])(error));
    }
  }

}, {
  on: auth_actions["d" /* logout */],

  *worker() {
    try {
      yield services["a" /* authService */].removeToken();
      yield Object(effects_["put"])(Object(auth_actions["e" /* logoutSuccess */])());
      yield Object(effects_["put"])(resetAppState()); // TODO - should use a better way?

      router_default.a.push('/auth/login');
    } catch (e) {// message.error('Something went wrong!');
    }
  }

}];
/* harmony default export */ var auth_sagas = (Object(external_lodash_["flatten"])(Object(redux["d" /* createSagas */])(authSagas)));
// CONCATENATED MODULE: ./src/redux/rootSaga.ts




function* rootSaga() {
  yield Object(effects_["all"])([...auth_sagas, ...sagas].map(effects_["spawn"]));
}

/* harmony default export */ var redux_rootSaga = (rootSaga);
// CONCATENATED MODULE: ./src/lib/storeHolder.ts
let storeHolder_store = null;
/* harmony default export */ var storeHolder = ({
  getStore: () => storeHolder_store,
  setStore: s => {
    storeHolder_store = s;
  }
});
// CONCATENATED MODULE: ./src/redux/store.ts






const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

function configureStore(initialState) {
  const sagaMiddleware = external_redux_saga_default()();
  const store = Object(external_redux_["createStore"])(rootReducer, initialState, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(redux_rootSaga);
  storeHolder.setStore(store);
  return store;
}

/* harmony default export */ var redux_store = (configureStore);
// CONCATENATED MODULE: ./src/redux/withReduxSaga.ts



/* harmony default export */ var withReduxSaga = (function (BaseComponent) {
  return external_next_redux_wrapper_default()(redux_store)(external_next_redux_saga_default()(BaseComponent));
});
;
// EXTERNAL MODULE: external "enquire-js"
var external_enquire_js_ = __webpack_require__("kXF5");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "react-perfect-scrollbar"
var external_react_perfect_scrollbar_ = __webpack_require__("RfFk");
var external_react_perfect_scrollbar_default = /*#__PURE__*/__webpack_require__.n(external_react_perfect_scrollbar_);

// EXTERNAL MODULE: ./src/components/common/base/scroll-bar.less
var scroll_bar = __webpack_require__("jdft");

// CONCATENATED MODULE: ./src/components/common/base/scroll-bar.tsx


/* harmony default export */ var base_scroll_bar = (external_react_perfect_scrollbar_default.a);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./src/components/common/layout/menu.tsx
var _jsxFileName = "/var/www/admin.dtest.live/src/components/common/layout/menu.tsx";

var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { menu_ownKeys(Object(source), true).forEach(function (key) { menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class menu_SiderMenu extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    menu_defineProperty(this, "state", {
      selectedKeys: ['dashboard'],
      openKeys: []
    });

    menu_defineProperty(this, "onOpenChange", openKeys => {
      const {
        menus
      } = this.props;
      const rootSubmenuKeys = menus.filter(_ => !_.menuParentId).map(_ => _.id);
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      let newOpenKeys = openKeys;

      if (rootSubmenuKeys.indexOf(latestOpenKey) !== -1) {
        newOpenKeys = latestOpenKey ? [latestOpenKey] : [];
      }

      this.setState({
        openKeys: newOpenKeys
      });
    });

    menu_defineProperty(this, "generateMenus", data => {
      return data.map(item => {
        if (item.children) {
          return __jsx(external_antd_["Menu"].SubMenu, {
            key: item.id,
            title: __jsx(external_react_["Fragment"], {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 15
              }
            }, item.icon, __jsx("span", {
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }
            }, item.name)),
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 11
            }
          }, this.generateMenus(item.children));
        }

        return __jsx(external_antd_["Menu"].Item, {
          key: item.id,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 9
          }
        }, item.icon, __jsx(link_default.a, {
          href: item.route,
          as: item.as || item.route,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }
        }, __jsx("a", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }
        }, item.name)));
      });
    });
  }

  componentDidMount() {
    // Router.events.on('routeChangeStart', this.routerChange.bind(this));
    const openKeys = this.getOpenKeys(this.props.menus);
    this.setState({
      openKeys
    });
  }

  flatten(menus, flattenMenus = []) {
    menus.forEach(m => {
      if (m.children) {
        this.flatten(m.children, flattenMenus);
      }

      const tmp = menu_objectSpread({}, m);

      delete tmp.children;
      flattenMenus.push(tmp);
    });
    return flattenMenus;
  }

  getOpenKeys(menus) {
    const pathname = false ? undefined : '';
    const withoutQuery = pathname.split('?')[0];
    let found = false;
    let results = []; // TODO - optimize me if needed or more level

    menus.forEach(menu => {
      if (found) return;
      const menuRoute = menu.route ? menu.route.split('?')[0] : '';

      if (menu.route === pathname || menuRoute === withoutQuery) {
        found = true;
        results = [menu.id];
        return;
      }

      if (menu.children) {
        menu.children.forEach(cmenu => {
          if (found) return;
          const menuRoute = cmenu.route ? cmenu.route.split('?')[0] : '';

          if (cmenu.route === pathname || menuRoute === withoutQuery) {
            found = true;
            results = [menu.id];
            return;
          }
        });
      }
    });
    return results;
  }

  render() {
    const {
      theme,
      menus,
      collapsed
    } = this.props;
    const menuProps = collapsed ? {} : {
      openKeys: this.state.openKeys
    };
    return __jsx(external_antd_["Menu"], _extends({
      mode: "inline",
      theme: theme // selectedKeys={this.state.selectedKeys}
      ,
      openKeys: this.state.openKeys,
      onOpenChange: this.onOpenChange.bind(this) // onClick={
      //   isMobile
      //     ? () => {
      //         onCollapseChange(true);
      //       }
      //     : undefined
      // }

    }, menuProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 7
      }
    }), this.generateMenus(menus));
  }

}
// EXTERNAL MODULE: ./src/components/common/layout/sider.less
var sider = __webpack_require__("vgFR");

// CONCATENATED MODULE: ./src/components/common/layout/sider.tsx
var sider_jsxFileName = "/var/www/admin.dtest.live/src/components/common/layout/sider.tsx";
var sider_jsx = external_react_default.a.createElement;







class sider_Sider extends external_react_["PureComponent"] {
  render() {
    const {
      collapsed,
      theme,
      isMobile,
      logo,
      siteName,
      onThemeChange,
      menus
    } = this.props;
    return sider_jsx(external_antd_["Layout"].Sider, {
      width: 256 // theme={theme}
      ,
      breakpoint: "lg",
      trigger: null,
      collapsible: true,
      collapsed: collapsed // onBreakpoint={!isMobile && onCollapseChange}
      ,
      className: "slider",
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, sider_jsx("div", {
      className: "brand",
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, sider_jsx("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, sider_jsx("img", {
      alt: "logo",
      src: logo,
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }), !collapsed && sider_jsx("h1", {
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 35,
        columnNumber: 30
      }
    }, siteName))), sider_jsx("div", {
      className: "menuContainer",
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, sider_jsx(base_scroll_bar, {
      options: {
        // Disabled horizontal scrolling, https://github.com/utatti/perfect-scrollbar#options
        suppressScrollX: true
      },
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, sider_jsx(menu_SiderMenu, {
      menus: menus,
      theme: theme,
      isMobile: isMobile // onCollapseChange={onCollapseChange}
      ,
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }))), !collapsed && sider_jsx("div", {
      className: "switchTheme",
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, sider_jsx("span", {
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, sider_jsx(icons_["BulbOutlined"], {
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }), sider_jsx("span", {
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 58,
        columnNumber: 15
      }
    }, "Switch Theme")), sider_jsx(external_antd_["Switch"], {
      onChange: onThemeChange && onThemeChange.bind(this, theme === "dark" ? "light" : "dark"),
      defaultChecked: theme === "dark",
      checkedChildren: "Dark",
      unCheckedChildren: "Light",
      __self: this,
      __source: {
        fileName: sider_jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }
    })));
  }

}

/* harmony default export */ var layout_sider = (sider_Sider);
// EXTERNAL MODULE: ./src/components/common/layout/header.less
var header = __webpack_require__("jUZS");

// CONCATENATED MODULE: ./src/components/common/layout/header.tsx
var header_jsxFileName = "/var/www/admin.dtest.live/src/components/common/layout/header.tsx";

var header_jsx = external_react_default.a.createElement;







class header_Header extends external_react_["PureComponent"] {
  handleClickMenu() {}

  render() {
    const {
      collapsed,
      onCollapseChange,
      currentUser
    } = this.props;
    const rightContent = [header_jsx(external_antd_["Menu"], {
      key: "user",
      mode: "horizontal",
      onClick: this.handleClickMenu,
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, header_jsx(external_antd_["Menu"].SubMenu, {
      title: header_jsx(external_react_["Fragment"], {
        __self: this,
        __source: {
          fileName: header_jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }, header_jsx("span", {
        style: {
          color: '#999',
          marginRight: 4
        },
        __self: this,
        __source: {
          fileName: header_jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }
      }, header_jsx("span", {
        __self: this,
        __source: {
          fileName: header_jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, "Hi,")), header_jsx("span", {
        __self: this,
        __source: {
          fileName: header_jsxFileName,
          lineNumber: 29,
          columnNumber: 15
        }
      }, currentUser.firstName + ' ' + currentUser.lastName), header_jsx(external_antd_["Avatar"], {
        style: {
          marginLeft: 8
        },
        src: currentUser.avatar,
        __self: this,
        __source: {
          fileName: header_jsxFileName,
          lineNumber: 30,
          columnNumber: 15
        }
      })),
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, header_jsx(external_antd_["Menu"].Item, {
      key: "settings",
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, header_jsx(link_default.a, {
      href: "/account/settings",
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, header_jsx("span", {
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }, "Update profile"))), header_jsx(external_antd_["Menu"].Item, {
      key: "SignOut",
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, header_jsx(link_default.a, {
      href: "/auth/logout",
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, header_jsx("a", {
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, "Log out")))))];
    return header_jsx(external_antd_["Layout"].Header, {
      className: "header",
      id: "layoutHeader",
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, header_jsx("div", {
      className: "button",
      onClick: onCollapseChange && onCollapseChange.bind(this, !collapsed),
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, collapsed ? header_jsx(icons_["MenuUnfoldOutlined"], {
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 54,
        columnNumber: 24
      }
    }) : header_jsx(icons_["MenuFoldOutlined"], {
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 54,
        columnNumber: 49
      }
    })), header_jsx("div", {
      className: "rightContainer",
      __self: this,
      __source: {
        fileName: header_jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, rightContent));
  }

}

const mapState = state => ({
  currentUser: state.user.current
});

/* harmony default export */ var layout_header = (Object(external_react_redux_["connect"])(mapState)(header_Header));
// EXTERNAL MODULE: ./src/components/common/base/loader.tsx
var loader = __webpack_require__("TW7V");

// EXTERNAL MODULE: ./src/layouts/primary-layout.less
var primary_layout = __webpack_require__("kh1q");

// CONCATENATED MODULE: ./src/layouts/primary-layout.tsx
var primary_layout_jsxFileName = "/var/www/admin.dtest.live/src/layouts/primary-layout.tsx";
var primary_layout_jsx = external_react_["createElement"];

function primary_layout_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function primary_layout_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { primary_layout_ownKeys(Object(source), true).forEach(function (key) { primary_layout_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { primary_layout_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function primary_layout_extends() { primary_layout_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return primary_layout_extends.apply(this, arguments); }

function primary_layout_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












async function getInitialProps() {
  return {
    props: {}
  };
}

class primary_layout_PrimaryLayout extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    primary_layout_defineProperty(this, "state", {
      isMobile: false,
      // security request for primary layout
      checkingUser: false,
      routerChange: false
    });

    primary_layout_defineProperty(this, "enquireHandler", void 0);

    primary_layout_defineProperty(this, "onCollapseChange", collapsed => {
      this.props.updateUIValue({
        collapsed
      });
    });

    primary_layout_defineProperty(this, "onThemeChange", theme => this.props.updateUIValue({
      theme
    }));
  }

  componentDidMount() {
    this.props.loadUIValue();
    this.enquireHandler = Object(external_enquire_js_["enquireScreen"])(mobile => {
      const {
        isMobile
      } = this.state;

      if (isMobile !== mobile) {
        this.setState({
          isMobile: mobile
        });
      }
    });
     false && false;
  }

  handleStateChange() {
    router_["Router"].events.on('routeChangeStart', async () => await this.setState({
      routerChange: true
    }));
    router_["Router"].events.on('routeChangeComplete', async () => await this.setState({
      routerChange: false
    }));
  }

  componentWillUnmount() {
    Object(external_enquire_js_["unenquireScreen"])(this.enquireHandler);
  }

  render() {
    const {
      children,
      collapsed,
      fixedHeader,
      logo,
      siteName,
      theme
    } = this.props;
    const {
      isMobile,
      routerChange
    } = this.state;
    const headerProps = {
      collapsed,
      theme,
      onCollapseChange: this.onCollapseChange
    };
    const sliderMenus = [{
      id: 'dashboard',
      name: 'Dashboard',
      icon: primary_layout_jsx(icons_["PieChartOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'stats',
        name: 'Statistic',
        route: '/dashboard'
      }]
    }, {
      id: 'posts',
      name: 'Static Pages',
      icon: primary_layout_jsx(icons_["ContainerOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 122,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'post-page',
        name: 'Page',
        route: '/posts?type=page'
      }, {
        id: 'page-create',
        name: 'Create page',
        route: '/posts/create?type=page'
      }]
    }, {
      id: 'menu',
      name: 'FE Menu',
      icon: primary_layout_jsx(icons_["MenuOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 139,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'menu-listing',
        name: 'Menus',
        route: '/menu'
      }, {
        name: 'Create',
        id: 'create-menu',
        route: '/menu/create'
      }]
    }, {
      id: 'banner',
      name: 'Banners',
      icon: primary_layout_jsx(icons_["FileImageOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 156,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'banner-listing',
        name: 'Banners',
        route: '/banner'
      }, {
        name: 'Upload',
        id: 'upload-banner',
        route: '/banner/upload'
      }]
    }, {
      id: 'email-template',
      name: 'Email templates',
      icon: primary_layout_jsx(icons_["MailOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 173,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'email-listing',
        name: 'List',
        route: '/email-templates'
      }]
    }, {
      id: 'studio',
      name: 'Studios',
      icon: primary_layout_jsx(icons_["WalletOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 185,
          columnNumber: 15
        }
      }),
      children: [{
        name: 'List Studios',
        id: 'studios-listing',
        route: '/studios'
      }, {
        name: 'Pending Studios',
        id: 'pending-studios',
        route: '/studios?status=pending'
      }, {
        name: 'Create',
        id: 'studios-create',
        route: '/studios/create'
      }]
    }, {
      id: 'accounts',
      name: 'Users',
      icon: primary_layout_jsx(icons_["UserOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 207,
          columnNumber: 15
        }
      }),
      children: [{
        name: 'Users',
        id: 'users',
        route: '/users'
      }, {
        name: 'Create',
        id: 'users-create',
        route: '/users/create'
      }]
    }, {
      id: 'performer',
      name: 'Performers',
      icon: primary_layout_jsx(icons_["WomanOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 224,
          columnNumber: 15
        }
      }),
      children: [{
        name: 'Categories',
        id: 'performer-categories',
        route: '/performer/category'
      }, {
        name: 'All Performers',
        id: 'performers',
        route: '/performer'
      }, {
        name: 'Online Performers',
        id: 'online-performers',
        route: '/performer/online'
      }, {
        name: 'Pending Performers',
        id: 'pending-performers',
        route: '/performer?status=pending'
      }, {
        name: 'Create New',
        id: 'create-performers',
        route: '/performer/create'
      }]
    }, {
      id: 'performers-photos',
      name: 'Photos',
      icon: primary_layout_jsx(icons_["CameraOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 256,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'photo-listing',
        name: 'Photos',
        route: '/photos'
      }, {
        name: 'Upload',
        id: 'upload-photo',
        route: '/photos/upload'
      }, {
        name: 'Bulk Upload',
        id: 'bulk-upload-photo',
        route: '/photos/bulk-upload'
      }, {
        id: 'gallery-listing',
        name: 'Albums',
        route: '/gallery'
      }, {
        name: 'Create album',
        id: 'create-galleries',
        route: '/gallery/create'
      }]
    }, {
      id: 'performers-products',
      name: 'Products',
      icon: primary_layout_jsx(icons_["SkinOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 288,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'product-listing',
        name: 'Products',
        route: '/product'
      }, {
        name: 'Create',
        id: 'create-product',
        route: '/product/create'
      }]
    }, {
      id: 'videos',
      name: 'Videos',
      icon: primary_layout_jsx(icons_["VideoCameraOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 305,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'video-listing',
        name: 'Videos',
        route: '/video'
      }, {
        id: 'video-upload',
        name: 'Upload',
        route: '/video/upload'
      }]
    }, {
      id: 'tokens',
      name: 'Token Packages',
      icon: primary_layout_jsx(icons_["BankOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 322,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'token-listing',
        name: 'Token Packages',
        route: '/token-package'
      }, {
        id: 'create-token',
        name: 'Create',
        route: '/token-package/create'
      }]
    }, {
      id: 'earning',
      name: 'Earnings',
      icon: primary_layout_jsx(icons_["DollarOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 339,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'earning-listing-performer',
        name: 'Performer Earnings',
        route: '/earning'
      }, {
        id: 'earning-listing-studio',
        name: 'Studio Earnings',
        route: '/earning/studios'
      }]
    }, {
      id: 'payments',
      name: 'Payments',
      icon: primary_layout_jsx(icons_["DollarOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 356,
          columnNumber: 15
        }
      }),
      route: '/payment'
    }, {
      id: 'payment-information',
      name: 'Payment Informations',
      icon: primary_layout_jsx(icons_["BankFilled"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 362,
          columnNumber: 15
        }
      }),
      route: '/payment-information'
    }, {
      id: 'order',
      name: 'Orders',
      icon: primary_layout_jsx(icons_["OrderedListOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 368,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'order-listing',
        name: 'Orders Managment',
        route: '/order'
      }]
    }, {
      id: 'payout',
      name: 'Payout requests',
      icon: primary_layout_jsx(icons_["MenuUnfoldOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 380,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'payout-listing-performer',
        name: 'Performer Requests',
        route: '/payout-request'
      }, {
        id: 'payout-listing-studio',
        name: 'Studio Requests',
        route: '/payout-request/studios'
      }]
    }, // {
    //   id: 'refund',
    //   name: 'Refund requests',
    //   icon: <ExclamationOutlined />,
    //   children: [
    //     {
    //       id: 'refund-listing',
    //       name: 'Refund Request Managment',
    //       route: '/refund-request'
    //     }
    //   ]
    // },
    {
      id: 'settings',
      name: 'Settings',
      icon: primary_layout_jsx(icons_["PieChartOutlined"], {
        __self: this,
        __source: {
          fileName: primary_layout_jsxFileName,
          lineNumber: 409,
          columnNumber: 15
        }
      }),
      children: [{
        id: 'system-settings',
        route: '/settings',
        as: '/settings',
        name: 'System settings'
      }, {
        name: 'Account settings',
        id: 'account-settings',
        route: '/account/settings'
      }]
    }];
    const siderProps = {
      collapsed,
      isMobile,
      logo,
      siteName,
      theme,
      menus: sliderMenus,
      onCollapseChange: this.onCollapseChange,
      onThemeChange: this.onThemeChange
    };
    return primary_layout_jsx(external_react_["Fragment"], {
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 437,
        columnNumber: 7
      }
    }, primary_layout_jsx(external_antd_["Layout"], {
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 438,
        columnNumber: 9
      }
    }, isMobile ? primary_layout_jsx(external_antd_["Drawer"], {
      maskClosable: true,
      closable: false,
      onClose: this.onCollapseChange.bind(this, !collapsed),
      visible: !collapsed,
      placement: "left",
      width: 200,
      style: {
        padding: 0,
        height: '100vh'
      },
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 440,
        columnNumber: 13
      }
    }, primary_layout_jsx(layout_sider, primary_layout_extends({}, siderProps, {
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 452,
        columnNumber: 15
      }
    }))) : primary_layout_jsx(layout_sider, primary_layout_extends({}, siderProps, {
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 455,
        columnNumber: 13
      }
    })), primary_layout_jsx("div", {
      className: "container",
      style: {
        paddingTop: fixedHeader ? 72 : 0
      },
      id: "primaryLayout",
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 457,
        columnNumber: 11
      }
    }, primary_layout_jsx(layout_header, primary_layout_extends({}, headerProps, {
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 462,
        columnNumber: 13
      }
    })), primary_layout_jsx(external_antd_["Layout"].Content, {
      className: "content",
      style: {
        position: 'relative'
      },
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 463,
        columnNumber: 13
      }
    }, routerChange && primary_layout_jsx(loader["a" /* default */], {
      spinning: true,
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 467,
        columnNumber: 32
      }
    }), children), primary_layout_jsx(external_antd_["BackTop"], {
      className: "backTop",
      target: () => document.querySelector('#primaryLayout'),
      __self: this,
      __source: {
        fileName: primary_layout_jsxFileName,
        lineNumber: 471,
        columnNumber: 13
      }
    }))));
  }

}

primary_layout_defineProperty(primary_layout_PrimaryLayout, "authenticate", true);

const mapStateToProps = state => primary_layout_objectSpread(primary_layout_objectSpread({}, state.ui), {}, {
  auth: state.auth
});

const mapDispatchToProps = {
  updateUIValue: updateUIValue,
  loadUIValue: loadUIValue
};
/* harmony default export */ var layouts_primary_layout = (Object(external_react_redux_["connect"])(mapStateToProps, mapDispatchToProps)(primary_layout_PrimaryLayout));
// CONCATENATED MODULE: ./src/layouts/public-layout.tsx
/* harmony default export */ var public_layout = (({
  children
}) => {
  return children;
});
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./src/layouts/base-layout.tsx
var base_layout_jsxFileName = "/var/www/admin.dtest.live/src/layouts/base-layout.tsx";
var base_layout_jsx = external_react_["createElement"];




const LayoutMap = {
  primary: layouts_primary_layout,
  public: public_layout
};
class base_layout_BaseLayout extends external_react_["PureComponent"] {
  render() {
    const {
      children,
      layout,
      appConfig
    } = this.props;
    const Container = layout && LayoutMap[layout] ? LayoutMap[layout] : LayoutMap.primary;
    return base_layout_jsx(external_react_["Fragment"], {
      __self: this,
      __source: {
        fileName: base_layout_jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, base_layout_jsx(head_default.a, {
      __self: this,
      __source: {
        fileName: base_layout_jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }
    }, base_layout_jsx("link", {
      href: "/css/antd.min.css",
      rel: "stylesheet",
      key: "antd",
      __self: this,
      __source: {
        fileName: base_layout_jsxFileName,
        lineNumber: 25,
        columnNumber: 11
      }
    })), base_layout_jsx(Container, {
      __self: this,
      __source: {
        fileName: base_layout_jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, children));
  }

}
// EXTERNAL MODULE: ./src/services/setting.service.ts
var setting_service = __webpack_require__("zM0U");

// EXTERNAL MODULE: ./style/index.less
var style = __webpack_require__("+E3a");

// CONCATENATED MODULE: ./pages/_app.tsx
var _app_jsxFileName = "/var/www/admin.dtest.live/pages/_app.tsx";
var _app_jsx = external_react_default.a.createElement;

function _app_extends() { _app_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _app_extends.apply(this, arguments); }

















function redirectLogin(ctx) {
  if (false) {} // fix for production build


  ctx.res.clearCookie && ctx.res.clearCookie('token');
  ctx.res.writeHead && ctx.res.writeHead(302, {
    Location: '/auth/login'
  });
  ctx.res.end && ctx.res.end();
}

async function updateSettingsStore(ctx, settings) {
  try {
    const {
      store
    } = ctx;
    store.dispatch(updateUIValue({
      logo: settings.logoUrl,
      siteName: settings.siteName
    }));
    store.dispatch(updateSettings(settings)); // TODO - update others like meta data
  } catch (e) {
    // TODO - implement me
    console.log(e);
  }
}

async function auth(ctx) {
  try {
    const {
      store
    } = ctx;
    const state = store.getState();

    if (state.auth && state.auth.loggedIn) {
      return;
    } // TODO - move to a service


    const {
      token
    } = external_next_cookies_default()(ctx);

    if (!token) {
      // log out and redirect to login page
      // TODO - reset app state?
      return redirectLogin(ctx);
    }

    services["a" /* authService */].setAuthHeaderToken(token);
    const user = await services["k" /* userService */].me({
      Authorization: token
    }); // TODO - check permission

    if (user.data && !user.data.roles.includes('admin')) {
      return redirectLogin(ctx);
    }

    store.dispatch(Object(auth_actions["c" /* loginSuccess */])());
    store.dispatch(Object(actions["d" /* updateCurrentUser */])(user.data));
  } catch (e) {
    return redirectLogin(ctx);
  }
}

class _app_Application extends app_default.a {
  // TODO - consider if we need to use get static props in children component instead?
  // or check in render?
  static async getInitialProps({
    Component,
    ctx
  }) {
    // won't check auth for un-authenticated page such as login, register
    // use static field in the component
    if (Component.authenticate !== false) {
      await auth(ctx);
    }

    let settings = {};

    if (true) {
      try {
        const resp = await setting_service["a" /* settingService */].public(); // TODO encrypt, decypt header script, footer script or other info if needed

        settings = resp.data;
        if (settings) await updateSettingsStore(ctx, settings);
      } catch (e) {
        console.log(await e);
      }
    }

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({
        ctx
      });
    }

    return {
      settings,
      pageProps,
      layout: Component.layout
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store,
      settings
    } = this.props;
    const layout = Component.layout;
    return _app_jsx(external_react_redux_["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 128,
        columnNumber: 7
      }
    }, _app_jsx(head_default.a, {
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }, _app_jsx("link", {
      rel: "icon",
      href: settings && settings.favicon,
      sizes: "64x64",
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 130,
        columnNumber: 11
      }
    })), _app_jsx(base_layout_BaseLayout, {
      layout: layout,
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    }, _app_jsx(Component, _app_extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _app_jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (withReduxSaga(_app_Application));

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fY9I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("Lmjj");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_auth_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("kXO4");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("NsEo");
var _jsxFileName = "/var/www/admin.dtest.live/pages/auth/login.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const FormItem = antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item;
async function getStaticProps() {
  return {
    props: {}
  };
}

class Login extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleOk", data => {
      this.props.login(data);
    });
  }

  render() {
    const {
      siteName,
      logo
    } = this.props.ui;
    const {
      loginAuth = {
        requesting: false,
        error: null,
        success: false
      }
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, "Login")), __jsx("div", {
      className: "form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, logo && __jsx("img", {
      alt: "logo",
      src: logo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 22
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }
    }, siteName)), loginAuth.error && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      message: "Error",
      description: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__[/* getResponseError */ "b"])(loginAuth.error),
      type: "error",
      showIcon: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    }), loginAuth.success ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Alert"], {
      message: "Login success",
      type: "success",
      description: "Redirecting...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onFinish: this.handleOk,
      initialValues: {
        email: '',
        password: ''
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx(FormItem, {
      hasFeedback: true // label="Username"
      ,
      name: "email",
      rules: [{
        required: true,
        message: 'Please input your email!'
      }, {
        type: 'email',
        message: 'The input is not valid E-mail!'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "youremail@example.com",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    })), __jsx(FormItem, {
      hasFeedback: true // label="Password"
      ,
      name: "password",
      rules: [{
        required: true,
        message: 'Please input your password!'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      type: "password",
      placeholder: "Password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    })), __jsx(FormItem, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      disabled: loginAuth.requesting,
      loading: loginAuth.requesting,
      htmlType: "submit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, "Sign in"))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
      href: "/auth/forgot",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 13
      }
    }, __jsx("a", {
      style: {
        float: 'right'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, "Forgot?")))), __jsx("div", {
      className: "footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, siteName, " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["CopyrightCircleOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 22
      }
    }), ` Copy right ${new Date().getFullYear()}`));
  }

}

_defineProperty(Login, "layout", 'public');

_defineProperty(Login, "authenticate", false);

const mapStates = state => ({
  loginAuth: state.auth.login,
  ui: state.ui
});

const mapDispatch = {
  login: _redux_auth_actions__WEBPACK_IMPORTED_MODULE_6__[/* login */ "a"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStates, mapDispatch)(Login));

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

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

/***/ "jUZS":
/***/ (function(module, exports) {



/***/ }),

/***/ "jdft":
/***/ (function(module, exports) {



/***/ }),

/***/ "kXF5":
/***/ (function(module, exports) {

module.exports = require("enquire-js");

/***/ }),

/***/ "kXO4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return logoutSuccess; });
/* unused harmony export logoutFail */
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vo7w");

const {
  login,
  loginSuccess,
  loginFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('login', 'LOGIN');
const {
  logout,
  logoutSuccess,
  logoutFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('logout', 'LogOut');

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "kh1q":
/***/ (function(module, exports) {



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "nXVM":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "pEZS":
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

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

/***/ "vgFR":
/***/ (function(module, exports) {



/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vo7w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createSagas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createAsyncAction; });
/* unused harmony export createAsyncActions */
/* unused harmony export createSelectorsA */
/* unused harmony export handleActions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createReducers; });
/* unused harmony export createSelectors */
/* unused harmony export createJSSelectors */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("MWqi");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("RmXt");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wfgH");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_3__);





function createAction(type) {
  const action = Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["createAction"])(type);

  action.is = aType => action.toString() === aType;

  return action;
}
/* tslint:disable-next-line */


function createAsyncAction(action, type) {
  return {
    [action]: createAction(type),
    [`${action}Success`]: createAction(`${type}_SUCCESS`),
    [`${action}Fail`]: createAction(`${type}_FAIL`)
  };
}

function createAsyncActions(type) {
  return [createAction(type), createAction(`${type}_SUCCESS`), createAction(`${type}_FAIL`)];
}
/* tslint:disable */


function handleActions(actions, initialState) {
  return Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(actions, (reducer, handler, action) => {
    reducer[action] = (state, act) => handler(state.set("action", action), act);

    return reducer;
  }, {}), initialState);
}

function createReducers(stateContext, reducers, initialState, preventResetting = false) {
  return {
    [stateContext]: Object(redux_actions__WEBPACK_IMPORTED_MODULE_3__["handleActions"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(reducers), (reducer, action) => {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(action.on)) {
        action.on.forEach(act => {
          reducer[act] = action.reducer;
        });
      } else reducer[action.on] = action.reducer;

      return reducer;
    }, preventResetting ? {} : {
      ["APP_STATE_RESET"]: () => {
        return initialState;
      }
    }), initialState)
  };
}

function createSagas(sagas) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["flatten"])(sagas).map(saga => {
    const {
      on,
      effect = redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["takeLatest"],
      worker
    } = saga;
    return function* () {
      yield effect(on, function* (action) {
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__["delay"])(0);
        yield worker(action);
      });
    };
  });
}

function createSelectorsA(context, keys = []) {
  const stateSelector = state => state[context];

  if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isEmpty"])(keys)) return stateSelector;
  return keys.map(key => state => Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isArray"])(key) ? stateSelector(state).getIn(key) : stateSelector(state).get(key));
}

function createSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state).get(key);

    return selectors;
  }, {});
}

function createJSSelectors(context, keys) {
  const stateSelector = state => state[context];

  return Object(lodash__WEBPACK_IMPORTED_MODULE_0__["reduce"])(keys, (selectors, key) => {
    selectors[`${key}Selector`] = state => stateSelector(state)[key];

    return selectors;
  }, {});
}



/***/ }),

/***/ "wfgH":
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "x7is":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return updateCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return updateCurrentUserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return updateUserSuccess; });
/* unused harmony export updateUserFail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setUpdating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setUpdateStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setReducer; });
/* harmony import */ var _lib_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vo7w");

const updateCurrentUser = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updateCurrentUser');
const updateCurrentUserAvatar = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updateCurrentUserAvatar');
const {
  updateUser,
  updateUserSuccess,
  updateUserFail
} = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAsyncAction */ "b"])('updateUser', 'UPDATE_USER');
const setUpdating = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updatingUser');
const setUpdateStatus = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('updateStatus');
const setReducer = Object(_lib_redux__WEBPACK_IMPORTED_MODULE_0__[/* createAction */ "a"])('setUserReducer');

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