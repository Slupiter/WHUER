(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/center/center"],{"1d09":function(t,e,a){"use strict";var s=a("fb03"),i=a.n(s);i.a},"7baa":function(t,e,a){"use strict";a("ed68");var s=n(a("b0ce")),i=n(a("b3cc"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(i.default))},8102:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"center"},[a("view",{staticClass:"logo",attrs:{"hover-class":t.hasLogin?"":"logo-hover",eventid:"796c24c8-0"},on:{click:t.bindLogin}},[a("image",{staticClass:"logo-img",attrs:{src:t.hasLogin?t.avatarUrl:t.avatarUrl1}}),a("view",{staticClass:"logo-title"},[a("text",{staticClass:"uer-name"},[t._v("Hi，"+t._s(t.hasLogin?t.userName:"您未登录"))]),t.hasLogin?t._e():a("text",{staticClass:"go-login navigat-arrow"},[t._v("")])])]),a("view",{staticClass:"btn-row"},[t.hasLogin?a("button",{attrs:{type:"default",eventid:"796c24c8-1"},on:{tap:t.bindLogout}},[t._v("退出登录")]):t._e()],1),t._m(0),t._m(1),a("view",{staticClass:"center-list"},[a("view",{staticClass:"center-list-item border-bottom",attrs:{eventid:"796c24c8-2"},on:{click:t.goAbout}},[a("text",{staticClass:"list-icon"},[t._v("")]),a("text",{staticClass:"list-text"},[t._v("关于")]),a("text",{staticClass:"navigat-arrow"},[t._v("")])]),t._m(2)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"center-list"},[a("view",{staticClass:"center-list-item border-bottom"},[a("text",{staticClass:"list-icon"},[t._v("")]),a("text",{staticClass:"list-text"},[t._v("收藏图片")]),a("text",{staticClass:"navigat-arrow"},[t._v("")])]),a("view",{staticClass:"center-list-item"},[a("text",{staticClass:"list-icon"},[t._v("")]),a("text",{staticClass:"list-text"},[t._v("收藏图集")]),a("text",{staticClass:"navigat-arrow"},[t._v("")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"center-list"},[a("view",{staticClass:"center-list-item border-bottom"},[a("text",{staticClass:"list-icon"},[t._v("")]),a("text",{staticClass:"list-text"},[t._v("管理图片")]),a("text",{staticClass:"navigat-arrow"},[t._v("")])]),a("view",{staticClass:"center-list-item"},[a("text",{staticClass:"list-icon"},[t._v("")]),a("text",{staticClass:"list-text"},[t._v("上传图片")]),a("text",{staticClass:"navigat-arrow"},[t._v("")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"center-list-item"},[a("text",{staticClass:"list-icon"},[t._v("")]),a("text",{staticClass:"list-text"},[t._v("帐号管理")]),a("text",{staticClass:"navigat-arrow"},[t._v("")])])}];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},b3cc:function(t,e,a){"use strict";a.r(e);var s=a("8102"),i=a("eb03");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("1d09");var r=a("2877"),c=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,null,null);c.options.__file="center.vue",e["default"]=c.exports},b449:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=a("2f62");function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){n(t,e,a[e])})}return t}function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var r={computed:i({},(0,s.mapState)(["hasLogin","forcedLogin","userName","avatarUrl"])),data:function(){return{avatarUrl1:"../../static/logo.png"}},methods:i({},(0,s.mapMutations)(["logout"]),{bindLogin:function(){this.hasLogin||t.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&t.reLaunch({url:"../login/login"})},goAbout:function(){}})};e.default=r}).call(this,a("543d")["default"])},eb03:function(t,e,a){"use strict";a.r(e);var s=a("b449"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=i.a},fb03:function(t,e,a){}},[["7baa","common/runtime","common/vendor"]]]);