// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


/* router */
import router from './router.js'
router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', true);
  next();
});
router.afterEach(route => {
  // setTimeout(function() {
    store.commit('updateLoadingStatus', false);
  // }, 200);
});


/* vuex */
import store from './vuex/store';


/* use axios */
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080/';
axios.defaults.needLoading = true;
axios.interceptors.request.use(config => {
  console.log('---------- http request ----------', config.url);
  if (config.needLoading) {
    store.commit('updateLoadingStatus', true);
  }
  return config;
}, err => {
  return Promise.reject(err);
});
axios.interceptors.response.use(res => {
  console.log('---------- http request success ----------', res);
  store.commit('updateLoadingStatus', false);
  return Promise.resolve(res.data);
}, err => {
  console.log('---------- http request failed ----------', err);
  store.commit('updateLoadingStatus', false);
  return Promise.reject(err);
});
Vue.prototype.$http = axios;


/* use fastclick */
import FastClick from 'fastclick';
FastClick.attach(document.body);


/* mint-ui */
// import { Navbar, TabItem, TabContainer, TabContainerItem, Loadmore } from 'mint-ui';
// Vue.component(Navbar.name, Navbar);
// Vue.component(TabItem.name, TabItem);
// Vue.component(TabContainer.name, TabContainer);
// Vue.component(TabContainerItem.name, TabContainerItem);
// Vue.component(Loadmore.name, Loadmore);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
