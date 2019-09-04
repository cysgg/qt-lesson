import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/main'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/main',
    name: 'main',
    component: Main
  }]
})
