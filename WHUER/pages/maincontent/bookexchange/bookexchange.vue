<template>
	<view>
		<view class="header">
			<view class="input-view" fixed='true'>
				<uni-icon type="search" size="22" color="#666666"></uni-icon>
				<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索关键词" />
			</view>
			<!-- #ifdef MP -->
			<view class="icon" @click="showRightDrawer">
				<uni-icon type="bars" color="#666666" :size="22"></uni-icon>
			</view>
			<!-- #endif -->
		</view>
		
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
				<view class="uni-media-list">
					<image class="uni-media-list-logo" :src="value.headimg"></image>
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{value.name}}</view>
						<view class="uni-media-list-text-bottom">
							<text>{{value.nickname}}</text>
							<text>{{value.place}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		
		
		
		
		
		
		
		
		
		
		
		<uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer">
			
			<view class="uni-padding-wrap">
				<form @submit="formSubmit" @reset="formReset">
					<view>
						<view class="uni-title">状态</view>
						<checkbox-group class="uni-flex" name="loves">
							<label>
								<checkbox value="true" />已交换</label>
							<label>
								<checkbox value="false" />未交换</label>
						</checkbox-group>
					</view>
					<view>
						<view class="uni-title">地点</view>
						<checkbox-group class="uni-flex" name="loves">
							<label>
								<checkbox value="1" />信部</label>
							<label>
								<checkbox value="2" />文理学部</label>
							
						</checkbox-group>
						<checkbox-group class="uni-flex" name="loves">
							
							<label>
								<checkbox value="3" />工部</label>
							<label>
								<checkbox value="4" />医学部</label>		
						</checkbox-group>
					</view>
					<view>
						<view class="uni-title">国家</view>
						<checkbox-group class="uni-flex" name="loves">
							<label>
								<checkbox value="in" />国内</label>
							<label>
								<checkbox value="out" />国外</label>
						</checkbox-group>
					</view>
					<view>
						<view class="uni-title">语言</view>
						<checkbox-group class="uni-flex" name="loves">
							<label>
								<checkbox value="ch" />中文</label>
							<label>
								<checkbox value="en" />英文</label>
						</checkbox-group>
					</view>
					<view>
						<view class="uni-title">类型</view>
						<checkbox-group class="uni-flex" name="loves">
							<label>
								<checkbox value="1" />教辅</label>
							<label>
								<checkbox value="2" />课外</label>
						</checkbox-group>
					</view>
					<view class="uni-btn-v uni-common-mt">
						<button class="btn-submit " size="mini" formType="submit" type="primary" @tap="closeRightDrawer">Submit</button>
					
					</view>
					<view class="uni-btn-v uni-common-mt">
						<button  type="warn" size="mini" formType="reset">Reset</button>
					</view>
				</form>
			</view>
		</uni-drawer>
		
	</view>
</template>
<script>
	import uniDrawer from '../../../components/uni-drawer.vue';
	import uniIcon from '../../../components/uni-icon.vue';
	export default {
		components: {
			uniDrawer,
			uniIcon
		},
		data() {
			return {
				rightDrawerVisible: false,
				listData: {},
				nextPage:"",
				page: 1,
				reLoad:true
			}
		},
		methods: {
			closeRightDrawer() {
				this.rightDrawerVisible = false;
			},
			getList() {
				uni.showToast({
					icon:'loading',
					title: '',
					mask: false,
					duration: 500
				});
				let url= 'https://api.thinker.ink/v1/books/';
				if (!this.reLoad){
					
					url=this.nextPage; 
					if(!url){
						uni.showToast({
							icon:'none',
							title: '无更多数据',
							mask: false,
							duration: 1500
						});
						return;
					}
				}
				console.log(url);
				uni.request({
					url: url,
					method: 'GET',
					data: {},
					success: res => {
						console.log(res);
						if (!this.reLoad) {
							res.data.data.forEach((news) => {
								this.listData.push(news);
								console.log(this.listData);
							});
						}else{
						this.listData= res.data.data;
						}
						this.nextPage=res.data.next;
						this.reLoad=false;
						console.log(this.nextPage);
					},
					fail: () => {},
					complete: () => {}
				});
			},
			
			confirm() {
				uni.showToast({
					title: '搜索'
				})
			}
		},
		onNavigationBarButtonTap(e) {
			console.log("tab顶部键"+e.index);
			switch (e.index){
				case 2:
					console.log("点了评分");
					break;
				case 1:
					break;
				case 0:
				this.rightDrawerVisible = !this.rightDrawerVisible;
					break;
				default:
					break;
			}
			
		},
		onBackPress() {
			// 返回按钮监听
			if (this.rightDrawerVisible) {
				this.rightDrawerVisible = false;
				return true;
			}
		},
		onLoad() {
			this.getList();
		},
		onReachBottom() {
			this.reLoad=false;
			this.getList();
			console.log('bottom');
		},
		onPullDownRefresh() {
			this.reLoad=true;
			this.getList();
			uni.stopPullDownRefresh();
		}
	}
</script>

<style>
	.header {
		display: flex;
		flex-direction: row;
		padding: 10px 15px;
		align-items: center;
	}

	.input-view {
		display: flex;
		align-items: center;
		flex-direction: row;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 10px;
		flex: 1;
	}

	.input {
		flex: 1;
		padding: 0 5px;
		height: 24px;
		line-height: 24px;
		font-size: 16px;
	}

	.icon {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 10px;
	}
	.little {
		width:20upx;
	}
</style>
