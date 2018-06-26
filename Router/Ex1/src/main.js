import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition) savedPosition;
    if(to.hash) {
      return { selector: to.hash };
    }
  }
})

router.beforeEach((to, from, next) => {
  next();
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
