import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Home,
  },
  {
    path: '/notaria-express',
    name: 'notaria-express',
    component: Home,
  },
  {
    path: '/sobre-nosotros',
    name: 'sobre-nosotros',
    component: About,
  },
  {
    path: '/testimonios',
    name: 'testimonios',
    component: Home,
  },
  {
    path: '/contactenos',
    name: 'contactenos',
    component: Home,
  },
  {
    path: '*',
    name: 'error',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
