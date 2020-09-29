import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Ks from '../views/Ks.vue'
import Cj from '../views/Cj.vue'
import Ct from '../views/Ct.vue'
import Tm from '../views/Tm.vue'
import table from '../components/CjCpt/MyTable.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/table',
    component:table
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '/ks',
    component: Ks
  },
  {
    path: '/cj',
    component: Cj
  },
  {
    path: '/ct',
    component: Ct
  },
  {
    path: '/Tm',
    component: Tm
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
