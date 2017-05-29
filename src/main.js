import Vue from 'vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'
import { routes } from './router';
import store from './store/store';

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-3a7c0.firebaseio.com/';

Vue.filter('currency', (input) => {
  return `$ ${input.toLocaleString()}`;
});

const router = new VueRouter({
  mode: 'hash',
  routes,
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
