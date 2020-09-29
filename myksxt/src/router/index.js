import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页，考试，成绩，错题，题目
import Home from '../views/Home.vue'
import Ks from '../views/Ks.vue'
import Cj from '../views/Cj.vue'
import Ct from '../views/Ct.vue'
import Tm from '../views/Tm.vue'

//Java题目
import Ks_Java from '../views/Ks_Java.vue'

Vue.use(VueRouter)

const routes = [
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
