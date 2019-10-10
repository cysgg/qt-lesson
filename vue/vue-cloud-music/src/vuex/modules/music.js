import * as types from '../types'
import { findIndex } from '@/common/util.js'

const state = {
  playList: [],
  currentIndex: -1,
  currentSong: '',
  playing: false
}

const getters = {
  playList: state => state.playList,
  currentIndex: state => state.currentIndex,
  playing: state => state.playing,
  currentSong: state => state.currentSong
}

const mutations = {
  [types.SET_PLAYLIST] (state, playlist) {
    state.playList = playlist
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  },
  [types.SET_PLAYING] (state, status) {
    state.playing = status
  }
}

const actions = {
  selectPlaySong ({ commit, state }, song) {
    let playlist = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查找当前列表中是否有待插入的歌曲 并返回其索引
    let fpIndex = findIndex(playlist, song)
    // 已经包含这首歌曲
    if (fpIndex > -1) {
      currentIndex = fpIndex
    } else {
      playlist.push(song)
      currentIndex = playlist.length - 1
    }
    commit(types.SET_PLAYLIST, playlist)
    commit(types.SET_CURRENT_INDEX, currentIndex)
    commit(types.SET_PLAYING, true)
  },
  addPlayList ({commit, state}, song) {
    let playlist = state.playList.slice().push(song)
    if (playlist.length === 1) {
      let currentIndex = state.currentIndex
      currentIndex++
      commit(types.SET_CURRENT_INDEX, currentIndex)
      commit(types.SET_PLAYING, true)
    }
    commit(types.SET_PLAYLIST, playlist)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
