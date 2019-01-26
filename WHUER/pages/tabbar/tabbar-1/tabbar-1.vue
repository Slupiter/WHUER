<template>
	<view class="content">
		<view class="uni-list">
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
			
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'WHUER'
		};
	},
	onLoad() {},
	methods: {},
	}

</script>

<style>
.content {
	text-align: center;
	height: 100%;
	margin-top: 200upx;
}
navigator {
	height: 100upx;
	background-color: gray;
	margin: auto 200upx;
}
text {text-align: center;
		padding: auto auto;
		line-height: 3em;
}

</style>
