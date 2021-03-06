const state = {
  on_or_up: 'on',
  show_login_dialog: false, // 是否展示登录框
  sing_on: false, // 登录状态 默认false
  user_info: { // 用户信息
    id: 1,
    avatar_url: 'https://avatars2.githubusercontent.com/u/10172415?s=40&v=4',
    username: '美团严端银'
  }
}

const mutations = {
  change_show_state (state, status) {
    console.log(status, status === 'on')
    state.show_login_dialog = (status === 'on')
  }
}

const actions = {
  change_show_state ({ commit }, status) {
    commit('change_show_state', status)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
