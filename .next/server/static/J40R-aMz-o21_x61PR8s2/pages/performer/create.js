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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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

/***/ "0Dww":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/performer/socialsForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const layout = {
  labelCol: {
    lg: {
      span: 4
    },
    sm: {
      span: 6
    }
  },
  wrapperCol: {
    lg: {
      span: 20
    },
    sm: {
      span: 18
    }
  }
};
class SocialsForm extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "formRef", Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])());
  }

  formRefSubmit() {
    this.formRef.current.submit();
  }

  render() {
    const {
      socials,
      onFinish,
      submiting
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
      ref: this.formRef
    }, layout, {
      name: "form-performer",
      onFinish: values => {
        onFinish({
          socials: values
        });
      },
      onFinishFailed: () => antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please complete the required fields'),
      initialValues: socials ? socials : {
        facebook: 'facebook.com',
        twitter: 'twitter.com',
        instagram: 'instagram.com'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "facebook",
      label: "Facebook",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: socials && socials.facebook || '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "twitter",
      label: "Twitter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: socials && socials.twitter || '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "instagram",
      label: "Instagram",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: socials && socials.instagram || '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
        offset: 4
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: submiting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, "Submit")));
  }

}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "2yP/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("AyyA");
/* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("S82o");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _breadcrumb__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _dropdown_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("hZ3H");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _dropdown_action__WEBPACK_IMPORTED_MODULE_2__["a"]; });





/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("UBht");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6RWp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommissionSettingForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/performer/commission-setting.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const layout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 16
  }
};
const validateMessages = {
  required: 'This field is required!'
};
class CommissionSettingForm extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      commissionSetting,
      onFinish,
      submiting
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      layout: 'vertical',
      name: "form-performer-commission",
      onFinish: onFinish.bind(this),
      onFinishFailed: () => antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please complete the required fields.'),
      validateMessages: validateMessages,
      initialValues: commissionSetting ? commissionSetting : {
        tipCommission: 20,
        privateCallCommission: 20,
        groupCallCommission: 20,
        productCommission: 20,
        albumCommission: 20,
        videoCommission: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "tipCommission",
      label: "Tip Commission",
      rules: [{
        validator: (_, value) => {
          if (parseInt(value) > 0 && parseInt(value) < 100) {
            return Promise.resolve();
          }

          return Promise.reject('Value must be greater than 0 and less than 100');
        }
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
      min: 1,
      max: 99,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "privateCallCommission",
      label: "Private Call Commission",
      rules: [{
        validator: (_, value) => {
          if (parseInt(value) > 0 && parseInt(value) < 100) {
            return Promise.resolve();
          }

          return Promise.reject('Value must be greater than 0 and less than 100');
        }
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
      min: 1,
      max: 99,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "groupCallCommission",
      label: "Group Call Commission",
      rules: [{
        validator: (_, value) => {
          if (parseInt(value) > 0 && parseInt(value) < 100) {
            return Promise.resolve();
          }

          return Promise.reject('Value must be greater than 0 and less than 100');
        }
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
      min: 1,
      max: 99,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "productCommission",
      label: "Product Sale Commission",
      rules: [{
        validator: (_, value) => {
          if (parseInt(value) > 0 && parseInt(value) < 100) {
            return Promise.resolve();
          }

          return Promise.reject('Value must be greater than 0 and less than 100');
        }
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
      min: 1,
      max: 99,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "albumCommission",
      label: "Album Sale Commission",
      rules: [{
        validator: (_, value) => {
          if (parseInt(value) > 0 && parseInt(value) < 100) {
            return Promise.resolve();
          }

          return Promise.reject('Value must be greater than 0 and less than 100');
        }
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
      min: 1,
      max: 99,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "videoCommission",
      label: "Video Sale Commission",
      rules: [{
        validator: (_, value) => {
          if (parseInt(value) > 0 && parseInt(value) < 100) {
            return Promise.resolve();
          }

          return Promise.reject('Value must be greater than 0 and less than 100');
        }
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["InputNumber"], {
      min: 1,
      max: 99,
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      wrapperCol: _objectSpread({}, layout.wrapperCol),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: submiting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 11
      }
    }, "Submit")));
  }

}

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

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "DXG5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformerDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("CLrh");
/* harmony import */ var _components_file_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("WowM");
var _jsxFileName = "/var/www/admin.dtest.live/src/components/performer/Document.tsx";

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
class PerformerDocument extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      idVerificationUrl: this.props.performer && this.props.performer.idVerification ? this.props.performer.idVerification.url : '',
      documentVerificationUrl: this.props.performer && this.props.performer.documentVerification ? this.props.performer.documentVerification.url : '',
      releaseFormUrl: this.props.performer && this.props.performer.releaseForm ? this.props.performer.releaseForm.url : ''
    });
  }

  render() {
    const {
      onUploaded,
      onFormRefSubmit,
      submiting,
      update
    } = this.props;
    const {
      idVerificationUrl,
      documentVerificationUrl,
      releaseFormUrl
    } = this.state;
    const uploadHeaders = {
      authorization: _services_index__WEBPACK_IMPORTED_MODULE_2__[/* authService */ "a"].getToken()
    };
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({}, layout, {
      name: "form-performer",
      onFinish: () => onFormRefSubmit(),
      initialValues: {},
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }), __jsx("div", {
      key: "verificationId",
      className: "ant-row ant-form-item ant-form-item-with-help",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: update === true ? "ant-col ant-col-lg-10 ant-col-md-10  ant-col-sm-12 ant-form-item-label" : "ant-col ant-col-lg-8 ant-col-md-10  ant-col-sm-12 ant-form-item-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, "ID For Verification")), __jsx("div", {
      className: "ant-col ant-col-16 ant-form-item-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, __jsx(_components_file_file_upload__WEBPACK_IMPORTED_MODULE_3__[/* FileUpload */ "a"], {
      uploadUrl: _services_index__WEBPACK_IMPORTED_MODULE_2__[/* performerService */ "g"].getUploadDocumentUrl(),
      headers: uploadHeaders,
      onUploaded: resp => {
        this.setState({
          idVerificationUrl: resp.response.data.url
        });
        onUploaded('idVerificationId', resp);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }), idVerificationUrl && __jsx("a", {
      target: "_blank",
      href: idVerificationUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, "ID For Verification Link "))), __jsx("div", {
      key: "documentVerificationId",
      className: "ant-row ant-form-item ant-form-item-with-help",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: update === true ? "ant-col ant-col-lg-10 ant-col-md-10  ant-col-sm-12 ant-form-item-label" : "ant-col ant-col-lg-8 ant-col-md-10  ant-col-sm-12 ant-form-item-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, "Document For Verification")), __jsx("div", {
      className: "ant-col ant-col-16 ant-form-item-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    }, __jsx(_components_file_file_upload__WEBPACK_IMPORTED_MODULE_3__[/* FileUpload */ "a"], {
      uploadUrl: _services_index__WEBPACK_IMPORTED_MODULE_2__[/* performerService */ "g"].getUploadDocumentUrl(),
      headers: uploadHeaders,
      onUploaded: resp => {
        this.setState({
          documentVerificationUrl: resp.response.data.url
        });
        onUploaded('documentVerificationId', resp);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 13
      }
    }), documentVerificationUrl && __jsx("a", {
      target: "_blank",
      href: documentVerificationUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }, "Document For Verification"))), __jsx("div", {
      key: "releaseForm",
      className: "ant-row ant-form-item ant-form-item-with-help",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: update === true ? "ant-col ant-col-lg-10 ant-col-md-10  ant-col-sm-12 ant-form-item-label" : "ant-col ant-col-lg-8 ant-col-md-10  ant-col-sm-12 ant-form-item-label",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }, __jsx("label", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }, "Release Form")), __jsx("div", {
      className: "ant-col ant-col-16 ant-form-item-control",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }
    }, __jsx(_components_file_file_upload__WEBPACK_IMPORTED_MODULE_3__[/* FileUpload */ "a"], {
      uploadUrl: _services_index__WEBPACK_IMPORTED_MODULE_2__[/* performerService */ "g"].getUploadDocumentUrl(),
      headers: uploadHeaders,
      onUploaded: resp => {
        this.setState({
          releaseFormUrl: resp.response.data.url
        });
        onUploaded('releaseFormId', resp);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 13
      }
    }), releaseFormUrl && __jsx("a", {
      target: "_blank",
      href: releaseFormUrl,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 32
      }
    }, "Release Form"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
        offset: 4
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: submiting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 11
      }
    }, "Submit")));
  }

}

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

/***/ "S82o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/common/breadcrumb.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class BreadcrumbComponent extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      breadcrumbs
    } = this.props;
    return __jsx("div", {
      style: {
        marginBottom: '16px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
      href: "/dashboard",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HomeOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }
    })), breadcrumbs && breadcrumbs.length > 0 && breadcrumbs.map((b, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 15
      }
    }, b.href ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: b.href,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 19
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, b.title)) : b.title))));
  }

}

/***/ }),

/***/ "TUN5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformerSchedule; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/performer/Schedule.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const layout = {
  labelCol: {
    lg: {
      span: 4
    },
    sm: {
      span: 6
    }
  },
  wrapperCol: {
    lg: {
      span: 16
    },
    sm: {
      span: 14
    }
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
class PerformerSchedule extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      onFormRefSubmit,
      submiting,
      onChangeTime,
      scheduleValue,
      onChangeCloded
    } = this.props;
    const dayValue = {
      mon: {
        day: 'Monday'
      },
      tue: {
        day: 'Tuesday'
      },
      wed: {
        day: 'Wednesday'
      },
      thu: {
        day: 'Thursday'
      },
      fri: {
        day: 'Friday'
      },
      sat: {
        day: 'Saturday'
      },
      sun: {
        day: 'Sunday'
      }
    };
    const format = 'HH:mm';
    const {
      RangePicker
    } = antd__WEBPACK_IMPORTED_MODULE_1__["TimePicker"];
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({}, layout, {
      name: "form-performer-schedule",
      onFinish: () => onFormRefSubmit(),
      validateMessages: validateMessages,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    }), Object.keys(dayValue).map(key => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      key: key,
      label: dayValue[key].day,
      initialValue: [moment__WEBPACK_IMPORTED_MODULE_2___default()(scheduleValue[key].start, format), scheduleValue[key].end ? moment__WEBPACK_IMPORTED_MODULE_2___default()(scheduleValue[key].end, format) : moment__WEBPACK_IMPORTED_MODULE_2___default()()],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }
    }, __jsx(RangePicker, {
      onChange: (dates, dateStrings) => onChangeTime(dates, dateStrings, key),
      picker: "time",
      format: format,
      style: {
        marginRight: 10
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 13
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      name: key,
      key: key,
      defaultChecked: scheduleValue[key].closed,
      onChange: e => onChangeCloded(e.target.checked, key),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 13
      }
    }, "Not Available"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
        offset: 4
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: submiting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }
    }, "Submit")));
  }

}

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

/***/ "UBht":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_common_layout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Bfpx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("CLrh");
/* harmony import */ var _services_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("diQs");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("NsEo");
/* harmony import */ var _components_performer_AccountForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("jgRl");
/* harmony import */ var _components_performer_Document__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("DXG5");
/* harmony import */ var _components_performer_Schedule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("TUN5");
/* harmony import */ var _components_performer_socialsForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("0Dww");
/* harmony import */ var _components_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("2yP/");
/* harmony import */ var _components_performer_commission_setting__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("6RWp");
var _jsxFileName = "/var/www/admin.dtest.live/pages/performer/create.tsx";

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

class PerformerCreate extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      creating: false,
      fetching: false
    });

    _defineProperty(this, "customFields", {});

    _defineProperty(this, "formRef", Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])());

    _defineProperty(this, "scheduleValue", {
      mon: {
        start: '00:00',
        end: '',
        closed: true
      },
      tue: {
        start: '00:00',
        end: '',
        closed: true
      },
      wed: {
        start: '00:00',
        end: '',
        closed: true
      },
      thu: {
        start: '00:00',
        end: '',
        closed: true
      },
      fri: {
        start: '00:00',
        end: '',
        closed: true
      },
      sat: {
        start: '00:00',
        end: '',
        closed: true
      },
      sun: {
        start: '00:00',
        end: '',
        closed: true
      }
    });

    _defineProperty(this, "dates", []);
  }

  static async getInitialProps() {
    const [countries, languages, categories] = await Promise.all([_services_utils_service__WEBPACK_IMPORTED_MODULE_6__[/* utilsService */ "a"].countriesList(), _services_utils_service__WEBPACK_IMPORTED_MODULE_6__[/* utilsService */ "a"].languagesList(), _services_index__WEBPACK_IMPORTED_MODULE_5__[/* performerCategoryService */ "f"].search({
      sortBy: 'ordering',
      sort: 'asc',
      limit: 100
    })]);
    return {
      countries: countries.data,
      languages: languages.data,
      categories: categories.data && categories.data.data ? categories.data.data : []
    };
  }

  async submit(data) {
    try {
      if (data.password !== data.rePassword) {
        return antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('Confirm password mismatch!');
      }

      if (!Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__[/* validateUsername */ "c"])(data.username)) {
        return antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('Username is invalid!');
      }

      this.setState({
        creating: true
      });
      const resp = await _services_index__WEBPACK_IMPORTED_MODULE_5__[/* performerService */ "g"].create(_objectSpread(_objectSpread(_objectSpread({}, data), this.customFields), {}, {
        schedule: this.scheduleValue
      }));
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].success('Updated successfully');
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push({
        pathname: '/performer/update',
        query: {
          id: resp.data._id
        }
      }, `/performer/update?id=${resp.data._id}`, {
        shallow: false
      });
    } catch (e) {
      const err = (await Promise.resolve(e)) || {};
      antd__WEBPACK_IMPORTED_MODULE_2__["message"].error(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__[/* getResponseError */ "b"])(err) || 'An error occurred, please try again!');
    } finally {
      this.setState({
        creating: false
      });
    }
  }

  onUploaded(field, resp) {
    this.customFields[field] = resp.response.data._id;
  }

  onFormRefSubmit() {
    this.formRef.formRefSubmit();
  }

  onChangeTime(dates, dateStrings, key) {
    this.dates = dates;
    const start = dateStrings[0];
    const end = dateStrings[1];
    let objectKey = this.scheduleValue[key];
    objectKey['start'] = start;
    objectKey['end'] = end;
    this.scheduleValue[key] = _objectSpread(_objectSpread({}, this.scheduleValue[key]), objectKey);
  }

  onChangeCloded(checked, key) {
    const objectKey = this.scheduleValue[key];
    objectKey['closed'] = checked;
    this.scheduleValue[key] = _objectSpread(_objectSpread({}, this.scheduleValue[key]), objectKey);
  }

  onCreateSocials(values) {
    this.customFields['socials'] = values;
  }

  onCreateCommissionSetting(values) {
    this.customFields['commissionSetting'] = values;
    this.onFormRefSubmit();
  }

  render() {
    const {
      creating
    } = this.state;
    const {
      countries,
      languages,
      categories
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 11
      }
    }, "Create performer")), __jsx(_components_common__WEBPACK_IMPORTED_MODULE_12__[/* BreadcrumbComponent */ "a"], {
      breadcrumbs: [{
        title: 'Performers',
        href: '/performer'
      }, {
        title: 'Create new performer'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 9
      }
    }), __jsx(_components_common_layout_page__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"], _extends({
      defaultActiveKey: "basic",
      tabPosition: "left"
    }, layout, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 11
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane, {
      tab: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 32
        }
      }, "General info"),
      key: "basic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 13
      }
    }, __jsx(_components_performer_AccountForm__WEBPACK_IMPORTED_MODULE_8__[/* AccountForm */ "a"], {
      ref: el => this.formRef = el,
      onUploaded: this.onUploaded.bind(this),
      onFinish: this.submit.bind(this),
      submiting: creating,
      countries: countries,
      languages: languages,
      categories: categories,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 15
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane, {
      tab: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 32
        }
      }, "Socials"),
      key: "socials",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }
    }, __jsx(_components_performer_socialsForm__WEBPACK_IMPORTED_MODULE_11__[/* SocialsForm */ "a"], {
      ref: el => this.formRef = el,
      socials: null,
      onFinish: this.onCreateSocials.bind(this),
      submiting: creating,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane, {
      tab: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 32
        }
      }, "Document"),
      key: "document",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }
    }, __jsx(_components_performer_Document__WEBPACK_IMPORTED_MODULE_9__[/* PerformerDocument */ "a"], {
      update: false,
      onUploaded: this.onUploaded.bind(this),
      submiting: creating,
      onFormRefSubmit: this.onFormRefSubmit.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 15
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane, {
      tab: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 32
        }
      }, "Schedule"),
      key: "schedule",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 13
      }
    }, __jsx(_components_performer_Schedule__WEBPACK_IMPORTED_MODULE_10__[/* PerformerSchedule */ "a"], {
      onChangeCloded: this.onChangeCloded.bind(this),
      onChangeTime: this.onChangeTime.bind(this),
      scheduleValue: this.scheduleValue,
      submiting: creating,
      onFormRefSubmit: this.onFormRefSubmit.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 15
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tabs"].TabPane, {
      tab: __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 20
        }
      }, "Commission Setting"),
      key: "commission",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 13
      }
    }, __jsx(_components_performer_commission_setting__WEBPACK_IMPORTED_MODULE_13__[/* CommissionSettingForm */ "a"], {
      submiting: creating,
      onFinish: this.onCreateCommissionSetting.bind(this),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    })))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PerformerCreate);

/***/ }),

/***/ "WowM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUpload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/file/file-upload.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function beforeUpload(file) {
  const isLt2M = file.size / 1024 / 1024 < ("20" || false);

  if (!isLt2M) {
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].error(`File must smaller than ${"20" || false}MB!`);
  }

  return isLt2M;
}

class FileUpload extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: false,
      fileUrl: this.props.fileUrl
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
        this.setState({
          loading: false,
          fileUrl: info.file.response.data ? info.file.response.data.url : 'Done!'
        });
        this.props.onUploaded && this.props.onUploaded({
          response: info.file.response
        });
      }
    });
  }

  render() {
    const uploadButton = __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, this.state.loading ? __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LoadingOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 31
      }
    }) : __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 53
      }
    }), __jsx("div", {
      className: "ant-upload-text",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }
    }, "Upload"));

    const {
      fileUrl
    } = this.state;
    const {
      headers,
      uploadUrl,
      fieldName = 'file'
    } = this.props;
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Upload"], _extends({
      name: fieldName,
      listType: "picture-card",
      className: "avatar-uploader",
      showUploadList: false,
      action: uploadUrl,
      beforeUpload: beforeUpload,
      onChange: this.handleChange
    }, this.props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 7
      }
    }), fileUrl ? __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 20
      }
    }, "Click to download") : uploadButton);
  }

}

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

/***/ "hZ3H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/common/dropdown-action.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class DropdownAction extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      menuOptions = [],
      buttonStyle,
      dropdownProps,
      nameButtonMain
    } = this.props;
    const menu = menuOptions.map(item => __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"].Item, {
      key: item.key,
      onClick: () => item.onClick && item.onClick(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, item.children || item.name));
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], _extends({
      overlay: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 26
        }
      }, menu)
    }, dropdownProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      style: _objectSpread({}, buttonStyle),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }
    }, nameButtonMain || 'Action', __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["DownOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    })));
  }

}

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

/***/ "jgRl":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Exp3");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_user_avatar_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Iz64");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CLrh");
var _jsxFileName = "/var/www/admin.dtest.live/src/components/performer/AccountForm.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const layout = {
  labelCol: {
    lg: {
      span: 4
    },
    sm: {
      span: 10
    }
  },
  wrapperCol: {
    lg: {
      span: 16
    },
    sm: {
      span: 10
    }
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
  constructor(...args) {
    super(...args);

    _defineProperty(this, "formRef", Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])());
  }

  formRefSubmit() {
    this.formRef.current.submit();
  }

  render() {
    const {
      performer,
      onFinish,
      submiting,
      countries,
      languages,
      categories,
      onUploaded,
      studios
    } = this.props;
    const uploadHeaders = {
      authorization: _services_index__WEBPACK_IMPORTED_MODULE_3__[/* authService */ "a"].getToken()
    };
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"], _extends({
      ref: this.formRef
    }, layout, {
      name: "form-performer",
      onFinish: onFinish.bind(this),
      onFinishFailed: () => antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Please complete the required fields in tab general info'),
      validateMessages: validateMessages,
      initialValues: performer ? performer : {
        country: 'US',
        status: 'active',
        gender: 'male',
        languages: ['en'],
        emailVerified: false,
        socials: {
          facebook: 'facebook.com',
          twitter: 'twitter.com',
          instagram: 'instagram.com'
        }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
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
        lineNumber: 92,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
        lineNumber: 99,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
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
        lineNumber: 119,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Unique, lowercase and number, no space or special chars",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
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
        lineNumber: 126,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
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
        lineNumber: 134,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      style: {
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }
    })), categories && categories.length > 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "categoryIds",
      label: "Categories",
      rules: [{
        type: 'array'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      mode: "multiple",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, categories.map(cat => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: cat.slug,
      value: cat._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, cat.name)))), studios && studios.length > 0 && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "studioId",
      label: "Studio",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 13
      }
    }, studios.map(s => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: s._id,
      value: s._id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }
    }, s.name)))), !performer && [__jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      key: "password",
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
        lineNumber: 179,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: "Performer password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      key: "rePassword",
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
        lineNumber: 187,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"].Password, {
      placeholder: "Confirm performer password",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }))], __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "country",
      label: "Country",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      showSearch: true,
      filterOption: (input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 11
      }
    }, countries && countries.map(country => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: country.code,
      value: country.code,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 15
      }
    }, country.name)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "city",
      label: "City",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Enter the city",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "state",
      label: "State",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Enter the state",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "address",
      label: "Address",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Enter the address",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "zipcode",
      label: "Zipcode",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Enter the zipcode",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "languages",
      label: "Languages",
      rules: [{
        type: 'array'
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      mode: "multiple",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 11
      }
    }, languages && languages.map(l => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: l.code,
      value: l.code,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 15
      }
    }, l.name)))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "status",
      label: "Status",
      rules: [{
        required: true
      }],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: "active",
      value: "active",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    }, "Active"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option, {
      key: "inactive",
      value: "inactive",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 13
      }
    }, "Inactive"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      name: "emailVerified",
      label: "Verified Email",
      valuePropName: "checked",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      label: "Avatar",
      help: `Image must smaller than ${"2" || false}MB! Only accept ${".jpeg, .jpg, .png"}.`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 9
      }
    }, __jsx(_components_user_avatar_upload__WEBPACK_IMPORTED_MODULE_2__[/* AvatarUpload */ "a"], {
      imageUrl: performer && performer.avatar ? performer.avatar : '',
      uploadUrl: _services_index__WEBPACK_IMPORTED_MODULE_3__[/* performerService */ "g"].getAvatarUploadUrl(),
      headers: uploadHeaders,
      onUploaded: onUploaded.bind(this, 'avatarId'),
      uploadNow: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 11
      }
    })), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Form"].Item, {
      wrapperCol: _objectSpread(_objectSpread({}, layout.wrapperCol), {}, {
        offset: 4
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      type: "primary",
      htmlType: "submit",
      loading: submiting,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 11
      }
    }, "Submit")));
  }

}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });