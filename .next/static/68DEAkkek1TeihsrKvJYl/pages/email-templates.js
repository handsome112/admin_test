(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{"0LpI":function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),u=r("HaE+"),c=r("1OyB"),i=r("vuIU"),l=r("JX7q"),s=r("Ji7U"),o=r("md7G"),m=r("foSv"),f=r("rePB"),_=r("q1tI"),b=r.n(_),d=r("8Kt/"),h=r.n(d),N=r("YFqc"),p=r.n(N),v=r("tsqr"),y=r("jsC+"),w=r("BvKs"),O=r("2/Rp"),g=r("bE4q"),j=r("wCAj"),x=r("G3dp"),I=r("8Skl"),B=r("uqfK"),k=r("Bfpx"),R=r("ADto"),q=r("7cpM"),E="/var/www/admin.dtest.live/pages/email-templates/index.tsx",L=b.a.createElement;function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(m.a)(e);if(t){var a=Object(m.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var A=function(e){Object(s.a)(r,e);var t=S(r);function r(){var e;Object(c.a)(this,r);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++)a[u]=arguments[u];return e=t.call.apply(t,[this].concat(a)),Object(f.a)(Object(l.a)(e),"state",{searching:!1,list:[]}),e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.search()}},{key:"search",value:function(){var e=Object(u.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.setState({searching:!0});case 3:return e.next=5,q.a.findAll();case 5:return t=e.sent,e.next=8,this.setState({searching:!1,list:t.data});case 8:e.next=15;break;case 10:return e.prev=10,e.t0=e.catch(0),v.a.error("An error occurred, please try again!"),e.next=15,this.setState({searching:!1});case 15:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,r=t.list,n=t.searching,a=[{title:"Key",dataIndex:"key"},{title:"Name",dataIndex:"name",render:function(e,t){return L(b.a.Fragment,null,L(p.a,{href:{pathname:"/email-templates/update",query:{id:t._id}},__self:this,__source:{fileName:E,lineNumber:55,columnNumber:15}},L("a",{style:{fontWeight:"bold"},__self:this,__source:{fileName:E,lineNumber:63,columnNumber:17}},t.name)),L("br",{__self:this,__source:{fileName:E,lineNumber:65,columnNumber:15}}),L("small",{__self:this,__source:{fileName:E,lineNumber:66,columnNumber:15}},t.description))}},{title:"Subject",dataIndex:"subject"},{title:"Last update",dataIndex:"updatedAt",sorter:!0,render:function(e){return L("span",{__self:this,__source:{fileName:E,lineNumber:80,columnNumber:18}},Object(R.b)(e))}},{title:"Actions",dataIndex:"_id",render:function(t){return L(y.a,{overlay:L(w.a,{__self:e,__source:{fileName:E,lineNumber:89,columnNumber:15}},L(w.a.Item,{key:"edit",__self:e,__source:{fileName:E,lineNumber:90,columnNumber:17}},L(p.a,{href:{pathname:"/email-templates/update",query:{id:t}},as:"/email-templates/update?id=".concat(t),__self:e,__source:{fileName:E,lineNumber:91,columnNumber:19}},L("a",{__self:e,__source:{fileName:E,lineNumber:98,columnNumber:21}},L(x.a,{__self:e,__source:{fileName:E,lineNumber:99,columnNumber:23}})," ","Update")))),__self:e,__source:{fileName:E,lineNumber:87,columnNumber:11}},L(O.a,{__self:e,__source:{fileName:E,lineNumber:108,columnNumber:13}},"Actions"," ",L(I.a,{__self:e,__source:{fileName:E,lineNumber:111,columnNumber:15}})))}}];return L(b.a.Fragment,null,L(h.a,{__self:this,__source:{fileName:E,lineNumber:119,columnNumber:9}},L("title",{__self:this,__source:{fileName:E,lineNumber:120,columnNumber:11}},"Email templates")),L("div",{style:{marginBottom:"16px"},__self:this,__source:{fileName:E,lineNumber:122,columnNumber:9}},L(g.a,{__self:this,__source:{fileName:E,lineNumber:123,columnNumber:11}},L(g.a.Item,{href:"/dashboard",__self:this,__source:{fileName:E,lineNumber:124,columnNumber:13}},L(B.a,{__self:this,__source:{fileName:E,lineNumber:125,columnNumber:15}})),L(g.a.Item,{__self:this,__source:{fileName:E,lineNumber:127,columnNumber:13}},"Email templates"))),L(k.a,{__self:this,__source:{fileName:E,lineNumber:130,columnNumber:9}},L(j.a,{dataSource:r,columns:a,rowKey:"_id",loading:n,__self:this,__source:{fileName:E,lineNumber:131,columnNumber:11}})))}}]),r}(_.PureComponent);t.default=A},"7cpM":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("1OyB"),a=r("vuIU"),u=r("Ji7U"),c=r("md7G"),i=r("foSv");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(i.a)(e);if(t){var a=Object(i.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var s=new(function(e){Object(u.a)(r,e);var t=l(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"findAll",value:function(){return this.get("/mailer/templates")}},{key:"findById",value:function(e){return this.get("/mailer/templates/".concat(e))}},{key:"update",value:function(e,t){return this.put("/mailer/templates/".concat(e),t)}}]),r}(r("/bfT").a))},G3dp:function(e,t,r){"use strict";var n=r("q1tI"),a={name:"edit",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]}},u=r("6VBw"),c=function(e,t){return n.createElement(u.a,Object.assign({},e,{ref:t,icon:a}))};c.displayName="EditOutlined";t.a=n.forwardRef(c)},uSFU:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/email-templates",function(){return r("0LpI")}])},uqfK:function(e,t,r){"use strict";var n=r("q1tI"),a={name:"home",theme:"outlined",icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"}}]}},u=r("6VBw"),c=function(e,t){return n.createElement(u.a,Object.assign({},e,{ref:t,icon:a}))};c.displayName="HomeOutlined";t.a=n.forwardRef(c)}},[["uSFU",0,1,9,24,2,4,5,6,7,8,10,12,13,14,15,16,18,22,23,26,3]]]);