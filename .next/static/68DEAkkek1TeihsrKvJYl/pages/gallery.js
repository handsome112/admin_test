(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"/MfK":function(e,t,r){"use strict";var n=r("q1tI"),a={name:"delete",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]}},c=r("6VBw"),o=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="DeleteOutlined";t.a=n.forwardRef(o)},"2yP/":function(e,t,r){"use strict";r("AyyA");var n=r("S82o");r.d(t,"a",(function(){return n.a}));var a=r("hZ3H");r.d(t,"b",(function(){return a.a}))},"5uq7":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return r("BH5j")}])},"9BLJ":function(e,t,r){"use strict";var n=r("q1tI"),a={name:"eye",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]}},c=r("6VBw"),o=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="EyeOutlined";t.a=n.forwardRef(o)},BH5j:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),c=r("HaE+"),o=r("1OyB"),i=r("vuIU"),u=r("JX7q"),s=r("Ji7U"),l=r("md7G"),f=r("foSv"),m=r("rePB"),p=r("q1tI"),h=r.n(p),d=r("8Kt/"),b=r.n(d),_=r("tsqr"),y=r("Bfpx"),v=r("Rb4M"),N=r("AyyA"),O=r("mr32"),g=r("wCAj"),w=r("9BLJ"),j=r("xvlK"),x=r("G3dp"),k=r("/MfK"),I=r("ADto"),P=r("YFqc"),B=r.n(P),R=h.a.createElement;function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var S=function(e){Object(s.a)(r,e);var t=q(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this.props.gallery.coverPhoto,t=e&&e.thumbnails&&e.thumbnails.length>0?e.thumbnails[0]:"/gallery.png";return R("img",{src:t,style:this.props.style||{width:90},__self:this,__source:{fileName:"/var/www/admin.dtest.live/src/components/gallery/cover-gallery.tsx",lineNumber:16,columnNumber:12}})}}]),r}(p.PureComponent),A=r("hZ3H"),C="/var/www/admin.dtest.live/src/components/gallery/table-list.tsx",E=h.a.createElement;function H(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var z=function(e){Object(s.a)(r,e);var t=H(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){var e=this,t=[{title:"",render:function(e,t){return E(S,{gallery:t,__self:this,__source:{fileName:C,lineNumber:28,columnNumber:18}})}},{title:"Name",dataIndex:"name",sorter:!0},{title:"Token",dataIndex:"token",sorter:!0,render:function(e){return E("span",{__self:this,__source:{fileName:C,lineNumber:41,columnNumber:18}},e)}},{title:"Status",dataIndex:"status",sorter:!0,render:function(e){switch(e){case"active":return E(O.a,{color:"green",__self:this,__source:{fileName:C,lineNumber:51,columnNumber:22}},"Active");case"inactive":return E(O.a,{color:"red",__self:this,__source:{fileName:C,lineNumber:53,columnNumber:22}},"Inactive")}return E(O.a,{color:"default",__self:this,__source:{fileName:C,lineNumber:55,columnNumber:18}},e)}},{title:"Performer",dataIndex:"performer",render:function(e,t){return E("span",{__self:this,__source:{fileName:C,lineNumber:62,columnNumber:18}},t.performer&&t.performer.username)}},{title:"Last update",dataIndex:"updatedAt",sorter:!0,render:function(e){return E("span",{__self:this,__source:{fileName:C,lineNumber:70,columnNumber:18}},Object(I.b)(e))}},{title:"Actions",dataIndex:"_id",fixed:"right",render:function(t,r){return E(A.a,{menuOptions:[{key:"view-photo",name:"View photo",children:E(B.a,{href:{pathname:"/photos",query:{galleryId:r._id,performerId:r.performerId}},as:"/photos?galleryId=".concat(r._id),__self:e,__source:{fileName:C,lineNumber:85,columnNumber:21}},E("a",{__self:e,__source:{fileName:C,lineNumber:95,columnNumber:23}},E(w.a,{__self:e,__source:{fileName:C,lineNumber:96,columnNumber:25}})," View photo"))},{key:"add-photo",name:"Add photo",children:E(B.a,{href:{pathname:"/photos/upload",query:{galleryId:r._id,performerId:r.performerId}},as:"/photos/upload?galleryId=".concat(r._id,"&performerId=").concat(r.performerId),__self:e,__source:{fileName:C,lineNumber:105,columnNumber:21}},E("a",{__self:e,__source:{fileName:C,lineNumber:115,columnNumber:23}},E(j.a,{__self:e,__source:{fileName:C,lineNumber:116,columnNumber:25}})," Add photo"))},{key:"add-more-photo",name:"Add more photo",children:E(B.a,{href:{pathname:"/photos/bulk-upload",query:{galleryId:r._id,performerId:r.performerId}},as:"/photos/bulk-upload?galleryId=".concat(r._id,"&performerId=").concat(r.performerId),__self:e,__source:{fileName:C,lineNumber:125,columnNumber:21}},E("a",{__self:e,__source:{fileName:C,lineNumber:135,columnNumber:23}},E(j.a,{__self:e,__source:{fileName:C,lineNumber:136,columnNumber:25}})," Add more photo"))},{key:"update",name:"Update",children:E(B.a,{href:{pathname:"/gallery/update",query:{id:r._id}},as:"/gallery/update?id=".concat(r._id),__self:e,__source:{fileName:C,lineNumber:145,columnNumber:21}},E("a",{__self:e,__source:{fileName:C,lineNumber:152,columnNumber:23}},E(x.a,{__self:e,__source:{fileName:C,lineNumber:153,columnNumber:25}})," Update"))},{key:"delete",name:"Delete",children:E("span",{__self:e,__source:{fileName:C,lineNumber:162,columnNumber:21}},E(k.a,{__self:e,__source:{fileName:C,lineNumber:163,columnNumber:23}})," Delete"),onClick:function(){return e.props.deleteGallery&&e.props.deleteGallery(r._id)}}],__self:e,__source:{fileName:C,lineNumber:79,columnNumber:13}})}}],r=this.props,n=r.dataSource,a=r.rowKey,c=r.loading,o=r.pagination,i=r.onChange;return E(g.a,{dataSource:n,columns:t,rowKey:a,loading:c,pagination:o,onChange:i.bind(this),scroll:{x:700,y:650},__self:this,__source:{fileName:C,lineNumber:178,columnNumber:7}})}}]),r}(p.PureComponent),D=r("2yP/"),M="/var/www/admin.dtest.live/pages/gallery/index.tsx",V=h.a.createElement;function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){Object(m.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var J=function(e){Object(s.a)(r,e);var t=L(r);function r(){var e;Object(o.a)(this,r);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return e=t.call.apply(t,[this].concat(a)),Object(m.a)(Object(u.a)(e),"state",{pagination:{},searching:!1,list:[],limit:10,filter:{},sortBy:"createdAt",sort:"desc"}),Object(m.a)(Object(u.a)(e),"handleTableChange",(function(t,r,n){var a=K({},e.state.pagination);a.current=t.current,e.setState({pagination:a,sortBy:n.field||"createdAt",sort:n.order?"descend"===n.order?"desc":"asc":"desc"}),e.search(a.current)})),e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.props.performerId){e.next=3;break}return e.next=3,this.setState({filter:K(K({},this.state.filter),{performerId:this.props.performerId})});case 3:this.search();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(c.a)(a.a.mark((function e(){var t,r,n=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:1,e.prev=1,e.next=4,this.setState({searching:!0});case 4:return e.next=6,v.a.search(K(K({},this.state.filter),{},{limit:this.state.limit,offset:(t-1)*this.state.limit,sort:this.state.sort,sortBy:this.state.sortBy}));case 6:return r=e.sent,e.next=9,this.setState({searching:!1,list:r.data.data,pagination:K(K({},this.state.pagination),{},{total:r.data.total,pageSize:this.state.limit})});case 9:e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(1),_.a.error("An error occurred, please try again!"),e.next=16,this.setState({searching:!1});case 16:case"end":return e.stop()}}),e,this,[[1,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleFilter",value:function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({filter:t});case 2:this.search();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"deleteGallery",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(confirm("Are you sure you want to delete this album?")){e.next=2;break}return e.abrupt("return",!1);case 2:return e.prev=2,e.next=5,v.a.delete(t);case 5:return _.a.success("Deleted successfully"),e.next=8,this.search(this.state.pagination.current);case 8:e.next=19;break;case 10:return e.prev=10,e.t0=e.catch(2),e.next=14,Promise.resolve(e.t0);case 14:if(e.t1=e.sent,e.t1){e.next=17;break}e.t1={};case 17:r=e.t1,_.a.error(r.message||"An error occurred, please try again!");case 19:case"end":return e.stop()}}),e,this,[[2,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.list,r=e.searching,n=e.pagination;return V(p.Fragment,{__self:this,__source:{fileName:M,lineNumber:121,columnNumber:7}},V(b.a,{__self:this,__source:{fileName:M,lineNumber:122,columnNumber:9}},V("title",{__self:this,__source:{fileName:M,lineNumber:123,columnNumber:11}},"Gallerys")),V(D.a,{breadcrumbs:[{title:"Galleries"}],__self:this,__source:{fileName:M,lineNumber:125,columnNumber:9}}),V(y.a,{__self:this,__source:{fileName:M,lineNumber:126,columnNumber:9}},V(N.a,{searchWithPerformer:!0,statuses:[{key:"",text:"All"},{key:"draft",text:"Draft"},{key:"active",text:"Active"},{key:"inactive",text:"Inactive"}],onSubmit:this.handleFilter.bind(this),performerId:this.props.performerId||"",__self:this,__source:{fileName:M,lineNumber:127,columnNumber:11}}),V("div",{style:{marginBottom:"20px"},__self:this,__source:{fileName:M,lineNumber:133,columnNumber:11}}),V(z,{dataSource:t,rowKey:"_id",loading:r,pagination:n,onChange:this.handleTableChange.bind(this),deleteGallery:this.deleteGallery.bind(this),__self:this,__source:{fileName:M,lineNumber:134,columnNumber:11}})))}}],[{key:"getInitialProps",value:function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.ctx,e.abrupt("return",r.query);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(p.PureComponent);t.default=J},G3dp:function(e,t,r){"use strict";var n=r("q1tI"),a={name:"edit",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]}},c=r("6VBw"),o=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="EditOutlined";t.a=n.forwardRef(o)},S82o:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var n=r("1OyB"),a=r("vuIU"),c=r("Ji7U"),o=r("md7G"),i=r("foSv"),u=r("q1tI"),s=r.n(u),l=r("bE4q"),f=r("uqfK"),m=r("YFqc"),p=r.n(m),h="/var/www/admin.dtest.live/src/components/common/breadcrumb.tsx",d=s.a.createElement;function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var _=function(e){Object(c.a)(r,e);var t=b(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this,t=this.props.breadcrumbs;return d("div",{style:{marginBottom:"16px"},__self:this,__source:{fileName:h,lineNumber:19,columnNumber:7}},d(l.a,{__self:this,__source:{fileName:h,lineNumber:20,columnNumber:9}},d(l.a.Item,{href:"/dashboard",__self:this,__source:{fileName:h,lineNumber:21,columnNumber:11}},d(f.a,{__self:this,__source:{fileName:h,lineNumber:22,columnNumber:13}})),t&&t.length>0&&t.map((function(t,r){return d(l.a.Item,{key:r,__self:e,__source:{fileName:h,lineNumber:27,columnNumber:15}},t.href?d(p.a,{href:t.href,__self:e,__source:{fileName:h,lineNumber:29,columnNumber:19}},d("a",{__self:e,__source:{fileName:h,lineNumber:30,columnNumber:21}},t.title)):t.title)}))))}}]),r}(u.PureComponent)},hZ3H:function(e,t,r){"use strict";r.d(t,"a",(function(){return O}));var n=r("wx14"),a=r("rePB"),c=r("1OyB"),o=r("vuIU"),i=r("Ji7U"),u=r("md7G"),s=r("foSv"),l=r("q1tI"),f=r.n(l),m=r("8Skl"),p=r("BvKs"),h=r("jsC+"),d=r("2/Rp"),b="/var/www/admin.dtest.live/src/components/common/dropdown-action.tsx",_=f.a.createElement;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(s.a)(e);if(t){var a=Object(s.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(u.a)(this,r)}}var O=function(e){Object(i.a)(r,e);var t=N(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(o.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.menuOptions,a=void 0===r?[]:r,c=t.buttonStyle,o=t.dropdownProps,i=t.nameButtonMain,u=a.map((function(t){return _(p.a.Item,{key:t.key,onClick:function(){return t.onClick&&t.onClick()},__self:e,__source:{fileName:b,lineNumber:28,columnNumber:7}},t.children||t.name)}));return _(h.a,Object(n.a)({overlay:_(p.a,{__self:this,__source:{fileName:b,lineNumber:33,columnNumber:26}},u)},o,{__self:this,__source:{fileName:b,lineNumber:33,columnNumber:7}}),_(d.a,{style:v({},c),__self:this,__source:{fileName:b,lineNumber:34,columnNumber:9}},i||"Action",_(m.a,{__self:this,__source:{fileName:b,lineNumber:36,columnNumber:11}})))}}]),r}(l.PureComponent)},uqfK:function(e,t,r){"use strict";var n=r("q1tI"),a={name:"home",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]}},c=r("6VBw"),o=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="HomeOutlined";t.a=n.forwardRef(o)},xvlK:function(e,t,r){"use strict";var n=r("q1tI"),a={name:"plus",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]}},c=r("6VBw"),o=function(e,t){return n.createElement(c.a,Object.assign({},e,{ref:t,icon:a}))};o.displayName="PlusOutlined";t.a=n.forwardRef(o)}},[["5uq7",0,1,9,17,24,2,4,5,6,7,8,10,11,12,13,14,15,16,19,18,20,22,23,26,3]]]);