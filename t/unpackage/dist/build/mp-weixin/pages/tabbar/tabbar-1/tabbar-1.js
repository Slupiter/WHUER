(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabbar/tabbar-1/tabbar-1"],{"22b1":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return u})),a.d(e,"a",(function(){return r}));var r={uButton:function(){return a.e("uview-ui/components/u-button/u-button").then(a.bind(null,"d1f6"))}},n=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"401c":function(t,e,a){},"60de":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{avatar:"/static/logo.jpg"}},created:function(){var e=this;t.$on("uAvatarCropper",(function(t){e.avatar=t,console.log("预览路径"),console.log("path"),e.$u.route({url:"/pages/result/result",params:{src:t}})}))},onShareAppMessage:function(t){return{title:"说文解字",path:"/pages/tabbar/tabbar-1/tabbar-1",imageUrl:this.avatar}},onShareTimeline:function(t){return{title:"说文解字",path:"/pages/tabbar/tabbar-1/tabbar-1",imageUrl:this.avatar}},methods:{chooseAvatar:function(){this.$u.route({url:"/uview-ui/components/u-avatar-cropper/u-avatar-cropper",params:{destWidth:300,rectWidth:200,fileType:"jpg"}})},qualityChange:function(t){this.quality=0==t?.3:1==t?.7:1},styleChange:function(t){0==t?(this.rectHeight=this.rectWidth=this.destHeight=this.destWidth=200,this.boundStyle={lineWidth:8,borderColor:this.$u.color["error"],mask:"rgba(0, 0, 0, 0.8)"}):(this.rectHeight=this.rectWidth=this.destHeight=this.destWidth=400,this.boundStyle={lineWidth:4,borderColor:"rgb(245, 245, 245)",mask:"rgba(0, 0, 0, 0.35)"})},preAvatar:function(){wx.previewImage({current:"",urls:[this.avatar]})}}};e.default=a}).call(this,a("543d")["default"])},ac10:function(t,e,a){"use strict";a.r(e);var r=a("60de"),n=a.n(r);for(var u in r)"default"!==u&&function(t){a.d(e,t,(function(){return r[t]}))}(u);e["default"]=n.a},b249:function(t,e,a){"use strict";var r=a("401c"),n=a.n(r);n.a},d506:function(t,e,a){"use strict";(function(t){a("23d8");r(a("66fd"));var e=r(a("f3e8"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("543d")["createPage"])},f3e8:function(t,e,a){"use strict";a.r(e);var r=a("22b1"),n=a("ac10");for(var u in n)"default"!==u&&function(t){a.d(e,t,(function(){return n[t]}))}(u);a("b249");var i,o=a("f0c5"),c=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"07cc84b6",null,!1,r["a"],i);e["default"]=c.exports}},[["d506","common/runtime","common/vendor"]]]);