(function(e){function t(t){for(var i,r,l=t[0],s=t[1],c=t[2],d=0,f=[];d<l.length;d++)r=l[d],o[r]&&f.push(o[r][0]),o[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);g&&g(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(i=!1)}i&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var i={},o={index:0},a=[];function r(e){return l.p+"static/js/"+({"pages-center-center":"pages-center-center","pages-detail-detail":"pages-detail-detail","pages-detail-news-detail-news":"pages-detail-news-detail-news","pages-hot-hot":"pages-hot-hot","pages-list-list":"pages-list-list","pages-list1-list1":"pages-list1-list1","pages-list2detail-detail-list2detail-detail":"pages-list2detail-detail-list2detail-detail","pages-list2detail-list-list2detail-list":"pages-list2detail-list-list2detail-list","pages-login-login":"pages-login-login","pages-new-new":"pages-new-new","pages-pwd-pwd":"pages-pwd-pwd","pages-reg-reg":"pages-reg-reg","pages-tag-tag":"pages-tag-tag","platforms-h5-about-about":"platforms-h5-about-about"}[e]||e)+"."+{"pages-center-center":"f5a0e0fb","pages-detail-detail":"5d984b36","pages-detail-news-detail-news":"2b2cd520","pages-hot-hot":"085edab6","pages-list-list":"8853c888","pages-list1-list1":"2ebae79e","pages-list2detail-detail-list2detail-detail":"fd51adf9","pages-list2detail-list-list2detail-list":"6dcd2c98","pages-login-login":"c63f9cf6","pages-new-new":"fdeb8f0d","pages-pwd-pwd":"027246da","pages-reg-reg":"880696e4","pages-tag-tag":"4d15ffa0","platforms-h5-about-about":"d2ce22a3"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(function(t,i){n=o[e]=[t,i]});t.push(n[2]=i);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=r(e),a=function(t){s.onerror=s.onload=null,clearTimeout(c);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+i+": "+a+")");r.type=i,r.request=a,n[1](r)}o[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:s})},12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(n,i,function(t){return e[t]}.bind(null,i));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/demo/picture/website/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var g=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("7d3f")},"0379":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("e143")),o=a(n("2f62"));function a(e){return e&&e.__esModule?e:{default:e}}i.default.use(o.default);var r=new o.default.Store({state:{forcedLogin:!1,hasLogin:!1,userName:"",avatarUrl:""},mutations:{login:function(e,t){e.userName=t||"新用户",e.hasLogin=!0},pass:function(e,t){e.avatarUrl=t},logout:function(e){e.userName="",e.hasLogin=!1,e.avatarUrl=""}}}),l=r;t.default=l},2183:function(e,t,n){"use strict";n.r(t);var i=n("6824"),o=n("aad5");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("4d29");var r=n("2877"),l=Object(r["a"])(o["default"],i["a"],i["b"],!1,null,null,null);l.options.__file="App.vue",t["default"]=l.exports},"4d29":function(e,t,n){"use strict";var i=n("5188"),o=n.n(i);o.a},5188:function(e,t,n){var i=n("c143");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("2a3415f2",i,!0,{sourceMap:!1,shadowMode:!1})},"5fc0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};t.default=i},6824:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"7d3f":function(e,t,n){"use strict";n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("0298"),n("c8ce"),n("87b3"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("262f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf"),n("ed68"),n("1c31");var i=r(n("e143")),o=r(n("2183")),a=r(n("0379"));function r(e){return e&&e.__esModule?e:{default:e}}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.forEach(function(t){s(e,t,n[t])})}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}i.default.config.productionTip=!1,i.default.prototype.$serverUrl="https://unidemo.dcloud.net.cn",i.default.prototype.$store=a.default,o.default.mpType="app";var c=new i.default(l({},o.default));c.$mount()},aad5:function(e,t,n){"use strict";n.r(t);var i=n("5fc0"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a},c143:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@font-face{font-family:texticons;font-weight:400;font-style:normal;src:url(https://at.alicdn.com/t/font_702773_g9f89om4v3j.ttf) format("truetype")}.index{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:%?750?%;min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.card{position:relative;width:%?710?%;margin:%?20?% %?20?% %?20?% %?20?%;border-radius:%?10?%;overflow:hidden;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#fff}.card-img{width:%?710?%;height:%?1065?%}.card-num{color:#fff;font-size:13px;text-align:center}.card-num-view{background-color:#ff80ab;line-height:1;display:inline-block;padding:3px 6px;color:#fff;font-size:12px;text-align:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;border-radius:15px;position:absolute;top:%?20?%;right:%?20?%}.card-bottm{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.card-share-view{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:%?14?% 0;color:#ff80ab;margin:%?20?% %?20?% %?20?%;font-size:%?30?%;font-family:texticons}.card-share-view:before{content:"\\E62D"}.car-title-view{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;padding:%?14?% %?0?% %?14?% %?20?%}.card-title{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%;text-align:left;color:#555;-o-text-overflow:ellipsis;text-overflow:ellipsis;lines:2;white-space:normal;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.card-list2{width:%?345?%;margin:%?20?% 0 %?20?% %?20?%}.card-list2-img{width:%?345?%;height:%?517?%}.card-list2-num-view{-webkit-transform:scale(.8);-ms-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:right;-ms-transform-origin:right;transform-origin:right}.card-list2-num{font-size:%?22?%}.card-list2-title{font-size:%?26?%}.loadMore{font-size:%?30?%;color:#555;margin-bottom:%?20?%}.tags{background:#fff;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:%?710?%;margin:%?20?%;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:flex-start;-ms-flex-line-pack:start;align-content:flex-start}.tag,uni-view.tag{display:block;width:%?177.5?%;height:%?180?%;padding:%?24?%;line-height:1;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center}.tag-img{border-radius:%?60?%;width:%?120?%;height:%?120?%}.tag-text{font-size:%?28?%;color:#555}.center{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100vh}.logo{width:%?750?%;height:%?240?%;padding:%?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#ff80ab;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.logo-hover{opacity:.8}.logo-img{width:%?150?%;height:%?150?%;border-radius:%?150?%}.logo-title{height:%?150?%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;margin-left:%?20?%}.uer-name{height:%?60?%;line-height:%?60?%;font-size:%?38?%;color:#fff}.go-login.navigat-arrow{font-size:%?38?%;color:#fff}.login-title{height:%?150?%;-webkit-box-align:self-start;-webkit-align-items:self-start;-ms-flex-align:self-start;align-items:self-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:%?20?%}.center-list{background-color:#fff;margin-top:%?20?%;width:%?750?%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.center-list-item{height:%?90?%;width:%?750?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:%?0?% %?20?%}.border-bottom{border-bottom-width:%?1?%;border-color:#c8c7cc;border-bottom-style:solid}.list-icon{width:%?40?%;height:%?90?%;line-height:%?90?%;font-size:%?34?%;color:#ff80ab;text-align:center;font-family:texticons;margin-right:%?20?%}.list-text{height:%?90?%;line-height:%?90?%;font-size:%?34?%;color:#555;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:left}.navigat-arrow{height:%?90?%;width:%?40?%;line-height:%?90?%;font-size:%?34?%;color:#555;text-align:right;font-family:texticons}.loginView{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:%?750?%;min-height:100vh;padding-top:%?30?%}.input-view{border-bottom-style:solid;border-bottom-width:%?1?%;border-bottom-color:#ddd;background-color:#fff;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:%?750?%;padding:%?20?% %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box}.label-view{width:%?100?%;height:%?60?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-right:%?30?%}.label{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;line-height:%?60?%;font-size:%?38?%;color:#555;text-align:left}.input{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?60?%;font-size:%?38?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.button-view{width:%?750?%;margin-top:%?50?%;padding:0 %?20?%;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}uni-button{width:%?710?%;height:%?80?%;line-height:%?80?%;text-align:center;font-size:%?38?%}uni-button.login{background-color:#ff80ab;color:#fff}uni-button.register{margin-top:%?30?%;color:#ff80ab;background-color:#fff;border-color:#ff80ab;border-width:%?2?%}.login.hover,.register.hover{opacity:.6}.detail-btn-view{width:%?750?%;position:fixed;bottom:%?75?%;font-size:%?28?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.detail-btn-view uni-view{opacity:.75;height:%?80?%;border-radius:%?80?%;width:%?80?%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;line-height:%?80?%;margin:0 %?30?%;font-family:texticons;background:#eee;color:#555}.detail-btn-view uni-view uni-text{margin-left:%?10?%}.detail-btn-view .download:before{content:"\\E617"}.detail-btn-view .collect:before{content:"\\E68D"}.detail-btn-view .setting{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}body,uni-page-body{min-height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}uni-page-body{width:100%;height:100%;display:block}swan-template{width:100%;min-height:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:#efeff4;padding:%?20?%}.input-group{background-color:#fff;margin-top:%?40?%;position:relative}.input-group:before{position:absolute;right:0;top:0;left:0;height:%?1?%;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.input-group:after{position:absolute;right:0;bottom:0;left:0;height:%?1?%;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.input-row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;position:relative}.input-row .title{width:20%;height:%?50?%;min-height:%?50?%;padding:%?15?% 0;padding-left:%?30?%;line-height:%?50?%}.input-row.border:after{position:absolute;right:0;bottom:0;left:%?15?%;height:%?1?%;content:"";-webkit-transform:scaleY(.5);-ms-transform:scaleY(.5);transform:scaleY(.5);background-color:#c8c7cc}.btn-row{margin-top:%?50?%;padding:%?20?%}uni-button.primary{background-color:#0faeff}',""])},ed68:function(e,t,n){"use strict";(function(e){var t=i(n("e143"));function i(e){return e&&e.__esModule?e:{default:e}}e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"新闻",navigationBarBackgroundColor:"#FF80AB",backgroundColor:"#EFEFEF"},tabBar:{color:"#444444",selectedColor:"#FF80AB",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/list1/list1",iconPath:"static/index-0.png",selectedIconPath:"static/index-1.png",text:"资讯",redDot:!1,badge:""},{pagePath:"pages/new/new",iconPath:"static/index-0.png",selectedIconPath:"static/index-1.png",text:"图片",redDot:!1,badge:""},{pagePath:"pages/hot/hot",iconPath:"static/hot-0.png",selectedIconPath:"static/hot-1.png",text:"推荐",redDot:!1,badge:""},{pagePath:"pages/tag/tag",iconPath:"static/tag-0.png",selectedIconPath:"static/tag-1.png",text:"分类",redDot:!1,badge:""},{pagePath:"pages/center/center",iconPath:"static/center-0.png",selectedIconPath:"static/center-1.png",text:"我的",redDot:!1,badge:""}]}},e.__uniConfig.router={mode:"hash",base:"/demo/picture/website/"},e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:3e3},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e3,connectSocket:6e3,uploadFile:6e3,downloadFile:6e3},t.default.component("pages-list1-list1",function(e){var t={component:n.e("pages-list1-list1").then(function(){return e(n("d394"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-new-new",function(e){var t={component:n.e("pages-new-new").then(function(){return e(n("b4dc"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-hot-hot",function(e){var t={component:n.e("pages-hot-hot").then(function(){return e(n("3047"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-detail-news-detail-news",function(e){var t={component:n.e("pages-detail-news-detail-news").then(function(){return e(n("6412"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-list2detail-detail-list2detail-detail",function(e){var t={component:n.e("pages-list2detail-detail-list2detail-detail").then(function(){return e(n("ea8d"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-list2detail-list-list2detail-list",function(e){var t={component:n.e("pages-list2detail-list-list2detail-list").then(function(){return e(n("5e52"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-detail-detail",function(e){var t={component:n.e("pages-detail-detail").then(function(){return e(n("fb96"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-tag-tag",function(e){var t={component:n.e("pages-tag-tag").then(function(){return e(n("dfe1"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-list-list",function(e){var t={component:n.e("pages-list-list").then(function(){return e(n("25fe"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-center-center",function(e){var t={component:n.e("pages-center-center").then(function(){return e(n("b3cc"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-login-login",function(e){var t={component:n.e("pages-login-login").then(function(){return e(n("a006"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-reg-reg",function(e){var t={component:n.e("pages-reg-reg").then(function(){return e(n("31fc"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("pages-pwd-pwd",function(e){var t={component:n.e("pages-pwd-pwd").then(function(){return e(n("ee4e"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),t.default.component("platforms-h5-about-about",function(e){var t={component:n.e("platforms-h5-about-about").then(function(){return e(n("a3e5"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t}),e.__uniRoutes=[{path:"/",alias:"/pages/list1/list1",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{})},[e("pages-list1-list1",{slot:"page"})])}},meta:{id:1,name:"pages-list1-list1",pagePath:"pages/list1/list1",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/new/new",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"图片",enablePullDownRefresh:!0})},[e("pages-new-new",{slot:"page"})])}},meta:{id:2,name:"pages-new-new",pagePath:"pages/new/new",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/hot/hot",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"最热",enablePullDownRefresh:!0})},[e("pages-hot-hot",{slot:"page"})])}},meta:{id:3,name:"pages-hot-hot",pagePath:"pages/hot/hot",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/detail-news/detail-news",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-detail-news-detail-news",{slot:"page"})])}},meta:{name:"pages-detail-news-detail-news",pagePath:"pages/detail-news/detail-news",windowTop:44}},{path:"/pages/list2detail-detail/list2detail-detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"新闻资讯"})},[e("pages-list2detail-detail-list2detail-detail",{slot:"page"})])}},meta:{name:"pages-list2detail-detail-list2detail-detail",pagePath:"pages/list2detail-detail/list2detail-detail",windowTop:44}},{path:"/pages/list2detail-list/list2detail-list",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-list2detail-list-list2detail-list",{slot:"page"})])}},meta:{name:"pages-list2detail-list-list2detail-list",pagePath:"pages/list2detail-list/list2detail-list",windowTop:44}},{path:"/pages/detail/detail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"详情",navigationBarBackgroundColor:"#000000",backgroundColor:"#000000",titleNView:{buttons:[{type:"share"},{type:"favorite"}]}})},[e("pages-detail-detail",{slot:"page"})])}},meta:{name:"pages-detail-detail",pagePath:"pages/detail/detail",windowTop:44}},{path:"/pages/tag/tag",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"分类",enablePullDownRefresh:!1})},[e("pages-tag-tag",{slot:"page"})])}},meta:{id:4,name:"pages-tag-tag",pagePath:"pages/tag/tag",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/list/list",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"专题",enablePullDownRefresh:!0})},[e("pages-list-list",{slot:"page"})])}},meta:{name:"pages-list-list",pagePath:"pages/list/list",windowTop:44}},{path:"/pages/center/center",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:4},__uniConfig.globalStyle,{navigationBarTitleText:"个人中心",enablePullDownRefresh:!1})},[e("pages-center-center",{slot:"page"})])}},meta:{id:5,name:"pages-center-center",pagePath:"pages/center/center",isQuit:!0,isTabBar:!0,tabBarIndex:4,windowTop:44}},{path:"/pages/login/login",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"登录"})},[e("pages-login-login",{slot:"page"})])}},meta:{name:"pages-login-login",pagePath:"pages/login/login",windowTop:44}},{path:"/pages/reg/reg",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"注册"})},[e("pages-reg-reg",{slot:"page"})])}},meta:{name:"pages-reg-reg",pagePath:"pages/reg/reg",windowTop:44}},{path:"/pages/pwd/pwd",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"找回密码"})},[e("pages-pwd-pwd",{slot:"page"})])}},meta:{name:"pages-pwd-pwd",pagePath:"pages/pwd/pwd",windowTop:44}},{path:"/platforms/h5/about/about",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"关于"})},[e("platforms-h5-about-about",{slot:"page"})])}},meta:{name:"platforms-h5-about-about",pagePath:"platforms/h5/about/about",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}]}).call(this,n("c8ba"))}});