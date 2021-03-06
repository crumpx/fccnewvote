// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css/normalize.css'
import vueResource from 'vue-resource'
import VueCookie from 'vue-cookie'
import BootstrapVue from 'bootstrap-vue'

Vue.use(vueResource)
Vue.use(VueCookie)
Vue.use(BootstrapVue)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
