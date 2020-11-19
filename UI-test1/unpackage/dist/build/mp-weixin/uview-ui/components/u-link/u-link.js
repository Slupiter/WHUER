(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-link/u-link"],{"0ce9":function(t,e,n){},"1e3b":function(t,e,n){"use strict";n.r(e);var u=n("df44"),i=n.n(u);for(var r in u)"default"!==r&&function(t){n.d(e,t,(function(){return u[t]}))}(r);e["default"]=i.a},3733:function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return u}));var i=function(){var t=this,e=t.$createElement;t._self._c},r=[]},b99e:function(t,e,n){"use strict";var u=n("0ce9"),i=n.n(u);i.a},db67:function(t,e,n){"use strict";n.r(e);var u=n("3733"),i=n("1e3b");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b99e");var a,f=n("f0c5"),o=Object(f["a"])(i["default"],u["b"],u["c"],!1,null,"e94f7372",null,!1,u["a"],a);e["default"]=o.exports},df44:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"u-link",props:{color:{type:String,default:"#2979ff"},fontSize:{type:[String,Number],default:28},underLine:{type:Boolean,default:!1},href:{type:String,default:""},mpTips:{type:String,default:"链接已复制，请在浏览器打开"},lineColor:{type:String,default:""}},methods:{openLink:function(){var e=this;t.setClipboardData({data:this.href,success:function(){t.hideToast(),e.$nextTick((function(){e.$u.toast(e.mpTips)}))}})}}};e.default=n}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-link/u-link-create-component',
    {
        'uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("db67"))
        })
    },
    [['uview-ui/components/u-link/u-link-create-component']]
]);
