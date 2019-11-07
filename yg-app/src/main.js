import Vue from 'vue'
import app from './app'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'
Vue.use(VueRouter)
Vue.use(Vuex)
let eventBus = new Vue()

Vue.prototype.$eventBus = eventBus;

new Vue({
  el: '#app',
  router,
  store,
  render (h) {
    return h(app)
  }
})
