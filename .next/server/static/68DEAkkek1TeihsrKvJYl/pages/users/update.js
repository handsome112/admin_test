module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "05yZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePaswordForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/user/update-password-form.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  }
};
const UpdatePaswordForm = ({
  onFinish,
  updating = false
}) => {
  return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
    name: "nest-messages",
    onFinish: onFinish.bind(undefined)
  }, layout, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    name: "password",
    label: "Password",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }, {
      min: 6,
      max: 14,
      message: 'Passoword should be 6-14 characters'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
    placeholder: "Enter password. At least 6 characters",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
    wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
      offset: 4
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: updating,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Update")));
};

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("WZUY");


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

/***/ "Iz64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvatarUpload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/user/avatar-upload.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
} // function beforeUpload(file) {
//   const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
//   if (!isJpgOrPng) {
//     message.error('You can only upload JPG/PNG file!');
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error('Image must smaller than 2MB!');
//   }
//   return isJpgOrPng && isLt2M;
// }


class AvatarUpload extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
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

  beforeUpload(file) {
    const ext = file.name.split('.').pop().toLowerCase();
    const isImageAccept = ".jpeg, .jpg, .png".split(',').map(item => item.trim()).indexOf(`.${ext}`);

    if (isImageAccept === -1) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`You can only upload ${".jpeg, .jpg, .png"} file!`);
    }

    const isLt2M = file.size / 1024 / 1024 < ("2" || false);

    if (!isLt2M) {
      antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`Image must smaller than ${"2" || false}MB!`);
    }

    if (this.props.uploadNow) {
      return isImageAccept > -1 && isLt2M;
    }

    if (isImageAccept > -1 && isLt2M) {
      this.props.beforeUpload && this.props.beforeUpload(file);
      getBase64(file, imageUrl => {
        this.setState({
          imageUrl
        });
      });
    }

    return false;
  }

  render() {
    const uploadButton = __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 7
      }
    }, this.state.loading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 31
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 53
      }
    }), __jsx("div", {
      className: "ant-upload-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
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
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], {
      name: "avatar",
      listType: "picture-card",
      className: "avatar-uploader",
      showUploadList: false,
      action: uploadUrl,
      beforeUpload: this.beforeUpload.bind(this),
      onChange: this.handleChange,
      headers: headers,
      accept: ".jpeg, .jpg, .png" || false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }
    }, imageUrl ? __jsx("img", {
      src: imageUrl,
      alt: "avatar",
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }) : uploadButton);
  }

}

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

/***/ "WZUY":
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

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/common/layout/page.tsx
var page = __webpack_require__("Bfpx");

// EXTERNAL MODULE: ./src/components/user/account-form.tsx
var account_form = __webpack_require__("v2Sy");

// EXTERNAL MODULE: ./src/services/index.ts + 5 modules
var services = __webpack_require__("CLrh");

// EXTERNAL MODULE: ./src/components/user/update-password-form.tsx
var update_password_form = __webpack_require__("05yZ");

// EXTERNAL MODULE: ./src/components/common/base/loader.tsx
var loader = __webpack_require__("TW7V");

// EXTERNAL MODULE: ./src/services/utils.service.ts
var utils_service = __webpack_require__("diQs");

// CONCATENATED MODULE: ./src/components/user/UpdateBalanceForm.tsx
var _jsxFileName = "/var/www/admin.dtest.live/src/components/user/UpdateBalanceForm.tsx";
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  }
};
const UpdateBalanceForm = ({
  onFinish,
  balance,
  updating = false
}) => {
  return __jsx(external_antd_["Form"], _extends({
    name: "nest-messages",
    onFinish: onFinish.bind(undefined)
  }, layout, {
    initialValues: {
      balance
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), __jsx(external_antd_["Form"].Item, {
    name: "balance",
    label: "Balance",
    rules: [{
      required: true,
      message: 'Enter balance you want to update!'
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(external_antd_["InputNumber"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), __jsx(external_antd_["Form"].Item, {
    wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
      offset: 4
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: updating,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Update")));
};
// CONCATENATED MODULE: ./pages/users/update.tsx
var update_jsxFileName = "/var/www/admin.dtest.live/pages/users/update.tsx";

var update_jsx = external_react_default.a.createElement;

function update_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function update_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { update_ownKeys(Object(source), true).forEach(function (key) { update_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { update_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function update_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class update_UserUpdate extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    update_defineProperty(this, "state", {
      pwUpdating: false,
      updating: false,
      fetching: false,
      user: {}
    });
  }

  static async getInitialProps({
    ctx
  }) {
    const resp = await utils_service["a" /* utilsService */].countriesList();
    return update_objectSpread({
      countries: resp.data
    }, ctx.query);
  }

  async componentDidMount() {
    try {
      this.setState({
        fetching: true
      });
      const resp = await services["k" /* userService */].findById(this.props.id);
      this.setState({
        user: resp.data
      });
    } catch (e) {
      external_antd_["message"].error('Error while fecting user!');
    } finally {
      this.setState({
        fetching: false
      });
    }
  }

  async submit(data) {
    try {
      this.setState({
        updating: true
      });
      const updated = await services["k" /* userService */].update(this.props.id, data);
      this.setState({
        user: updated.data
      });
      external_antd_["message"].success('Updated successfully');
    } catch (e) {
      // TODO - exact error message
      external_antd_["message"].error('An error occurred, please try again!');
    } finally {
      this.setState({
        updating: false
      });
    }
  }

  onAvatarUploaded(data) {
    // TODO - check with current user if needed?
    external_antd_["message"].success('Avatar has been updated!'); // this.props.updateCurrentUserAvatar(data.base64);
  }

  async updatePassword(data) {
    try {
      this.setState({
        pwUpdating: true
      });
      await services["a" /* authService */].updatePassword(data.password, this.props.id);
      external_antd_["message"].success('Password has been updated!');
    } catch (e) {
      external_antd_["message"].error('An error occurred, please try again!');
    } finally {
      this.setState({
        pwUpdating: false
      });
    }
  }

  render() {
    const {
      pwUpdating,
      user,
      updating,
      fetching
    } = this.state;
    const {
      countries
    } = this.props;
    const uploadHeaders = {
      authorization: services["a" /* authService */].getToken()
    };
    return update_jsx(external_react_["Fragment"], {
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 83,
        columnNumber: 7
      }
    }, update_jsx(head_default.a, {
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, update_jsx("title", {
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, "User update")), update_jsx(page["a" /* default */], {
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, fetching ? update_jsx(loader["a" /* default */], {
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }) : update_jsx(external_antd_["Tabs"], {
      defaultActiveKey: "basic",
      tabPosition: "left",
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, update_jsx(external_antd_["Tabs"].TabPane, {
      tab: update_jsx("span", {
        __self: this,
        __source: {
          fileName: update_jsxFileName,
          lineNumber: 92,
          columnNumber: 34
        }
      }, "Basic info"),
      key: "basic",
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, update_jsx(account_form["a" /* AccountForm */], {
      onFinish: this.submit.bind(this),
      user: user,
      updating: updating,
      options: {
        uploadHeaders,
        avatarUploadUrl: services["k" /* userService */].getAvatarUploadUrl(user._id),
        onAvatarUploaded: this.onAvatarUploaded.bind(this)
      },
      countries: countries,
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    })), update_jsx(external_antd_["Tabs"].TabPane, {
      tab: update_jsx("span", {
        __self: this,
        __source: {
          fileName: update_jsxFileName,
          lineNumber: 105,
          columnNumber: 34
        }
      }, "Change password"),
      key: "password",
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 105,
        columnNumber: 15
      }
    }, update_jsx(update_password_form["a" /* UpdatePaswordForm */], {
      onFinish: this.updatePassword.bind(this),
      updating: pwUpdating,
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    })), update_jsx(external_antd_["Tabs"].TabPane, {
      tab: update_jsx("span", {
        __self: this,
        __source: {
          fileName: update_jsxFileName,
          lineNumber: 112,
          columnNumber: 34
        }
      }, "Balance"),
      key: "balance",
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    }, update_jsx(UpdateBalanceForm, {
      balance: user.balance,
      onFinish: this.submit.bind(this),
      updating: updating,
      __self: this,
      __source: {
        fileName: update_jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    })))));
  }

}

/* harmony default export */ var update = __webpack_exports__["default"] = (update_UserUpdate);

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "diQs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UtilsService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utilsService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class UtilsService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  countriesList() {
    return this.get('/countries/list');
  }

  languagesList() {
    return this.get('/languages/list');
  }

  phoneCodesList() {
    return this.get('/phone-codes/list');
  }

  statistics() {
    return this.get('/statistics/admin');
  }

}
const utilsService = new UtilsService();

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

/***/ "v2Sy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_user_avatar_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Iz64");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/user/account-form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  }
};
const validateMessages = {
  required: 'This field is required!',
  types: {
    email: 'Not a validate email!',
    number: 'Not a validate number!'
  },
  number: {
    range: 'Must be between ${min} and ${max}'
  }
};
class AccountForm extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      onFinish,
      user,
      updating,
      countries
    } = this.props;
    const {
      uploadHeaders,
      avatarUploadUrl,
      onAvatarUploaded,
      beforeUpload
    } = this.props.options;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({}, layout, {
      name: "nest-messages",
      onFinish: onFinish.bind(this),
      validateMessages: validateMessages,
      initialValues: user ? _objectSpread(_objectSpread({}, user), {}, {
        dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_3___default()(user.dateOfBirth)
      }) : {
        country: 'US',
        status: 'active',
        gender: 'male',
        roles: ['user']
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "firstName",
      label: "First name",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "lastName",
      label: "Last name",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "dateOfBirth",
      label: "Date of Birth",
      rules: [{
        required: true,
        message: 'Please input date of birth!'
      }, {
        validator: (rule, value) => {
          if (!value) return Promise.resolve();
          const years = moment__WEBPACK_IMPORTED_MODULE_3___default()().diff(value, 'years');

          if (years >= 18) {
            return Promise.resolve();
          }

          return Promise.reject('Minimum of 18 years');
        }
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"], {
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "gender",
      label: "Gender",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: "male",
      value: "male",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, "Male"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: "female",
      value: "female",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, "Female"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: "transgender",
      value: "transgender",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 13
      }
    }, "Transgender"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "phone",
      label: "Phone Number",
      rules: [{
        min: 9
      }, {
        max: 14
      }, {
        pattern: /^[0-9\b\+ ]+$/,
        message: 'The phone number is not in the correct format'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "username",
      label: "Username",
      rules: [{
        required: true
      }, {
        min: 3
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Unique, lowercase and number, no space or special chars",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "email",
      label: "Email",
      rules: [{
        type: 'email',
        required: true
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 11
      }
    })), !user && __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "password",
      label: "Password",
      rules: [{
        required: true
      }, {
        min: 6
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: "User password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 15
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "rePassword",
      label: "Confirm password",
      rules: [{
        required: true
      }, {
        min: 6
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: "Confirm user password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 15
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "country",
      label: "Country",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      showSearch: true,
      filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 11
      }
    }, countries.map(country => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: country.code,
      value: country.code,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 15
      }
    }, country.name)))), __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "balance",
      label: "Balance",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "roles",
      label: "Roles",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      mode: "multiple",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 13
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: "user",
      value: "user",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 15
      }
    }, "User"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: "admin",
      value: "admin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 15
      }
    }, "Admin"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "emailVerified",
      label: "Verified Email",
      valuePropName: "checked",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 13
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "status",
      label: "Status",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: "active",
      value: "active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 13
      }
    }, "Active"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: "inactive",
      value: "inactive",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 13
      }
    }, "Inactive"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Avatar",
      help: `Image must smaller than ${"2" || false}MB! Only accept ${".jpeg, .jpg, .png"}.`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 9
      }
    }, __jsx(_components_user_avatar_upload__WEBPACK_IMPORTED_MODULE_2__[/* AvatarUpload */ "a"], {
      headers: uploadHeaders,
      uploadUrl: avatarUploadUrl,
      onUploaded: onAvatarUploaded,
      imageUrl: user ? user.avatar : '',
      uploadNow: user ? true : false,
      beforeUpload: beforeUpload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
        offset: 4
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: updating,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 11
      }
    }, "Submit")));
  }

}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });