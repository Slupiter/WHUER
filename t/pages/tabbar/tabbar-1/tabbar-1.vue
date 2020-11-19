<template>
	<view class="u-demo">
		<view class="u-demo-wrap">
			<!--<view class="u-demo-title">演示效果</view> -->
			<view class="u-demo-area">
				<view class="u-avatar-wrap">
					<image @tap="preAvatar" class="u-avatar-demo" :src="avatar" mode="aspectFit"></image>
				</view>
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
	export default {
		data() {
			return {
				avatar: '/static/logo.jpg',
			}
		},
		created() {
			uni.$on('uAvatarCropper', path => {
				this.avatar = path;
				console.log('预览路径');
				console.log('path');
				this.$u.route({
					url: '/pages/result/result',
					params: {
						src: path
					}
				})
				// 可以在此上传到服务端
				
			})
		},
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
				this.$u.route({
					url: '/uview-ui/components/u-avatar-cropper/u-avatar-cropper',
					params: {
						// 输出图片宽度，高等于宽，单位px
						destWidth: 1000,
						// 裁剪框宽度，高等于宽，单位px
						rectWidth: 300,
						// 输出的图片类型，如果'png'类型发现裁剪的图片太大，改成"jpg"即可
						fileType: 'jpg',
					}
				})
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
