(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{1614:function(t,e,n){"use strict";n.r(e);var o=n("8f87"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=i.a},"1cc1":function(t,e,n){var o=n("f908");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("639c8e7a",o,!0,{sourceMap:!1,shadowMode:!1})},"1e49":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"m-icon",class:["m-icon-"+t.type],style:{color:t.color,"font-size":t.fontSize},on:{click:function(e){e=t.$handleEvent(e),t.onClick()}}})},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},"202f":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".action-row[data-v-e3b333be]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.action-row uni-navigator[data-v-e3b333be]{color:#007aff;padding:0 %?20?%}.oauth-row[data-v-e3b333be]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0;left:0;width:100%}.oauth-image[data-v-e3b333be]{width:%?100?%;height:%?100?%;border:%?1?% solid #ddd;border-radius:%?100?%;margin:0 %?40?%;background-color:#fff}.oauth-image uni-image[data-v-e3b333be]{width:%?60?%;height:%?60?%;margin:%?20?%}",""])},2614:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"input-group"},[n("v-uni-view",{staticClass:"input-row border"},[n("v-uni-text",{staticClass:"title"},[t._v("账号：")]),n("m-input",{staticClass:"m-input",attrs:{type:"text",clearable:"",focus:"",placeholder:"请输入账号"},model:{value:t.account,callback:function(e){t.account=e},expression:"account"}})],1),n("v-uni-view",{staticClass:"input-row"},[n("v-uni-text",{staticClass:"title"},[t._v("密码：")]),n("m-input",{attrs:{type:"password",displayable:"",placeholder:"请输入密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),n("v-uni-view",{staticClass:"btn-row"},[n("v-uni-button",{staticClass:"primary",attrs:{type:"primary"},on:{click:function(e){e=t.$handleEvent(e),t.bindLogin(e)}}},[t._v("登录")])],1),n("v-uni-view",{staticClass:"action-row"},[n("v-uni-navigator",{attrs:{url:"../reg/reg"}},[t._v("注册账号")]),n("v-uni-text",[t._v("|")]),n("v-uni-navigator",{attrs:{url:"../pwd/pwd"}},[t._v("忘记密码")])],1),t.hasProvider?n("v-uni-view",{staticClass:"oauth-row",style:{top:t.positionTop+"px"}},t._l(t.providerList,function(e){return n("v-uni-view",{key:e.value,staticClass:"oauth-image"},[n("v-uni-image",{attrs:{src:e.image},on:{click:function(n){n=t.$handleEvent(n),t.oauth(e.value)}}})],1)})):t._e()],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},4183:function(t,e,n){"use strict";n.r(e);var o=n("c1aa"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=i.a},5891:function(t,e,n){"use strict";var o=n("d4a4"),i=n.n(o);i.a},"6f1c":function(t,e,n){"use strict";n.r(e);var o=n("bfaa"),i=n.n(o);for(var c in o)"default"!==c&&function(t){n.d(e,t,function(){return o[t]})}(c);e["default"]=i.a},"8f87":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i(n("ca53"));function i(t){return t&&t.__esModule?t:{default:t}}var c={components:{mIcon:o.default},props:{type:String,value:String,placeholder:String,clearable:{type:[Boolean,String],default:!1},displayable:{type:[Boolean,String],default:!1},focus:{type:[Boolean,String],default:!1}},model:{prop:"value",event:"input"},data:function(){return{showPassword:!1,isFocus:!1}},computed:{inputType:function(){var t=this.type;return"password"===t?"text":t},clearable_:function(){return"false"!==String(this.clearable)},displayable_:function(){return"false"!==String(this.displayable)},focus_:function(){return"false"!==String(this.focus)}},methods:{clear:function(){this.value=""},display:function(){this.showPassword=!this.showPassword},onFocus:function(){this.isFocus=!0},onBlur:function(){var t=this;this.$nextTick(function(){t.isFocus=!1})},onInput:function(t){this.$emit("input",t.target.value)}}};e.default=c},9361:function(t,e,n){var o=n("202f");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("f886633c",o,!0,{sourceMap:!1,shadowMode:!1})},a006:function(t,e,n){"use strict";n.r(e);var o=n("2614"),i=n("4183");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("d4b6");var a=n("2877"),d=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"e3b333be",null);d.options.__file="login.vue",e["default"]=d.exports},a083:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"m-input-view"},[n("v-uni-input",{staticClass:"m-input-input",attrs:{focus:t.focus_,type:t.inputType,value:t.value,placeholder:t.placeholder,password:"password"===t.type&&!t.showPassword},on:{input:function(e){e=t.$handleEvent(e),t.onInput(e)},focus:function(e){e=t.$handleEvent(e),t.onFocus(e)},blur:function(e){e=t.$handleEvent(e),t.onBlur(e)}}}),t.clearable_&&!t.displayable_&&t.value.length?n("v-uni-view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:"#666666",type:"clear",size:"20"},on:{click:function(e){e=t.$handleEvent(e),t.clear(e)}}})],1):t._e(),t.displayable_?n("v-uni-view",{staticClass:"m-input-icon"},[n("m-icon",{attrs:{color:t.showPassword?"#666666":"#cccccc",type:"eye",size:"20"},on:{click:function(e){e=t.$handleEvent(e),t.display(e)}}})],1):t._e()],1)},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},bfaa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={props:{type:String,color:String,size:{type:[Number,String],default:24}},computed:{fontSize:function(){var t=Number(this.size);return t=isNaN(t)?24:t,"".concat(t,"px")}},methods:{onClick:function(){this.$emit("click")}}};e.default=o},c0d8:function(t,e,n){"use strict";n.r(e);var o=n("a083"),i=n("1614");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("5891");var a=n("2877"),d=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"536ebae5",null);d.options.__file="m-input.vue",e["default"]=d.exports},c1aa:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("ca88")),i=n("2f62"),c=a(n("c0d8"));function a(t){return t&&t.__esModule?t:{default:t}}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={components:{mInput:c.default},data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,i.mapState)(["forcedLogin"]),methods:d({},(0,i.mapMutations)(["login","pass"]),{initProvider:function(){var t=this,e=["weixin","qq","sinaweibo"];uni.getProvider({service:"oauth",success:function(n){if(n.provider&&n.provider.length){for(var o=0;o<n.provider.length;o++)~e.indexOf(n.provider[o])&&t.providerList.push({value:n.provider[o],image:"../../static/img/"+n.provider[o]+".png"});t.hasProvider=!0}},fail:function(t){console.error("获取服务供应商失败："+JSON.stringify(t))}})},initPosition:function(){this.positionTop=uni.getSystemInfoSync().windowHeight-100},bindLogin:function(){if(this.account.length<5)uni.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)uni.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var t={account:this.account,password:this.password},e=o.default.getUsers().some(function(e){return t.account===e.account&&t.password===e.password});e?this.toMain(this.account):uni.showToast({icon:"none",title:"用户账号或密码不正确"})}},oauth:function(t){var e=this;uni.login({provider:t,success:function(n){uni.getUserInfo({provider:t,success:function(t){console.log(t),e.toMain(t.userInfo.nickName,t.userInfo.avatarUrl)}})},fail:function(t){console.error("授权登录失败："+JSON.stringify(t))}})},toMain:function(t,e){console.log(t+"-------"+e),this.login(t),this.pass(e),this.forcedLogin?uni.reLaunch({url:"../center/center"}):uni.navigateBack()}}),onLoad:function(){this.initPosition(),this.initProvider()}};e.default=f},ca53:function(t,e,n){"use strict";n.r(e);var o=n("1e49"),i=n("6f1c");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("f3bd");var a=n("2877"),d=Object(a["a"])(i["default"],o["a"],o["b"],!1,null,"2d2f4d3c",null);d.options.__file="m-icon.vue",e["default"]=d.exports},ca88:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o="USERS_KEY",i=function(){var t="";return t=uni.getStorageSync(o),t||(t="[]"),JSON.parse(t)},c=function(t){var e=i();e.push({account:t.account,password:t.password}),uni.setStorageSync(o,JSON.stringify(e))},a={getUsers:i,addUser:c};e.default=a},d139:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".m-input-view[data-v-536ebae5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:0 %?10?%}.m-input-input[data-v-536ebae5]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:100%}.m-input-icon[data-v-536ebae5]{width:20px}",""])},d4a4:function(t,e,n){var o=n("d139");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("b39a59c4",o,!0,{sourceMap:!1,shadowMode:!1})},d4b6:function(t,e,n){"use strict";var o=n("9361"),i=n.n(o);i.a},f3bd:function(t,e,n){"use strict";var o=n("1cc1"),i=n.n(o);i.a},f908:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@font-face{font-family:uniicons;font-weight:400;font-style:normal;src:url(https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf?t=1536565627510) format("truetype")}.m-icon[data-v-2d2f4d3c]{font-family:uniicons;font-size:%?48?%;font-weight:400;font-style:normal;line-height:1;display:inline-block;text-decoration:none;-webkit-font-smoothing:antialiased}.m-icon.uni-active[data-v-2d2f4d3c]{color:#007aff}.m-icon-contact[data-v-2d2f4d3c]:before{content:"\\E100"}.m-icon-person[data-v-2d2f4d3c]:before{content:"\\E101"}.m-icon-personadd[data-v-2d2f4d3c]:before{content:"\\E102"}.m-icon-contact-filled[data-v-2d2f4d3c]:before{content:"\\E130"}.m-icon-person-filled[data-v-2d2f4d3c]:before{content:"\\E131"}.m-icon-personadd-filled[data-v-2d2f4d3c]:before{content:"\\E132"}.m-icon-phone[data-v-2d2f4d3c]:before{content:"\\E200"}.m-icon-email[data-v-2d2f4d3c]:before{content:"\\E201"}.m-icon-chatbubble[data-v-2d2f4d3c]:before{content:"\\E202"}.m-icon-chatboxes[data-v-2d2f4d3c]:before{content:"\\E203"}.m-icon-phone-filled[data-v-2d2f4d3c]:before{content:"\\E230"}.m-icon-email-filled[data-v-2d2f4d3c]:before{content:"\\E231"}.m-icon-chatbubble-filled[data-v-2d2f4d3c]:before{content:"\\E232"}.m-icon-chatboxes-filled[data-v-2d2f4d3c]:before{content:"\\E233"}.m-icon-weibo[data-v-2d2f4d3c]:before{content:"\\E260"}.m-icon-weixin[data-v-2d2f4d3c]:before{content:"\\E261"}.m-icon-pengyouquan[data-v-2d2f4d3c]:before{content:"\\E262"}.m-icon-chat[data-v-2d2f4d3c]:before{content:"\\E263"}.m-icon-qq[data-v-2d2f4d3c]:before{content:"\\E264"}.m-icon-videocam[data-v-2d2f4d3c]:before{content:"\\E300"}.m-icon-camera[data-v-2d2f4d3c]:before{content:"\\E301"}.m-icon-mic[data-v-2d2f4d3c]:before{content:"\\E302"}.m-icon-location[data-v-2d2f4d3c]:before{content:"\\E303"}.m-icon-mic-filled[data-v-2d2f4d3c]:before,.m-icon-speech[data-v-2d2f4d3c]:before{content:"\\E332"}.m-icon-location-filled[data-v-2d2f4d3c]:before{content:"\\E333"}.m-icon-micoff[data-v-2d2f4d3c]:before{content:"\\E360"}.m-icon-image[data-v-2d2f4d3c]:before{content:"\\E363"}.m-icon-map[data-v-2d2f4d3c]:before{content:"\\E364"}.m-icon-compose[data-v-2d2f4d3c]:before{content:"\\E400"}.m-icon-trash[data-v-2d2f4d3c]:before{content:"\\E401"}.m-icon-upload[data-v-2d2f4d3c]:before{content:"\\E402"}.m-icon-download[data-v-2d2f4d3c]:before{content:"\\E403"}.m-icon-close[data-v-2d2f4d3c]:before{content:"\\E404"}.m-icon-redo[data-v-2d2f4d3c]:before{content:"\\E405"}.m-icon-undo[data-v-2d2f4d3c]:before{content:"\\E406"}.m-icon-refresh[data-v-2d2f4d3c]:before{content:"\\E407"}.m-icon-star[data-v-2d2f4d3c]:before{content:"\\E408"}.m-icon-plus[data-v-2d2f4d3c]:before{content:"\\E409"}.m-icon-minus[data-v-2d2f4d3c]:before{content:"\\E410"}.m-icon-checkbox[data-v-2d2f4d3c]:before,.m-icon-circle[data-v-2d2f4d3c]:before{content:"\\E411"}.m-icon-clear[data-v-2d2f4d3c]:before,.m-icon-close-filled[data-v-2d2f4d3c]:before{content:"\\E434"}.m-icon-refresh-filled[data-v-2d2f4d3c]:before{content:"\\E437"}.m-icon-star-filled[data-v-2d2f4d3c]:before{content:"\\E438"}.m-icon-plus-filled[data-v-2d2f4d3c]:before{content:"\\E439"}.m-icon-minus-filled[data-v-2d2f4d3c]:before{content:"\\E440"}.m-icon-circle-filled[data-v-2d2f4d3c]:before{content:"\\E441"}.m-icon-checkbox-filled[data-v-2d2f4d3c]:before{content:"\\E442"}.m-icon-closeempty[data-v-2d2f4d3c]:before{content:"\\E460"}.m-icon-refreshempty[data-v-2d2f4d3c]:before{content:"\\E461"}.m-icon-reload[data-v-2d2f4d3c]:before{content:"\\E462"}.m-icon-starhalf[data-v-2d2f4d3c]:before{content:"\\E463"}.m-icon-spinner[data-v-2d2f4d3c]:before{content:"\\E464"}.m-icon-spinner-cycle[data-v-2d2f4d3c]:before{content:"\\E465"}.m-icon-search[data-v-2d2f4d3c]:before{content:"\\E466"}.m-icon-plusempty[data-v-2d2f4d3c]:before{content:"\\E468"}.m-icon-forward[data-v-2d2f4d3c]:before{content:"\\E470"}.m-icon-back[data-v-2d2f4d3c]:before,.m-icon-left-nav[data-v-2d2f4d3c]:before{content:"\\E471"}.m-icon-checkmarkempty[data-v-2d2f4d3c]:before{content:"\\E472"}.m-icon-home[data-v-2d2f4d3c]:before{content:"\\E500"}.m-icon-navigate[data-v-2d2f4d3c]:before{content:"\\E501"}.m-icon-gear[data-v-2d2f4d3c]:before{content:"\\E502"}.m-icon-paperplane[data-v-2d2f4d3c]:before{content:"\\E503"}.m-icon-info[data-v-2d2f4d3c]:before{content:"\\E504"}.m-icon-help[data-v-2d2f4d3c]:before{content:"\\E505"}.m-icon-locked[data-v-2d2f4d3c]:before{content:"\\E506"}.m-icon-more[data-v-2d2f4d3c]:before{content:"\\E507"}.m-icon-flag[data-v-2d2f4d3c]:before{content:"\\E508"}.m-icon-home-filled[data-v-2d2f4d3c]:before{content:"\\E530"}.m-icon-gear-filled[data-v-2d2f4d3c]:before{content:"\\E532"}.m-icon-info-filled[data-v-2d2f4d3c]:before{content:"\\E534"}.m-icon-help-filled[data-v-2d2f4d3c]:before{content:"\\E535"}.m-icon-more-filled[data-v-2d2f4d3c]:before{content:"\\E537"}.m-icon-settings[data-v-2d2f4d3c]:before{content:"\\E560"}.m-icon-list[data-v-2d2f4d3c]:before{content:"\\E562"}.m-icon-bars[data-v-2d2f4d3c]:before{content:"\\E563"}.m-icon-loop[data-v-2d2f4d3c]:before{content:"\\E565"}.m-icon-paperclip[data-v-2d2f4d3c]:before{content:"\\E567"}.m-icon-eye[data-v-2d2f4d3c]:before{content:"\\E568"}.m-icon-arrowup[data-v-2d2f4d3c]:before{content:"\\E580"}.m-icon-arrowdown[data-v-2d2f4d3c]:before{content:"\\E581"}.m-icon-arrowleft[data-v-2d2f4d3c]:before{content:"\\E582"}.m-icon-arrowright[data-v-2d2f4d3c]:before{content:"\\E583"}.m-icon-arrowthinup[data-v-2d2f4d3c]:before{content:"\\E584"}.m-icon-arrowthindown[data-v-2d2f4d3c]:before{content:"\\E585"}.m-icon-arrowthinleft[data-v-2d2f4d3c]:before{content:"\\E586"}.m-icon-arrowthinright[data-v-2d2f4d3c]:before{content:"\\E587"}.m-icon-pulldown[data-v-2d2f4d3c]:before{content:"\\E588"}.m-icon-scan[data-v-2d2f4d3c]:before{content:"\\E612"}',""])}}]);