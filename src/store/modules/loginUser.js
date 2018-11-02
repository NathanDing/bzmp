export default {
  state: {
    // 登录用户名
    userName: '',
    // 登录用户ID
    userId: '',
    // 登录用户头像
    avatorImgPath: '',
    // 登录用户token
    token: ''
  },
  mutations: {
    setUser (state, userName, userId, token, avatorImgPath) {
      state.userName = userName
      state.userId = userId
      state.token = token
      state.avatorImgPath = avatorImgPath
    }
  },
  actions: {
    logout ({state, commit}) {
      commit('setUser', '', '', '', '')
    },
    setting () {
      console.log('setting user info')
    }
  }
}
