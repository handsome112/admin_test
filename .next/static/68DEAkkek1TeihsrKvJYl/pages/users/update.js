(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{"05yZ":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("wx14"),o=r("rePB"),a=r("q1tI"),i=r.n(a),s=r("Vl3Y"),u=r("5rEg"),c=r("2/Rp"),p="/var/www/admin.dtest.live/src/components/user/update-password-form.tsx",l=i.a.createElement;function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={labelCol:{span:4},wrapperCol:{span:16}},d=function(e){var t=e.onFinish,r=e.updating,o=void 0!==r&&r;return l(s.a,Object(n.a)({name:"nest-messages",onFinish:t.bind(void 0)},m,{__self:void 0,__source:{fileName:p,lineNumber:11,columnNumber:5}}),l(s.a.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"},{min:6,max:14,message:"Passoword should be 6-14 characters"}],__self:void 0,__source:{fileName:p,lineNumber:12,columnNumber:7}},l(u.a.Password,{placeholder:"Enter password. At least 6 characters",__self:void 0,__source:{fileName:p,lineNumber:24,columnNumber:9}})),l(s.a.Item,{wrapperCol:b(b({},m.wrapperCol),{},{offset:4}),__self:void 0,__source:{fileName:p,lineNumber:26,columnNumber:7}},l(c.a,{type:"primary",htmlType:"submit",loading:o,__self:void 0,__source:{fileName:p,lineNumber:27,columnNumber:9}},"Update")))}},"2mql":function(e,t,r){"use strict";var n=r("TOwV"),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function u(e){return n.isMemo(e)?i:s[e.$$typeof]||o}s[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[n.Memo]=i;var c=Object.defineProperty,p=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,b=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(m){var o=b(r);o&&o!==m&&e(t,o,n)}var i=p(r);l&&(i=i.concat(l(r)));for(var s=u(t),d=u(r),h=0;h<i.length;++h){var v=i[h];if(!a[v]&&(!n||!n[v])&&(!d||!d[v])&&(!s||!s[v])){var y=f(r,v);try{c(t,v,y)}catch(_){}}}}return t}},I8Z2:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return _})),r.d(t,"c",(function(){return g}));var n=r("q1tI"),o=r.n(n),a=r("17x9"),i=r.n(a),s=i.a.shape({subscribe:i.a.func.isRequired,setState:i.a.func.isRequired,getState:i.a.func.isRequired}),u=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),c=Object(n.createContext)(null),p=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){return o.a.createElement(c.Provider,{value:this.props.store},this.props.children)},t.propTypes={store:s.isRequired},t}(n.Component),l=r("Gytx"),f=r.n(l),b=r("2mql"),m=r.n(b),d=r("VCL8"),h=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),v=function(){return(v=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var y=function(){return{}};function _(e,t){void 0===t&&(t={});var r=!!e,a=e||y;return function(i){var s=function(t){function n(e,r){var n=t.call(this,e,r)||this;return n.unsubscribe=null,n.handleChange=function(){if(n.unsubscribe){var e=a(n.store.getState(),n.props);n.setState({subscribed:e})}},n.store=n.context,n.state={subscribed:a(n.store.getState(),e),store:n.store,props:e},n}return h(n,t),n.getDerivedStateFromProps=function(t,r){return e&&2===e.length&&t!==r.props?{subscribed:a(r.store.getState(),t),props:t}:{props:t}},n.prototype.componentDidMount=function(){this.trySubscribe()},n.prototype.componentWillUnmount=function(){this.tryUnsubscribe()},n.prototype.shouldComponentUpdate=function(e,t){return!f()(this.props,e)||!f()(this.state.subscribed,t.subscribed)},n.prototype.trySubscribe=function(){r&&(this.unsubscribe=this.store.subscribe(this.handleChange),this.handleChange())},n.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},n.prototype.render=function(){var e=v(v(v({},this.props),this.state.subscribed),{store:this.store});return o.a.createElement(i,v({},e,{ref:this.props.miniStoreForwardedRef}))},n.displayName="Connect("+function(e){return e.displayName||e.name||"Component"}(i)+")",n.contextType=c,n}(n.Component);if(Object(d.a)(s),t.forwardRef){var u=o.a.forwardRef((function(e,t){return o.a.createElement(s,v({},e,{miniStoreForwardedRef:t}))}));return m()(u,i)}return m()(s,i)}}var O=function(){return(O=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function g(e){var t=e,r=[];return{setState:function(e){t=O(O({},t),e);for(var n=0;n<r.length;n++)r[n]()},getState:function(){return t},subscribe:function(e){return r.push(e),function(){var t=r.indexOf(e);r.splice(t,1)}}}}},KBXm:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={name:"ellipsis",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z"}}]}}},WZUY:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),o=r.n(n),a=r("HaE+"),i=r("1OyB"),s=r("vuIU"),u=r("JX7q"),c=r("Ji7U"),p=r("md7G"),l=r("foSv"),f=r("rePB"),b=r("q1tI"),m=r.n(b),d=r("8Kt/"),h=r.n(d),v=r("tsqr"),y=r("ZTPi"),_=r("Bfpx"),O=r("v2Sy"),g=r("CLrh"),w=r("05yZ"),N=r("TW7V"),j=r("diQs"),P=r("wx14"),C=r("Vl3Y"),x=r("fyUT"),S=r("2/Rp"),k="/var/www/admin.dtest.live/src/components/user/UpdateBalanceForm.tsx",E=m.a.createElement;function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={labelCol:{span:4},wrapperCol:{span:16}},D=function(e){var t=e.onFinish,r=e.balance,n=e.updating,o=void 0!==n&&n;return E(C.a,Object(P.a)({name:"nest-messages",onFinish:t.bind(void 0)},R,{initialValues:{balance:r},__self:void 0,__source:{fileName:k,lineNumber:11,columnNumber:5}}),E(C.a.Item,{name:"balance",label:"Balance",rules:[{required:!0,message:"Enter balance you want to update!"}],__self:void 0,__source:{fileName:k,lineNumber:16,columnNumber:7}},E(x.a,{__self:void 0,__source:{fileName:k,lineNumber:23,columnNumber:9}})),E(C.a.Item,{wrapperCol:U(U({},R.wrapperCol),{},{offset:4}),__self:void 0,__source:{fileName:k,lineNumber:25,columnNumber:7}},E(S.a,{type:"primary",htmlType:"submit",loading:o,__self:void 0,__source:{fileName:k,lineNumber:26,columnNumber:9}},"Update")))},A="/var/www/admin.dtest.live/pages/users/update.tsx",q=m.a.createElement;function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){Object(f.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(l.a)(e);if(t){var o=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(p.a)(this,r)}}var M=function(e){Object(c.a)(r,e);var t=I(r);function r(){var e;Object(i.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return e=t.call.apply(t,[this].concat(o)),Object(f.a)(Object(u.a)(e),"state",{pwUpdating:!1,updating:!1,fetching:!1,user:{}}),e}return Object(s.a)(r,[{key:"componentDidMount",value:function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({fetching:!0}),e.next=4,g.k.findById(this.props.id);case 4:t=e.sent,this.setState({user:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),v.a.error("Error while fecting user!");case 11:return e.prev=11,this.setState({fetching:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"submit",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({updating:!0}),e.next=4,g.k.update(this.props.id,t);case 4:r=e.sent,this.setState({user:r.data}),v.a.success("Updated successfully"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),v.a.error("An error occurred, please try again!");case 12:return e.prev=12,this.setState({updating:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onAvatarUploaded",value:function(e){v.a.success("Avatar has been updated!")}},{key:"updatePassword",value:function(){var e=Object(a.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({pwUpdating:!0}),e.next=4,g.a.updatePassword(t.password,this.props.id);case 4:v.a.success("Password has been updated!"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v.a.error("An error occurred, please try again!");case 10:return e.prev=10,this.setState({pwUpdating:!1}),e.finish(10);case 13:case"end":return e.stop()}}),e,this,[[0,7,10,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.pwUpdating,r=e.user,n=e.updating,o=e.fetching,a=this.props.countries,i={authorization:g.a.getToken()};return q(b.Fragment,{__self:this,__source:{fileName:A,lineNumber:83,columnNumber:7}},q(h.a,{__self:this,__source:{fileName:A,lineNumber:84,columnNumber:9}},q("title",{__self:this,__source:{fileName:A,lineNumber:85,columnNumber:11}},"User update")),q(_.a,{__self:this,__source:{fileName:A,lineNumber:87,columnNumber:9}},o?q(N.a,{__self:this,__source:{fileName:A,lineNumber:89,columnNumber:13}}):q(y.a,{defaultActiveKey:"basic",tabPosition:"left",__self:this,__source:{fileName:A,lineNumber:91,columnNumber:13}},q(y.a.TabPane,{tab:q("span",{__self:this,__source:{fileName:A,lineNumber:92,columnNumber:34}},"Basic info"),key:"basic",__self:this,__source:{fileName:A,lineNumber:92,columnNumber:15}},q(O.a,{onFinish:this.submit.bind(this),user:r,updating:n,options:{uploadHeaders:i,avatarUploadUrl:g.k.getAvatarUploadUrl(r._id),onAvatarUploaded:this.onAvatarUploaded.bind(this)},countries:a,__self:this,__source:{fileName:A,lineNumber:93,columnNumber:17}})),q(y.a.TabPane,{tab:q("span",{__self:this,__source:{fileName:A,lineNumber:105,columnNumber:34}},"Change password"),key:"password",__self:this,__source:{fileName:A,lineNumber:105,columnNumber:15}},q(w.a,{onFinish:this.updatePassword.bind(this),updating:t,__self:this,__source:{fileName:A,lineNumber:106,columnNumber:17}})),q(y.a.TabPane,{tab:q("span",{__self:this,__source:{fileName:A,lineNumber:112,columnNumber:34}},"Balance"),key:"balance",__self:this,__source:{fileName:A,lineNumber:112,columnNumber:15}},q(D,{balance:r.balance,onFinish:this.submit.bind(this),updating:n,__self:this,__source:{fileName:A,lineNumber:113,columnNumber:17}})))))}}],[{key:"getInitialProps",value:function(){var e=Object(a.a)(o.a.mark((function e(t){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.ctx,e.next=3,j.a.countriesList();case 3:return n=e.sent,e.abrupt("return",B({countries:n.data},r.query));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(b.PureComponent);t.default=M},cCPh:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=(n=r("jiSn"))&&n.__esModule?n:{default:n};t.default=o,e.exports=o},eDIo:function(e,t,r){"use strict";var n=r("rePB"),o=r("ODXe"),a=r("Ff2n"),i=r("q1tI"),s=r("uciX"),u=r("TSYQ"),c=r.n(u),p={adjustX:1,adjustY:1},l=[0,0],f={topLeft:{points:["bl","tl"],overflow:p,offset:[0,-4],targetOffset:l},topCenter:{points:["bc","tc"],overflow:p,offset:[0,-4],targetOffset:l},topRight:{points:["br","tr"],overflow:p,offset:[0,-4],targetOffset:l},bottomLeft:{points:["tl","bl"],overflow:p,offset:[0,4],targetOffset:l},bottomCenter:{points:["tc","bc"],overflow:p,offset:[0,4],targetOffset:l},bottomRight:{points:["tr","br"],overflow:p,offset:[0,4],targetOffset:l}};var b=i.forwardRef((function(e,t){var r=e.arrow,u=void 0!==r&&r,p=e.prefixCls,l=void 0===p?"rc-dropdown":p,b=e.transitionName,m=e.animation,d=e.align,h=e.placement,v=void 0===h?"bottomLeft":h,y=e.placements,_=void 0===y?f:y,O=e.getPopupContainer,g=e.showAction,w=e.hideAction,N=e.overlayClassName,j=e.overlayStyle,P=e.visible,C=e.trigger,x=void 0===C?["hover"]:C,S=Object(a.a)(e,["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"]),k=i.useState(),E=Object(o.a)(k,2),T=E[0],U=E[1],R="visible"in e?P:T,D=i.useRef(null);i.useImperativeHandle(t,(function(){return D.current}));var A=function(){var t=e.overlay;return"function"===typeof t?t():t},q=function(t){var r=e.onOverlayClick,n=A().props;U(!1),r&&r(t),n.onClick&&n.onClick(t)},F=function(){var e=A(),t={prefixCls:"".concat(l,"-menu"),onClick:q};return"string"===typeof e.type&&delete t.prefixCls,i.createElement(i.Fragment,null,u&&i.createElement("div",{className:"".concat(l,"-arrow")}),i.cloneElement(e,t))},B=w;return B||-1===x.indexOf("contextMenu")||(B=["click"]),i.createElement(s.a,Object.assign({},S,{prefixCls:l,ref:D,popupClassName:c()(N,Object(n.a)({},"".concat(l,"-show-arrow"),u)),popupStyle:j,builtinPlacements:_,action:x,showAction:g,hideAction:B||[],popupPlacement:v,popupAlign:d,popupTransitionName:b,popupAnimation:m,popupVisible:R,stretch:function(){var t=e.minOverlayWidthMatchTrigger,r=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!r}()?"minWidth":"",popup:"function"===typeof e.overlay?F:F(),onPopupVisibleChange:function(t){var r=e.onVisibleChange;U(t),"function"===typeof r&&r(t)},getPopupContainer:O}),function(){var t=e.children,r=t.props?t.props:{},n=c()(r.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(l,"-open")}());return T&&t?i.cloneElement(t,{className:n}):t}())}));t.a=b},jiSn:function(e,t,r){"use strict";var n=r("TqRt"),o=r("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(r("q1tI")),i=n(r("KBXm")),s=n(r("KQxl")),u=function(e,t){return a.createElement(s.default,Object.assign({},e,{ref:t,icon:i.default}))};u.displayName="EllipsisOutlined";var c=a.forwardRef(u);t.default=c},qLwl:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/users/update",function(){return r("WZUY")}])}},[["qLwl",0,1,9,24,2,4,5,6,7,8,10,11,12,13,15,19,21,23,25,27,28,30,41,3]]]);