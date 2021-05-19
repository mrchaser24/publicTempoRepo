import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/regist',
    name: 'Regist',
    component: () => import('../views/regist/index.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/videolist',
    name: 'videolist',
    component: () => import('../views/home/VideoList.vue')
  },
  {
    path: '/toplist',
    name: 'toplist',
    component: () => import('../views/topic/topList.vue')
  },
 
  {
    path: '/topic',
    name: 'Topic',
    component: () => import('../views/topic/Topic.vue')
  },
  {
    path: '/donkeypen',
    name: 'DonkeyPen',
    component: () => import('../views/donkeypen/DonkeyPen.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/user/User.vue')
  },
  {
    path: '/user/userinfo',
    name: 'UserInfo',
    component: () => import('../views/user/UserInfo.vue')
  },
  {
    path: '/user/changeName',
    name: 'ChangeName',
    component: () => import('../views/user/ChangeName.vue')
  },
  {
    path: '/user/changePhone/:type?',
    name: 'ChangePhone',
    component: () => import('../views/user/ChangePhone.vue')
  },
  {
    path: '/user/changePwd',
    name: 'ChangePwd',
    component: () => import('../views/user/ChangePwd.vue')
  },
  {
    path: '/user/selectavatar',
    name: 'SelectAvatar',
    component: () => import('../views/user/SelectAvatar.vue')
  },
  
  {
    path: '/video/play/:id',
    name: 'VideoPlay',
    component: () => import('../views/video/index.vue')
  },
  {
    path: '/recharge/index',
    name: 'Recharge',
    component: () => import('../views/recharge/index.vue')
  },
  
  {
    path: '/user/systemsettings',
    name: 'SystemSettings',
    component: () => import('../views/user/SystemSettings.vue')
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import('../views/feedback/Feedback.vue')
  },
  
  {
    path: '/douyin',
    name: 'douyin',
    component: () => import('../views/douyin/index.vue')
  },
  {
    path: '/MyArticle',
    name: 'MyArticle',
    component: () => import('../views/user/MyArticle.vue')
  },
  {
    path: '/user/changePwdMain',
    name: 'changePwdMain',
    component: () => import('../views/user/ChangePwdMain.vue')
  },
  {
    path: '/user/Authentication',
    name: 'Authentication',
    component: () => import('../views/user/Authentication.vue')
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/login/index.vue')
  // },
  // {
  //   path: '/regist',
  //   name: 'Regist',
  //   component: () => import('../views/regist/index.vue')
  // },

  {
    path: '/message-center',
    name: 'MessageCenter',
    component: () => import('../views/message-center/MessageCenter.vue')
  }
  ,
  {
    path: '/message-center/message',
    name: 'Message',
    component: () => import('../views/message-center/Message.vue')
  },
  {
    path: '/user/Promote',
    name: 'Promote',
    component: () => import('../views/user/Promote.vue')
  },
  {
    path: '/user/download',
    name: 'Download',
    component: () => import('../views/download/Download.vue')
  },
  {
    path: '/user/collection',
    name: 'Collection',
    component: () => import('../views/collection/Collection.vue')
  },
  {
    path: '/user/historyrecord',
    name: 'HistoryRecord',
    component: () => import('../views/historyrecord/HistoryRecord.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
