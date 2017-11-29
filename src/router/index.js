import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/views/main';

Vue.use(Router);

export default new Router({
  routes: [
    // { path: '/', redirect: { name: 'layout' } },
    // {
    //   path: '/',
    //   icon: 'earth',
    //   redirect: '/base/layout',
    //   // name: 'layout',
    //   title: '页面布局',
    //   component: Main,
    //   children: [
    //     {
    //       path: 'index',
    //       title: 'layout',
    //       name: 'layout',
    //       // eslint-disable-next-line
    //       component: (resolve) => require(['../views/base/layout.vue'], resolve),
    //     },
    //   ],
    // },
    {
      path: '/',
      redirect: '/base/layout',
      icon: 'stats-bars',
      name: 'base',
      title: '基础组件',
      component: Main,
      children: [
        {
          path: 'base/layout',
          title: '布局',
          name: 'layout',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/base/layout.vue'], resolve),
        },
        {
          path: 'base/container',
          title: '容器',
          name: 'container',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/base/container.vue'], resolve),
        },
        {
          path: 'base/chart',
          title: '图表',
          name: 'chart',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/base/chart.vue'], resolve),
        },
      ],
    },
    {
      path: '/dashboard',
      icon: 'stats-bars',
      name: 'dashboard',
      title: 'DashBoard',
      component: Main,
      children: [
        {
          path: 'analysis',
          title: '分析页',
          name: 'analysis',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/dashboard/analysis.vue'], resolve),
        },
        {
          path: 'monitor',
          title: '监控页',
          name: 'monitor',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/dashboard/monitor.vue'], resolve),
        },
      ],
    },
    {
      path: '/list',
      icon: 'stats-bars',
      name: 'list',
      title: '列表页',
      component: Main,
      children: [
        {
          path: 'basic-list',
          title: '标准列表',
          name: 'basic-list',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/list/basic-list.vue'], resolve),
        },
        {
          path: 'filter-list',
          title: '筛选列表',
          name: 'filter-list',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/list/filter-list.vue'], resolve),
        },
      ],
    },
    {
      path: '/form',
      icon: 'stats-bars',
      name: 'form',
      title: '表单页',
      component: Main,
      children: [
        {
          path: 'basic-form',
          title: '基础表单',
          name: 'basic-form',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/form/basic-form.vue'], resolve),
        },
        {
          path: 'advanced-form',
          title: '高级表单',
          name: 'advanced-form',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/form/advanced-form.vue'], resolve),
        },
      ],
    },
    {
      path: '/charts',
      icon: 'stats-bars',
      name: 'charts',
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
    },
    {
      path: '/table',
      icon: 'ios-grid-view',
      name: 'table',
      title: '表格容器',
      component: Main,
      children: [
        {
          path: 'table1',
          title: '表格1',
          name: 'table1',
          // eslint-disable-next-line
          component: (resolve) => require(['../views/table/table1.vue'], resolve),
        },
      ],
    },
  ],
});
