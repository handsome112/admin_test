(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{"6VBw":function(t,e,n){"use strict";var r=n("ODXe"),o=n("rePB"),a=n("Ff2n"),c=n("q1tI"),i=n.n(c),s=n("TSYQ"),u=n.n(s),l=n("VTBJ"),f=n("U8pU"),p=n("HXN9"),d=n("Kwbf"),v=n("Gu+u");function h(t){return"object"===Object(f.a)(t)&&"string"===typeof t.name&&"string"===typeof t.theme&&("object"===Object(f.a)(t.icon)||"function"===typeof t.icon)}function y(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(t).reduce((function(e,n){var r=t[n];switch(n){case"class":e.className=r,delete e.class;break;default:e[n]=r}return e}),{})}function m(t){return Object(p.generate)(t)[0]}function b(t){return t?Array.isArray(t)?t:[t]:[]}var O="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",g=!1,j={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var k=function(t){var e,n,r=t.icon,o=t.className,s=t.onClick,u=t.style,f=t.primaryColor,p=t.secondaryColor,b=Object(a.a)(t,["icon","className","onClick","style","primaryColor","secondaryColor"]),k=j;if(f&&(k={primaryColor:f,secondaryColor:p||m(f)}),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O;Object(c.useEffect)((function(){g||(Object(v.insertCss)(t,{prepend:!0}),g=!0)}),[])}(),e=h(r),n="icon should be icon definiton, but got ".concat(r),Object(d.a)(e,"[@ant-design/icons] ".concat(n)),!h(r))return null;var w=r;return w&&"function"===typeof w.icon&&(w=Object(l.a)(Object(l.a)({},w),{},{icon:w.icon(k.primaryColor,k.secondaryColor)})),function t(e,n,r){return r?i.a.createElement(e.tag,Object(l.a)(Object(l.a)({key:n},y(e.attrs)),r),(e.children||[]).map((function(r,o){return t(r,"".concat(n,"-").concat(e.tag,"-").concat(o))}))):i.a.createElement(e.tag,Object(l.a)({key:n},y(e.attrs)),(e.children||[]).map((function(r,o){return t(r,"".concat(n,"-").concat(e.tag,"-").concat(o))})))}(w.icon,"svg-".concat(w.name),Object(l.a)({className:o,onClick:s,style:u,"data-icon":w.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},b))};k.displayName="IconReact",k.getTwoToneColors=function(){return Object(l.a)({},j)},k.setTwoToneColors=function(t){var e=t.primaryColor,n=t.secondaryColor;j.primaryColor=e,j.secondaryColor=n||m(e),j.calculated=!!n};var w=k;function C(t){var e=b(t),n=Object(r.a)(e,2),o=n[0],a=n[1];return w.setTwoToneColors({primaryColor:o,secondaryColor:a})}C("#1890ff");var U=c.forwardRef((function(t,e){var n=t.className,i=t.icon,s=t.spin,l=t.rotate,f=t.tabIndex,p=t.onClick,d=t.twoToneColor,v=Object(a.a)(t,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),h=u()("anticon",Object(o.a)({},"anticon-".concat(i.name),Boolean(i.name)),n),y=u()({"anticon-spin":!!s||"loading"===i.name}),m=f;void 0===m&&p&&(m=-1);var O=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,g=b(d),j=Object(r.a)(g,2),k=j[0],C=j[1];return c.createElement("span",Object.assign({role:"img","aria-label":i.name},v,{ref:e,tabIndex:m,onClick:p,className:h}),c.createElement(w,{className:y,icon:i,primaryColor:k,secondaryColor:C,style:O}))}));U.displayName="AntdIcon",U.getTwoToneColor=function(){var t=w.getTwoToneColors();return t.calculated?[t.primaryColor,t.secondaryColor]:t.primaryColor},U.setTwoToneColor=C;e.a=U},D9zB:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("1OyB"),o=n("vuIU"),a=n("Ji7U"),c=n("md7G"),i=n("foSv");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var o=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var u=new(function(t){Object(a.a)(n,t);var e=s(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"create",value:function(t){return this.post("/studio/register",t)}},{key:"update",value:function(t,e){return this.put("/studio/".concat(t,"/update"),e)}},{key:"search",value:function(t,e){return this.get(this.buildUrl("/studio/search",t),e)}},{key:"findById",value:function(t){return this.get("/studio/".concat(t,"/view"))}},{key:"updateStudioCommission",value:function(t,e){return this.put("/studio/commission/".concat(t),e)}},{key:"getUploadDocumentUrl",value:function(t){return t?"".concat("https://api.dtest.live","/studio/").concat(t,"/documents/upload"):"".concat("https://api.dtest.live","/studio/documents/upload")}}]),n}(n("/bfT").a))},ITiG:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("rePB"),o=n("1OyB"),a=n("vuIU"),c=n("Ji7U"),i=n("md7G"),s=n("foSv");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var f=new(function(t){Object(c.a)(n,t);var e=l(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"me",value:function(t){return this.get("/users/me",t)}},{key:"updateMe",value:function(t){return this.put("/admin/users",t)}},{key:"create",value:function(t){return this.post("/admin/users",t)}},{key:"update",value:function(t,e){return this.put("/admin/users/".concat(t),e)}},{key:"getAvatarUploadUrl",value:function(t){return t?"".concat("https://api.dtest.live","/admin/users/").concat(t,"/avatar/upload"):"".concat("https://api.dtest.live","/users/avatar/upload")}},{key:"uploadAvatarUser",value:function(t,e){return this.upload("/admin/users/".concat(e,"/avatar/upload"),[{file:t,fieldname:"avatar"}])}},{key:"search",value:function(t){return this.get(this.buildUrl("/admin/users/search",t))}},{key:"findById",value:function(t){return this.get("/admin/users/".concat(t,"/view"))}},{key:"exportCsv",value:function(t){return"https://api.dtest.live"+this.buildUrl("/admin/users/export/csv",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t))}}]),n}(n("/bfT").a))},NsEo:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return u}));var r=n("o0o1"),o=n.n(r),a=n("HaE+");n("LvDl");var c=n("CLrh");function i(t){if(!t)return"";if(Array.isArray(t.message)){var e=t.message[0];return e.constraints?Object.values(e.constraints)[0]:t.error||"Bad request!"}return"string"===typeof t.message?t.message:"Bad request!"}function s(t){return/^[a-zA-Z0-9]+$/.test(t)}function u(t,e){return new Promise(function(){var n=Object(a.a)(o.a.mark((function n(r,a){var i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:(i=new XMLHttpRequest).onload=function(){var t=new Blob([i.response],{type:"text/csv"}),n=URL.createObjectURL(t),o=document.createElement("a");o.href=n,o.setAttribute("download",e),o.click(),URL.revokeObjectURL(n),r({success:!0})},i.onerror=function(t){a(t)},i.open("GET",t),i.setRequestHeader("Authorization",c.a.getToken()),i.responseType="blob",i.send();case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}())}},Ol7k:function(t,e,n){"use strict";var r=n("PKem"),o=n("ZX9x");r.b.Sider=o.b,e.a=r.b},XQPl:function(t,e,n){"use strict";n.d(e,"a",(function(){return f}));var r=n("rePB"),o=n("1OyB"),a=n("vuIU"),c=n("Ji7U"),i=n("md7G"),s=n("foSv");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(s.a)(t);if(e){var o=Object(s.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var f=new(function(t){Object(c.a)(n,t);var e=l(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"create",value:function(t){return this.post("/admin/performers",t)}},{key:"update",value:function(t,e){return this.put("/admin/performers/".concat(t),e)}},{key:"search",value:function(t){return this.get(this.buildUrl("/admin/performers/search",t))}},{key:"searchOnline",value:function(t){return this.get(this.buildUrl("/admin/performers/online",t))}},{key:"findById",value:function(t){return this.get("/admin/performers/".concat(t,"/view"))}},{key:"getUploadDocumentUrl",value:function(t){return"".concat("https://api.dtest.live","/admin/performers/documents/upload")}},{key:"getAvatarUploadUrl",value:function(){return"".concat("https://api.dtest.live","/admin/performers/avatar/upload")}},{key:"updateCommissionSetting",value:function(t,e){return this.put("/admin/performer-commission/".concat(t),e)}},{key:"exportCsv",value:function(t){return"https://api.dtest.live"+this.buildUrl("/admin/performers/export/csv",function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t))}}]),n}(n("/bfT").a))},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),a=n("48fX"),c=n("tCBg"),i=n("T0f4");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=i(t);if(e){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var u=n("AroE"),l=n("7KCV");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),v=n("g/15"),h=u(n("nOHt")),y=n("elyg");function m(t){return t&&"object"===typeof t?(0,v.formatWithValidation)(t):t}var b=new Map,O=window.IntersectionObserver,g={};function j(){return f||(O?f=new O((function(t){t.forEach((function(t){if(b.has(t.target)){var e=b.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),b.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var k=function(t){a(n,t);var e=s(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,a){if(r&&o===e&&a===n)return r;var c=t(o,a);return e=o,n=a,r=c,c}}((function(t,e){return{href:(0,y.addBasePath)(m(t)),as:e?(0,y.addBasePath)(m(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),c=a.href,i=a.as;if(function(t){var e=(0,d.parse)(t,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(c)){var s=window.location.pathname;c=(0,d.resolve)(s,c),i=i?(0,d.resolve)(s,i):c,t.preventDefault();var u=o.props.scroll;null==u&&(u=i.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](c,i,{shallow:o.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,d.resolve)(t,n);return[o,r?(0,d.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&O&&t&&t.tagName&&(this.cleanUpListeners(),g[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=j();return n?(n.observe(t),b.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}b.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();h.default.prefetch(e[0],e[1],t).catch((function(t){0})),g[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var a=p.Children.only(e),c={ref:function(e){t.handleRef(e),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(e):"object"===typeof a.ref&&(a.ref.current=e))},onMouseEnter:function(e){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(c.href=o||r),p.default.cloneElement(a,c)}}]),n}(p.Component);e.default=k}}]);