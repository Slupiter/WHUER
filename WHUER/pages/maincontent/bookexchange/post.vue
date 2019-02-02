<template>
    <view class="page">
		 <view class='feedback-title'>
		    <text>用户希望交换的图书名称: {{tobook}}</text>
		</view>
		 
        <view class='feedback-title'>
            <text>用户用于交换的图书名称:</text>
        </view>
        <view class="feedback-body">
            <input class="feedback-input" v-model="sendDate.frombook" placeholder="必填" />
        </view>
		
      
		<view class="uni-padding-wrap">
			
				
				<view class="uni-btn-v uni-common-mt">
					<button class="btn-submit "  formType="submit" type="primary" @tap="post" >确定</button>
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
                tobook:'',
                sendDate: {
                   
                   frombook: ""
                }
            }
        },
        
			
			onLoad:function(e){
					console.log("e"+e.bname+e);
					this.tobook=e.bname;
					this.sendDate.receiver=e.bowner;
				},
        
        
		computed: {
			...mapState(['header','data'])
			},
        methods: {
			post() {
				console.log("进入提交");
				uni.showLoading({
					title: '提交中',
					mask: false
				});
				this.sendDate.tobook=this.tobook;
				this.sendDate.sender=this.data.nickname;
				
					console.log(this.sendDate);
				 if(this.sendDate.frombook ==''){
					 uni.showToast({
					 	title: '请补全信息',
					 	mask: false,
					 	duration: 1500
					 });
					 return;
				 }else{
					 uni.request({
					 	url: 'https://api.thinker.ink/v1/books/applications/publish/',
					 	method: 'POST',
					 	
						header:this.header,
					 	success: res => {
							console.log(res);
							uni.hideLoading();
							 if (res.statusCode === 201) {
							    uni.showToast({
							        title: "发布成功!"
							    });
							   
							    }else{
									uni.showToast({
									    title: "发布失败!"
									});
								}
							
							console.log(res);
							},
						
					 });
			
				 }
				
				}
           
            
        }
    }
</script>

<style>
    @font-face {
    	font-family: uniicons;
    	font-weight: normal;
    	font-style: normal;
    	src: url('https://img-cdn-qiniu.dcloud.net.cn/fonts/uni.ttf') format('truetype');
    }
    page {
        background-color: #EFEFF4;
    }
    view{
        font-size: 28upx;
    }
    .input-view {
        font-size: 28upx;
    }
    .close-view{
        text-align: center;line-height:14px;height: 16px;width: 16px;border-radius: 50%;background: #FF5053;color: #FFFFFF;position: absolute;top: -6px;right: -4px;font-size: 12px;
    }
    /* 上传 */
    .uni-uploader {
    	flex: 1;
    	flex-direction: column;
    }
    .uni-uploader-head {
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    }
    .uni-uploader-info {
    	color: #B2B2B2;
    }
    .uni-uploader-body {
    	margin-top: 16upx;
    }
    .uni-uploader__files {
    	display: flex;
    	flex-direction: row;
    	flex-wrap: wrap;
    }
    .uni-uploader__file {
    	margin: 10upx;
    	width: 210upx;
    	height: 210upx;
    }
    .uni-uploader__img {
    	display: block;
    	width: 210upx;
    	height: 210upx;
    }
    .uni-uploader__input-box {
    	position: relative;
    	margin:10upx;
    	width: 208upx;
    	height: 208upx;
    	border: 2upx solid #D9D9D9;
    }
    .uni-uploader__input-box:before,
    .uni-uploader__input-box:after {
    	content: " ";
    	position: absolute;
    	top: 50%;
    	left: 50%;
    	-webkit-transform: translate(-50%, -50%);
    	transform: translate(-50%, -50%);
    	background-color: #D9D9D9;
    }
    .uni-uploader__input-box:before {
    	width: 4upx;
    	height: 79upx;
    }
    .uni-uploader__input-box:after {
    	width: 79upx;
    	height: 4upx;
    }
    .uni-uploader__input-box:active {
    	border-color: #999999;
    }
    .uni-uploader__input-box:active:before,
    .uni-uploader__input-box:active:after {
    	background-color: #999999;
    }
    .uni-uploader__input {
    	position: absolute;
    	z-index: 1;
    	top: 0;
    	left: 0;
    	width: 100%;
    	height: 100%;
    	opacity: 0;
    }
    
    /*问题反馈*/
    .feedback-title {
    	display: flex;
    	flex-direction: row;
    	justify-content: space-between;
    	align-items: center;
    	padding: 20upx;
    	color: #8f8f94;
    	font-size: 28upx;
    }
    .feedback-star-view.feedback-title {
    	justify-content: flex-start;
    	margin: 0;
    }
    .feedback-quick {
    	position: relative;
    	padding-right: 40upx;
    }
    .feedback-quick:after {
    	font-family: uniicons;
    	font-size: 40upx;
    	content: '\e581';
    	position: absolute;
    	right: 0;
    	top: 50%;
    	color: #bbb;
    	-webkit-transform: translateY(-50%);
    	transform: translateY(-50%);
    }
    .feedback-body {
    	background: #fff;
    }
    .feedback-textare {
    	height: 200upx;
    	font-size: 34upx;
    	line-height: 50upx;
    	width: 100%;
    	box-sizing: border-box;
    	padding: 20upx 30upx 0;
    }
    .feedback-input {
    	font-size: 34upx;
    	height: 50upx;
    	min-height: 50upx;
    	padding: 15upx 20upx;
    	line-height: 50upx;
    }
    .feedback-uploader {
    	padding: 22upx 20upx;
    }
    .feedback-star {
    	font-family: uniicons;
    	font-size: 40upx;
    	margin-left: 6upx;
    }
    .feedback-star-view {
    	margin-left: 20upx;
    }
    .feedback-star:after {
    	content: '\e408';
    }
    .feedback-star.active {
    	color: #FFB400;
    }
    .feedback-star.active:after {
    	content: '\e438';
    }
    .feedback-submit {
    	background: #007AFF;
    	color: #FFFFFF;
    	margin: 20upx;
    }
	button.btn-submit {
	    background-color: #1bb76e;
	}
</style>
