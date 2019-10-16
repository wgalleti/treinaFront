import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/pessoas',
      name: 'pessoas',
      component: () => import('@/views/Pessoas.vue')
    },
    {
      path: '/livros',
      name: 'livros',
      component: () => import('@/views/Livros.vue')
    },
    {
      path: '/emprestimos',
      name: 'emprestimos',
      component: () => import('@/views/Emprestimos.vue')
    }

  ]
})
