<template>
	<view class="">
	<!--<u-navbar back-icon-name="home" back-icon-color="#ffffff" :background="background"  customBack="back()"></u-navbar>-->
	<u-navbar :is-back='false' :background="background">
		<view class="slot-wrap">
			<view class="map-wrap" @tap="back">
				<u-icon name="home" color="#ffffff" size="44"></u-icon>
				<text class="map-wrap-text">首页</text>
			</view>		
		</view>
	</u-navbar>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<!--<view class="u-demo-title">演示效果</view>-->
			<view class="u-demo-area u-flex u-row-center">
				<image @tap="preAvatar" v-if="reFresh" class="u-avatar-demo" :src="src" mode="aspectFit"></image>
					
			</view>
		</view>
		<view class="u-config-wrap">
			<view class="u-config-title u-border-top">识别结果图</view>
			<view class="u-config-item">
				<view class="u-item-title">评分</view>
				<u-rate v-model="value" :colors="colors" :icons="icons" inactive-icon="thumb-up"></u-rate>
			</view>
			<!-- #ifdef APP-PLUS -->
			<u-button :custom-style="{marginTop: '100rpx'}" @click="share">分享</u-button>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="uni-btn-v hei">
				<button type="primary" open-type="share">分享</button>
			</view>
			<!-- #endif -->
			
		</view>
	</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			//src: '/static/logo.jpg',
			//评分部分使用的变量
			background: {
				// 渐变色
				 backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
								},
			imageid:0,
			src: '',
			
			reFresh:true,
			value: 5,
			colors: ['#ffc454', '#ffb409', '#ff9500'],
			icons: ['thumb-down-fill', 'thumb-down-fill', 'thumb-up-fill', 'thumb-up-fill']
		};
	},
	onLoad(option) {
		this.src = option.src;
		
		//极其重要！！！！！！！！
		//极其重要！！！！！！！！
		//极其重要！！！！！！！！
		var that = this;
		//极其重要！！！！！！！！
		//极其重要！！！！！！！！
		//极其重要！！！！！！！！
		/////////////////////////////////////////
		//从分享页面进入后加载图片
		console.log(option.idstr);
		if(option.idstr){
			this.imageid = parseInt(option.idstr);
			var imglink =  'https://www.72qier.icu:8009/shareimg/' +option.idstr;
			var imgData = '';
			uni.request({
				url: imglink,
				success:function(res){
					console.log('获取分享图片成功');
					console.log(res.data);
					imgData =  res.data['image'].replace(/[\r\n]/g, '');//base64编码
					//更换图片路径为结果图片
					that.src = "data:image/jpg" + ";base64," + imgData;
				}
			});
		};
		////////////////////////////////////////
		console.log(option.src);
		//pop删除数组最后一个元素并返回
		var file = option.src.split('/').pop();
		console.log(file);
		//图片格式后缀
		var end = file.split('.').pop();
		console.log(end);
		const fs = wx.getFileSystemManager();
		fs.readFile({
			filePath: option.src,
			encoding: 'base64',
			success: (result) => {
				console.log(result);
				console.log(picBase64);
				var picBase64 = result.data;
				//开始上传图片,
				uni.request({
				            url: 'https://www.72qier.icu:8009/predict', 
				            data: {
				                username: 'test',
								lon:5,
								lat:5,
								imgname: file,
								image: picBase64
								
				            },
							header: {
							        'content-type': 'application/json', //请求头信息
							    },
							method:'POST',
				            success: (e) => {
								console.log('第一次post成功');
								console.log(e);
				                console.log(e.data);
								//此处data为字符串
								//e.data = JSON.parse(e.data);
								console.log(e.data['state']);
								//var id = e.data['location'].split('/').pop()
								//第一次post成功后设置定时器每隔1s get一次
								var url = 'https://www.72qier.icu:8009' + e.data['location'];
								console.log(url);
								if (e.data["state"]=='PENDING'){
									console.log('第一次post');
									uni.showLoading({
										title: '正在排队',
										mask: true
									});
									var timer = setInterval(function(){
										uni.request({
										    url: url, //仅为示例，并非真实接口地址。
										   
											success: (re) => {
												console.log(re);
												console.log(re.data);
												//此处data为json
												console.log(re.data["state"]);
												//re.data = JSON.parse(re.data);
												//console.log(re.data["state"]);
												if (re.data["state"]=='PENDING')
												{
													console.log('正在排队');
													//uni.showLoading({
														//title: '正在排队',
													//	mask: false
													
													//});
												}
												else if (re.data["state"]=='PROGRESS')
												{
													console.log('正在处理');
													uni.hideLoading();
													uni.showLoading({
														title: '正在处理',
														mask: true
													});
													}
												else{
													uni.hideLoading();
													
													console.log('处理完成');
													console.log(re.data.result['image']);
													clearInterval(timer);            //清理定时器，停止运行！！！
													var imgSrc =  re.data.result['image'].replace(/[\r\n]/g, '');//base64编码
													//更换图片路径为结果图片
													that.src = "data:image/"+ end + ";base64," + imgSrc;
													that.imageid = re.data.result['imgid']
													uni.showToast({
														                title: "处理完成",
														                icon: "success",
														                position: 'bottom'
														            });
													console.log('this.src');
													console.log(this.src);  
													console.log(this.imageid);  
													    var save = wx.getFileSystemManager();
													    var number = Math.random();
														var base64Path = wx.env.USER_DATA_PATH + '/pic' + number + '.'+end;
													    save.writeFile({
													      filePath: base64Path,
													      data: imgSrc,
													      encoding: 'base64',
													      success: res => {
															  
															/*
													        wx.saveImageToPhotosAlbum({
													          filePath: base64Path,
													          success: function (res) {
																  
													            uni.showToast({
													            	                title: "获取成功,已保存到相册",
													            	                icon: "success",
													            	                position: 'bottom'
													            	            });
																
													          },
													          fail: function (err) {
													            console.log(err);
													          }
													        });*/
													        console.log(res);
													      }
													    })
												}
											}
										});
									}, 2000);
									
								}
				            },
							fail: (e) => {
								console.log('失败');
								console.log(e);
								console.log(e.data);
							},
							complete: (e)=> {
								console.log('完成');
								console.log(e.data);
							}
				        });
				
			}
			
		});
		},
		//开始微信好友分享
		onShareAppMessage(res) {
			
			console.log(this.imageid);
			
      return {
        title: '说文解字',
		//path: '/pages/tabbar/tabbar-1/tabbar-1'
        path: '/pages/result/result?idstr=' + this.imageid.toString()
		//不配置imageUrl则默认显示当前页面截图
		//imageUrl:this.base64Path
      }
    },
	//开始朋友圈分享
	onShareTimeline(res) {
		
		console.log(this.src);
		return {
		  title: '说文解字',
		  //path: '/pages/tabbar/tabbar-1/tabbar-1'
		  path: '/pages/result/result?idstr=' + this.imageid.toString()
		//imageUrl:this.base64Path
		}
	},
	
	methods: {
		back(){
			console.log("回到首页");
			wx.switchTab({
				url: '/pages/tabbar/tabbar-1/tabbar-1'
			});
			console.log("结束");
		},
		// 预览图片
		preAvatar() {
			
			wx.previewImage({
				current: '', // 当前显示图片的 http 链接
				urls: [this.src] // 需要预览的图片 http 链接列表
			});
		},
		share() {
			uni.share({
			    provider: "weixin",
			    scene: "WXSceneSession",
			    type: 1,
			    summary: "说文解字",
			    success: function (res) {
			        console.log("success:" + JSON.stringify(res));
			    },
			    fail: function (err) {
			        console.log("fail:" + JSON.stringify(err));
			    }
			});
			
		}
	}
};
</script>

<style scoped lang="scss">
.u-demo-area {
}
.hei {
	margin-top: 70rpx;
	}
.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}
	
.map-wrap {
		display: flex;
		align-items: center;
		padding: 4px 6px;
		background-color: rgba(240,240, 240, 0.35);
		color: #fff;
		font-size: 22rpx;
		border-radius: 100rpx;
		margin-left: 30rpx;
	}
	
.map-wrap-text {
		padding: 0 6rpx;
	}
</style>
