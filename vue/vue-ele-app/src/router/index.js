import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Comments from '@/components/comments/comments'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/comments',
      name: 'Comments',
      component: Comments
    }
  ]
})
