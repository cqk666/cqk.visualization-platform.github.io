import Vue from 'vue'
import './assets/base.css'
import './assets/reset.css'
//引入resource
//import VueResource from 'vue-resource'
//引入elememtui
import ElementUI/* , { Message } */ from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入store
import store from './store/index'
//引入echarts
import * as echarts from 'echarts'
//引入路由
import VueRouter from 'vue-router'
//引入路由器
import router from './router'
//引入axios
/* import axios from 'axios' */
import App from './App.vue'
Vue.config.productionTip = false
//应用路由
Vue.use(VueRouter)
//Vue.use(VueResource)
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
/* axios.defaults.baseURL = 'http://localhost:8080/'
Vue.prototype.$http = axios
Vue.prototype.$message = Message */

new Vue({
  render: h => h(App),
  router,
  store, 
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
