(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{KEpP:function(e,r,t){"use strict";t.r(r);var n=t("o0o1"),i=t.n(n),u=t("HaE+"),s=t("1OyB"),l=t("vuIU"),o=t("Ji7U"),a=t("md7G"),m=t("foSv"),c=t("rePB"),_=t("q1tI"),f=t.n(_),N=t("Ol7k"),b=t("tsqr"),d=t("5rEg"),h=t("2fM7"),p=t("2/Rp"),v=t("8Kt/"),y=t.n(v),g=t("S82o"),O=t("Bfpx"),x=t("CLrh"),B=t("nOHt"),w=t.n(B),k=t("NsEo"),S="/var/www/admin.dtest.live/pages/order/detail.tsx",j=f.a.createElement;function C(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(m.a)(e);if(r){var i=Object(m.a)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return Object(a.a)(this,t)}}var P=N.a.Content,R=function(e){Object(o.a)(t,e);var r=C(t);function t(e){var n;return Object(s.a)(this,t),(n=r.call(this,e)).state={submitting:!1,order:null,loading:!0,isUpdating:!0,shippingCode:"",deliveryStatus:""},n}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=Object(u.a)(i.a.mark((function e(){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.c.findById(this.props.id);case 3:return r=e.sent,e.next=6,this.setState({order:r.data,shippingCode:r.data.shippingCode,deliveryStatus:r.data.deliveryStatus});case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),b.a.error("Can not find order!");case 11:return e.prev=11,this.setState({loading:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"onUpdate",value:function(){var e=Object(u.a)(i.a.mark((function e(){var r,t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.state,t=r.deliveryStatus,n=r.shippingCode){e.next=3;break}return e.abrupt("return",b.a.error("Missing shipping code"));case 3:return e.prev=3,this.setState({loading:!0}),e.next=7,x.c.update(this.props.id,{deliveryStatus:t,shippingCode:n});case 7:b.a.success("Changes saved."),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),b.a.error(Object(k.b)(e.t0));case 13:return e.prev=13,e.next=16,this.setState({loading:!1});case 16:return w.a.push("/order"),e.finish(13);case 18:case"end":return e.stop()}}),e,this,[[3,10,13,18]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,r,t=this,n=this.state.order;return j(N.a,{__self:this,__source:{fileName:S,lineNumber:87,columnNumber:7}},j(y.a,{__self:this,__source:{fileName:S,lineNumber:88,columnNumber:9}},j("title",{__self:this,__source:{fileName:S,lineNumber:89,columnNumber:11}},"Order Details")),j(P,{__self:this,__source:{fileName:S,lineNumber:91,columnNumber:9}},j("div",{className:"main-container",__self:this,__source:{fileName:S,lineNumber:92,columnNumber:11}},j(g.a,{breadcrumbs:[{title:"Orders",href:"/order"},{title:"#"+(null===n||void 0===n?void 0:n.orderNumber)}],__self:this,__source:{fileName:S,lineNumber:93,columnNumber:13}}),j(O.a,{__self:this,__source:{fileName:S,lineNumber:101,columnNumber:13}},n&&j("div",{className:"main-container",__self:this,__source:{fileName:S,lineNumber:103,columnNumber:17}},j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:104,columnNumber:19}},j("b",{__self:this,__source:{fileName:S,lineNumber:105,columnNumber:21}},"#",null===n||void 0===n?void 0:n.orderNumber)),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:107,columnNumber:19}},j("strong",{__self:this,__source:{fileName:S,lineNumber:108,columnNumber:21}},"Buyer:")," ",null===(e=n.buyerInfo)||void 0===e?void 0:e.username),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:110,columnNumber:19}},j("strong",{__self:this,__source:{fileName:S,lineNumber:111,columnNumber:21}},"Seller:")," ",null===(r=n.sellerInfo)||void 0===r?void 0:r.username),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:113,columnNumber:19}},j("strong",{__self:this,__source:{fileName:S,lineNumber:114,columnNumber:21}},"Product:"),j("span",{__self:this,__source:{fileName:S,lineNumber:115,columnNumber:21}},n.name)," ",j("br",{__self:this,__source:{fileName:S,lineNumber:115,columnNumber:47}}),j("small",{__self:this,__source:{fileName:S,lineNumber:116,columnNumber:21}},n.description)),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:118,columnNumber:19}},j("strong",{__self:this,__source:{fileName:S,lineNumber:119,columnNumber:21}},"Product type:"),j("span",{__self:this,__source:{fileName:S,lineNumber:120,columnNumber:21}},n.produtType)),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:122,columnNumber:19}},j("strong",{__self:this,__source:{fileName:S,lineNumber:123,columnNumber:21}},"Quantity:")," ",n.quantity),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:125,columnNumber:19}},j("strong",{__self:this,__source:{fileName:S,lineNumber:126,columnNumber:21}},"Total Price:"),"token"===n.payBy?j("span",{__self:this,__source:{fileName:S,lineNumber:129,columnNumber:25}},n.totalPrice," token(s)"):j("span",{__self:this,__source:{fileName:S,lineNumber:130,columnNumber:25}},"$",n.totalPrice)),"physical"!==n.productType?j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:135,columnNumber:21}},"Delivery Status: Delivered"):j(f.a.Fragment,null,j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:139,columnNumber:23}},j("strong",{__self:this,__source:{fileName:S,lineNumber:140,columnNumber:25}},"Delivery Address:")," ",n.deliveryAddress||"N/A"),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:142,columnNumber:23}},j("strong",{__self:this,__source:{fileName:S,lineNumber:143,columnNumber:25}},"Delivery Postal Code:")," ",n.postalCode||"N/A"),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:145,columnNumber:23}},"Shipping Code:"," ",j(d.a,{placeholder:"Enter shipping code here",defaultValue:n.shippingCode,onChange:function(e){return t.setState({shippingCode:e.target.value})},__self:this,__source:{fileName:S,lineNumber:147,columnNumber:25}})),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:155,columnNumber:23}},"Delivery Status:"," ",j(h.a,{onChange:function(e){return t.setState({deliveryStatus:e})},defaultValue:n.deliveryStatus,__self:this,__source:{fileName:S,lineNumber:157,columnNumber:25}},j(h.a.Option,{key:"processing",value:"processing",__self:this,__source:{fileName:S,lineNumber:161,columnNumber:27}},"Processing"),j(h.a.Option,{key:"shipping",value:"shipping",__self:this,__source:{fileName:S,lineNumber:164,columnNumber:27}},"Shipping"),j(h.a.Option,{key:"delivered",value:"delivered",__self:this,__source:{fileName:S,lineNumber:167,columnNumber:27}},"Delivered"),j(h.a.Option,{key:"refunded",value:"refunded",__self:this,__source:{fileName:S,lineNumber:170,columnNumber:27}},"Refunded"))),j("div",{style:{marginBottom:"10px"},__self:this,__source:{fileName:S,lineNumber:175,columnNumber:23}},j(p.a,{danger:!0,onClick:this.onUpdate.bind(this),__self:this,__source:{fileName:S,lineNumber:176,columnNumber:25}},"Update"))))))))}}],[{key:"getInitialProps",value:function(){var e=Object(u.a)(i.a.mark((function e(r){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.ctx,e.abrupt("return",t.query);case 2:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}]),t}(_.PureComponent);Object(c.a)(R,"authenticate",!0),Object(c.a)(R,"onlyPerformer",!0),r.default=R},S82o:function(e,r,t){"use strict";t.d(r,"a",(function(){return h}));var n=t("1OyB"),i=t("vuIU"),u=t("Ji7U"),s=t("md7G"),l=t("foSv"),o=t("q1tI"),a=t.n(o),m=t("bE4q"),c=t("uqfK"),_=t("YFqc"),f=t.n(_),N="/var/www/admin.dtest.live/src/components/common/breadcrumb.tsx",b=a.a.createElement;function d(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=Object(l.a)(e);if(r){var i=Object(l.a)(this).constructor;t=Reflect.construct(n,arguments,i)}else t=n.apply(this,arguments);return Object(s.a)(this,t)}}var h=function(e){Object(u.a)(t,e);var r=d(t);function t(){return Object(n.a)(this,t),r.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this,r=this.props.breadcrumbs;return b("div",{style:{marginBottom:"16px"},__self:this,__source:{fileName:N,lineNumber:19,columnNumber:7}},b(m.a,{__self:this,__source:{fileName:N,lineNumber:20,columnNumber:9}},b(m.a.Item,{href:"/dashboard",__self:this,__source:{fileName:N,lineNumber:21,columnNumber:11}},b(c.a,{__self:this,__source:{fileName:N,lineNumber:22,columnNumber:13}})),r&&r.length>0&&r.map((function(r,t){return b(m.a.Item,{key:t,__self:e,__source:{fileName:N,lineNumber:27,columnNumber:15}},r.href?b(f.a,{href:r.href,__self:e,__source:{fileName:N,lineNumber:29,columnNumber:19}},b("a",{__self:e,__source:{fileName:N,lineNumber:30,columnNumber:21}},r.title)):r.title)}))))}}]),t}(o.PureComponent)},eWDQ:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order/detail",function(){return t("KEpP")}])},uqfK:function(e,r,t){"use strict";var n=t("q1tI"),i={name:"home",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]}},u=t("6VBw"),s=function(e,r){return n.createElement(u.a,Object.assign({},e,{ref:r,icon:i}))};s.displayName="HomeOutlined";r.a=n.forwardRef(s)}},[["eWDQ",0,1,9,16,2,4,5,6,7,10,12,11,13,14,15,17,25,36,3]]]);