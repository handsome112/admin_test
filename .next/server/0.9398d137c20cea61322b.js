exports.ids = [0];
exports.modules = {

/***/ "19BS":
/***/ (function(module, exports) {



/***/ }),

/***/ "KJL1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WYSIWYG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Hz3a");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JC3Y");
/* harmony import */ var react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("RPRI");
/* harmony import */ var draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(draftjs_to_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("d6Hq");
/* harmony import */ var html_to_draftjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(html_to_draftjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("19BS");
/* harmony import */ var _node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/var/www/admin.dtest.live/src/components/wysiwyg/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID XXXXX");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

class WYSIWYG extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onEditorStateChange", editorState => {
      this.props.onChange && this.props.onChange({
        html: draftjs_to_html__WEBPACK_IMPORTED_MODULE_3___default()(Object(draft_js__WEBPACK_IMPORTED_MODULE_1__["convertToRaw"])(editorState.getCurrentContent()))
      });
      this.setState({
        editorState
      });
    });

    if (this.props.html) {
      const blocksFromHtml = html_to_draftjs__WEBPACK_IMPORTED_MODULE_4___default()(this.props.html);
      const {
        contentBlocks,
        entityMap
      } = blocksFromHtml;
      const contentState = draft_js__WEBPACK_IMPORTED_MODULE_1__["ContentState"].createFromBlockArray(contentBlocks, entityMap);
      this.state = {
        editorState: draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createWithContent(contentState)
      };
    } else {
      this.state = {
        editorState: draft_js__WEBPACK_IMPORTED_MODULE_1__["EditorState"].createEmpty()
      };
    }
  }

  render() {
    const {
      editorState
    } = this.state;
    return __jsx("div", {
      className: "editor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }
    }, __jsx(react_draft_wysiwyg__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
      editorState: editorState,
      wrapperClassName: "wysityg-wrapper",
      editorClassName: "wysityg-editor",
      onEditorStateChange: this.onEditorStateChange,
      toolbar: {// image: {
        //   uploadCallback: uploadImageCallBack,
        //   alt: { present: true, mandatory: true }
        // }
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }));
  }

}

/***/ })

};;