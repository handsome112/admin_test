(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{"8Qf7":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/photos/upload",function(){return r("qclz")}])},qclz:function(e,t,r){"use strict";r.r(t);var n=r("o0o1"),a=r.n(n),o=r("HaE+"),u=r("1OyB"),i=r("vuIU"),s=r("JX7q"),c=r("Ji7U"),l=r("md7G"),f=r("foSv"),p=r("rePB"),h=r("q1tI"),d=r.n(h),m=r("8Kt/"),b=r.n(m),v=r("tsqr"),_=r("Bfpx"),w=r("7QX/"),y=r("2yP/"),g=r("Dlvs"),N=r("nOHt"),O=r.n(N),j="/var/www/admin.dtest.live/pages/photos/upload.tsx",P=d.a.createElement;function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var k=function(e){Object(c.a)(r,e);var t=R(r);function r(){var e;Object(u.a)(this,r);for(var n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(p.a)(Object(s.a)(e),"state",{uploading:!1,preview:null,uploadPercentage:0}),Object(p.a)(Object(s.a)(e),"formRef",void 0),Object(p.a)(Object(s.a)(e),"_photo",void 0),e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){this.formRef||(this.formRef=Object(h.createRef)())}},{key:"setFormVal",value:function(e,t){this.formRef.current.setFieldsValue(Object(p.a)({},e,t))}},{key:"beforeUpload",value:function(e){var t=this,r=new FileReader;return r.addEventListener("load",(function(){return t.setState({preview:r.result})})),r.readAsDataURL(e),this._photo=e,!1}},{key:"onUploading",value:function(e){this.setState({uploadPercentage:e.percentage})}},{key:"submit",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._photo){e.next=2;break}return e.abrupt("return",v.a.error("Please select photo!"));case 2:return e.next=4,this.setState({uploading:!0});case 4:return e.prev=4,e.next=7,w.a.uploadPhoto(this._photo,t,this.onUploading.bind(this));case 7:return r=e.sent,v.a.success("Photo has been uploaded"),e.next=11,this.setState({uploading:!1},(function(){return window.setTimeout((function(){O.a.push({pathname:"/photos/update",query:{id:r.data._id}},"/photos/update?id=".concat(r.data._id),{shallow:!0})}),1e3)}));case 11:e.next=18;break;case 13:return e.prev=13,e.t0=e.catch(4),v.a.error("An error occurred, please try again!"),e.next=18,this.setState({uploading:!1});case 18:case"end":return e.stop()}}),e,this,[[4,13]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.formRef||(this.formRef=Object(h.createRef)());var e=this.state.uploading;return P(h.Fragment,{__self:this,__source:{fileName:j,lineNumber:109,columnNumber:7}},P(b.a,{__self:this,__source:{fileName:j,lineNumber:110,columnNumber:9}},P("title",{__self:this,__source:{fileName:j,lineNumber:111,columnNumber:11}},"Upload photo")),P(y.a,{breadcrumbs:[{title:"Photos",href:"/photos"},{title:"Upload new photo"}],__self:this,__source:{fileName:j,lineNumber:113,columnNumber:9}}),P(_.a,{__self:this,__source:{fileName:j,lineNumber:119,columnNumber:9}},P(g.a,{submit:this.submit.bind(this),beforeUpload:this.beforeUpload.bind(this),uploading:e,uploadPercentage:this.state.uploadPercentage,galleryId:this.props.galleryId||"",performerId:this.props.performerId||"",__self:this,__source:{fileName:j,lineNumber:120,columnNumber:11}})))}}],[{key:"getInitialProps",value:function(){var e=Object(o.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.ctx,e.abrupt("return",r.query);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),r}(h.PureComponent);t.default=k}},[["8Qf7",0,1,9,16,2,4,5,6,7,10,8,12,11,13,14,15,17,18,19,20,21,28,41,3]]]);