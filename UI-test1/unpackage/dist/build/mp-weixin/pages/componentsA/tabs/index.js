require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentsA/tabs/index"],{"0939":function(t,n,i){"use strict";i.d(n,"b",(function(){return e})),i.d(n,"c",(function(){return a})),i.d(n,"a",(function(){return s}));var s={uToast:function(){return i.e("uview-ui/components/u-toast/u-toast").then(i.bind(null,"bc3c"))},uTabs:function(){return Promise.all([i.e("common/vendor"),i.e("uview-ui/components/u-tabs/u-tabs")]).then(i.bind(null,"cca1"))},uSubsection:function(){return i.e("uview-ui/components/u-subsection/u-subsection").then(i.bind(null,"d303"))}},e=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"0e09":function(t,n,i){},"1d48":function(t,n,i){"use strict";var s=i("0e09"),e=i.n(s);e.a},"3e6d":function(t,n,i){"use strict";i.r(n);var s=i("0939"),e=i("abcd");for(var a in e)"default"!==a&&function(t){i.d(n,t,(function(){return e[t]}))}(a);i("1d48");var u,o=i("f0c5"),c=Object(o["a"])(e["default"],s["b"],s["c"],!1,null,"0fd7a8bd",null,!1,s["a"],u);n["default"]=c.exports},5421:function(t,n,i){"use strict";(function(t){i("9729");s(i("66fd"));var n=s(i("3e6d"));function s(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("543d")["createPage"])},abcd:function(t,n,i){"use strict";i.r(n);var s=i("befc"),e=i.n(s);for(var a in s)"default"!==a&&function(t){i.d(n,t,(function(){return s[t]}))}(a);n["default"]=e.a},befc:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var s={data:function(){return{list:[],data:[{name:"关注"},{name:"推荐"},{name:"电影"},{name:"电视剧"},{name:"小视频"},{name:"游戏"},{name:"校园"},{name:"影视"},{name:"音乐"}],current:0,sectionCurrent:0,isScroll:!0,tabCountIndex:0,activeColor:this.$u.color["primary"],bold:!0,control:!0}},onLoad:function(){this.list=this.data},methods:{countChange:function(t){this.sectionCurrent=1,0==t?(this.list=[],this.list.push(this.data[0]),this.list.push(this.data[1])):1==t?(this.list=[],this.list.push(this.data[0]),this.list.push(this.data[1]),this.list.push(this.data[2])):(this.list=[],this.list.push(this.data[0]),this.list.push(this.data[1]),this.list.push(this.data[2]),this.list.push(this.data[3])),this.tabCountIndex=t,this.isScroll=!1},change:function(t){this.current=t},modeChange:function(t){var n=this;this.control=!1,this.current=0,0==t?(this.isScroll=!0,this.list=this.data):(this.isScroll=!1,this.countChange(this.tabCountIndex)),this.$nextTick((function(){n.control=!0}))},colorChange:function(t){var n="primary";switch(t){case 0:n="primary";break;case 1:n="success";break;case 2:n="error";break;case 3:n="warning";break}this.activeColor=this.$u.color[n]},boldChange:function(t){switch(t){case 0:this.bold=!0;break;case 1:this.bold=!1;break}}}};n.default=s}},[["5421","common/runtime","common/vendor"]]]);