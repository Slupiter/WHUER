(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-center-center"],{"46a9":function(t,i,a){"use strict";var e=a("fbfc"),n=a.n(e);n.a},"4a70":function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,"uni-page-body[data-v-76aab4e1],uni-view[data-v-76aab4e1]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}uni-page-body[data-v-76aab4e1]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100%;background-color:#efefef}template[data-v-76aab4e1]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.btn-row[data-v-76aab4e1]{margin-top:%?50?%;padding:%?20?%}uni-button.primary[data-v-76aab4e1]{background-color:#0faeff}body.?%PAGE?%[data-v-76aab4e1]{background-color:#efefef}",""])},"602c":function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"center"},[a("v-uni-view",{staticClass:"logo",attrs:{"hover-class":t.hasLogin?"":"logo-hover"},on:{click:function(i){i=t.$handleEvent(i),t.bindLogin(i)}}},[a("v-uni-image",{staticClass:"logo-img",attrs:{src:t.hasLogin?t.avatarUrl:t.avatarUrl1}}),a("v-uni-view",{staticClass:"logo-title"},[a("v-uni-text",{staticClass:"uer-name"},[t._v("Hi，"+t._s(t.hasLogin?t.userName:"您未登录"))]),t.hasLogin?t._e():a("v-uni-text",{staticClass:"go-login navigat-arrow"},[t._v("")])],1)],1),a("v-uni-view",{staticClass:"btn-row"},[t.hasLogin?a("v-uni-button",{attrs:{type:"default"},on:{click:function(i){i=t.$handleEvent(i),t.bindLogout(i)}}},[t._v("退出登录")]):t._e()],1),a("v-uni-view",{staticClass:"center-list"},[a("v-uni-view",{staticClass:"center-list-item border-bottom"},[a("v-uni-text",{staticClass:"list-icon"},[t._v("")]),a("v-uni-text",{staticClass:"list-text"},[t._v("收藏图片")]),a("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),a("v-uni-view",{staticClass:"center-list-item"},[a("v-uni-text",{staticClass:"list-icon"},[t._v("")]),a("v-uni-text",{staticClass:"list-text"},[t._v("收藏图集")]),a("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1),a("v-uni-view",{staticClass:"center-list"},[a("v-uni-view",{staticClass:"center-list-item border-bottom"},[a("v-uni-text",{staticClass:"list-icon"},[t._v("")]),a("v-uni-text",{staticClass:"list-text"},[t._v("管理图片")]),a("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),a("v-uni-view",{staticClass:"center-list-item"},[a("v-uni-text",{staticClass:"list-icon"},[t._v("")]),a("v-uni-text",{staticClass:"list-text"},[t._v("上传图片")]),a("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1),a("v-uni-view",{staticClass:"center-list"},[a("v-uni-view",{staticClass:"center-list-item border-bottom",on:{click:function(i){i=t.$handleEvent(i),t.goAbout(i)}}},[a("v-uni-text",{staticClass:"list-icon"},[t._v("")]),a("v-uni-text",{staticClass:"list-text"},[t._v("关于")]),a("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1),a("v-uni-view",{staticClass:"center-list-item"},[a("v-uni-text",{staticClass:"list-icon"},[t._v("")]),a("v-uni-text",{staticClass:"list-text"},[t._v("帐号管理")]),a("v-uni-text",{staticClass:"navigat-arrow"},[t._v("")])],1)],1)],1)},n=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return n})},b3cc:function(t,i,a){"use strict";a.r(i);var e=a("602c"),n=a("eb03");for(var s in n)"default"!==s&&function(t){a.d(i,t,function(){return n[t]})}(s);a("46a9");var o=a("2877"),l=Object(o["a"])(n["default"],e["a"],e["b"],!1,null,"76aab4e1",null);l.options.__file="center.vue",i["default"]=l.exports},eb03:function(t,i,a){"use strict";a.r(i);var e=a("f4eb"),n=a.n(e);for(var s in e)"default"!==s&&function(t){a.d(i,t,function(){return e[t]})}(s);i["default"]=n.a},f4eb:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=a("2f62");function n(t){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{},e=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.forEach(function(i){s(t,i,a[i])})}return t}function s(t,i,a){return i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a,t}var o={computed:n({},(0,e.mapState)(["hasLogin","forcedLogin","userName","avatarUrl"])),data:function(){return{avatarUrl1:"../../static/logo.png"}},methods:n({},(0,e.mapMutations)(["logout"]),{bindLogin:function(){this.hasLogin||uni.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&uni.reLaunch({url:"../login/login"})},goAbout:function(){uni.navigateTo({url:"/platforms/h5/about/about"})}})};i.default=o},fbfc:function(t,i,a){var e=a("4a70");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=a("4f06").default;n("125c87eb",e,!0,{sourceMap:!1,shadowMode:!1})}}]);