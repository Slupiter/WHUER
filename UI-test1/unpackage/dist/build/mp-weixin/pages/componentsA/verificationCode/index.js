require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentsA/verificationCode/index"],{4847:function(t,n,e){"use strict";e.r(n);var u=e("a081"),i=e.n(u);for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);n["default"]=i.a},5216:function(t,n,e){"use strict";(function(t){e("9729");u(e("66fd"));var n=u(e("f1f0"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},5601:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return u}));var u={uToast:function(){return e.e("uview-ui/components/u-toast/u-toast").then(e.bind(null,"bc3c"))},uVerificationCode:function(){return e.e("uview-ui/components/u-verification-code/u-verification-code").then(e.bind(null,"bf07"))},uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"0c81"))},uSubsection:function(){return e.e("uview-ui/components/u-subsection/u-subsection").then(e.bind(null,"d303"))}},i=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"8ca8":function(t,n,e){},"98d7":function(t,n,e){"use strict";var u=e("8ca8"),i=e.n(u);i.a},a081:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{tips:"",seconds:60,refCode:null,startText:"获取验证码",changeText:"X秒重新获取",endText:"重新获取"}},onReady:function(){},methods:{codeChange:function(t){this.tips=t},getCode:function(){var n=this;this.$refs.uCode.canGetCode?(t.showLoading({title:"正在获取验证码"}),setTimeout((function(){t.hideLoading(),n.$u.toast("验证码已发送"),n.$refs.uCode.start()}),2e3)):this.$u.toast("倒计时结束后再发送")},secondsChange:function(t){this.seconds=0==t?60:1==t?10:5},textChange:function(t){0==t?(this.startText="点一下获取",this.changeText="重新获取Xs",this.endText="再次获取"):(this.startText="获取验证码",this.changeText="X秒重新获取",this.endText="重新获取")},end:function(){this.$u.toast("倒计时结束")},start:function(){this.$u.toast("倒计时开始")},reset:function(){this.$refs.uCode.reset()}}};n.default=e}).call(this,e("543d")["default"])},f1f0:function(t,n,e){"use strict";e.r(n);var u=e("5601"),i=e("4847");for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);e("98d7");var c,s=e("f0c5"),a=Object(s["a"])(i["default"],u["b"],u["c"],!1,null,"c3d25490",null,!1,u["a"],c);n["default"]=a.exports}},[["5216","common/runtime","common/vendor"]]]);