import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "expose-loader?exposes[]=$&exposes[]=jQuery!jquery";
import "@/assets/css/main.css" 
import "@/assets/css/table.css"
import "@/assets/css/g_PK10.css"
import "@/assets/css/notice_popup.css?v=1221" 
import "@/assets/css/loading.css" 
import "@/assets/css/sweetalert.css"
import store from "./store";
import 'moment/locale/fr'
// import moment from 'moment';
// moment.locale('fr');
import i18n from './i18n'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import sweetAlert from 'vue-sweetalert2'
import iview from 'iview'

Vue.use(ViewUI);
Vue.use(sweetAlert);
Vue.use(iview)

Vue.config.productionTip = false
new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
