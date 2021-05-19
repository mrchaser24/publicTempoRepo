import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import { Lazyload } from 'vant';

import 'vant/lib/index.css';
import './assets/styles/main.less';
import Apis from "@/api/index"
Vue.use(Vant);
Vue.use(Lazyload);
Vue.config.productionTip = false
Vue.prototype.Apis = new Apis(Vue)
import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard;


const QRCode = require('qrcodejs2');
Vue.prototype.QRCode = QRCode ;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
