import * as types from '../types'

const state = {
  showSideBar: false,
  fullScreen: true
}

const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSideBar = status
  },
  [types.SET_FULL_SCREEN] (state, status) {
    console.log(status)
    state.fullScreen = status
  }
}

const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  selectPlaySong ({commit}, status) {
    commit(types.SET_FULL_SCREEN, status)
  }
}

const getters = {
  showSidebar: state => state.showSideBar,
  fullScreen: state => state.fullScreen
}

export default {
  state,
  mutations,
  actions,
  getters
}
