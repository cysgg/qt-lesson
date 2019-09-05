import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/main'
import UserManage from '@/components/content/userManage'

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
    component: Main,
    children: [
      {
        path: '/userManage',
        name: 'userManage',
        component: UserManage
      }
    ]
  }]
})
