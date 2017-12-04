import Vue from 'vue';
import Router from 'vue-router';
import Main from './main';
import { menu } from './config';

menu.forEach((m) => {
  // eslint-disable-next-line
  m.component = Main;
});

Vue.use(Router);

export default new Router({
  routes: menu,
});
