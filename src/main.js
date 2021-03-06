import Vue from 'vue'



// First Part
// import App from './First/App.vue'
// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

// Second Part
// import App from './Second/App.vue'
// import store from './Second/store'
// import filters from '@/Second/filters'
// Vue.config.productionTip = false
// Vue.filter('currency', filters.currency)

// new Vue({
//   store,
//   render: h => h(App)
// }).$mount('#app')

// Third Part
import App from './Third/App.vue'
import router from './Third/router'
import store from './Third/store'
import i18n from './Third/i18n'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
