require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/mallMenu/index2"],{3823:function(e,t,n){"use strict";n.r(t);var r=n("8d7e"),u=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=u.a},"8d7e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n("a34a")),u=i(n("61bf"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t,n,r,u,i,c){try{var o=e[i](c),a=o.value}catch(l){return void n(l)}o.done?t(a):Promise.resolve(a).then(r,u)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function o(e){c(i,r,u,o,a,"next",e)}function a(e){c(i,r,u,o,a,"throw",e)}o(void 0)}))}}var a={data:function(){return{scrollTop:0,oldScrollTop:0,current:0,menuHeight:0,menuItemHeight:0,itemId:"",tabbar:u.default,menuItemPos:[],arr:[],scrollRightTop:0,timer:null}},onLoad:function(){},onReady:function(){this.getMenuItemTop()},methods:{swichMenu:function(e){var t=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!=t.arr.length){n.next=3;break}return n.next=3,t.getMenuItemTop();case 3:if(e!=t.current){n.next=5;break}return n.abrupt("return");case 5:t.scrollRightTop=t.oldScrollTop,t.$nextTick((function(){this.scrollRightTop=this.arr[e],this.current=e,this.leftMenuStatus(e)}));case 7:case"end":return n.stop()}}),n)})))()},getElRect:function(t,n){var r=this;new Promise((function(u,i){var c=e.createSelectorQuery().in(r);c.select("."+t).fields({size:!0},(function(e){e?(r[n]=e.height,u()):setTimeout((function(){r.getElRect(t)}),10)})).exec()}))},observer:function(){var t=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.tabbar.map((function(n,r){var u=e.createIntersectionObserver(t);u.relativeTo(".right-box",{top:0}).observe("#item"+r,(function(e){if(e.intersectionRatio>0){var n=e.id.substring(4);t.leftMenuStatus(n)}}))}));case 1:case"end":return n.stop()}}),n)})))()},leftMenuStatus:function(e){var t=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.current=e,0!=t.menuHeight&&0!=t.menuItemHeight){n.next=6;break}return n.next=4,t.getElRect("menu-scroll-view","menuHeight");case 4:return n.next=6,t.getElRect("u-tab-item","menuItemHeight");case 6:t.scrollTop=e*t.menuItemHeight+t.menuItemHeight/2-t.menuHeight/2;case 7:case"end":return n.stop()}}),n)})))()},getMenuItemTop:function(){var t=this;new Promise((function(n){var r=e.createSelectorQuery();r.selectAll(".class-item").boundingClientRect((function(e){e.length?e.forEach((function(r){t.arr.push(r.top-e[0].top),n()})):setTimeout((function(){t.getMenuItemTop()}),10)})).exec()}))},rightScroll:function(e){var t=this;return o(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.oldScrollTop=e.detail.scrollTop,0!=t.arr.length){n.next=4;break}return n.next=4,t.getMenuItemTop();case 4:if(!t.timer){n.next=6;break}return n.abrupt("return");case 6:if(t.menuHeight){n.next=9;break}return n.next=9,t.getElRect("menu-scroll-view","menuHeight");case 9:setTimeout((function(){t.timer=null;for(var n=e.detail.scrollTop+t.menuHeight/2,r=0;r<t.arr.length;r++){var u=t.arr[r],i=t.arr[r+1];if(!i||n>=u&&n<i)return void t.leftMenuStatus(r)}}),10);case 10:case"end":return n.stop()}}),n)})))()}}};t.default=a}).call(this,n("543d")["default"])},"9e04":function(e,t,n){"use strict";(function(e){n("9729");r(n("66fd"));var t=r(n("c940"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},c940:function(e,t,n){"use strict";n.r(t);var r=n("cc28"),u=n("3823");for(var i in u)"default"!==i&&function(e){n.d(t,e,(function(){return u[e]}))}(i);n("e37f");var c,o=n("f0c5"),a=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"0bc7d63a",null,!1,r["a"],c);t["default"]=a.exports},cc28:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var r={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"4470"))}},u=function(){var e=this,t=e.$createElement;e._self._c},i=[]},e37f:function(e,t,n){"use strict";var r=n("e75b"),u=n.n(r);u.a},e75b:function(e,t,n){}},[["9e04","common/runtime","common/vendor","pages/template/common/vendor"]]]);