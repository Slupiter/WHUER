<template>
    <view class="page">
		<view class="align" v-if="!isLogin">登录以获取通知</view>
		
		<view class="align" v-if="notice.count==0">
			暂无通知,下拉以刷新
		</view>
       <view class="uni-list">
       	<view class="uni-list-cell" v-for="(item,index) in notice.data" :key="index">
       		<view class="uni-list-cell-navigate uni-navigate-right">
				{{item.sender}} | {{item.nickname}}
       		</view>
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
   	data() {
   		return {
   			
			ref:false
   		};
   	},
   	computed: {
   			...mapState(['isLogin','notice'])
   			},
	onLoad: function() {
		if (!this.isLogin) {
		var url="../../user/login/login";
		uni.navigateTo({
			url
		});
			}
	},
	onPullDownRefresh:function(){
		this.getNotice();
		uni.stopPullDownRefresh();
	},
	methods:{
		...mapMutations(['getNotice']),
	}
	}

</script>

<style>
    .align{
		text-align: center;
	}
</style>
