import Vue from 'vue';
import VAnimateCss from 'v-animate-css';
import App from './App.vue';
import router from './router';

Vue.use(VAnimateCss);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
