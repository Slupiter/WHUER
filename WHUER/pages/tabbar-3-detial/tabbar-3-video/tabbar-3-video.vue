<template>
	<view class="content">
		<view class='feedback-title'>
		    <text>书名</text>
		</view>
		<view class="feedback-body">
		    <input class="feedback-input" v-model="sendDate.name" placeholder="必填" />
		</view>
		 <view class="feedback-body">
		<view class="uni-padding-wrap">
			<form @submit="formSubmit" >
				<view>
					<view class="uni-title">拥有者所在地点</view>
					<radio-group class="uni-column" name="place">
						<view class="uni-flex">
						<label>
							<radio value="1" />信部</label>
						<label>
							<radio value="2" />文理学部</label></view>
						<view class=" uni-flex">
						<label>
							<radio value="3" />工部</label>
						<label>
							<radio value="4" />医学部</label>	</view>	
					</radio-group>
					<view class="uni-title">图书地区</view>
						<radio-group class="uni-column" name="country">
							<view class="uni-flex">
							<label>
								<radio value="in" />国内</label>
							<label>
								<radio value="out" />国外</label></view>
						</radio-group>
						<view class="uni-title">图书语言</view>
							<radio-group class="uni-column" name="language">
								<view class="uni-flex">
								<label>
									<radio value="ch" />中文</label>
								<label>
									<radio value="en" />英文</label></view>
							</radio-group>
						<view class="uni-title">图书类型</view>
							<radio-group class="uni-column" name="types">
								<view class="uni-flex">
								<label>
									<radio value="1" />教辅</label>
								<label>
									<radio value="2" />课外</label></view>
							</radio-group>
				</view>
				<view class="uni-btn-v uni-common-mt">
					<button class="btn-submit "  formType="submit" type="primary" >Submit</button>
				</view>
			</form>
		</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		 methods: {
			formSubmit: function (e){
				console.log("进入提交");
				},
				}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
		margin-top: 200upx;
	}
</style>
