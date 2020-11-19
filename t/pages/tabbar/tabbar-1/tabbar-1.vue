<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<!--<view class="u-demo-title">演示效果</view> -->
			<view class="u-demo-area">
				<view class="u-avatar-wrap">
					
					<image @tap="preAvatar" class="u-avatar-demo" :src="avatar" mode="aspectFit"></image>
					<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>				</view>
				<u-button @click="chooseAvatar">选择图片</u-button>
			</view>
		</view>
		<view class="u-config-wrap" @tap='about'>
			<view class="u-config-title u-border-top">记录文字，记录历史</view>
			<view class="u-text-center u-border-bottom">Made by <u-tag class="text-lab " text="DCIL." mode="light" type="success" shape="circle" /></view>
		</view>
		
			<!--<view class="u-text-center">记忆文字记录你</view>-->
			
			<!--<view class=""></view>
			<u-tag class="text-lab " text="made by DCIL" mode="light" type="success" shape="circle" />-->
		</view>
	</view>
</template>

<script>
		import ImageCropper from "@/components/invinbg-image-cropper/invinbg-image-cropper.vue";	export default {
		data() {
			return {
				avatar: '/static/logo.jpg',
				tempFilePath: '',
			}
		},
		components: {ImageCropper},
		onShareAppMessage(res) {
		  return {
		    title: '说文解字',
		    path: '/pages/tabbar/tabbar-1/tabbar-1',
			imageUrl:this.avatar
		  }
		},
		onShareTimeline(res) {
			return {
			  title: '说文解字',
			  path: '/pages/tabbar/tabbar-1/tabbar-1',
			  imageUrl:this.avatar
			}
		},
		methods: {
			chooseAvatar() {
				uni.chooseImage({
				                count: 1, //默认9
				                sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				                sourceType: ['camera','album'], //从相册选择
				                success: (res) => {
				                    this.tempFilePath = res.tempFilePaths.shift()
				                }
				            });
			},
			
			// 预览图片
			preAvatar() {
				wx.previewImage({
					current: '', // 当前显示图片的 http 链接
					urls: [this.avatar] // 需要预览的图片 http 链接列表
				})
			},
			about(){
				uni.navigateTo({
					url:'../../mine/about'
				});
			},
			confirm(e) {
			            //this.tempFilePath = '';
			            this.avatar = e.detail.tempFilePath;
						uni.navigateTo({
							url:'../../result/result?src='+e.detail.tempFilePath
						});
			        },
			cancel() {
			            console.log('canceled')
			        }
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 24rpx;
	}

	.u-avatar-wrap {
		overflow: hidden;
		margin-bottom: 20rpx;
	}
	.text-lab{
		margin-top: 100;
	}

	//.u-avatar-demo {
		//width: 50%;
		//height: auto;
		//border-radius: 100rpx;
	//}
</style>
