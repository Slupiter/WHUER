require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/template/citySelect/u-city-select"],{"145a":function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return i}));var i={uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,"3e71"))},uTabs:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-tabs/u-tabs")]).then(n.bind(null,"cca1"))},uCellGroup:function(){return n.e("uview-ui/components/u-cell-group/u-cell-group").then(n.bind(null,"15ef"))},uCellItem:function(){return n.e("uview-ui/components/u-cell-item/u-cell-item").then(n.bind(null,"b0b0"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"4470"))}},s=function(){var e=this,t=e.$createElement;e._self._c},a=[]},"3da2":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n("24a5")),s=o(n("4212")),a=o(n("4020"));function o(e){return e&&e.__esModule?e:{default:e}}var u={name:"u-city-select",props:{value:{type:Boolean,default:!1},defaultRegion:{type:Array,default:function(){return[]}},areaCode:{type:Array,default:function(){return[]}},maskCloseAble:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:0}},data:function(){return{cityValue:"",isChooseP:!1,province:0,provinces:i.default,isChooseC:!1,city:0,citys:s.default[0],isChooseA:!1,area:0,areas:a.default[0][0],tabsIndex:0}},mounted:function(){this.init()},computed:{isChange:function(){return this.tabsIndex>1},genTabsList:function(){var e=[{name:"请选择"}];return this.isChooseP&&(e[0]["name"]=this.provinces[this.province]["label"],e[1]={name:"请选择"}),this.isChooseC&&(e[1]["name"]=this.citys[this.city]["label"],e[2]={name:"请选择"}),this.isChooseA&&(e[2]["name"]=this.areas[this.area]["label"]),e},uZIndex:function(){return this.zIndex?this.zIndex:this.$u.zIndex.popup}},methods:{init:function(){3==this.areaCode.length?(this.setProvince("",this.areaCode[0]),this.setCity("",this.areaCode[1]),this.setArea("",this.areaCode[2])):3==this.defaultRegion.length&&(this.setProvince(this.defaultRegion[0],""),this.setCity(this.defaultRegion[1],""),this.setArea(this.defaultRegion[2],""))},setProvince:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.provinces.map((function(i,s){(n?i.value==n:i.label==t)&&e.provinceChange(s)}))},setCity:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.citys.map((function(i,s){(n?i.value==n:i.label==t)&&e.cityChange(s)}))},setArea:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";this.areas.map((function(i,s){(n?i.value==n:i.label==t)&&(e.isChooseA=!0,e.area=s)}))},close:function(){this.$emit("input",!1)},tabsChange:function(e){this.tabsIndex=e},provinceChange:function(e){this.isChooseP=!0,this.isChooseC=!1,this.isChooseA=!1,this.province=e,this.citys=s.default[e],this.tabsIndex=1},cityChange:function(e){this.isChooseC=!0,this.isChooseA=!1,this.city=e,this.areas=a.default[this.province][e],this.tabsIndex=2},areaChange:function(e){this.isChooseA=!0,this.area=e;var t={};t.province=this.provinces[this.province],t.city=this.citys[this.city],t.area=this.areas[this.area],this.$emit("city-change",t),this.close()}}};t.default=u},"4f7a":function(e,t,n){"use strict";n.r(t);var i=n("145a"),s=n("da1c");for(var a in s)"default"!==a&&function(e){n.d(t,e,(function(){return s[e]}))}(a);n("c866");var o,u=n("f0c5"),c=Object(u["a"])(s["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=c.exports},c866:function(e,t,n){"use strict";var i=n("f56e"),s=n.n(i);s.a},da1c:function(e,t,n){"use strict";n.r(t);var i=n("3da2"),s=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,(function(){return i[e]}))}(a);t["default"]=s.a},f56e:function(e,t,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/template/citySelect/u-city-select-create-component',
    {
        'pages/template/citySelect/u-city-select-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4f7a"))
        })
    },
    [['pages/template/citySelect/u-city-select-create-component']]
]);
