import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import store from './store/store'
Vue.use(less)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
