// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import 'iview/dist/styles/iview.css';
import App from './app';
import router from './router';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'zh-CN',
  messages: {
    'en-US': {
      message: {
        hello: 'hello world',
      },
    },
    'zh-CN': {
      message: {
        hello: 'hello world',
      },
    },
  },
});

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App },
});
