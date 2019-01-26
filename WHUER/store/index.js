import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: false,
        userName: "",
		avatarUrl:""
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
			
        },
		pass(state, avatarUrl) {
			state.avatarUrl = avatarUrl;
		},
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
			state.avatarUrl = "";
        }
    }
})

export default store
