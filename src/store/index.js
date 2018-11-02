import Vue from 'vue'
// 引入Vuex状态管理
import Vuex from 'vuex'

import loginUser from './modules/loginUser'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 根state
    version: '1.0.0',
    logoName: '百兆APP',
    themeColor: 'default',
    language: '中文'
  },
  mutations: {
    // 根mutations
    setTheme (state, themeColor) {
      state.themeColor = themeColor
    }
  },
  actions: {
    // 根actions
    changeTheme ({state, commit}) {
      commit('setTheme', 'black')
    }
  },
  modules: {
    // 加载模块中的state,actions,mutations到store
    loginUser
  }
})
