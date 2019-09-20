import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  date: '2019.09.20',
  money: 100
}

const mutations = {
  add: (state, n) => state.count,
  sub: state => state.count--,
  makeMoney: state => state.money += 1
}

const getters = {
  count: state => state.count += 100
}

const actions = {
  actMakeMoney ({commit}) {
    setTimeout(() => {
      commit('makeMoney')
    }, 2000)
    console.log('你整你的钱')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
