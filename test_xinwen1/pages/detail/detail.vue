<template>
	
	<view class="content">
		<view class="title">{{title}}</view>
		<view class="time">{{published_at}}</view>
		<image :src="image" class="image-view" mode="widthFix"></image>
		<view class="art-content">
		<rich-text :nodes="strings"></rich-text></view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				title:'',
				strings:'',
				published_at:'',
				image:""
			};
		},
	onLoad:function(e){
			console.log(e.newsid);
			uni.request({
				url: 'https://unidemo.dcloud.net.cn/api/news/36kr/'+e.newsid,
				method: 'GET',
				data: {},
				success: res => {
					console.log(res);
					this.title=res.data.title;
					this.published_at=res.data.published_at;
					this.strings=res.data.content;
					this.image=res.data.cover;
				},
				fail: () => {},
				complete: () => {}
			});
		}
	}
</script>

<style>
.content{padding:4%;width:92%;flex-wrap: wrap;}
.title{line-height:2em; font-weight: 700;font-size:38upx;}
.image-view{margin: auto;width:96%;}
</style>
