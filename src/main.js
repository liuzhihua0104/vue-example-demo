import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '../utils/rem'
import 'lib-flexible/flexible'


Vue.config.productionTip = false
// import draggable from 'vuedraggable'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
