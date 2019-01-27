<template>
    <view class="content">
        <view class="input-group">
            <view class="input-row border">
                <text class="title">账号：</text>
                <m-input class="m-input" type="text" clearable focus v-model="account" placeholder="请输入账号"></m-input>
            </view>
            <view class="input-row">
                <text class="title">密码：</text>
                <m-input type="password" displayable v-model="password" placeholder="请输入密码"></m-input>
            </view>
        </view>
        <view class="btn-row">
            <button type="primary" class="primary" @tap="bindLogin">登录</button>
        </view>
        <view class="action-row">
            
            <navigator url="../pwd/pwd">忘记密码</navigator>
        </view>
        
    </view>
</template>

<script>
   
    import {
        mapState,
        mapMutations
    } from 'vuex'
	
    import mInput from '../../../components/m-input.vue'

    export default {
        components: {
            mInput
        },
        data() {
            return {
                providerList: [],
                hasProvider: false,
                account: '',
                password: '',
                positionTop: 0
            }
        },
        computed: {
			...mapState(['forcedLogin','token','username','data'])
			},
        methods: {
            ...mapMutations(['login','getuserinfo']),
            
            initPosition() {
                /**
                 * 使用 absolute 定位，并且设置 bottom 值进行定位。软键盘弹出时，底部会因为窗口变化而被顶上来。
                 * 反向使用 top 进行定位，可以避免此问题。
                 */
                this.positionTop = uni.getSystemInfoSync().windowHeight - 100;
            },
            bindLogin() {
                /**
                 * 客户端对账号信息进行一些必要的校验。
                 * 实际开发中，根据业务需要进行处理，这里仅做示例。
                 */
                if (this.account.length != 13) {
                    uni.showToast({
                        icon: 'none',
                        title: '请输入正确的学号'
                    });
                    return;
                }
                
                
                /**
                 * 下面简单模拟下服务端的处理
                 * 检测用户账号密码是否在已注册的用户列表中
                 * 实际开发中，使用 uni.request 将账号信息发送至服务端，客户端在回调函数中获取结果信息。
                 */
               // const datas = {
               //     username1: this.account,
                  //  password1: this.password
               // };
				console.log('已输入'+this.account+this.password);
				//与服务器进行验证
				uni.request({
					url: 'https://api.thinker.ink/v1/users/login/',
					method: 'POST',
					header:{
						'content-type':'application/json'
					},
					data: {
						username: this.account,
						password: this.password
					},
					success: res => {
						console.log('成功返回的信息-------------');
						console.log(res.data.data);
						this.login(res);
						if(this.token) {
							
						    //getuserinfo();
							console.log(this.token);
							
							this.getuserinfo();
							uni.navigateBack();
						}else{
							console.log("login失败");
						}
                }})
				//this.login(data);
				//this.getuserinfo();
				
            }
			},                   
        onLoad() {
            this.initPosition();
           
        }
    }
</script>

<style>
     /*每个页面公共css */
   /* uni-app默认全局使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。如不使用flex布局，请删除或注释掉本行。*/
   body,
   page {
       min-height: 100%;
       display: flex;
   }
   
   /* #ifdef MP-BAIDU */
   page {
       width: 100%;
       height: 100%;
       display: block;
   }
   
   swan-template {
       width: 100%;
       min-height: 100%;
       display: flex;
   }
   
   /* #endif */
   
   .content {
       display: flex;
       flex: 1;
       flex-direction: column;
       background-color: #efeff4;
       padding: 20upx;
   }
   
   .input-group {
       background-color: #ffffff;
       margin-top: 40upx;
       position: relative;
   }
   
   .input-group::before {
       position: absolute;
       right: 0;
       top: 0;
       left: 0;
       height: 1upx;
       content: '';
       -webkit-transform: scaleY(.5);
       transform: scaleY(.5);
       background-color: #c8c7cc;
   }
   
   .input-group::after {
       position: absolute;
       right: 0;
       bottom: 0;
       left: 0;
       height: 1upx;
       content: '';
       -webkit-transform: scaleY(.5);
       transform: scaleY(.5);
       background-color: #c8c7cc;
   }
   
   .input-row {
       display: flex;
       flex-direction: row;
       position: relative;
   }
   
   .input-row .title {
       width: 20%;
       height: 50upx;
       min-height: 50upx;
       padding: 15upx 0;
       padding-left: 30upx;
       line-height: 50upx;
   }
   
   .input-row.border::after {
       position: absolute;
       right: 0;
       bottom: 0;
       left: 15upx;
       height: 1upx;
       content: '';
       -webkit-transform: scaleY(.5);
       transform: scaleY(.5);
       background-color: #c8c7cc;
   }
   
   .btn-row {
       margin-top: 50upx;
       padding: 20upx;
   }
   
   button.primary {
       background-color: #0faeff;
   }
   .action-row {
	   text-align: center;
	   
   }
</style>
