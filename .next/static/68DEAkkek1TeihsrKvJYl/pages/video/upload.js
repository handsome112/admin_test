(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{ZqOT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/video/upload",function(){return n("uH6d")}])},uH6d:function(e,t,n){"use strict";n.r(t);var r=n("o0o1"),a=n.n(r),i=n("HaE+"),u=n("1OyB"),o=n("vuIU"),s=n("JX7q"),l=n("Ji7U"),c=n("md7G"),d=n("foSv"),f=n("rePB"),p=n("q1tI"),h=n.n(p),b=n("8Kt/"),m=n.n(b),_=n("tsqr"),v=n("Bfpx"),w=n("hIKl"),N=n("nOHt"),y=n.n(N),g=n("2yP/"),O=n("/PPH"),P="/var/www/admin.dtest.live/pages/video/upload.tsx",j=h.a.createElement;function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(d.a)(e);if(t){var a=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var x=function(e){Object(l.a)(n,e);var t=k(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return e=t.call.apply(t,[this].concat(a)),Object(f.a)(Object(s.a)(e),"state",{uploading:!1,preview:null,uploadPercentage:0}),Object(f.a)(Object(s.a)(e),"_files",{thumbnail:null,video:null}),e}return Object(o.a)(n,[{key:"beforeUpload",value:function(e,t){this._files[t]=e}},{key:"onUploading",value:function(e){this.setState({uploadPercentage:e.percentage})}},{key:"submit",value:function(){var e=Object(i.a)(a.a.mark((function e(t){var n,r,i=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._files.video){e.next=2;break}return e.abrupt("return",_.a.error("Please select video!"));case 2:return n=Object.keys(this._files).reduce((function(e,t){return i._files[t]&&e.push({fieldname:t,file:i._files[t]||null}),e}),[]),e.next=5,this.setState({uploading:!0});case 5:return e.prev=5,e.next=8,w.a.uploadVideo(n,t,this.onUploading.bind(this));case 8:return r=e.sent,_.a.success("Video has been uploaded"),e.next=12,this.setState({uploading:!1},(function(){return window.setTimeout((function(){y.a.push({pathname:"/video/update",query:{id:r.data._id}},"/video/update?id=".concat(r.data._id),{shallow:!0})}),1e3)}));case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(5),_.a.error("An error occurred, please try again!"),e.next=19,this.setState({uploading:!1});case 19:case"end":return e.stop()}}),e,this,[[5,14]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.uploading,n=e.uploadPercentage;return j(p.Fragment,{__self:this,__source:{fileName:P,lineNumber:97,columnNumber:7}},j(m.a,{__self:this,__source:{fileName:P,lineNumber:98,columnNumber:9}},j("title",{__self:this,__source:{fileName:P,lineNumber:99,columnNumber:11}},"Upload video")),j(g.a,{breadcrumbs:[{title:"Video",href:"/video"},{title:"Upload new video"}],__self:this,__source:{fileName:P,lineNumber:101,columnNumber:9}}),j(v.a,{__self:this,__source:{fileName:P,lineNumber:107,columnNumber:9}},j(O.a,{submit:this.submit.bind(this),beforeUpload:this.beforeUpload.bind(this),uploading:t,uploadPercentage:n,__self:this,__source:{fileName:P,lineNumber:108,columnNumber:11}})))}}]),n}(p.PureComponent);t.default=x}},[["ZqOT",0,1,9,17,2,4,5,6,7,8,10,11,12,13,14,15,16,19,18,20,21,27,28,44,3]]]);