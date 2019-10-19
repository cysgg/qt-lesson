// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import 'babel-polyfill'

Vue.config.productionTip = false

Vue.filter('time', timeStamp => {
  return new Date(timeStamp).toLocaleTimeString()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
