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
      path: '/livros',
      name: 'livros',
      component: () => import('@/views/Livro.vue')
    },
    {
      path: '/emprestimos',
      name: 'emprestimo',
      component: () => import('@/views/Emprestimo.vue')
    }
  ]
})
