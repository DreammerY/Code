import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.prototype.myenv = "win"  //  '/'
// Vue.prototype.myenv = "linux"
Vue.use(VueAxios,axios)
import { devServer } from '../vue.config'
// console.log(devServer.proxy['/test'].target);
Vue.prototype.myip = devServer.proxy['/test'].target;

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
