import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vue from 'vue/dist/vue.esm.js';
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import MyApp from './src/MyApp.vue';

new Vue({
  el: '#app',
  components: {
    MyApp,
  },
  template: '<my-app></my-app>',
});
