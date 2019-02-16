import Vue from 'vue'
import Vuex from 'vuex'
var md5Hex = require('../common/hex-md5/md5-hex');
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        forcedLogin: false,
        isLogin: false,
		uid:'',
		username:'',
		token:'',
		//timestamp:'',
		//sign:'',
		//nameplate:'',
		header:{},
		data:{},
		notice:{}
    },
    mutations: {	
		//获取验证uid和token
        login(state, res) {
			console.log('进入login'+state);
			console.log(res);
			if (res.data.data){
				state.uid = res.data.data.uid||'';
				state.token = res.data.data.token||'';
				uni.showToast({
					icon:'loading',
					title: '正在获取信息',
					mask: false,
					duration: 1500
				});
				}
				else{
					console.log("用户名或密码错误");
					uni.showToast({
						icon:'none',
						title: '用户名或密码错误',
						
					    duration: 1500
							});
						    
						}	
        },
		getHeader(state){
			var timestamp = new Date().getTime();
			
			var sign = md5Hex(state.uid.toString()+state.token+timestamp);
			var nameplate= "111"+state.uid.toString()+"11";
		
			console.log(state.uid.toString());
			state.header={
				sign:sign,
				nameplate: nameplate,//"111"+state.uid.toString()+"11",
				timestamp: timestamp
			};
				console.log(state.header);
		},
		//获取用户的详细信息，存做全局变量
		getuserinfo(state) {
			
			//let timestamp = new Date().getTime();
			//console.log(timestamp);
			//let sign = md5Hex(state.uid.toString()+state.token+timestamp);
		//	console.log(sign);
			//console.log(state.uid.toString());
			uni.request({
				url: 'https://api.thinker.ink/v1/users/',
				method: 'GET',
				data: {},
				header:state.header,
				success: res => {
					console.log(state.uid+'下面是用户详细信息');
					state.data=res.data.data;
					state.isLogin=true;
					console.log(state.data);
					
				},
				fail: () => {},
				complete: () => {}
			});
			},
		getNotice(state){
			uni.request({
				url: 'https://api.thinker.ink/v1/notices/',
				method: 'GET',
				header: state.header,
				success: res => {
					console.log('通知如下');
					console.log(res);
					state.notice=res.data;
	
					
				},
				fail: () => {},
				complete: () => {}
			});
		},
			//退出登录,清除数据
        logout(state) {
			state.token = '';
			state.uid = '';
			state.username = '';
            state.data = {};
            state.isLogin = false;
        }
    }
})

export default store
