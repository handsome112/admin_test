(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(u.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},u=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,u=e.hasQuery;return n||o&&(void 0!==u&&u)}},"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"2mql":function(e,t,n){"use strict";var r=n("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},c={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function a(e){return r.isMemo(e)?c:i[e.$$typeof]||o}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=c;var f=Object.defineProperty,l=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(m){var o=d(n);o&&o!==m&&e(t,o,r)}var c=l(n);s&&(c=c.concat(s(n)));for(var i=a(t),y=a(n),b=0;b<c.length;++b){var v=c[b];if(!u[v]&&(!r||!r[v])&&(!y||!y[v])&&(!i||!i[v])){var h=p(n,v);try{f(t,v,h)}catch(_){}}}}return t}},"5fIB":function(e,t,n){var r=n("7eYB");e.exports=function(e){if(Array.isArray(e))return r(e)}},"8Kt/":function(e,t,n){"use strict";t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r=a(n("q1tI")),o=a(n("Xuae")),u=n("lwAK"),c=n("FYa8"),i=n("/0+H");function a(e){return e&&e.__esModule?e:{default:e}}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var s=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var u=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var c=o.key.slice(o.key.indexOf("$")+1);e.has(c)?u=!1:e.add(c)}switch(o.type){case"title":case"base":t.has(o.type)?u=!1:t.add(o.type);break;case"meta":for(var i=0,a=s.length;i<a;i++){var f=s[i];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?u=!1:n.add(f);else{var l=o.props[f],p=r[f]||new Set;p.has(l)?u=!1:(p.add(l),r[f]=p)}}}return u}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}var d=(0,o.default)();function m(e){var t=e.children;return(r.default.createElement(u.AmpStateContext.Consumer,null,(function(e){return r.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:p,handleStateChange:n,inAmpMode:(0,i.isInAmpMode)(e)},t)}))})))}m.rewind=d.rewind;var y=m;t.default=y},Abbm:function(e,t,n){e.exports={spinner:"FqxmFNz4OrHU-AwWcntBB"}},Bfpx:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("1OyB"),o=n("vuIU"),u=n("Ji7U"),c=n("md7G"),i=n("foSv"),a=n("q1tI"),f=n.n(a),l=n("TSYQ"),s=n.n(l),p=n("TW7V"),d=(n("r1gO"),"/var/www/admin.dtest.live/src/components/common/layout/page.tsx"),m=f.a.createElement;function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(i.a)(e);if(t){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var b=function(e){Object(u.a)(n,e);var t=y(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=e.loading,o=void 0!==r&&r,u=e.inner,c=void 0===u||u;return m("div",{className:s()(t,{contentInner:c}),style:o?{height:"calc(100vh - 184px)",overflow:"hidden"}:null,__self:this,__source:{fileName:d,lineNumber:20,columnNumber:7}},o?m(p.a,{spinning:!0,__self:this,__source:{fileName:d,lineNumber:26,columnNumber:20}}):"",n)}}]),n}(a.PureComponent)},"Faq/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/logout",function(){return n("hBsm")}])},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},Ji7U:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},Lmjj:function(e,t,n){},TOwV:function(e,t,n){"use strict";e.exports=n("qT12")},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var u=typeof r;if("string"===u||"number"===u)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===u)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},TW7V:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),u=n("TSYQ"),c=n.n(u),i=(n("Abbm"),"/var/www/admin.dtest.live/src/components/common/base/loader.tsx"),a=o.a.createElement;t.a=function(e){var t=e.spinning,n=void 0!==t&&t,r=e.fullScreen,o=void 0!==r&&r;return a("div",{className:c()("loader",{hidden:!n,fullScreen:o}),__self:void 0,__source:{fileName:i,lineNumber:7,columnNumber:5}},a("div",{className:"warpper",__self:void 0,__source:{fileName:i,lineNumber:13,columnNumber:7}},a("div",{className:"inner",__self:void 0,__source:{fileName:i,lineNumber:14,columnNumber:9}}),a("div",{className:"text",__self:void 0,__source:{fileName:i,lineNumber:15,columnNumber:9}},"LOADING")))}},U8pU:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return r}))},Xuae:function(e,t,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),u=n("qXWd"),c=n("48fX"),i=n("tCBg"),a=n("T0f4"),f=n("mPvQ");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),p=!1;t.default=function(){var e,t=new Set;function n(n){e=n.props.reduceComponentsToState(f(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return(function(i){c(f,i);var a=l(f);function f(e){var o;return r(this,f),o=a.call(this,e),p&&(t.add(u(o)),n(u(o))),o}return o(f,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}],[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),f}(s.Component))}},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},foSv:function(e,t,n){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r}))},hBsm:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),o=n("vuIU"),u=n("Ji7U"),c=n("md7G"),i=n("foSv"),a=n("rePB"),f=n("q1tI"),l=n.n(f),s=n("/MKj"),p=(n("Lmjj"),n("8Kt/")),d=n.n(p),m=n("kXO4"),y=n("Bfpx"),b="/var/www/admin.dtest.live/pages/auth/logout.tsx",v=l.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(i.a)(e);if(t){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var _=function(e){Object(u.a)(n,e);var t=h(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.logout()}},{key:"render",value:function(){return v(f.Fragment,{__self:this,__source:{fileName:b,lineNumber:24,columnNumber:7}},v(d.a,{__self:this,__source:{fileName:b,lineNumber:25,columnNumber:9}},v("title",{__self:this,__source:{fileName:b,lineNumber:26,columnNumber:11}},"Log out")),v(y.a,{__self:this,__source:{fileName:b,lineNumber:28,columnNumber:9}},v("span",{__self:this,__source:{fileName:b,lineNumber:29,columnNumber:11}},"Logout...")))}}]),n}(f.PureComponent);Object(a.a)(_,"authenticate",!1);t.default=Object(s.b)((function(e){return{sLogout:e.auth.logout}}),{logout:m.d})(_)},kG2m:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},kXO4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return f})),n.d(t,"e",(function(){return l}));var r=n("vo7w"),o=Object(r.b)("login","LOGIN"),u=o.login,c=o.loginSuccess,i=o.loginFail,a=Object(r.b)("logout","LogOut"),f=a.logout,l=a.logoutSuccess;a.logoutFail},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},mPvQ:function(e,t,n){var r=n("5fIB"),o=n("rlHP"),u=n("KckH"),c=n("kG2m");e.exports=function(e){return r(e)||o(e)||u(e)||c()}},md7G:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("U8pU"),o=n("JX7q");function u(e,t){return!t||"object"!==Object(r.a)(t)&&"function"!==typeof t?Object(o.a)(e):t}},o0o1:function(e,t,n){e.exports=n("ls82")},qT12:function(e,t,n){"use strict";var r="function"===typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,u=r?Symbol.for("react.portal"):60106,c=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,f=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,m=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,b=r?Symbol.for("react.memo"):60115,v=r?Symbol.for("react.lazy"):60116,h=r?Symbol.for("react.block"):60121,_=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case s:case p:case c:case a:case i:case m:return e;default:switch(e=e&&e.$$typeof){case l:case d:case v:case b:case f:return e;default:return t}}case u:return t}}}function S(e){return O(e)===p}t.AsyncMode=s,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=f,t.Element=o,t.ForwardRef=d,t.Fragment=c,t.Lazy=v,t.Memo=b,t.Portal=u,t.Profiler=a,t.StrictMode=i,t.Suspense=m,t.isAsyncMode=function(e){return S(e)||O(e)===s},t.isConcurrentMode=S,t.isContextConsumer=function(e){return O(e)===l},t.isContextProvider=function(e){return O(e)===f},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return O(e)===d},t.isFragment=function(e){return O(e)===c},t.isLazy=function(e){return O(e)===v},t.isMemo=function(e){return O(e)===b},t.isPortal=function(e){return O(e)===u},t.isProfiler=function(e){return O(e)===a},t.isStrictMode=function(e){return O(e)===i},t.isSuspense=function(e){return O(e)===m},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===c||e===p||e===a||e===i||e===m||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===v||e.$$typeof===b||e.$$typeof===f||e.$$typeof===l||e.$$typeof===d||e.$$typeof===_||e.$$typeof===w||e.$$typeof===g||e.$$typeof===h)},t.typeOf=O},r1gO:function(e,t,n){},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},rlHP:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n}},[["Faq/",0,1,9,16,31,2,29,33,3]]]);