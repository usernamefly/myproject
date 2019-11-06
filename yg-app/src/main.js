import Vue from 'vue'
import app from './app'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from './vuex'
import store from './store'
Vue.use(VueRouter)
Vue.use(Vuex)
let bus = new Vue()

Vue.prototype.$bus = bus

new Vue({
  el: '#app',
  router,
  store,
  render (h) {
    return h(app)
  }
})
