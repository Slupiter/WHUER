require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentsA/avatar/index"],{2094:function(n,t,e){"use strict";e.r(t);var i=e("d2af"),c=e.n(i);for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);t["default"]=c.a},"61c7":function(n,t,e){"use strict";(function(n){e("9729");i(e("66fd"));var t=i(e("9584"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"8f1d":function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return i}));var i={uAvatar:function(){return e.e("uview-ui/components/u-avatar/u-avatar").then(e.bind(null,"13b2"))},uSubsection:function(){return e.e("uview-ui/components/u-subsection/u-subsection").then(e.bind(null,"d303"))}},c=function(){var n=this,t=n.$createElement;n._self._c},u=[]},9584:function(n,t,e){"use strict";e.r(t);var i=e("8f1d"),c=e("2094");for(var u in c)"default"!==u&&function(n){e.d(t,n,(function(){return c[n]}))}(u);var o,s=e("f0c5"),a=Object(s["a"])(c["default"],i["b"],i["c"],!1,null,"32088582",null,!1,i["a"],o);t["default"]=a.exports},d2af:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{mode:"circle",src:"http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg",text:"",size:"90",showLevel:!0,showSex:!0,sexIcon:"man",bgColor:"#fcbd71"}},methods:{modeChange:function(n){this.mode=0==n?"circle":"square"},styleChange:function(n){0==n?(this.text="",this.src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg"):this.text="无头像"},sizeChange:function(n){this.size=0==n?"large":1==n?"default":2==n?"mini":160},sexChange:function(n){this.showSex=!0,0==n&&(this.sexIcon="man"),1==n&&(this.sexIcon="woman"),2==n&&(this.showSex=!1)},levelChange:function(n){this.showLevel=!n}}};t.default=i}},[["61c7","common/runtime","common/vendor"]]]);