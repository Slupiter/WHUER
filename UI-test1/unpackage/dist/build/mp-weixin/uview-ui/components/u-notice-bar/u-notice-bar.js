(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uview-ui/components/u-notice-bar/u-notice-bar"],{"1a48":function(t,e,n){"use strict";var u=n("b613"),o=n.n(u);o.a},"1f89":function(t,e,n){"use strict";n.r(e);var u=n("a206"),o=n("9a23");for(var i in o)"default"!==i&&function(t){n.d(e,t,(function(){return o[t]}))}(i);n("1a48");var a,r=n("f0c5"),l=Object(r["a"])(o["default"],u["b"],u["c"],!1,null,"5b5f7d68",null,!1,u["a"],a);e["default"]=l.exports},"499d":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"u-notice-bar",props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},volumeSize:{type:[Number,String],default:34},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},mode:{type:String,default:"horizontal"},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:28},duration:{type:[Number,String],default:2e3},speed:{type:[Number,String],default:160},isCircular:{type:Boolean,default:!0},playState:{type:String,default:"play"},disableTouch:{type:Boolean,default:!0},borderRadius:{type:[Number,String],default:0},padding:{type:[Number,String],default:"18rpx 24rpx"},noListHidden:{type:Boolean,default:!0}},computed:{isShow:function(){return 0!=this.show&&(1!=this.noListHidden||0!=this.list.length)}},methods:{click:function(t){this.$emit("click",t)},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")},end:function(){this.$emit("end")}}};e.default=u},"9a23":function(t,e,n){"use strict";n.r(e);var u=n("499d"),o=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=o.a},a206:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}));var u={uRowNotice:function(){return n.e("uview-ui/components/u-row-notice/u-row-notice").then(n.bind(null,"411f"))},uColumnNotice:function(){return n.e("uview-ui/components/u-column-notice/u-column-notice").then(n.bind(null,"612a"))}},o=function(){var t=this,e=t.$createElement;t._self._c},i=[]},b613:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-notice-bar/u-notice-bar-create-component',
    {
        'uview-ui/components/u-notice-bar/u-notice-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("1f89"))
        })
    },
    [['uview-ui/components/u-notice-bar/u-notice-bar-create-component']]
]);