import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/member/login')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('./components/member/join')
    },
    {
      path: '/board/list',
      component: () => import('./components/board/list')
    },
    {
      path: '/board/write',
      component: () => import('./components/board/write')
    }
  ]
})
