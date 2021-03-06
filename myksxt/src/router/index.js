import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页，考试，成绩，错题，题目
import Home from '../views/Home.vue'
import Ks from '../views/Ks.vue'
import Cj from '../views/Cj.vue'
import Ct from '../views/Ct.vue'
import Tm from '../views/Tm.vue'
import Ks_Java from '../views/Ks_Java.vue'

import table from '../components/CjCpt/MyTable.vue'

import Ks_Js from '../views/Ks_Js.vue'
import Ks_Vue from '../views/Ks_Vue.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/table',
    component:table
  },
  {//首页

    path: '/',
    component: Home
  },
  {//考试
    path: '/ks',
    component: Ks
  },
  {//成绩
    path: '/cj',
    component: Cj
  },
  {//错题
    path: '/ct',
    component: Ct
  },
  {//题目
    path: '/tm',
    component: Tm
  },
  {//Java项目
      path:'/ks_Java',
      component:Ks_Java
  },
  {//Js项目
      path:'/ks_JavaScript',
      component:Ks_Js
  },
  {//Vue项目
      path:'/ks_Vue',
      component:Ks_Vue
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
