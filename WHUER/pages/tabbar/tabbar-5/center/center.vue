<template>
	<view class="center">
		<view class="logo uni-flex" @click="bindLogin" :hover-class="!isLogin ? 'logo-hover' : ''">
			<image class="logo-img" :src="isLogin ? ava:avatarUrl1"></image>
			<view class="logo-title">
				<text class="uer-name">Hi，{{isLogin ? data.nickname : '您未登录'}}</text>
				<text class="go-login navigat-arrow" v-if="!isLogin">&#xe6f8;</text>
		
			</view>
		</view>
		<view class="logo uni-column uni-center ">
			<view class="logo-info uni-flex uni-common-mt">
				<text> {{isLogin ? "姓名："+data.real_name : '暂无信息'}}</text>
			</view>
			<view class="logo-info uni-flex uni-common-mt"  v-if="isLogin">
				<text >粉丝数：{{data.fansNum}}</text><text class="uni-common-pl">关注数：{{data.followNum}}</text>
				<text class="uni-common-pl">发布书籍：{{data.bookNum}}</text>
			</view>
			<view class="logo-info uni-flex uni-common-mt uni-common-pb">
				<text class="" v-if="isLogin">口号：{{data.signature}}</text>
					
			</view>
		</view>
		<view class="btn-row"><button v-if="isLogin" type="default" @tap="bindLogout">退出登录</button></view>
		
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="tophone">
				<text class="list-icon">&#xe726;</text>
				<text class="list-text">绑定手机</text>
				<text class="navigat-arrow">&#xe6f8;</text>
			</view>
			<view class="center-list-item" @click="toshare">
				<text class="list-icon">&#xe729;</text>
				<text class="list-text">应用分享</text>
				<text class="navigat-arrow">&#xe6f8;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="getnew">
				<text class="list-icon">&#xe726;</text>
				<text class="list-text">检查更新</text>
				<text class="navigat-arrow">&#xe6f8;</text>
			</view>
			<view class="center-list-item" @click="feedback">
				<text class="list-icon">&#xe6fa;</text>
				<text class="list-text">问题反馈</text>
				<text class="navigat-arrow">&#xe6f8;</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item border-bottom" @click="goAbout">
				<text class="list-icon">&#xe71b;</text>
				<text class="list-text">关于</text>
				<text class="navigat-arrow">&#xe6f8;</text>
			</view>
			<view class="center-list-item" @click="setup">
				<text class="list-icon">&#xe728;</text>
				<text class="list-text">设置</text>
				<text class="navigat-arrow">&#xe6f8;</text>
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
				providerList:[],
				avatarUrl1:"../../../../static/logo.png",
				ava:'../../../../static/dog.png'
			}
		},
		
	    methods: {
	        ...mapMutations(['logout']),
			getnew(){
				uni.showModal({
					title: '已是最新版本~_~',
					content: '886^~^',
				
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			tophone(){
				uni.showToast({
					icon:'none',
					title: '暂未开放',
					mask: false,
					duration: 1500
				});
			},
			feedback(){
				uni.navigateTo({
					url: '../../../publish/uni-feedback',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			
			
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
			},
			setup(){
				uni.showToast({
					icon:'none',
					title: '暂无设置',
					mask: false,
					duration: 1500
				});
			},
			toshare(e) {
				if (this.providerList.length === 0) {
					uni.showModal({
						title: '当前环境无分享渠道!',
						showCancel: false
					})
					return;
				}
				let itemList = this.providerList.map(function (value) {
					return value.name
				})
				uni.showActionSheet({
					itemList: itemList,
					success: (res) => {
						uni.share({
							provider: this.providerList[res.tapIndex].id,
							scene: this.providerList[res.tapIndex].type && this.providerList[res.tapIndex].type === 'WXSenceTimeline' ? 'WXSenceTimeline' : "WXSceneSession",
							type: 0,
							title:'欢迎体验WHUER',
							summary: 'WHUER 使用 uni-app 开发',
							imageUrl:'https://img-cdn-qiniu.dcloud.net.cn/uploads/nav_menu/8.jpg',
							href:"https://m3w.cn/uniapp",
							success: (res) => {
								console.log("success:" + JSON.stringify(res));
							},
							fail: (e) => {
								uni.showModal({
									content: e.errMsg,
									showCancel:false
								})
							}
						});
					}
				})
			}
	    },
		onLoad() {
			this.version = plus.runtime.version;
			uni.getProvider({
				service: 'share',
				success: (e) => {
					let data = [];
					for (let i = 0; i < e.provider.length; i++) {
						switch (e.provider[i]) {
							case 'weixin':
								data.push({
									name: '分享到微信好友',
									id: 'weixin'
								})
								data.push({
									name: '分享到微信朋友圈',
									id: 'weixin',
									type: 'WXSenceTimeline'
								})
								break;
							case 'qq':
								data.push({
									name: '分享到QQ',
									id: 'qq'
								})
								break;
							default:
								break;
						}
					}
					this.providerList = data;
				},
				fail: (e) => {
					console.log('获取登录通道失败'+ JSON.stringify(e));
				}
			});
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
	.logo {
		background-color: #1bb76e;
		
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
		color: white;
		width: 100%;
		height:30upx;
		
		
		
	}
</style>
