<template>
	<view class="content">
		<view class="" style="height: 150upx;"></view>
	<!--	<view class="uni-list">
			<navigator url="../../maincontent/bookexchange/bookexchange">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text>图书交换</text>
				</view></navigator>
			<navigator url="../../maincontent/foodsearch/foodsearch">	
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text>美食推荐</text>
				</view></navigator>
			<navigator url="../../maincontent/schoolbus/schoolbus">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text>校车行程</text>
				</view></navigator>
				<navigator url="../../maincontent/cat/cat">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text>流浪猫狗</text>
				</view></navigator>
				<navigator url="../../maincontent/weather/weather">
				<view class="uni-list-cell-navigate uni-navigate-right">
					<text>天气提醒</text>
				</view></navigator>
			
		</view>-->
		<uni-grid :data="[
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shu.png',text:''},
    {image:'../../../static/home/b.png',text:'图书交换'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/laoren.png',text:''},
    {image:'../../../static/home/f.png',text:'美食推荐'},
    {image:'../../../static/home/w.png',text:'天气'},
	{image:'../../../static/home/bus.png',text:'校车路线'},
	{image:'https://img-cdn-qiniu.dcloud.net.cn/img/maozi.png',text:''},
	{image:'../../../static/home/c.png',text:'流浪猫狗'},
    {image:'https://img-cdn-qiniu.dcloud.net.cn/img/shoutao.png',text:''}]" 
    show-out-border="false" @click="clickone">
</uni-grid>
	</view>
</template>

<script>
	import uniGrid from "@/components/uni-grid/uni-grid.vue"
export default {
	data() {
		return {
			title: 'WHUER'
		};
	},
	components: {uniGrid},
	onLoad() {},
	methods: {
		clickone:function  (e) {
				console.log(e);
				let url = "";
				let n = e.index;
				switch (n){
					case 1:
						url = "../../maincontent/bookexchange/bookexchange";
						break;
					case 3:
						url="../../maincontent/foodsearch/foodsearch";
						break;
					case 4:
						url = "../../maincontent/weather/weather";
						break;
					case 5:
						url = "../../maincontent/schoolbus/schoolbus";
						break;
					case 7:
						url = "../../maincontent/cat/cat";
						break;
					default:
						break;
				};
				console.log(url);
				uni.navigateTo({
					url: url,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
		}
	},
	
	}

</script>

<style>

page{
	background-color: white;
}
</style>
