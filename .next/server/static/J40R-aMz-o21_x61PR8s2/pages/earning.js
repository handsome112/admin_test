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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("xj95");


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

/***/ "ADto":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getDiffToNow; });
/* unused harmony export formatTime */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return convertMiliSecsToSecs; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

function formatDate(date, format = 'DD/MM/YYYY HH:mm:ss') {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).format(format);
}
function getDiffToNow(date) {
  return moment__WEBPACK_IMPORTED_MODULE_0___default()(date).fromNow(true);
}
function formatTime(seconds, format) {
  const h = Math.floor(seconds / 3600);
  const hours = h < 10 ? `0${h}` : h;
  var remaining1 = seconds % 3600;
  const m = Math.floor(remaining1 / 60);
  const minutes = m < 10 ? `0${m}` : m;
  const remaining2 = remaining1 % 60;
  const remainingSecs = remaining2 < 10 ? `0${remaining2}` : remaining2;

  if (format === 'HH:mm') {
    return `${hours}:${minutes}`;
  }

  return `${hours}:${minutes}:${remainingSecs}`;
}
function convertMiliSecsToSecs(miliSeconds) {
  const seconds = Math.floor(miliSeconds / 1000);
  const h = Math.floor(seconds / 3600);
  const hours = h < 10 ? `0${h}` : h;
  var remaining1 = seconds % 3600;
  const m = Math.floor(remaining1 / 60);
  const minutes = m < 10 ? `0${m}` : m;
  const remaining2 = remaining1 % 60;
  const remainingSecs = remaining2 < 10 ? `0${remaining2}` : remaining2;
  return `${hours}:${minutes}:${remainingSecs}`;
}

/***/ }),

/***/ "Abbm":
/***/ (function(module, exports) {



/***/ }),

/***/ "AyyA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ search_filter_SearchFilter; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./src/components/performer/common/select-performer-dropdown.tsx
var select_performer_dropdown = __webpack_require__("ufQV");

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: ./src/services/user.service.ts
var user_service = __webpack_require__("ITiG");

// CONCATENATED MODULE: ./src/components/user/select-user-dropdown.tsx
var _jsxFileName = "/var/www/admin.dtest.live/src/components/user/select-user-dropdown.tsx";

var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Option
} = external_antd_["Select"];
class select_user_dropdown_SelectUserDropdown extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_initialData", []);

    _defineProperty(this, "state", {
      data: [],
      value: undefined
    });

    _defineProperty(this, "handleSearch", value => {
      const q = value.toLowerCase();

      const filtered = this._initialData.filter(p => {
        return p.username.includes(q) || (p.name || '').toLowerCase().includes(q);
      });

      this.setState({
        data: filtered
      });
    });
  }

  componentDidMount() {
    this.loadUsers();
  }

  async loadUsers(q) {
    // TODO - should check for better option?
    const resp = await user_service["a" /* userService */].search({
      limit: 1000
    });
    this._initialData = Object(external_lodash_["sortBy"])(resp.data.data, i => i.username);
    this.setState({
      data: [...this._initialData]
    });
  }

  render() {
    const {
      disabled
    } = this.props;
    return __jsx(external_antd_["Select"], {
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
// EXTERNAL MODULE: ./src/components/gallery/common/select-gallery-dropdown.tsx
var select_gallery_dropdown = __webpack_require__("8UjJ");

// EXTERNAL MODULE: ./src/services/studio.service.ts
var studio_service = __webpack_require__("D9zB");

// CONCATENATED MODULE: ./src/components/studio/select-studio.dropdown.tsx
var select_studio_dropdown_jsxFileName = "/var/www/admin.dtest.live/src/components/studio/select-studio.dropdown.tsx";

var select_studio_dropdown_jsx = external_react_default.a.createElement;

function select_studio_dropdown_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const {
  Option: select_studio_dropdown_Option
} = external_antd_["Select"];
class select_studio_dropdown_SelectStudioDropdown extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    select_studio_dropdown_defineProperty(this, "_initialData", []);

    select_studio_dropdown_defineProperty(this, "state", {
      data: [],
      value: undefined
    });

    select_studio_dropdown_defineProperty(this, "handleSearch", value => {
      const q = value.toLowerCase();

      const filtered = this._initialData.filter(p => {
        return p.username.includes(q) || (p.name || '').toLowerCase().includes(q);
      });

      this.setState({
        data: filtered
      });
    });
  }

  componentDidMount() {
    this.loadStudios();
  }

  async loadStudios(q) {
    // TODO - should check for better option?
    const resp = await studio_service["a" /* studioService */].search({
      limit: 1000
    });
    this._initialData = Object(external_lodash_["sortBy"])(resp.data.data, i => i.username);
    this.setState({
      data: [...this._initialData]
    });
  }

  render() {
    const {
      disabled
    } = this.props;
    return select_studio_dropdown_jsx(external_antd_["Select"], {
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
        fileName: select_studio_dropdown_jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, this.state.data.map(p => select_studio_dropdown_jsx(select_studio_dropdown_Option, {
      key: p._id,
      value: p._id,
      __self: this,
      __source: {
        fileName: select_studio_dropdown_jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, select_studio_dropdown_jsx("span", {
      __self: this,
      __source: {
        fileName: select_studio_dropdown_jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, select_studio_dropdown_jsx("strong", {
      __self: this,
      __source: {
        fileName: select_studio_dropdown_jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, p.username), " / ", select_studio_dropdown_jsx("span", {
      __self: this,
      __source: {
        fileName: select_studio_dropdown_jsxFileName,
        lineNumber: 64,
        columnNumber: 47
      }
    }, p.name)))));
  }

}
// CONCATENATED MODULE: ./src/components/common/search-filter.tsx
var search_filter_jsxFileName = "/var/www/admin.dtest.live/src/components/common/search-filter.tsx";

var search_filter_jsx = external_react_default.a.createElement;

function search_filter_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class search_filter_SearchFilter extends external_react_["PureComponent"] {
  constructor(...args) {
    super(...args);

    search_filter_defineProperty(this, "performerRef", void 0);

    search_filter_defineProperty(this, "state", {
      q: '',
      performerId: '',
      studioId: '',
      targetId: '',
      galleryId: ''
    });
  }

  componentDidMount() {
    if (this.props.performerId) {
      this.setState({
        performerId: this.props.performerId
      });
    }
  }

  render() {
    const {
      statuses = [],
      searchWithPerformer,
      performerId,
      galleryId,
      searchWithGallery,
      notWithKeyWord,
      sourceType = [],
      withDatePicker,
      loading,
      setDateRanger,
      searchWithUser,
      userId,
      searchWithStudio,
      studioId
    } = this.props;
    return search_filter_jsx(external_antd_["Row"], {
      gutter: 24,
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    }, !notWithKeyWord && search_filter_jsx(external_antd_["Col"], {
      xl: {
        span: 4
      },
      md: {
        span: 8
      },
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }, search_filter_jsx(external_antd_["Input"], {
      placeholder: "Enter keyword",
      onChange: evt => this.setState({
        q: evt.target.value
      }),
      onPressEnter: () => this.props.onSubmit(this.state),
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    })), statuses.length ? search_filter_jsx(external_antd_["Col"], {
      xl: {
        span: 4
      },
      md: {
        span: 8
      },
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }
    }, search_filter_jsx(external_antd_["Select"], {
      onChange: val => this.setState({
        status: val
      }),
      style: {
        width: '100%'
      },
      placeholder: "Select status",
      defaultValue: "",
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, statuses.map(s => search_filter_jsx(external_antd_["Select"].Option, {
      key: s.key,
      value: s.key,
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, s.text || s.key)))) : null, sourceType.length ? search_filter_jsx(external_antd_["Col"], {
      xl: {
        span: 4
      },
      md: {
        span: 8
      },
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }, search_filter_jsx(external_antd_["Select"], {
      onChange: val => this.setState({
        sourceType: val
      }),
      style: {
        width: '100%'
      },
      placeholder: "Select Type",
      defaultValue: "",
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }
    }, sourceType.map(s => search_filter_jsx(external_antd_["Select"].Option, {
      key: s.key,
      value: s.key,
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }
    }, s.text || s.key)))) : null, searchWithUser && search_filter_jsx(external_antd_["Col"], {
      xl: {
        span: 6
      },
      md: {
        span: 8
      },
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }
    }, search_filter_jsx(select_user_dropdown_SelectUserDropdown, {
      placeholder: 'Search user',
      style: {
        width: '100%'
      },
      onSelect: val => this.setState({
        sourceId: val || ''
      }),
      defaultValue: userId || '',
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 109,
        columnNumber: 13
      }
    })), searchWithPerformer && search_filter_jsx(external_antd_["Col"], {
      xl: {
        span: 6
      },
      md: {
        span: 8
      },
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }
    }, search_filter_jsx(select_performer_dropdown["a" /* SelectPerformerDropdown */], {
      placeholder: 'Search performer',
      style: {
        width: '100%'
      },
      onSelect: val => this.setState({
        performerId: val || '',
        studioId: ''
      }),
      defaultValue: performerId || '',
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    })), searchWithGallery && search_filter_jsx(external_antd_["Col"], {
      xl: {
        span: 6
      },
      md: {
        span: 8
      },
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    }, search_filter_jsx(select_gallery_dropdown["a" /* SelectGalleryDropdown */], {
      placeholder: 'Search gallery',
      style: {
        width: '100%'
      },
      onSelect: val => this.setState({
        galleryId: val || ''
      }),
      defaultValue: galleryId || '',
      isQuery: true,
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 129,
        columnNumber: 13
      }
    })), searchWithStudio && search_filter_jsx(external_antd_["Col"], {
      xl: {
        span: 6
      },
      md: {
        span: 8
      },
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    }, search_filter_jsx(select_studio_dropdown_SelectStudioDropdown, {
      placeholder: 'Search studio',
      style: {
        width: '100%'
      },
      onSelect: val => this.setState({
        targetId: val || '',
        studioId: val || '',
        performerId: ''
      }),
      defaultValue: studioId || '',
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    })), withDatePicker && search_filter_jsx(external_antd_["Col"], {
      xl: {
        span: 6
      },
      md: 12,
      xs: 24,
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }, search_filter_jsx("div", {
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }, search_filter_jsx(external_antd_["DatePicker"].RangePicker, {
      disabledDate: () => loading,
      onCalendarChange: setDateRanger.bind(this),
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 151,
        columnNumber: 15
      }
    }))), search_filter_jsx(external_antd_["Col"], {
      xl: {
        span: 4
      },
      md: {
        span: 8
      },
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 158,
        columnNumber: 9
      }
    }, search_filter_jsx(external_antd_["Button"], {
      type: "primary",
      onClick: () => this.props.onSubmit(this.state),
      __self: this,
      __source: {
        fileName: search_filter_jsxFileName,
        lineNumber: 159,
        columnNumber: 11
      }
    }, "Search")));
  }

}

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

/***/ "mssc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("rP/q");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_lib_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("ADto");
var _jsxFileName = "/var/www/admin.dtest.live/src/components/earning/table-list.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const EarningTable = ({
  dataSource,
  rowKey,
  loading,
  onChange,
  pagination
}) => {
  const column = [{
    title: 'Transaction',
    dataIndex: 'transactionTokenId',
    key: 'transaction',
    render: transactionTokenId => Object(_lib_string__WEBPACK_IMPORTED_MODULE_1__[/* formatId */ "a"])(transactionTokenId)
  }, {
    title: 'From',
    dataIndex: 'userId',
    key: 'user',

    render(_, record) {
      return __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }, record.sourceInfo && record.sourceInfo.username || 'N/A');
    }

  }, {
    title: 'To',
    dataIndex: 'performerId',
    key: 'owner',

    render(_, record) {
      return __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      }, record.targetInfo && record.targetInfo.username || 'N/A');
    }

  }, {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',

    render(type) {
      switch (type) {
        case 'sale_video':
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            color: "magenta",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 20
            }
          }, "Sale Video");

        case 'sale_product':
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            color: "volcano",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 20
            }
          }, "Sale Product");

        case 'sale_photo':
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            color: "orange",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 20
            }
          }, "Sale Photo");

        case 'tip':
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            color: "gold",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 20
            }
          }, "Tip");

        case 'stream_private':
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            color: "blue",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 20
            }
          }, "Private");

        case 'stream_group':
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            color: "green",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 20
            }
          }, "Group");

        default:
          return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 20
            }
          }, type);
      }
    }

  }, {
    title: 'Tokens',
    dataIndex: 'netPrice',
    key: 'netPrice',
    render: netPrice => netPrice.toFixed(2)
  }, {
    title: 'Percent',
    dataIndex: 'commission',
    key: 'commission',

    render(commission) {
      return __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 16
        }
      }, commission, "%");
    }

  }, {
    title: 'Conversion Rate',
    dataIndex: 'conversionRate',
    key: 'conversionRate'
  }, {
    title: 'Earned',
    key: 'earned',
    render: ({
      netPrice,
      conversionRate
    }) => (netPrice * conversionRate).toFixed(2)
  }, {
    title: 'Is Paid',
    dataIndex: 'isPaid',
    key: 'isPaid',

    render(isPaid) {
      return __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 11
        }
      }, isPaid ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
        color: "green",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 15
        }
      }, "Yes") : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tag"], {
        color: "orange",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 15
        }
      }, "No"));
    }

  }, {
    title: 'Date',
    key: 'createdAt',
    dataIndex: 'createdAt',
    render: createdAt => Object(src_lib_date__WEBPACK_IMPORTED_MODULE_3__[/* formatDate */ "b"])(createdAt),
    sorter: true
  }];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    columns: column,
    dataSource: dataSource,
    rowKey: rowKey,
    loading: loading,
    onChange: onChange.bind(undefined),
    pagination: pagination,
    scroll: {
      x: 1300,
      y: 500
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (EarningTable);

/***/ }),

/***/ "nXVM":
/***/ (function(module, exports) {

module.exports = require("path-to-regexp");

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

/***/ "wJn0":
/***/ (function(module, exports) {



/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xj95":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_layout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Bfpx");
/* harmony import */ var src_components_earning_table_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mssc");
/* harmony import */ var src_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CLrh");
/* harmony import */ var src_lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("NsEo");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_common_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("AyyA");
/* harmony import */ var _earning_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("wJn0");
/* harmony import */ var _earning_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_earning_less__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "/var/www/admin.dtest.live/pages/earning/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import { SearchFilter } from '@components/common/search-filter';








class EarningPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  static async getInitialProps({
    ctx
  }) {
    return ctx.query;
  }

  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      loading: false,
      pagination: {
        pageSize: 10,
        total: 0
      },
      filter: {},
      sort: {
        sortBy: 'createdAt',
        sorter: 'asc'
      },
      stats: null,
      target: 'performer'
    };
  }

  componentDidMount() {
    this.loadData();
    this.loadStats();
  }

  async loadData() {
    const {
      offset,
      pagination,
      filter,
      sort,
      query,
      target
    } = this.state; // var query = {};
    // if (fromDate && toDate) {
    //   query = Object.assign(query, fromDate, toDate);
    // }

    try {
      await this.setState({
        loading: true
      });
      const resp = await src_services__WEBPACK_IMPORTED_MODULE_5__[/* earningService */ "b"].search(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
        offset,
        limit: pagination.pageSize
      }, filter), sort), query), {}, {
        target
      }));
      await this.setState({
        data: resp.data.data,
        pagination: _objectSpread(_objectSpread({}, this.state.pagination), {}, {
          total: resp.data.total
        })
      });
    } catch (e) {
      this.showError(e);
    } finally {
      await this.setState({
        loading: false
      });
    }
  }

  async loadStats() {
    const {
      query,
      target,
      filter
    } = this.state;

    try {
      const resp = await src_services__WEBPACK_IMPORTED_MODULE_5__[/* earningService */ "b"].stats(_objectSpread(_objectSpread({}, query), {}, {
        target,
        filter
      }));
      await this.setState({
        stats: resp
      });
    } catch (error) {
      this.showError(error);
    }
  }

  async onHandleTabChange(pagination, filters, sorter) {
    const {
      sort
    } = this.state;
    await this.setState({
      offset: (pagination.current - 1) * this.state.pagination.pageSize,
      sort: _objectSpread(_objectSpread({}, sort), {}, {
        sortBy: sorter.field,
        sorter: sorter.order === 'ascend' ? 'asc' : 'desc'
      })
    });
    this.loadData();
  }

  async handleFilter(filter) {
    await this.setState({
      filter
    });
    this.loadData();
    this.loadStats();
  }

  async setDateRanger(_, dateStrings) {
    if (!dateStrings[0] && !dateStrings[1]) {
      await this.setState({
        query: {},
        sort: {
          sortBy: 'createdAt',
          sorter: 'desc'
        }
      });
      this.loadData();
      this.loadStats();
    }

    if (dateStrings[0] && dateStrings[1]) {
      await this.setState({
        query: {
          fromDate: dateStrings[0],
          toDate: dateStrings[1]
        }
      });
      this.loadData();
      this.loadStats();
    } else {
      return;
    }
  }

  async showError(e) {
    const err = await Promise.resolve(e);
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(Object(src_lib_utils__WEBPACK_IMPORTED_MODULE_6__[/* getResponseError */ "b"])(err));
  }

  render() {
    const {
      data,
      loading,
      pagination,
      stats
    } = this.state;
    const {
      conversionRate
    } = this.props; // const sourceType = [
    //   { key: '', text: 'All' },
    //   { text: 'Sale Video', key: 'sale_video' },
    //   { text: 'Sale Product', key: 'sale_product' },
    //   { text: 'Sale Photo', key: 'sale_photo' },
    //   { text: 'Tip', key: 'tip' },
    //   { text: 'Private', key: 'private' },
    //   { text: 'Group', key: 'group' }
    // ];

    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 11
      }
    }, "Earning")), __jsx(_components_common_layout_page__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["PageHeader"], {
      title: "Model Earning",
      style: {
        padding: 0,
        marginBottom: 10
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "ant-page-header",
      style: {
        padding: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 12,
      xs: 24,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 15
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["DatePicker"].RangePicker, {
      disabledDate: () => loading,
      onCalendarChange: this.setDateRanger.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      md: 12,
      xs: 24,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    }, !loading && stats && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Space"], {
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "space-display",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 19
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Statistic"], {
      className: "space-custom",
      title: "Paid Tokens",
      value: stats.data.paidPrice,
      style: {
        marginRight: '30px'
      },
      precision: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 19
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Statistic"], {
      style: {
        marginRight: '30px'
      },
      title: "Remaining Tokens",
      value: stats.data.remainingPrice,
      precision: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 19
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Statistic"], {
      style: {
        marginRight: '30px'
      },
      title: "Total Tokens",
      value: stats.data.totalPrice,
      precision: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 19
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Statistic"], {
      style: {
        marginRight: '30px'
      },
      title: "Current Conversion Rate",
      value: conversionRate || 'N/A',
      precision: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 19
      }
    }))))), __jsx("div", {
      style: {
        marginBottom: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 11
      }
    }), data ? __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 225,
        columnNumber: 13
      }
    }, __jsx(_components_common_search_filter__WEBPACK_IMPORTED_MODULE_8__[/* SearchFilter */ "a"], {
      onSubmit: this.handleFilter.bind(this),
      notWithKeyWord: true,
      searchWithPerformer: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    }), __jsx("div", {
      style: {
        marginBottom: '20px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 15
      }
    }), __jsx(src_components_earning_table_list__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
      dataSource: data,
      rowKey: "_id",
      onChange: this.onHandleTabChange.bind(this),
      pagination: pagination,
      loading: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 15
      }
    })) : __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    }, "There are no earning at this time.")));
  }

}

const mapStateToProps = state => _objectSpread({}, state.settings);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps)(EarningPage));

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });