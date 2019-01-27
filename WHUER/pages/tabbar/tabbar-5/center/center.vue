<template>
	<view class="center">
		<view class="logo" @click="bindLogin" :hover-class="!isLogin ? 'logo-hover' : ''">
			<image class="logo-img" :src="isLogin ? data.headimg:avatarUrl1"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{isLogin ? data.nickname : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!isLogin">&#xe65e;</text>
		
			</view>
		</view>
		<view class="logo">
			<view class="logo-info">
				<text class="uer-name">详细信息:{{isLogin ? "姓名："+data.real_name : '暂无信息'}}</text>
			</view>
			<view class="logo-info">
				<text class="" v-if="isLogin">粉丝数：{{data.fansnum}}|关注数：{{data.follownum}}</text>
			</view>
			<view class="logo-info">
				<text class="" v-if="isLogin">口号：{{data.signature}}</text>
					
			</view>
		</view>
		<view class="btn-row"><button v-if="isLogin" type="default" @tap="bindLogout">退出登录</button></view>
		
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60c;</text>
				<text class="list-text">收藏图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe60d;</text>
				<text class="list-text">收藏图集</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom">
				<text class="list-icon">&#xe60b;</text>
				<text class="list-text">管理图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe61a;</text>
				<text class="list-text">上传图片</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goAbout">
				<text class="list-icon">&#xe603;</text>
				<text class="list-text">关于</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
			<view class="center-list-item">
				<text class="list-icon">&#xe609;</text>
				<text class="list-text">帐号管理</text>
				<text class="navigat-arrow">&#xe65e;</text>
			</view>
		</view>
	</view>
</template>

<script>
	  import {
	    mapState,
	    mapMutations
	} from 'vuex'
	
	export default {
	    computed: {
	        ...mapState(['isLogin', 'forcedLogin','data'])
	    },
		data() {
			return {
				avatarUrl1:"../../../../static/logo.png"
			}
		},
		
	    methods: {
	        ...mapMutations(['logout']),
			//goLogin() {
			//	if(!this.hasLogin){
				//	uni.navigateTo({
				//		url:"../login/login"
				//	})
			//	}
			//},
	       bindLogin() {
	           if(!this.isLogin){
					uni.navigateTo({
						url:"../../../user/login/login"
					})
				}
	        },
	        bindLogout() {
				
	            this.logout();
	            /**
	             * 如果需要强制登录跳转回登录页面
	             */
	            if (this.forcedLogin) {
	                uni.reLaunch({
	                    url: '../../../user/login/login',
	                });
	            }
	        },
			goAbout() {
				// #ifdef APP-PLUS
				uni.navigateTo({
					url:'/platforms/app-plus/about/about'
				});
				// #endif
				// #ifdef H5
				uni.navigateTo({
					url:'/platforms/h5/about/about'
				});
				// #endif
			}
	    }
	}
	
</script>

<style>
	@import '../../../../common/common.css';
	    page,
	view {
	    display: flex;
	}
	
	page {
	    display: flex;
	    min-height: 100%;
	    background-color: #EFEFEF;
	}
	
	template {
	    display: flex;
	    flex: 1;
	}
	 .btn-row {
	    margin-top: 50upx;
	    padding: 20upx;
	}
	
	button.primary {
	    background-color: #0faeff;
	}
	.logo-info {
		
		width: 100%;
		height:30upx;
		display: flex;
		flex-direction: column;
		
	}
</style>
