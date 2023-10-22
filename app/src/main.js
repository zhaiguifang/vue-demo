import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './tailwind.css'
import App from './App.vue'
import router from '@/router'

 Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router//注册路由
}).$mount('#app')
