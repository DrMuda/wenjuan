import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import store from './store/store'
import VConsole from 'vconsole';
Vue.use(less)
Vue.config.productionTip = false

// 本地开发调试注入vConsole
if (process.env.VUE_APP_IS_DEV === "true") {
  new VConsole();
}

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
