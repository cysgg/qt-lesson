// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import MyVuex from './myvuex'

Vue.config.productionTip = false

let store = new MyVuex.Store({
  state: {
    count: 0
  },
  getters: {
    getStatePlusOne: state => state.count + 1
  }
}, Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  store,
  template: '<App/>'
})
