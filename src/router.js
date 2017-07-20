import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import C1 from '@/components/c1'
// import C2 from '@/components/c2'
import Home from '@/views/home'

// const Home = r => require.ensure([], () => r(require('@/views/home')), 'home');
const C1 = r => require.ensure([], () => r(require('@/components/c1')), 'c1');
// const C2 = resolve => require(['@/components/c2'], resolve);
const C2 = r => require.ensure([], () => r(require('@/components/c2')), 'c2');
const C3 = r => require.ensure([], () => r(require('@/components/c3')), 'c3');


Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/c1', component: C1 },
    { path: '/c2', component: C2 },
    { path: '/c3', component: C3 },
  ]
});