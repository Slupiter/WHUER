(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/result/result"],{1054:function(e,o,t){"use strict";t.d(o,"b",(function(){return a})),t.d(o,"c",(function(){return s})),t.d(o,"a",(function(){return n}));var n={uRate:function(){return t.e("uview-ui/components/u-rate/u-rate").then(t.bind(null,"3a3b"))}},a=function(){var e=this,o=e.$createElement;e._self._c},s=[]},1106:function(e,o,t){"use strict";t.r(o);var n=t("1054"),a=t("4573");for(var s in a)"default"!==s&&function(e){t.d(o,e,(function(){return a[e]}))}(s);t("a709");var l,c=t("f0c5"),i=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"64c7212a",null,!1,n["a"],l);o["default"]=i.exports},"259d":function(e,o,t){"use strict";(function(e){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={data:function(){return{src:"",reFresh:!0,value:5,colors:["#ffc454","#ffb409","#ff9500"],icons:["thumb-down-fill","thumb-down-fill","thumb-up-fill","thumb-up-fill"]}},onLoad:function(o){this.src=o.src;var t=this;console.log(o.src);var n=o.src.split("/").pop();console.log(n);var a=n.split(".").pop();console.log(a);var s=wx.getFileSystemManager();s.readFile({filePath:o.src,encoding:"base64",success:function(o){console.log(o),console.log(s);var s=o.data;e.request({url:"https://www.72qier.icu:8009/predict",data:{username:"test",lon:5,lat:5,imgname:n,image:s},header:{"content-type":"application/json"},method:"POST",success:function(o){console.log("第一次post成功"),console.log(o),console.log(o.data),console.log(o.data["state"]);var n="https://www.72qier.icu:8009"+o.data["location"];if(console.log(n),"PENDING"==o.data["state"]){console.log("第一次post"),e.showLoading({title:"正在排队",mask:!0});var s=setInterval((function(){var o=this;e.request({url:n,success:function(n){if(console.log(n),console.log(n.data),console.log(n.data["state"]),"PENDING"==n.data["state"])console.log("正在排队");else if("PROGRESS"==n.data["state"])console.log("正在处理"),e.hideLoading(),e.showLoading({title:"正在处理",mask:!0});else{e.hideLoading(),console.log("处理完成"),console.log(n.data.result["image"]),clearInterval(s);var l=n.data.result["image"].replace(/[\r\n]/g,"");t.src="data:image/"+a+";base64,"+l,console.log("this.src"),console.log(o.src);var c=wx.getFileSystemManager(),i=Math.random(),r=wx.env.USER_DATA_PATH+"/pic"+i+"."+a;c.writeFile({filePath:r,data:l,encoding:"base64",success:function(o){wx.saveImageToPhotosAlbum({filePath:r,success:function(o){e.showToast({title:"获取成功,已保存到相册",icon:"success",position:"bottom"})},fail:function(e){console.log(e)}}),console.log(o)}})}}})}),1e3)}},fail:function(e){console.log("失败"),console.log(e.data)},complete:function(e){console.log("完成"),console.log(e.data)}})}})},onShareAppMessage:function(e){return{title:"说文解字",path:"/pages/result/result",imageUrl:this.src}},onShareTimeline:function(e){return{title:"说文解字",path:"/pages/result/result",imageUrl:this.src}},onBackPress:function(e){return console.log(e),console.log("跳转到首页"),"navigateBack"===e.from||(this.back(),console.log("跳转结束")),!1},computed:{},methods:{back:function(){e.navigateTo({url:"/pages/tabbar/tabbar-1/tabbar-1"})},preAvatar:function(){wx.previewImage({current:"",urls:[this.src]})},share:function(){e.share({provider:"weixin",scene:"WXSceneSession",type:1,summary:"说文解字",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){console.log("fail:"+JSON.stringify(e))}})}}};o.default=t}).call(this,t("543d")["default"])},"2c77":function(e,o,t){"use strict";(function(e){t("23d8");n(t("66fd"));var o=n(t("1106"));function n(e){return e&&e.__esModule?e:{default:e}}e(o.default)}).call(this,t("543d")["createPage"])},4344:function(e,o,t){},4573:function(e,o,t){"use strict";t.r(o);var n=t("259d"),a=t.n(n);for(var s in n)"default"!==s&&function(e){t.d(o,e,(function(){return n[e]}))}(s);o["default"]=a.a},a709:function(e,o,t){"use strict";var n=t("4344"),a=t.n(n);a.a}},[["2c77","common/runtime","common/vendor"]]]);