require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/library/deepMerge/index"],{"0644":function(t,e,n){},2940:function(t,e,n){"use strict";var u=n("0644"),o=n.n(u);o.a},"66b5":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}));var u={uSubsection:function(){return n.e("uview-ui/components/u-subsection/u-subsection").then(n.bind(null,"d303"))}},o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"6de0":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={data:function(){return{obj1:{info:{name:"mary"}},obj2:{info:{age:"22"}},obj3:{info:{name:"mary"}},result:""}},onLoad:function(){this.result=Object.assign(this.obj1,this.obj2),this.obj1=this.$u.deepClone(this.obj3)},methods:{modeChange:function(t){t?this.result=this.$u.deepMerge(this.obj1,this.obj2):(this.result=Object.assign(this.obj1,this.obj2),this.obj1=this.$u.deepClone(this.obj3))}}};e.default=u},"7dde":function(t,e,n){"use strict";n.r(e);var u=n("6de0"),o=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=o.a},9844:function(t,e,n){"use strict";(function(t){n("9729");u(n("66fd"));var e=u(n("cbf4"));function u(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},cbf4:function(t,e,n){"use strict";n.r(e);var u=n("66b5"),o=n("7dde");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("2940");var r,s=n("f0c5"),c=Object(s["a"])(o["default"],u["b"],u["c"],!1,null,"7135c0e6",null,!1,u["a"],r);e["default"]=c.exports}},[["9844","common/runtime","common/vendor"]]]);