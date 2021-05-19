import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login/index.vue')
  },
  {
    path: '/Details',
    name: 'Details',
    component: () => import('@/views/Details/index.vue')
  },
  {
    path: '/ChangePassword',
    name: 'ChangePassword',
    component: () => import('@/views/ChangePassword/index.vue')
  },
  {
    path: '/GameRule',
    name: 'GameRule',
    component: () => import('@/views/GameRule/index.vue')
  },
  {
    path: '/Agreement',
    name: 'Agreement',
    component: () => import('@/views/Agreement/index.vue')
  },
  
  {
    path: '/Lottoryhistory',
    name: 'Lottoryhistory',
    component: () => import('@/views/Lottoryhistory/index.vue')
  },
  {
    path: '/Mineinfo',
    name: 'Mineinfo',
    component: () => import('@/views/Mineinfo/index.vue')
  },
  {
    path: '/Today',
    name: 'Today',
    component: () => import('@/views/Today/index.vue')
  },
  {
    path: '/Twoweek',
    name: 'Twoweek',
    component: () => import('@/views/Twoweek/index.vue')
  },
  {
    path: '/Guanya',
    name: 'Guanya',
    component: () => import('@/views/Guanya/index.vue')
  },
  {
    path: '/K3',
    name: 'K3',
    component: () => import('@/views/K3/index.vue')
  },
  {
    path: '/K3dan',
    name: 'K3dan',
    component: () => import('@/views/K3dan/index.vue')
  },
  {
    path: '/Load',
    name: 'Load',
    component: () => import('@/views/Load/index.vue')
  },
  {
    path: '/home/:lotterytype/:lotteryid',
    name: 'home',
    component: () => import('@/views/Load/index.vue')
  },
  
  
  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})


let notLogin = [
  "Login",
];

  /*
    * @Author: keanu 
    * @LastAuthor: null
    * @Param null
    * @Return array || []
    * @Date: 2021-04-12 14:09:55
    * @Description: router guard
  */
router.beforeEach((to: any, from: any, next) => {
  let isUser = localStorage.getItem('UserInfo') ? true : false;
  if (!isUser) {
    if (from.name == "Login") {
      next();
    } else if (from.name == "home") {
      if (notLogin.includes(to.name)) {
        next();
      } else {
        next({ name: "Login" });
      }
    } else {
      if (notLogin.includes(to.name)) {
        next();
      } else {
        next({ name: "Login" });
      }
    }
  } else {
    if (!notLogin.includes(to.name)) {
      next();
    } else {
      next({ name: "home" });
    }
  }

});
export default router
