require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/componentsA/navbar/index"],{"033d":function(t,n,i){"use strict";i.r(n);var e=i("83ed"),u=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(n,t,(function(){return e[t]}))}(o);n["default"]=u.a},"581e":function(t,n,i){"use strict";i.d(n,"b",(function(){return u})),i.d(n,"c",(function(){return o})),i.d(n,"a",(function(){return e}));var e={uNavbar:function(){return i.e("uview-ui/components/u-navbar/u-navbar").then(i.bind(null,"269e"))},uSearch:function(){return i.e("uview-ui/components/u-search/u-search").then(i.bind(null,"0920"))},uIcon:function(){return i.e("uview-ui/components/u-icon/u-icon").then(i.bind(null,"4470"))},uBadge:function(){return i.e("uview-ui/components/u-badge/u-badge").then(i.bind(null,"200f"))},uToast:function(){return i.e("uview-ui/components/u-toast/u-toast").then(i.bind(null,"bc3c"))},uSubsection:function(){return i.e("uview-ui/components/u-subsection/u-subsection").then(i.bind(null,"d303"))}},u=function(){var t=this,n=t.$createElement;t._self._c},o=[]},"83ed":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{title:"新闻",backText:"返回",backIconName:"nav-back",right:!1,showAction:!1,rightSlot:!1,useSlot:!1,background:{"background-image":"linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))"},isBack:!0,search:!1,custom:!1,isFixed:!0,keyword:"",slotRight:!1}},computed:{slotRightCurrent:function(){return this.slotRight?0:1}},methods:{titleChange:function(t){this.useSlot=!1,this.title=0==t?"新闻":1==t?"新闻列表":"雨打梨花深闭门，忘了青春，误了青春"},leftChange:function(t){0==t?(this.backText="",this.backIconName="arrow-leftward"):(this.backText="返回",this.backIconName="arrow-left")},searchChange:function(t){this.title=null,this.useSlot=!0,this.search=!1,this.custom=!1,0==t?(this.title="新闻",this.useSlot=!1,this.rightSlot=!1):1==t?(this.showAction=!1,this.useSlot=!0,this.rightSlot=!1,this.search=!0,this.slotRight=!1):2==t?(this.useSlot=!0,this.showAction=!0,this.rightSlot=!1,this.search=!0,this.slotRight=!1):(this.useSlot=!0,this.search=!0,this.showAction=!1,this.rightSlot=!0,this.slotRight=!1)},backChange:function(t){this.isBack=!!t},bgColorChange:function(t){if(this.background={},0==t)this.background={"background-image":"linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))"};else{var n=1==t?"#39CCCC":2==t?"#B471CC":"#001f3f";this.background={background:n}}},rightChange:function(t){0==t?(this.slotRight=!0,this.useSlot=!1):this.slotRight=!1},customChange:function(t){this.search=!1,this.rightSlot=!1,0==t?(this.custom=!0,this.title=null,this.isBack=!1,this.useSlot=!0):(this.useSlot=!1,this.title="新闻",this.isBack=!0)}}};n.default=e},8436:function(t,n,i){"use strict";i.r(n);var e=i("581e"),u=i("033d");for(var o in u)"default"!==o&&function(t){i.d(n,t,(function(){return u[t]}))}(o);i("d0da");var s,c=i("f0c5"),a=Object(c["a"])(u["default"],e["b"],e["c"],!1,null,"bd50fba4",null,!1,e["a"],s);n["default"]=a.exports},c696:function(t,n,i){"use strict";(function(t){i("9729");e(i("66fd"));var n=e(i("8436"));function e(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,i("543d")["createPage"])},d0da:function(t,n,i){"use strict";var e=i("f465"),u=i.n(e);u.a},f465:function(t,n,i){}},[["c696","common/runtime","common/vendor"]]]);