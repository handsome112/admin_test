(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{"7RWi":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/token-package/create",function(){return n("asEj")}])},asEj:function(e,t,n){"use strict";n.r(t);var r=n("wx14"),u=n("1OyB"),s=n("vuIU"),i=n("Ji7U"),a=n("md7G"),c=n("foSv"),o=n("q1tI"),l=n.n(o),m=n("tsqr"),f=n("bE4q"),_=n("uqfK"),b=n("Bfpx"),N=n("8Kt/"),h=n.n(N),p=n("YFqc"),d=n.n(p),g=n("CLrh"),v=n("nOHt"),k=n.n(v),w=n("NsEo"),j=n("Pye/"),y=n("/MKj"),O="/var/www/admin.dtest.live/pages/token-package/create.tsx",P=l.a.createElement;function C(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(c.a)(e);if(t){var u=Object(c.a)(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var E=function(e){Object(i.a)(n,e);var t=C(n);function n(e){var r;return Object(u.a)(this,n),(r=t.call(this,e)).state={submitting:!1},r}return Object(s.a)(n,[{key:"handleCreate",value:function(e){var t=this;this.setState({submitting:!0}),g.j.create(e).then((function(){m.a.success("Created successfully"),k.a.push("/token-package")})).catch((function(e){var n=Promise.resolve(e);m.a.error(Object(w.b)(n)),t.setState({submitting:!1})}))}},{key:"render",value:function(){return console.log(this.props.settings),P(l.a.Fragment,null,P(h.a,{__self:this,__source:{fileName:O,lineNumber:41,columnNumber:9}},P("title",{__self:this,__source:{fileName:O,lineNumber:42,columnNumber:11}},"Create Token Package")),P("div",{style:{marginBottom:"16px"},__self:this,__source:{fileName:O,lineNumber:44,columnNumber:9}},P(f.a,{__self:this,__source:{fileName:O,lineNumber:45,columnNumber:11}},P(f.a.Item,{href:"/dashboard",__self:this,__source:{fileName:O,lineNumber:46,columnNumber:13}},P(_.a,{__self:this,__source:{fileName:O,lineNumber:47,columnNumber:15}})),P(f.a.Item,{__self:this,__source:{fileName:O,lineNumber:49,columnNumber:13}},P(d.a,{href:"/token-package",__self:this,__source:{fileName:O,lineNumber:50,columnNumber:15}},P("a",{__self:this,__source:{fileName:O,lineNumber:51,columnNumber:17}},"Token Packages"))),P(f.a.Item,{__self:this,__source:{fileName:O,lineNumber:54,columnNumber:13}},"Create Token"))),P(b.a,{__self:this,__source:{fileName:O,lineNumber:57,columnNumber:9}},P(j.a,Object(r.a)({onFinish:this.handleCreate.bind(this),submitting:this.state.submitting},this.props,{__self:this,__source:{fileName:O,lineNumber:58,columnNumber:11}}))))}}]),n}(o.PureComponent);t.default=Object(y.b)((function(e){return{settings:e.settings}}))(E)}},[["7RWi",0,1,9,17,2,4,5,6,7,8,10,11,12,13,14,16,21,22,25,27,29,43,3]]]);