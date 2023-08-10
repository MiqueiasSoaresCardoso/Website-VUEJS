import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Pedidos from '../components/Pedidos.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pedidos',
      name:'Pedidos',
      component: Pedidos
    }
  ]
})
