(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-list-list"],{"09c1":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s={data:function(){return{refreshing:!1,loadMoreText:"加载中...",lists:[],id:0,fetchPageNum:0}},onLoad:function(e){var t=this;uni.setNavigationBarTitle({title:"专题："+e.type}),this.id=e.id,setTimeout(function(){t.getData()},300),uni.getProvider({service:"share",success:function(e){for(var i=[],s=0;s<e.provider.length;s++)switch(e.provider[s]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}t.providerList=i},fail:function(e){console.log("获取登录通道失败",e)}})},onPullDownRefresh:function(){console.log("下拉刷新"),this.refreshing=!0,this.getData()},onReachBottom:function(){console.log("上拉加载刷新"),this.fetchPageNum>4?this.loadMoreText="没有更多了":this.getData()},methods:{getData:function(e){var t=this;uni.request({url:this.$serverUrl+"/api/picture/list.php?type="+this.id,success:function(e){if(200!==e.statusCode)console.log("请求失败",e);else{if(t.refreshing&&e.data.data[0].id===t.lists[0][0].id)return uni.showToast({title:"已经最新",icon:"none"}),t.refreshing=!1,void uni.stopPullDownRefresh();for(var i=[],s=[],a=e.data.data,n=0,o=a.length;n<o;n++){Math.floor(n/2);i.push(a[n]),n%2==1&&(s.push(i),i=[])}console.log("list页面得到lists",s),t.refreshing?(t.refreshing=!1,uni.stopPullDownRefresh(),t.lists=s,t.fetchPageNum=2):(t.lists=t.lists.concat(s),t.fetchPageNum+=1),t.fetchPageNum+=1}}})},goDetail:function(e){uni.navigateTo({url:"../detail/detail?data="+encodeURIComponent(JSON.stringify(e))})},share:function(e){var t=this;if(0!==this.providerList.length){var i=this.providerList.map(function(e){return e.name});uni.showActionSheet({itemList:i,success:function(i){uni.share({provider:t.providerList[i.tapIndex].id,scene:t.providerList[i.tapIndex].type&&"WXSenceTimeline"===t.providerList[i.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:e.title,imageUrl:e.img_src,href:"https://uniapp.dcloud.io",success:function(e){console.log("success:"+JSON.stringify(e))},fail:function(e){uni.showModal({content:e.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}};t.default=s},"25fe":function(e,t,i){"use strict";i.r(t);var s=i("5a67"),a=i("ee41");for(var n in a)"default"!==n&&function(e){i.d(t,e,function(){return a[e]})}(n);i("b883");var o=i("2877"),r=Object(o["a"])(a["default"],s["a"],s["b"],!1,null,"43fab9db",null);r.options.__file="list.vue",t["default"]=r.exports},"5a67":function(e,t,i){"use strict";var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"index"},[e._l(e.lists,function(t,s){return[i("v-uni-view",{key:s+"_0",staticClass:"row"},e._l(t,function(t,s){return i("v-uni-view",{key:s,staticClass:"card card-list2",on:{click:function(i){i=e.$handleEvent(i),e.goDetail(t)}}},[i("v-uni-image",{staticClass:"card-img card-list2-img",attrs:{src:t.img_src}}),i("v-uni-text",{staticClass:"card-num-view card-list2-num-view"},[e._v(e._s(t.img_num)+"P")]),i("v-uni-view",{staticClass:"card-bottm row"},[i("v-uni-view",{staticClass:"car-title-view row"},[i("v-uni-text",{staticClass:"card-title card-list2-title"},[e._v(e._s(t.title))])],1),i("v-uni-view",{staticClass:"card-share-view",on:{click:function(i){i.stopPropagation(),i=e.$handleEvent(i),e.share(t)}}})],1)],1)}))]}),i("v-uni-text",{staticClass:"loadMore"},[e._v(e._s(e.loadMoreText))])],2)},a=[];i.d(t,"a",function(){return s}),i.d(t,"b",function(){return a})},b883:function(e,t,i){"use strict";var s=i("fed6"),a=i.n(s);a.a},ee41:function(e,t,i){"use strict";i.r(t);var s=i("09c1"),a=i.n(s);for(var n in s)"default"!==n&&function(e){i.d(t,e,function(){return s[e]})}(n);t["default"]=a.a},fae0:function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,"uni-page-body[data-v-43fab9db],uni-view[data-v-43fab9db]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}uni-page-body[data-v-43fab9db]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;min-height:100%;background-color:#efefef}template[data-v-43fab9db]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}body.?%PAGE?%[data-v-43fab9db]{background-color:#efefef}",""])},fed6:function(e,t,i){var s=i("fae0");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=i("4f06").default;a("492f0098",s,!0,{sourceMap:!1,shadowMode:!1})}}]);