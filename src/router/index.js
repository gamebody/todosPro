import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('src/views/home')
    },
    {
      path: '/renameCategories',
      name: 'renameCategories',
      component: require('src/views/renameCategories')
    },
    {
      path: '/todos/:index',
      name: 'categorie',
      component: require('src/views/categorie')
    },
    {
      path: '/todo',
      name: 'todo',
      component: require('src/views/todo')
    }
  ]
})
