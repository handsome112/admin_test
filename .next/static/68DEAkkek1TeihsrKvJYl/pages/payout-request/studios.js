(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{"2yP/":function(e,t,r){"use strict";r("AyyA");var n=r("S82o");r.d(t,"a",(function(){return n.a}));var a=r("hZ3H");r.d(t,"b",(function(){return a.a}))},"9BLJ":function(e,t,r){"use strict";var n=r("q1tI"),a={name:"eye",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z"}}]}},o=r("6VBw"),u=function(e,t){return n.createElement(o.a,Object.assign({},e,{ref:t,icon:a}))};u.displayName="EyeOutlined";t.a=n.forwardRef(u)},NsEo:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return s})),r.d(t,"a",(function(){return c}));var n=r("o0o1"),a=r.n(n),o=r("HaE+");r("LvDl");var u=r("CLrh");function i(e){if(!e)return"";if(Array.isArray(e.message)){var t=e.message[0];return t.constraints?Object.values(t.constraints)[0]:e.error||"Bad request!"}return"string"===typeof e.message?e.message:"Bad request!"}function s(e){return/^[a-zA-Z0-9]+$/.test(e)}function c(e,t){return new Promise(function(){var r=Object(o.a)(a.a.mark((function r(n,o){var i;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:(i=new XMLHttpRequest).onload=function(){var e=new Blob([i.response],{type:"text/csv"}),r=URL.createObjectURL(e),a=document.createElement("a");a.href=r,a.setAttribute("download",t),a.click(),URL.revokeObjectURL(r),n({success:!0})},i.onerror=function(e){o(e)},i.open("GET",e),i.setRequestHeader("Authorization",u.a.getToken()),i.responseType="blob",i.send();case 7:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}())}},S82o:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var n=r("1OyB"),a=r("vuIU"),o=r("Ji7U"),u=r("md7G"),i=r("foSv"),s=r("q1tI"),c=r.n(s),l=r("bE4q"),f=r("uqfK"),m=r("YFqc"),d=r.n(m),p="/var/www/admin.dtest.live/src/components/common/breadcrumb.tsx",b=c.a.createElement;function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(u.a)(this,r)}}var _=function(e){Object(o.a)(r,e);var t=h(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"render",value:function(){var e=this,t=this.props.breadcrumbs;return b("div",{style:{marginBottom:"16px"},__self:this,__source:{fileName:p,lineNumber:19,columnNumber:7}},b(l.a,{__self:this,__source:{fileName:p,lineNumber:20,columnNumber:9}},b(l.a.Item,{href:"/dashboard",__self:this,__source:{fileName:p,lineNumber:21,columnNumber:11}},b(f.a,{__self:this,__source:{fileName:p,lineNumber:22,columnNumber:13}})),t&&t.length>0&&t.map((function(t,r){return b(l.a.Item,{key:r,__self:e,__source:{fileName:p,lineNumber:27,columnNumber:15}},t.href?b(d.a,{href:t.href,__self:e,__source:{fileName:p,lineNumber:29,columnNumber:19}},b("a",{__self:e,__source:{fileName:p,lineNumber:30,columnNumber:21}},t.title)):t.title)}))))}}]),r}(s.PureComponent)},cCQG:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/payout-request/studios",function(){return r("mL3c")}])},"eMU/":function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("mr32"),u=r("wCAj"),i=r("ADto"),s=r("YFqc"),c=r.n(s),l=r("9BLJ"),f="/var/www/admin.dtest.live/src/components/payout-request/table-list.tsx",m=a.a.createElement;t.a=function(e){var t=e.rowKey,r=e.data,n=e.loading,a=e.pagination,s=e.onChange,d=[{title:"From",key:"username",render:function(e,t){var r,n;return m("span",{__self:this,__source:{fileName:f,lineNumber:30,columnNumber:11}},(null===(r=t.performerInfo)||void 0===r?void 0:r.username)||(null===(n=t.studioInfo)||void 0===n?void 0:n.username)||"N/A")}},{title:"Pay Period",dataIndex:"fromDate",key:"fromDate",render:function(e,t){return m("span",{__self:this,__source:{fileName:f,lineNumber:44,columnNumber:11}},Object(i.b)(t.fromDate,"DD/MM/YYYY")," -"," ",Object(i.b)(t.toDate,"DD/MM/YYYY"))}},{title:"Total Token",dataIndex:"tokenMustPay",align:"center",key:"tokenMustPay",sorter:!0},{title:"Paid Token",dataIndex:"previousPaidOut",align:"center",key:"pendingToken",sorter:!0},{title:"Remaining Token",dataIndex:"pendingToken",align:"center",key:"pendingToken",sorter:!0},{title:"Status",dataIndex:"status",key:"status",align:"center",render:function(e){switch(e){case"approved":return m(o.a,{color:"blue",__self:this,__source:{fileName:f,lineNumber:90,columnNumber:20}},"Approved");case"pending":return m(o.a,{color:"warning",__self:this,__source:{fileName:f,lineNumber:92,columnNumber:20}},"Pending");case"rejected":return m(o.a,{color:"volcano",__self:this,__source:{fileName:f,lineNumber:94,columnNumber:20}},"Rejected");case"done":return m(o.a,{color:"green",__self:this,__source:{fileName:f,lineNumber:96,columnNumber:20}},"Done")}}},{title:"Created At",dataIndex:"createdAt",key:"createdAt",sorter:!0,render:function(e){return m("span",{__self:this,__source:{fileName:f,lineNumber:106,columnNumber:16}},Object(i.b)(e))}},{title:"Actions",dataIndex:"_id",fixed:"right",sorter:!0,render:function(e){return m(c.a,{href:{pathname:"/payout-request/detail",query:{id:e}},__self:this,__source:{fileName:f,lineNumber:116,columnNumber:11}},m("a",{__self:this,__source:{fileName:f,lineNumber:117,columnNumber:13}},m(l.a,{__self:this,__source:{fileName:f,lineNumber:118,columnNumber:15}})))}}];return m(u.a,{columns:d,rowKey:t,dataSource:r,loading:n,pagination:a,onChange:s.bind(void 0),scroll:{x:700,y:650},__self:void 0,__source:{fileName:f,lineNumber:127,columnNumber:5}})}},hZ3H:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r("wx14"),a=r("rePB"),o=r("1OyB"),u=r("vuIU"),i=r("Ji7U"),s=r("md7G"),c=r("foSv"),l=r("q1tI"),f=r.n(l),m=r("8Skl"),d=r("BvKs"),p=r("jsC+"),b=r("2/Rp"),h="/var/www/admin.dtest.live/src/components/common/dropdown-action.tsx",_=f.a.createElement;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(c.a)(e);if(t){var a=Object(c.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(s.a)(this,r)}}var g=function(e){Object(i.a)(r,e);var t=N(r);function r(){return Object(o.a)(this,r),t.apply(this,arguments)}return Object(u.a)(r,[{key:"render",value:function(){var e=this,t=this.props,r=t.menuOptions,a=void 0===r?[]:r,o=t.buttonStyle,u=t.dropdownProps,i=t.nameButtonMain,s=a.map((function(t){return _(d.a.Item,{key:t.key,onClick:function(){return t.onClick&&t.onClick()},__self:e,__source:{fileName:h,lineNumber:28,columnNumber:7}},t.children||t.name)}));return _(p.a,Object(n.a)({overlay:_(d.a,{__self:this,__source:{fileName:h,lineNumber:33,columnNumber:26}},s)},u,{__self:this,__source:{fileName:h,lineNumber:33,columnNumber:7}}),_(b.a,{style:v({},o),__self:this,__source:{fileName:h,lineNumber:34,columnNumber:9}},i||"Action",_(m.a,{__self:this,__source:{fileName:h,lineNumber:36,columnNumber:11}})))}}]),r}(l.PureComponent)},mL3c:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),o=r("rePB"),u=r("HaE+"),i=r("1OyB"),s=r("vuIU"),c=r("Ji7U"),l=r("md7G"),f=r("foSv"),m=r("q1tI"),d=r.n(m),p=r("tsqr"),b=r("8Kt/"),h=r.n(b),_=r("AyyA"),y=r("2yP/"),v=r("Bfpx"),N=r("NsEo"),g=r("eMU/"),O=r("CLrh"),w="/var/www/admin.dtest.live/pages/payout-request/studios.tsx",j=d.a.createElement;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){Object(o.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var R=function(e){Object(c.a)(r,e);var t=P(r);function r(e){var n;return Object(i.a)(this,r),(n=t.call(this,e)).state={loading:!0,data:[],offset:0,pagination:{total:0,pageSize:10},sort:{sortBy:"createAt",sorter:"desc"},filter:{},sourceType:"studio"},n}return Object(s.a)(r,[{key:"componentDidMount",value:function(){this.getList()}},{key:"getList",value:function(){var e=Object(u.a)(a.a.mark((function e(){var t,r,n,o,u,i,s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state,r=t.filter,n=t.offset,t.data,o=t.pagination,u=t.sort,i=t.query,s=t.sourceType,e.prev=1,e.next=4,O.e.search(x(x(x(x({},r),u),{},{offset:n},i),{},{limit:o.pageSize,sourceType:s}));case 4:return c=e.sent,e.next=7,this.setState({data:c.data.data,pagination:x(x({},o),{},{total:c.data.total})});case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),this.showError(e.t0);case 12:return e.prev=12,this.setState({loading:!1}),e.finish(12);case 15:case"end":return e.stop()}}),e,this,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"showError",value:function(){var e=Object(u.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve(t);case 2:r=e.sent,p.a.error(Object(N.b)(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateStatus",value:function(){var e=Object(u.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.e.update(t,{status:r});case 2:this.getList();case 3:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"onHandleTabChange",value:function(){var e=Object(u.a)(a.a.mark((function e(t,r,n){var o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=this.state.sort,r&&r.length,e.next=4,this.setState({offset:(t.current-1)*this.state.pagination.pageSize,sort:x(x({},o),{},{sortBy:n.field,sorter:"ascend"===n.order?"asc":"desc"})});case 4:this.getList();case 5:case"end":return e.stop()}}),e,this)})));return function(t,r,n){return e.apply(this,arguments)}}()},{key:"handleFilter",value:function(){var e=Object(u.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({filter:t});case 2:this.getList();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setDateRanger",value:function(){var e=Object(u.a)(a.a.mark((function e(t,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r[0]||r[1]){e.next=4;break}return e.next=3,this.setState({query:{},sort:{sortBy:"createdAt",sorter:"desc"}});case 3:this.getList();case 4:if(!r[0]||!r[1]){e.next=10;break}return e.next=7,this.setState({query:{fromDate:r[0],toDate:r[1]}});case 7:this.getList(),e.next=11;break;case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e,this)})));return function(t,r){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,r=e.loading,n=e.pagination;return j(d.a.Fragment,null,j(h.a,{__self:this,__source:{fileName:w,lineNumber:144,columnNumber:9}},j("title",{__self:this,__source:{fileName:w,lineNumber:145,columnNumber:11}},"payout request")),j(y.a,{breadcrumbs:[{title:"Payout Request"}],__self:this,__source:{fileName:w,lineNumber:147,columnNumber:9}}),j(v.a,{__self:this,__source:{fileName:w,lineNumber:148,columnNumber:9}},j(_.a,{notWithKeyWord:!0,statuses:[{text:"All",key:""},{text:"Pending",key:"pending"},{text:"Resolved",key:"resolved"},{text:"Rejected",key:"rejected"},{text:"Done",key:"done"}],onSubmit:this.handleFilter.bind(this),searchWithPerformer:!0,withDatePicker:!0,setDateRanger:this.setDateRanger.bind(this),__self:this,__source:{fileName:w,lineNumber:149,columnNumber:11}}),j("div",{style:{marginBottom:"20px"},__self:this,__source:{fileName:w,lineNumber:157,columnNumber:11}}),t?j(g.a,{data:t,loading:r,rowKey:"_id",pagination:n,onChange:this.onHandleTabChange.bind(this),updateStatus:this.updateStatus.bind(this),__self:this,__source:{fileName:w,lineNumber:159,columnNumber:13}}):j("p",{__self:this,__source:{fileName:w,lineNumber:168,columnNumber:13}},"No request found.")))}}]),r}(m.PureComponent);t.default=R},uqfK:function(e,t,r){"use strict";var n=r("q1tI"),a={name:"home",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]}},o=r("6VBw"),u=function(e,t){return n.createElement(o.a,Object.assign({},e,{ref:t,icon:a}))};u.displayName="HomeOutlined";t.a=n.forwardRef(u)}},[["cCQG",0,1,9,17,24,2,4,5,6,7,8,10,11,12,13,14,15,16,19,18,20,22,23,25,26,3]]]);