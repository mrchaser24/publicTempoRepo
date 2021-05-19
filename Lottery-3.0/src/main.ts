import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import "@/assets/css/main.css"
import clipboard from 'clipboard';
import VueI18n from 'vue-i18n'
import axios, { AxiosStatic } from 'axios';
import { api } from "./utils/api";
import http from "./lib/http-common";
import i18n from './i18n'

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.clipboard = clipboard;
Vue.use(VueI18n);

Vue.prototype.$api = api;
Vue.prototype.$http = http;
declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosStatic;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $api: any;
  }
}

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
