(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{BRds:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/update",function(){return n("GxUY")}])},Co7z:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("1OyB"),u=n("vuIU"),s=n("Ji7U"),i=n("md7G"),a=n("foSv");function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(a.a)(e);if(t){var u=Object(a.a)(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return Object(i.a)(this,n)}}var o=new(function(e){Object(s.a)(n,e);var t=c(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"create",value:function(e){return this.post("/admin/posts",e)}},{key:"search",value:function(e){return this.get(this.buildUrl("/admin/posts/search",e))}},{key:"findById",value:function(e){return this.get("/admin/posts/".concat(e,"/view"))}},{key:"update",value:function(e,t){return this.put("/admin/posts/".concat(e),t)}},{key:"delete",value:function(e){return this.del("/admin/posts/".concat(e))}}]),n}(n("/bfT").a))},GxUY:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),u=n.n(r),s=n("HaE+"),i=n("1OyB"),a=n("vuIU"),c=n("JX7q"),o=n("Ji7U"),l=n("md7G"),m=n("foSv"),f=n("rePB"),b=n("q1tI"),_=n.n(b),h=n("8Kt/"),p=n.n(h),N=n("Bfpx"),d=n("a6RD"),v=n.n(d),y=n("tsqr"),O=n("bE4q"),g=n("Vl3Y"),w=n("5rEg"),j=n("2fM7"),P=n("2/Rp"),k=n("uqfK"),x=n("Co7z"),I=n("TW7V"),B="/var/www/admin.dtest.live/pages/posts/update.tsx",R=_.a.createElement;function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(m.a)(e);if(t){var u=Object(m.a)(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var E=v()((function(){return Promise.all([n.e(33),n.e(3),n.e(35)]).then(n.bind(null,"KJL1"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["KJL1"]},modules:["@components/wysiwyg"]}}),U=function(e){Object(o.a)(n,e);var t=q(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return e=t.call.apply(t,[this].concat(u)),Object(f.a)(Object(c.a)(e),"_content",""),Object(f.a)(Object(c.a)(e),"state",{submitting:!1,fetching:!0,post:null}),e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.findById(this.props.id);case 3:t=e.sent,this._content=t.data.content,this.setState({post:t.data}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y.a.error("Post not found!");case 11:return e.prev=11,this.setState({fetching:!1}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"submit",value:function(){var e=Object(s.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({submitting:!0}),n=C(C({},t),{},{content:this._content}),e.next=5,x.a.update(this.props.id,n);case 5:y.a.success("Updated successfully"),this.setState({submitting:!1}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),y.a.error("Something went wrong, please try again!"),this.setState({submitting:!1});case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},{key:"contentChange",value:function(e){this._content=e.html}},{key:"render",value:function(){var e=this.state.post;return R(b.Fragment,{__self:this,__source:{fileName:B,lineNumber:67,columnNumber:7}},R(p.a,{__self:this,__source:{fileName:B,lineNumber:68,columnNumber:9}},R("title",{__self:this,__source:{fileName:B,lineNumber:69,columnNumber:11}},"Update post")),R("div",{style:{marginBottom:"16px"},__self:this,__source:{fileName:B,lineNumber:71,columnNumber:9}},R(O.a,{__self:this,__source:{fileName:B,lineNumber:72,columnNumber:11}},R(O.a.Item,{href:"/dashboard",__self:this,__source:{fileName:B,lineNumber:73,columnNumber:13}},R(k.a,{__self:this,__source:{fileName:B,lineNumber:74,columnNumber:15}})),R(O.a.Item,{href:"/posts",__self:this,__source:{fileName:B,lineNumber:76,columnNumber:13}},R("span",{__self:this,__source:{fileName:B,lineNumber:77,columnNumber:15}},"Posts")),e&&R(O.a.Item,{__self:this,__source:{fileName:B,lineNumber:79,columnNumber:22}},e.title),R(O.a.Item,{__self:this,__source:{fileName:B,lineNumber:80,columnNumber:13}},"Update"))),R(N.a,{__self:this,__source:{fileName:B,lineNumber:84,columnNumber:9}},e?R(g.a,{onFinish:this.submit.bind(this),initialValues:e,labelCol:{span:4},wrapperCol:{span:20},__self:this,__source:{fileName:B,lineNumber:88,columnNumber:13}},R(g.a.Item,{name:"title",rules:[{required:!0,message:"Please input title!"}],label:"Title",__self:this,__source:{fileName:B,lineNumber:94,columnNumber:15}},R(w.a,{placeholder:"Enter your title",__self:this,__source:{fileName:B,lineNumber:99,columnNumber:17}})),R(g.a.Item,{name:"slug",label:"Slug",__self:this,__source:{fileName:B,lineNumber:102,columnNumber:15}},R(w.a,{placeholder:"Custom friendly slug",__self:this,__source:{fileName:B,lineNumber:103,columnNumber:17}})),R(g.a.Item,{name:"shortDescription",label:"Short description",__self:this,__source:{fileName:B,lineNumber:106,columnNumber:15}},R(w.a.TextArea,{rows:3,__self:this,__source:{fileName:B,lineNumber:107,columnNumber:17}})),R(g.a.Item,{label:"Content",__self:this,__source:{fileName:B,lineNumber:109,columnNumber:15}},R(E,{onChange:this.contentChange.bind(this),html:this._content,__self:this,__source:{fileName:B,lineNumber:110,columnNumber:17}})),R(g.a.Item,{name:"status",label:"Status",rules:[{required:!0}],__self:this,__source:{fileName:B,lineNumber:115,columnNumber:15}},R(j.a,{__self:this,__source:{fileName:B,lineNumber:120,columnNumber:17}},R(j.a.Option,{value:"published",__self:this,__source:{fileName:B,lineNumber:121,columnNumber:19}},"Publish"),R(j.a.Option,{value:"draft",__self:this,__source:{fileName:B,lineNumber:122,columnNumber:19}},"Draft"))),R(g.a.Item,{wrapperCol:{offset:4},__self:this,__source:{fileName:B,lineNumber:126,columnNumber:15}},R(P.a,{type:"primary",htmlType:"submit",style:{float:"right"},loading:this.state.submitting,__self:this,__source:{fileName:B,lineNumber:127,columnNumber:17}},"Submit"))):R(I.a,{__self:this,__source:{fileName:B,lineNumber:86,columnNumber:13}})))}}],[{key:"getInitialProps",value:function(){var e=Object(s.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.ctx,(r=n.query).type||(r.type="post"),e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),n}(b.PureComponent);t.default=U},uqfK:function(e,t,n){"use strict";var r=n("q1tI"),u={name:"home",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]}},s=n("6VBw"),i=function(e,t){return r.createElement(s.a,Object.assign({},e,{ref:t,icon:u}))};i.displayName="HomeOutlined";t.a=r.forwardRef(i)}},[["BRds",0,1,9,2,4,5,6,7,8,10,11,12,13,14,15,16,21,31,3]]]);