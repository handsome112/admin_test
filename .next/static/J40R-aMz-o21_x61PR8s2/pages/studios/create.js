(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{"2yP/":function(e,t,r){"use strict";r("AyyA");var n=r("S82o");r.d(t,"a",(function(){return n.a}));var a=r("hZ3H");r.d(t,"b",(function(){return a.a}))},HtGd:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/studios/create",function(){return r("vpLb")}])},NsEo:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return s}));var n=r("o0o1"),a=r.n(n),i=r("HaE+");r("LvDl");var o=r("CLrh");function c(e){if(!e)return"";if(Array.isArray(e.message)){var t=e.message[0];return t.constraints?Object.values(t.constraints)[0]:e.error||"Bad request!"}return"string"===typeof e.message?e.message:"Bad request!"}function u(e){return/^[a-zA-Z0-9]+$/.test(e)}function s(e,t){return new Promise(function(){var r=Object(i.a)(a.a.mark((function r(n,i){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(c=new XMLHttpRequest).onload=function(){var e=new Blob([c.response],{type:"text/csv"}),r=URL.createObjectURL(e),a=document.createElement("a");a.href=r,a.setAttribute("download",t),a.click(),URL.revokeObjectURL(r),n({success:!0})},c.onerror=function(e){i(e)},c.open("GET",e),c.setRequestHeader("Authorization",o.a.getToken()),c.responseType="blob",c.send();case 7:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())}},S82o:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var n=r("1OyB"),a=r("vuIU"),i=r("Ji7U"),o=r("md7G"),c=r("foSv"),u=r("q1tI"),s=r.n(u),l=r("bE4q"),m=r("uqfK"),f=r("YFqc"),b=r.n(f),p="/var/www/admin.dtest.live/src/components/common/breadcrumb.tsx",d=s.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var _=function(e){Object(i.a)(r,e);var t=h(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this,t=this.props.breadcrumbs;return d("div",{style:{marginBottom:"16px"},__self:this,__source:{fileName:p,lineNumber:19,columnNumber:7}},d(l.a,{__self:this,__source:{fileName:p,lineNumber:20,columnNumber:9}},d(l.a.Item,{href:"/dashboard",__self:this,__source:{fileName:p,lineNumber:21,columnNumber:11}},d(m.a,{__self:this,__source:{fileName:p,lineNumber:22,columnNumber:13}})),t&&t.length>0&&t.map((function(t,r){return d(l.a.Item,{key:r,__self:e,__source:{fileName:p,lineNumber:27,columnNumber:15}},t.href?d(b.a,{href:t.href,__self:e,__source:{fileName:p,lineNumber:29,columnNumber:19}},d("a",{__self:e,__source:{fileName:p,lineNumber:30,columnNumber:21}},t.title)):t.title)}))))}}]),r}(u.PureComponent)},Sdc0:function(e,t,r){"use strict";var n=r("q1tI"),a=r("rePB"),i=r("ODXe"),o=r("Ff2n"),c=r("TSYQ"),u=r.n(c),s=r("6cGi"),l=r("4IlW"),m=n.forwardRef((function(e,t){var r,c=e.prefixCls,m=void 0===c?"rc-switch":c,f=e.className,b=e.checked,p=e.defaultChecked,d=e.disabled,h=e.loadingIcon,_=e.checkedChildren,N=e.unCheckedChildren,v=e.onClick,y=e.onChange,O=e.onKeyDown,w=Object(o.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=Object(s.a)(!1,{value:b,defaultValue:p}),g=Object(i.a)(j,2),P=g[0],k=g[1];function C(e,t){var r=P;return d||(k(r=e),null===y||void 0===y||y(r,t)),r}var x=u()(m,f,(r={},Object(a.a)(r,"".concat(m,"-checked"),P),Object(a.a)(r,"".concat(m,"-disabled"),d),r));return n.createElement("button",Object.assign({},w,{type:"button",role:"switch","aria-checked":P,disabled:d,className:x,ref:t,onKeyDown:function(e){e.which===l.a.LEFT?C(!1,e):e.which===l.a.RIGHT&&C(!0,e),null===O||void 0===O||O(e)},onClick:function(e){var t=C(!P,e);null===v||void 0===v||v(t,e)}}),h,n.createElement("span",{className:"".concat(m,"-inner")},P?_:N))}));m.displayName="Switch";var f=m,b=r("gZBC"),p=r.n(b),d=r("g0mS"),h=r("H84U"),_=r("3Nzz"),N=r("uaoM");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r},w=n.forwardRef((function(e,t){var r,a=e.prefixCls,i=e.size,o=e.loading,c=e.className,s=void 0===c?"":c,l=e.disabled,m=O(e,["prefixCls","size","loading","className","disabled"]);Object(N.a)("checked"in m||!("value"in m),"Switch","`value` is not a valid prop, do you mean `checked`?");var b=n.useContext(h.b),w=b.getPrefixCls,j=b.direction,g=n.useContext(_.b),P=w("switch",a),k=n.createElement("div",{className:"".concat(P,"-handle")},o&&n.createElement(p.a,{className:"".concat(P,"-loading-icon")})),C=u()(s,(y(r={},"".concat(P,"-small"),"small"===(i||g)),y(r,"".concat(P,"-loading"),o),y(r,"".concat(P,"-rtl"),"rtl"===j),r));return n.createElement(d.a,{insertExtraNode:!0},n.createElement(f,v({},m,{prefixCls:P,className:C,disabled:l||o,ref:t,loadingIcon:k})))}));w.__ANT_SWITCH=!0,w.displayName="Switch";t.a=w},eSqG:function(e,t,r){"use strict";r.d(t,"a",(function(){return C}));var n=r("wx14"),a=r("1OyB"),i=r("vuIU"),o=r("JX7q"),c=r("Ji7U"),u=r("md7G"),s=r("foSv"),l=r("rePB"),m=r("q1tI"),f=r.n(m),b=r("Vl3Y"),p=r("tsqr"),d=r("5rEg"),h=r("2fM7"),_=r("fyUT"),N=r("Sdc0"),v=r("2/Rp"),y="/var/www/admin.dtest.live/src/components/studio/studio-account-form.tsx",O=f.a.createElement;function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){Object(l.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(u.a)(this,r)}}var P={labelCol:{span:4},wrapperCol:{span:16}},k={required:"This field is required!",types:{email:"Not a validate email!",number:"Not a validate number!"},number:{range:"Must be between ${min} and ${max}"}},C=function(e){Object(c.a)(r,e);var t=g(r);function r(){var e;Object(a.a)(this,r);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),Object(l.a)(Object(o.a)(e),"state",{loading:!1}),e}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.studio,a=t.onFinish,i=t.submiting,o=t.countries;return O(b.a,Object(n.a)({},P,{name:"form-performer",onFinish:a,onFinishFailed:function(){return p.a.error("Please complete the required fields in tab general info")},validateMessages:k,initialValues:r||{country:"US",status:"active",emailVerified:!1},__self:this,__source:{fileName:y,lineNumber:45,columnNumber:7}}),O(b.a.Item,{name:"name",label:"Studio name",rules:[{pattern:new RegExp("^[a-zA-Z0-9 ]*$"),message:"Studio name must according to Alphanumeric formating"},{whitespace:!0,message:"Please input your Studio name!"},{required:!0,message:"Please input your Studio name!"}],__self:this,__source:{fileName:y,lineNumber:65,columnNumber:9}},O(d.a,{__self:this,__source:{fileName:y,lineNumber:83,columnNumber:11}})),O(b.a.Item,{name:"username",label:"User Name",rules:[{pattern:new RegExp("^[a-zA-Z0-9 ]*$"),message:"User name must according to Alphanumeric formating"},{whitespace:!0,message:"Please input your user name!"},{required:!0,message:"Please input your user name!"}],__self:this,__source:{fileName:y,lineNumber:85,columnNumber:9}},O(d.a,{placeholder:"Username name",__self:this,__source:{fileName:y,lineNumber:103,columnNumber:11}})),O(b.a.Item,{name:"email",label:"Email Address",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],__self:this,__source:{fileName:y,lineNumber:105,columnNumber:9}},O(d.a,{placeholder:"studio@example.com",__self:this,__source:{fileName:y,lineNumber:119,columnNumber:11}})),!r&&[O(b.a.Item,{key:"password",name:"password",label:"Password",rules:[{required:!0},{min:6}],__self:this,__source:{fileName:y,lineNumber:123,columnNumber:11}},O(d.a.Password,{placeholder:"Performer password",__self:this,__source:{fileName:y,lineNumber:129,columnNumber:13}})),O(b.a.Item,{key:"rePassword",name:"rePassword",label:"Confirm password",rules:[{required:!0},{min:6}],__self:this,__source:{fileName:y,lineNumber:131,columnNumber:11}},O(d.a.Password,{placeholder:"Confirm performer password",__self:this,__source:{fileName:y,lineNumber:137,columnNumber:13}}))],O(b.a.Item,{name:"country",label:"Country",rules:[{required:!0}],__self:this,__source:{fileName:y,lineNumber:141,columnNumber:9}},O(h.a,{showSearch:!0,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},__self:this,__source:{fileName:y,lineNumber:142,columnNumber:11}},o.map((function(t){return O(h.a.Option,{key:t.code,value:t.code,__self:e,__source:{fileName:y,lineNumber:149,columnNumber:15}},t.name)})))),!r&&[O(b.a.Item,{name:"commission",label:"Commission",rules:[{validator:function(e,t){return parseInt(t)>0&&parseInt(t)<100?Promise.resolve():Promise.reject("Value must be greater than 0 and less than 100")}}],__self:this,__source:{fileName:y,lineNumber:156,columnNumber:11}},O(_.a,{min:1,max:99,style:{width:"100%"},__self:this,__source:{fileName:y,lineNumber:172,columnNumber:13}}))],O(b.a.Item,{name:"status",label:"Status",rules:[{required:!0}],__self:this,__source:{fileName:y,lineNumber:175,columnNumber:9}},O(h.a,{__self:this,__source:{fileName:y,lineNumber:176,columnNumber:11}},O(h.a.Option,{key:"active",value:"active",__self:this,__source:{fileName:y,lineNumber:177,columnNumber:13}},"Active"),O(h.a.Option,{key:"inactive",value:"inactive",__self:this,__source:{fileName:y,lineNumber:180,columnNumber:13}},"Inactive"))),O(b.a.Item,{name:"emailVerified",label:"Verified Email",valuePropName:"checked",__self:this,__source:{fileName:y,lineNumber:185,columnNumber:9}},O(N.a,{defaultChecked:!(!r||!r.emailVerified)&&r.emailVerified,__self:this,__source:{fileName:y,lineNumber:190,columnNumber:11}})),O(b.a.Item,{wrapperCol:j(j({},P.wrapperCol),{},{offset:4}),__self:this,__source:{fileName:y,lineNumber:196,columnNumber:9}},O(v.a,{type:"primary",htmlType:"submit",loading:i,__self:this,__source:{fileName:y,lineNumber:197,columnNumber:11}},"Submit")))}}]),r}(m.PureComponent)},hZ3H:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n=r("wx14"),a=r("rePB"),i=r("1OyB"),o=r("vuIU"),c=r("Ji7U"),u=r("md7G"),s=r("foSv"),l=r("q1tI"),m=r.n(l),f=r("8Skl"),b=r("BvKs"),p=r("jsC+"),d=r("2/Rp"),h="/var/www/admin.dtest.live/src/components/common/dropdown-action.tsx",_=m.a.createElement;function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(u.a)(this,r)}}var O=function(e){Object(c.a)(r,e);var t=y(r);function r(){return Object(i.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.menuOptions,a=void 0===r?[]:r,i=t.buttonStyle,o=t.dropdownProps,c=t.nameButtonMain,u=a.map((function(t){return _(b.a.Item,{key:t.key,onClick:function(){return t.onClick&&t.onClick()},__self:e,__source:{fileName:h,lineNumber:28,columnNumber:7}},t.children||t.name)}));return _(p.a,Object(n.a)({overlay:_(b.a,{__self:this,__source:{fileName:h,lineNumber:33,columnNumber:26}},u)},o,{__self:this,__source:{fileName:h,lineNumber:33,columnNumber:7}}),_(d.a,{style:v({},i),__self:this,__source:{fileName:h,lineNumber:34,columnNumber:9}},c||"Action",_(f.a,{__self:this,__source:{fileName:h,lineNumber:36,columnNumber:11}})))}}]),r}(l.PureComponent)},uqfK:function(e,t,r){"use strict";var n=r("q1tI"),a={name:"home",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]}},i=r("6VBw"),o=function(e,t){return n.createElement(i.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="HomeOutlined";t.a=n.forwardRef(o)},vpLb:function(e,t,r){"use strict";r.r(t);var n=r("ODXe"),a=r("o0o1"),i=r.n(a),o=r("HaE+"),c=r("1OyB"),u=r("vuIU"),s=r("JX7q"),l=r("Ji7U"),m=r("md7G"),f=r("foSv"),b=r("rePB"),p=r("q1tI"),d=r.n(p),h=r("8Kt/"),_=r.n(h),N=r("tsqr"),v=r("ZTPi"),y=r("Bfpx"),O=r("nOHt"),w=r.n(O),j=r("CLrh"),g=r("diQs"),P=r("NsEo"),k=r("eSqG"),C=r("2yP/"),x=r("LvDl"),S="/var/www/admin.dtest.live/pages/studios/create.tsx",E=d.a.createElement;function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){Object(b.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(m.a)(this,r)}}var B=function(e){Object(l.a)(r,e);var t=q(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),Object(b.a)(Object(s.a)(e),"state",{creating:!1,fetching:!1}),Object(b.a)(Object(s.a)(e),"_document",void 0),Object(b.a)(Object(s.a)(e),"customFields",{}),e}return Object(u.a)(r,[{key:"onBeforeUpload",value:function(e){this._document=e}},{key:"submit",value:function(){var e=Object(o.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.password===t.rePassword){e.next=3;break}return e.abrupt("return",N.a.error("Confirm password mismatch!"));case 3:if(Object(P.c)(t.username)){e.next=5;break}return e.abrupt("return",N.a.error("Username is invalid!"));case 5:return t=Object(x.omit)(t,["rePassword"]),this.setState({creating:!0}),e.next=9,j.i.create(R(R({},t),this.customFields));case 9:e.sent,w.a.push({pathname:"/studios"},"/studios",{shallow:!1}),e.next=22;break;case 13:return e.prev=13,e.t0=e.catch(0),e.next=17,Promise.resolve(e.t0);case 17:if(e.t1=e.sent,e.t1){e.next=20;break}e.t1={};case 20:r=e.t1,N.a.error(Object(P.b)(r)||"An error occurred, please try again!");case 22:return e.prev=22,this.setState({creating:!1}),e.finish(22);case 25:case"end":return e.stop()}}),e,this,[[0,13,22,25]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.creating,t=this.props.countries;return E(p.Fragment,{__self:this,__source:{fileName:S,lineNumber:85,columnNumber:7}},E(_.a,{__self:this,__source:{fileName:S,lineNumber:86,columnNumber:9}},E("title",{__self:this,__source:{fileName:S,lineNumber:87,columnNumber:11}},"Create Studio")),E(C.a,{breadcrumbs:[{title:"Studio",href:"/studios"},{title:"Create new Studio"}],__self:this,__source:{fileName:S,lineNumber:89,columnNumber:9}}),E(y.a,{__self:this,__source:{fileName:S,lineNumber:95,columnNumber:9}},E(v.a,{defaultActiveKey:"basic",tabPosition:"left",__self:this,__source:{fileName:S,lineNumber:96,columnNumber:11}},E(v.a.TabPane,{tab:E("span",{__self:this,__source:{fileName:S,lineNumber:97,columnNumber:32}},"General info"),key:"basic",__self:this,__source:{fileName:S,lineNumber:97,columnNumber:13}},E(k.a,{onFinish:this.submit.bind(this),submiting:e,countries:t,__self:this,__source:{fileName:S,lineNumber:98,columnNumber:15}})))))}}],[{key:"getInitialProps",value:function(){var e=Object(o.a)(i.a.mark((function e(){var t,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([g.a.countriesList(),g.a.languagesList(),j.f.search({sortBy:"ordering",sort:"asc",limit:100})]);case 2:return t=e.sent,r=Object(n.a)(t,2),a=r[0],r[1],e.abrupt("return",{countries:a.data});case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),r}(p.PureComponent);t.default=B}},[["HtGd",0,1,9,16,2,4,5,6,7,10,8,12,11,13,14,15,17,18,19,20,21,25,27,30,3]]]);