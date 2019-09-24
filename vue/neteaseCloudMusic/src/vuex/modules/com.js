import * as types from '../types'

const state = {
  showSideBar: false
}

const getters = {
  showSideBar: state => state.showSideBar
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSideBar = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
