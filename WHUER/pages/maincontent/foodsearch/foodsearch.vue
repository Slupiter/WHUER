<template>
	<view>
		<view class="header">
			<view class="input-view" fixed='true'>
				<uni-icon type="search" size="22" color="#666666"></uni-icon>
				<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索关键词" />
			</view>
			
			
			
		</view>
		
		<view class="list-cell" hover-class="uni-list-cell-hover" v-for="(data,key) in listData" :key="key"  >
		    <view class="media-list" >
		        <view class="media-image-left" @click="bindClick">
		            
					  <text class="media-title media-title2 name" @tap="gouser">{{data.name}}</text>
					  
		            <view class="image-section image-section-left">
		                <image class="image-list1 image-list2"
		                    src="../../../static/food.jpg"></image>
		              
		            </view>
		        </view>
		        <view class="media-foot">
		            <view class="media-info" @click="bindClick">
		                <text class="info-text">{{data.level}}</text>
						 <text class="info-text">{{data.location}}</text>
						  <text class="info-text">介绍: {{data.introduce}}</text>
						  <text class="info-text">{{data.comment_num}}条评论</text>
		                
		            </view>
		            <view class="max-close-view" @click="dislike(key)">
		                <view class="close-view"><text class="close">×</text></view>
		            </view>
		        </view>
		    </view>
		</view>
		
		
		
		
		
		
		
		
		
		
		
		
		
		<uni-drawer :visible="rightDrawerVisible" mode="right" @close="closeRightDrawer">
			
			<view class="uni-padding-wrap">
				<form @submit="formSubmit" @reset="formReset">
					
					<view>
						<view class="uni-title">地点</view>
						<radio-group class="uni-column" name="location">
							<view class="uni-flex">
							<label>
								<radio value="1" />信部</label>
							<label>
								<radio value="2" />文理学部</label></view>
							
					<!--	</radio-group>
						<radio-group class="uni-flex" name="loves"> -->
							<view class=" uni-flex">
							<label>
								<radio value="3" />工部</label>
							<label>
								<radio value="4" />医学部</label>	</view>	
						</radio-group>
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
				listData: [],
				nextPage:"",
				page: 1,
				reLoad:true,
				searchData:{},
				getting:false
			}
		},
		methods: {
				gouser(){
				uni.navigateTo({
					url: '../../user/pwd/pwd',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			},
			dislike(key) {
				uni.showModal({
					content: '不感兴趣？',
					success: (res) => {
						if (res.confirm) {
							this.listData.splice(key, 1);
						}
					}
				})
			},
			formSubmit: function (e){
				this.reLoad = true;
				var formData = e.detail.value;
				
					for (var val in formData){
						//耗时一个下午的重大发现，数组与json用法的区别，如何遍历两者，如何在
						//vue中动态添加遍历并添加json数据
						this.$set(this.searchData,val,formData[val]);
					}
				console.log(e);
				
				
				this.getList();
				
				
			},
			formReset: function (e) {
				console.log("清空数据")
				this.chosen = ''
			},
			closeRightDrawer() {
				this.chosen='';
				this.rightDrawerVisible = false;
				
			},
			getList() {
				//防止多次点击getList
				if(this.getting){
					return;
				}
				this.getting=true;
				
			
				let url= 'https://api.thinker.ink/v1/shops/';
				if (!this.reLoad){
					
					url=this.nextPage; 
					if(url==''){
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
				uni.showLoading({
					title: '正在获取数据',
					mask: false
				});
				uni.request({
					url: url,
					method: 'GET',
					data: this.searchData,
					success: res => {
						uni.hideLoading();
						console.log(res.data.count);
						this.getting=false;
						this.searchData={};
						if (res.data.count==0){
							uni.showToast({
								
								title: '没有数据',
								mask: false,
								duration: 1500
							});
						}
						console.log(res);
					if (!this.reLoad) {
						res.data.data.forEach((news) => {
							this.listData= this.listData.concat(res.data.data);
							console.log(this.listData);
							
						});
					}else{
					this.listData= res.data.data;
					}
						this.nextPage=res.data.next;
						this.reLoad=false;
						console.log(this.nextPage);
					//	console.log(this.listData[0].images[0]);
					},
					fail: (res) => {
						this.getting=false;
						
						this.searchData={};
						uni.hideLoading();
						console.log(JSON.stringify(res));
					},
					complete: () => {}
				});
				
			},
			
			confirm: function (e) {
					this.reLoad = true;
					this.searchData.search = e.detail.value;
			        console.log(this.searchData);
				
				this.getList();
				
			}
		},
		onNavigationBarButtonTap(e) {
			console.log("tab顶部键"+e.index);
			switch (e.index){
				
				case 1:
					console.log("点了评分");
					this.searchData.ordering="rating";
					this.reLoad = true;
					console.log(JSON.stringify(this.searchData));
					this.getList();
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
	
	
	
	 view {
	    display: flex;
	    flex-direction: column;
	    box-sizing: border-box;
	}
	
	.list-cell {
	    width: 750upx;
	    padding: 0 30upx;
	}
	
	.uni-list-cell-hover {
	    background-color: #eeeeee;
	}
	
	.media-list {
	    flex: 1;
	    flex-direction: column;
	    border-bottom-width: 1upx;
	    border-bottom-style: solid;
	    border-bottom-color: #c8c7cc;
	    padding: 20upx 0;
	}
	
	.media-image-right {
	    flex-direction: row;
	}
	
	.media-image-left {
	    flex-direction: row-reverse;
	}
	
	.media-title {
	    flex: 1;
	}
	
	.media-title {
	    lines: 3;
	    text-overflow: ellipsis;
	    font-size: 32upx;
	    color: #555555;
	}
	
	.media-title2 {
	    flex: 1;
	    margin-top: 6upx;
		height: 40upx;
	    line-height: 40upx;
		
	}
	.name{
		text-align: center;
		
		
	}
	.image-section {
	    margin-top: 20upx;
	    flex-direction: row;
	    justify-content: space-between;
	}
	
	.image-section-right {
	    margin-top: 0upx;
	    margin-left: 10upx;
	    width: 225upx;
	    height: 146upx;
	}
	
	.image-section-left {
	    margin-top: 0upx;
	    margin-right: 10upx;
	    width: 225upx;
	    height: 146upx;
	}
	
	.image-list1 {
	    width: 690upx;
	    height: 481upx;
	}
	
	.image-list2 {
	    width: 225upx;
	    height: 146upx;
	}
	
	.image-list3 {
	    width: 225upx;
	    height: 146upx;
	}
	
	.media-info {
	    flex-direction: row;
	}
	
	.info-text {
	    margin-right: 20upx;
	    color: #999999;
	    font-size: 24upx;
	}
	
	.media-foot {
	    margin-top: 20upx;
	    flex-direction: row;
	    justify-content: space-between;
	}
	
	.max-close-view {
	    align-items: center;
	    justify-content: flex-end;
	    flex-direction: row;
	    height: 40upx;
	    width: 80upx;
	}
	
	.close-view {
	    border-style: solid;
	    border-width: 1px;
	    border-color: #999999;
	    border-radius: 10upx;
	    justify-content: center;
	    height: 30upx;
	    width: 40upx;
	    line-height: 30upx;
	}
	
	.close {
	    text-align: center;
	    color: #999999;
	    font-size: 28upx;
	}
</style>
