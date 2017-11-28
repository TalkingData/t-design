import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/main';

Vue.use(Router);

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    // },
    {
      path: '/',
      icon: 'earth',
      redirect: '/layout',
      name: 'layout',
      title: '页面布局',
      component: Main,
      children: [{
        path: 'index',
        title: 'helloworld',
        name: 'HelloWorld',
        // eslint-disable-next-line
        component: (resolve) => require(['../views/layout.vue'], resolve),
      }],
    }, {
      path: '/chart',
      icon: 'stats-bars',
      name: 'chart',
      title: '图表容器',
      component: Main,
      children: [{
        path: 'chart1',
        title: '图表1',
        name: 'chart1',
        // eslint-disable-next-line
        component: (resolve) => require(['../views/charts/chart1.vue'], resolve),
      }, {
        path: 'chart2',
        title: '图表2',
        name: 'chart2',
        // eslint-disable-next-line
        component: (resolve) => require(['../views/charts/chart2.vue'], resolve),
      }],
    }, {
      path: '/table',
      icon: 'ios-grid-view',
      name: 'table',
      title: '表格容器',
      component: Main,
      children: [{
        path: 'table1',
        title: '表格1',
        name: 'table1',
        // eslint-disable-next-line
        component: (resolve) => require(['../views/table/table1.vue'], resolve),
      }],
    },
  ],
});
