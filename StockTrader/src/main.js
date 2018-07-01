import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResouce from 'vue-resource';
import App from './App.vue'

import { routes } from './routes.js';
import store from './store/store.js'

Vue.use(VueRouter);
Vue.use(VueResouce);

Vue.http.options.root = 'https://vuestocks-ed52d.firebaseio.com/';

Vue.filter('currency', (value) => {
  return value.toLocaleString() + ' PLN';
})

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
