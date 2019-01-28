<template>
    <view class="page">
        <view class='feedback-title'>
            <text>书名</text>
        </view>
        <view class="feedback-body">
            <input class="feedback-input" v-model="sendDate.name" placeholder="必填" />
        </view>
        <view class='feedback-title'>
            <text>详细内容（必选）：</text>
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
		<view class='feedback-title'>
		    <text>图片(必填,提供书籍封面图片,总大小10M以下)</text>
		</view>
        <view class="feedback-body feedback-uploader">
            <view class="uni-uploader">
                <view class="uni-uploader-head">
                    <view class="uni-uploader-title">点击预览图片</view>
                    <view class="uni-uploader-info">{{imageList.length}}/8</view>
                </view>
                <view class="uni-uploader-body">
                    <view class="uni-uploader__files">
                        <block v-for="(image,index) in imageList" :key="index">
                            <view class="uni-uploader__file" style="position: relative;">
                                <image class="uni-uploader__img" :src="image" @tap="previewImage"></image>
                                <view class="close-view" @click="close(index)">x</view>
                            </view>
                        </block>
                        <view class="uni-uploader__input-box" v-show="imageList.length < 8">
                        	<view class="uni-uploader__input" @tap="chooseImg"></view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        
        <view class='feedback-title feedback-star-view'>
            <text>应用评分</text>
            <view class="feedback-star-view">
                <text class="feedback-star" v-for="(value,key) in stars" :key="key" :class="key < sendDate.score ? 'active' : ''" @tap="chooseStar(value)"></text>
            </view>
        </view>
        <button type="primary" class="feedback-submit" @tap="send">提交</button>
        <view class='feedback-title'>
            <text>用户反馈的结果可在app打包后于DCloud开发者中心查看</text>
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
                stars: [1, 2, 3, 4, 5],
                imageList: [],
                sendDate: {
                  //  score: 0,
                   // content: "",
                   name: ""
                }
            }
        },
        onLoad() {
			console.log("header是");
			console.log( JSON.stringify(this.header));
          /*  let deviceInfo = {
                appid: plus.runtime.appid,
                imei: plus.device.imei, //设备标识
                p: plus.os.name === "Android" ? "a" : "i", //平台类型，i表示iOS平台，a表示Android平台。
                md: plus.device.model, //设备型号
                app_version: plus.runtime.version,
                plus_version: plus.runtime.innerVersion, //基座版本号
                os: plus.os.version,
                net: "" + plus.networkinfo.getCurrentType()
            }
            this.sendDate = Object.assign(deviceInfo, this.sendDate);*/
        }, 
		computed: {
			...mapState(['header'])
			},
        methods: {
			formSubmit: function(e){
				console.log("进入提交");
				uni.showLoading({
					title: '提交中',
					mask: false
				});
				var formData = e.detail.value;
					formData.name = this.sendDate.name;
					console.log(formData);
				 if(formData.name==''||formData.types==''||formData.country==''||formData.language==''||formData.place==''){
					 uni.showToast({
					 	title: '请补全信息',
					 	mask: false,
					 	duration: 1500
					 });
					 return;
				 }else{
					 uni.request({
					 	url: 'https://api.thinker.ink/v1/books/publish/',
					 	method: 'POST',
					 	data: formData,
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
						
					 	fail: () => {
							 
						},
					 	complete: () => {}
					 });
			
				 }
				
				},
            close(e){
               this.imageList.splice(e,1);
            },
            
            chooseImg() { //选择图片
                uni.chooseImage({
                    sourceType: ["camera", "album"],
                    sizeType: "compressed",
                    count: 8 - this.imageList.length,
                    success: (res) => {
                        this.imageList = this.imageList.concat(res.tempFilePaths);
                    }
                })
            },
           // chooseStar(e) { //点击评星
             //   this.sendDate.score = e;
           // },
            previewImage() { //预览图片
                uni.previewImage({
                    urls: this.imageList
                });
            },
            send() { //发送反馈
					console.log(JSON.stringify(this.sendDate));
					uni.request({
						url: 'https://api.thinker.ink/v1/books/publish/',
						method: 'POST',
						data: {},
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
			//图片上传代码测试
            /*    console.log(JSON.stringify(this.imageList));
                let imgs = this.imageList.map((value, index) => {
                    return {
                        //name: "image" + index,
                          name: "image" + index,
                        uri: value
                    }
                })
				console.log(JSON.stringify(imgs));
				uni.uploadFile({
				    url: "https://api.thinker.ink/v1/uploadImage/",
				   // url: "https://service.dcloud.net.cn/feedback",
				    files: imgs,//this.imageList[0],
					header:this.header,
				    //formData: this.sendDate,
				    success: (res) => {
				        if (res.statusCode === 200) {
				            uni.showToast({
				                title: "反馈成功!"
				            });
							console.log(JSON.stringify(res));
				            this.imageList = [];
				            this.sendDate = {
				                score: 0,
				                content: "",
				                contact: ""
				            }
				        }
				    },
				    fail: (res) => {
				        uni.showToast({
				            title: "失败",
				            icon:"none"
				        });
				        console.log(res)
						console.log(JSON.stringify(res));
				    }
				}); */
               /* uni.uploadFile({
                    url: "https://service.dcloud.net.cn/feedback",
                    files: imgs,
                    formData: this.sendDate,
                    success: (res) => {
                        if (res.statusCode === 200) {
                            uni.showToast({
                                title: "反馈成功!"
                            });
                            this.imageList = [];
                            this.sendDate = {
                                score: 0,
                                content: "",
                                contact: ""
                            }
                        }
                    },
                    fail: (res) => {
                        uni.showToast({
                            title: "失败",
                            icon:"none"
                        });
                        console.log(res)
                    }
                });*/
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
</style>
