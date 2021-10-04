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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cyZt");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7QX/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PhotoService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return photoService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class PhotoService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  uploadPhoto(file, payload, onProgress) {
    return this.upload('/admin/performer-assets/photos/upload', [{
      fieldname: 'photo',
      file
    }], {
      onProgress,
      customData: payload
    });
  }

  search(query) {
    return this.get(this.buildUrl('/admin/performer-assets/photos/search', query));
  }

  findById(id) {
    return this.get(`/admin/performer-assets/photos/${id}/view`);
  }

  update(id, payload) {
    return this.put(`/admin/performer-assets/photos/${id}`, payload);
  }

  delete(id) {
    return this.del(`/admin/performer-assets/photos/${id}`);
  }

}
const photoService = new PhotoService();

/***/ }),

/***/ "8UjJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectGalleryDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Rb4M");
var _jsxFileName = "/var/www/admin.dtest.live/src/components/gallery/common/select-gallery-dropdown.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
class SelectGalleryDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_initalData", []);

    _defineProperty(this, "state", {
      data: [],
      value: undefined
    });

    _defineProperty(this, "handleSearch", value => {
      const q = value.toLowerCase();

      const filtered = this._initalData.filter(g => {
        return (g.name || '').toLowerCase().includes(q);
      });

      this.setState({
        data: filtered
      });
    });
  }

  componentDidMount() {
    if (this.props.isQuery) {
      this.findGalleries();
    }
  }

  async findGalleries() {
    const resp = await _services_gallery_service__WEBPACK_IMPORTED_MODULE_3__[/* galleryService */ "a"].search({
      limit: 1000
    });
    this.setData(resp.data.data || []);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.galleries !== this.props.galleries) this.setData(this.props.galleries);
  }

  async setData(galleries) {
    this._initalData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"])(galleries, g => g.performerId);
    this.setState({
      data: [...this._initalData]
    });
  }

  render() {
    const {
      disabled
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      showSearch: true,
      value: this.state.value,
      placeholder: this.props.placeholder,
      style: this.props.style,
      defaultActiveFirstOption: false,
      showArrow: true,
      filterOption: false,
      onSearch: this.handleSearch,
      onChange: this.props.onSelect.bind(this),
      notFoundContent: null,
      defaultValue: this.props.defaultValue || undefined,
      disabled: disabled,
      allowClear: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, this.state.data.map(g => __jsx(Option, {
      key: g._id,
      value: g._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 15
      }
    }, g.name)))));
  }

}

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

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Rb4M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GalleryService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return galleryService; });
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("/bfT");

class GalleryService extends _api_request__WEBPACK_IMPORTED_MODULE_0__[/* APIRequest */ "a"] {
  create(payload) {
    return this.post('/admin/performer-assets/galleries', payload);
  }

  search(query) {
    return this.get(this.buildUrl('/admin/performer-assets/galleries/search', query));
  }

  findById(id) {
    return this.get(`/admin/performer-assets/galleries/${id}/view`);
  }

  update(id, payload) {
    console.log('asda');
    return this.put(`/admin/performer-assets/galleries/${id}`, payload);
  }

  delete(id) {
    return this.del(`/admin/performer-assets/galleries/${id}`);
  }

}
const galleryService = new GalleryService();

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

/***/ "cyZt":
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

// EXTERNAL MODULE: ./src/components/performer/common/select-performer-dropdown.tsx
var select_performer_dropdown = __webpack_require__("ufQV");

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: ./src/services/photo.service.ts
var photo_service = __webpack_require__("7QX/");

// CONCATENATED MODULE: ./src/components/file/upload-list.tsx
var _jsxFileName = "/var/www/admin.dtest.live/src/components/file/upload-list.tsx";

var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class upload_list_UploadList extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      previews: {}
    });
  }

  renderPreview(file) {
    if (file.status === 'uploading') {
      return __jsx(icons_["LoadingOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 14
        }
      });
    }

    if (this.state.previews[file.uid]) {
      return __jsx("img", {
        src: this.state.previews[file.uid],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 14
        }
      });
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      const previews = _objectSpread(_objectSpread({}, this.state.previews), {}, {
        [file.uid]: reader.result
      });

      this.setState({
        previews
      });
    });
    reader.readAsDataURL(file);
    return __jsx(icons_["PictureOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 12
      }
    });
  }

  render() {
    return __jsx("div", {
      className: "ant-upload-list ant-upload-list-picture",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    }, this.props.files.map(file => __jsx("div", {
      className: "ant-upload-list-item ant-upload-list-item-uploading ant-upload-list-item-list-type-picture",
      key: file.uid,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "ant-upload-list-item-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "ant-upload-list-item-thumbnail ant-upload-list-item-file",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }
    }, this.renderPreview(file)), __jsx("span", {
      className: "ant-upload-list-item-name ant-upload-list-item-name-icon-count-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, file.name)), file.percent !== 100 && __jsx("span", {
      className: "ant-upload-list-item-card-actions picture",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 19
      }
    }, __jsx("a", {
      onClick: this.props.remove.bind(this, file),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, __jsx(icons_["DeleteOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 23
      }
    }))), file.percent && __jsx(external_antd_["Progress"], {
      percent: file.percent,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 34
      }
    }))))));
  }

}
// EXTERNAL MODULE: ./src/components/gallery/common/select-gallery-dropdown.tsx
var select_gallery_dropdown = __webpack_require__("8UjJ");

// EXTERNAL MODULE: ./src/services/gallery.service.ts
var gallery_service = __webpack_require__("Rb4M");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// CONCATENATED MODULE: ./pages/photos/bulk-upload.tsx
var bulk_upload_jsxFileName = "/var/www/admin.dtest.live/pages/photos/bulk-upload.tsx";

var bulk_upload_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function bulk_upload_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function bulk_upload_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { bulk_upload_ownKeys(Object(source), true).forEach(function (key) { bulk_upload_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { bulk_upload_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function bulk_upload_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const layout = {
  labelCol: {
    span: 4
  },
  wrapperCol: {
    span: 16
  }
};
const validateMessages = {
  required: 'This field is required!'
};
const {
  Dragger
} = external_antd_["Upload"];

class bulk_upload_BulkUploadPhoto extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    bulk_upload_defineProperty(this, "state", {
      uploading: false,
      preview: null,
      uploadPercentage: 0,
      fileList: [],
      galleries: []
    });

    bulk_upload_defineProperty(this, "formRef", void 0);

    bulk_upload_defineProperty(this, "uploadRef", void 0);
  }

  static async getInitialProps({
    ctx
  }) {
    return ctx.query;
  }

  componentDidMount() {
    if (!this.formRef) this.formRef = Object(external_react_["createRef"])();
    if (!this.uploadRef) this.uploadRef = Object(external_react_["createRef"])();
    this.props.performerId && this.findGalleries(this.props.performerId);
  }

  async findGalleries(performerId) {
    const resp = await gallery_service["a" /* galleryService */].search({
      performerId: performerId,
      limit: 1000
    });
    this.setState({
      galleries: resp.data.data || []
    });
  }

  setFormVal(field, val) {
    const instance = this.formRef.current;
    instance.setFieldsValue({
      [field]: val
    });
    if (field === 'performerId') this.findGalleries(val);
  }

  async beforeUpload(file, fileList) {
    await Promise.all(fileList.map(file => {
      const ext = file.name.split('.').pop().toLowerCase();
      const isImageAccept = ".jpeg, .jpg, .png".split(',').map(item => item.trim()).indexOf(`.${ext}`);
      const isLt2M = file.size / 1024 / 1024 < ("2" || false);

      if (isImageAccept === -1 || !isLt2M) {
        fileList.splice(fileList.findIndex(f => f.uid === file.uid), 1);
      }
    }));
    await this.setState({
      fileList
    });
    return false;
  }

  onUploading(file, resp) {
    this.setState({
      uploadPercentage: resp.percentage
    });
    file.percent = resp.percentage;
    if (file.percent === 100) file.status = 'done';
    this.forceUpdate();
  }

  remove(file) {
    const fileList = this.state.fileList;
    fileList.splice(fileList.findIndex(f => f.uid === file.uid), 1);
    this.setState({
      fileList
    });
    this.forceUpdate();
  }

  async submit(data) {
    if (!this.state.fileList.length) {
      return external_antd_["message"].error('Please select photo!');
    }

    const uploadFiles = this.state.fileList.filter(f => !['uploading', 'done'].includes(f.status));
    if (!uploadFiles.length) return external_antd_["message"].error('Please select new file!');
    await this.setState({
      uploading: true
    });

    for (const file of uploadFiles) {
      try {
        if (['uploading', 'done'].includes(file.status)) continue;
        file.status = 'uploading';
        await photo_service["a" /* photoService */].uploadPhoto(file, data, this.onUploading.bind(this, file));
      } catch (e) {
        file.status = 'error';
        external_antd_["message"].error(`File ${file.name} error!`);
      }
    }

    external_antd_["message"].success('Photos has been uploaded!');
    await this.setState({
      uploading: false
    }, () => window.setTimeout(() => {
      router_default.a.push('/photos');
    }, 1000));
  }

  render() {
    if (!this.formRef) this.formRef = Object(external_react_["createRef"])();
    if (!this.uploadRef) this.uploadRef = Object(external_react_["createRef"])();
    const {
      uploading,
      fileList
    } = this.state;
    return bulk_upload_jsx(external_react_["Fragment"], {
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 154,
        columnNumber: 7
      }
    }, bulk_upload_jsx(head_default.a, {
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 155,
        columnNumber: 9
      }
    }, bulk_upload_jsx("title", {
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 156,
        columnNumber: 11
      }
    }, "Upload photo")), bulk_upload_jsx(page["a" /* default */], {
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }
    }, bulk_upload_jsx(external_antd_["Form"], _extends({}, layout, {
      onFinish: this.submit.bind(this),
      validateMessages: validateMessages,
      ref: this.formRef,
      initialValues: {
        status: 'draft',
        token: 0,
        performerId: this.props.performerId || '',
        galleryId: this.props.galleryId || ''
      },
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }
    }), bulk_upload_jsx(external_antd_["Form"].Item, {
      name: "performerId",
      label: "Performer",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 171,
        columnNumber: 13
      }
    }, bulk_upload_jsx(select_performer_dropdown["a" /* SelectPerformerDropdown */], {
      onSelect: val => this.setFormVal('performerId', val),
      disabled: uploading,
      defaultValue: this.props.performerId || '',
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 176,
        columnNumber: 15
      }
    })), bulk_upload_jsx(external_antd_["Form"].Item, {
      name: "galleryId",
      label: "Gallery",
      rules: [{
        required: true,
        message: 'Please select a gallery'
      }],
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 182,
        columnNumber: 13
      }
    }, bulk_upload_jsx(select_gallery_dropdown["a" /* SelectGalleryDropdown */], {
      galleries: this.state.galleries,
      disabled: this.state.galleries.length <= 0,
      onSelect: val => this.setFormVal('galleryId', val),
      defaultValue: this.props.galleryId || '',
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 187,
        columnNumber: 15
      }
    })), bulk_upload_jsx(external_antd_["Form"].Item, {
      name: "status",
      label: "Default status",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 201,
        columnNumber: 13
      }
    }, bulk_upload_jsx(external_antd_["Select"], {
      disabled: uploading,
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 206,
        columnNumber: 15
      }
    }, bulk_upload_jsx(external_antd_["Select"].Option, {
      value: "draft",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 207,
        columnNumber: 17
      }
    }, "Draft"), bulk_upload_jsx(external_antd_["Select"].Option, {
      key: "active",
      value: "active",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 208,
        columnNumber: 17
      }
    }, "Active"), bulk_upload_jsx(external_antd_["Select"].Option, {
      key: "inactive",
      value: "inactive",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }
    }, "Inactive"))), bulk_upload_jsx(external_antd_["Row"], {
      className: "ant-form-item",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 216,
        columnNumber: 13
      }
    }, bulk_upload_jsx(external_antd_["Col"], {
      span: 4,
      className: "ant-form-item-label",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 217,
        columnNumber: 15
      }
    }, bulk_upload_jsx("label", {
      className: "ant-form-item-required",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 218,
        columnNumber: 17
      }
    }, "Photos")), bulk_upload_jsx(external_antd_["Col"], {
      span: 16,
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 220,
        columnNumber: 15
      }
    }, bulk_upload_jsx("div", {
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }
    }, bulk_upload_jsx(Dragger // accept={process.env.NEXT_PUBLIC_IMAGE_ACCPET || 'image/*'}
    , {
      beforeUpload: this.beforeUpload.bind(this),
      multiple: true,
      showUploadList: false,
      disabled: uploading,
      listType: "picture",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 222,
        columnNumber: 19
      }
    }, bulk_upload_jsx("p", {
      className: "ant-upload-drag-icon",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 230,
        columnNumber: 21
      }
    }, bulk_upload_jsx(icons_["UploadOutlined"], {
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 231,
        columnNumber: 23
      }
    })), bulk_upload_jsx("p", {
      className: "ant-upload-text",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 233,
        columnNumber: 21
      }
    }, "Click or drag file to this area to upload"), bulk_upload_jsx("p", {
      className: "ant-upload-hint",
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 236,
        columnNumber: 21
      }
    }, "Support image file only. Image must smaller than", ' ', "2" || false, "MB! Only accept ", ".jpeg, .jpg, .png", ".")), bulk_upload_jsx(upload_list_UploadList, {
      files: fileList,
      remove: this.remove.bind(this),
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 243,
        columnNumber: 19
      }
    })))), bulk_upload_jsx(external_antd_["Form"].Item, {
      wrapperCol: bulk_upload_objectSpread(bulk_upload_objectSpread({}, layout.wrapperCol), {}, {
        offset: 4
      }),
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 251,
        columnNumber: 13
      }
    }, bulk_upload_jsx(external_antd_["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: uploading,
      disabled: uploading,
      __self: this,
      __source: {
        fileName: bulk_upload_jsxFileName,
        lineNumber: 252,
        columnNumber: 15
      }
    }, "Upload")))));
  }

}

/* harmony default export */ var bulk_upload = __webpack_exports__["default"] = (bulk_upload_BulkUploadPhoto);

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

/***/ "ufQV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectPerformerDropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YLtl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_performer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("XQPl");
var _jsxFileName = "/var/www/admin.dtest.live/src/components/performer/common/select-performer-dropdown.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Option
} = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
class SelectPerformerDropdown extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_initalData", []);

    _defineProperty(this, "state", {
      data: [],
      value: undefined
    });

    _defineProperty(this, "handleSearch", value => {
      const q = value.toLowerCase();

      const filtered = this._initalData.filter(p => {
        return p.username.includes(q) || (p.name || '').toLowerCase().includes(q);
      });

      this.setState({
        data: filtered
      });
    });
  }

  componentDidMount() {
    this.loadPerformers();
  }

  async loadPerformers(q) {
    // TODO - should check for better option?
    const resp = await _services_performer_service__WEBPACK_IMPORTED_MODULE_3__[/* performerService */ "a"].search({
      limit: 1000
    });
    this._initalData = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"])(resp.data.data, i => i.username);
    this.setState({
      data: [...this._initalData]
    });
  }

  render() {
    const {
      disabled
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      showSearch: true,
      value: this.state.value,
      placeholder: this.props.placeholder,
      style: this.props.style,
      defaultActiveFirstOption: false,
      showArrow: true,
      filterOption: false,
      onSearch: this.handleSearch,
      onChange: this.props.onSelect.bind(this),
      notFoundContent: null,
      defaultValue: this.props.defaultValue || undefined,
      disabled: disabled,
      allowClear: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, this.state.data.map(p => __jsx(Option, {
      key: p._id,
      value: p._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("strong", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, p.username), " / ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 47
      }
    }, p.name)))));
  }

}

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });