// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import AVue from './AVue.js'

Vue.use(ElementUI)

Vue.prototype.$Aalert = () => {console.log('alert一次')}

const plugin = {
  install (...arg) {
    console.log(arg)
    console.log('我是插件install代码')
  }
}

Vue.use(plugin)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
