import layout from '@/components/layout-basic';
import logo from '../assets/logo.jpg';
import logoMini from '../assets/logo-min.jpg';

const menu = [
  {
    path: '/',
    redirect: '/base/chart',
    icon: 'stats-bars',
    name: 'base',
    title: '基础组件',
    // component: Layout,
    children: [
      {
        path: 'base/chart',
        title: '图表',
        name: 'chart',
        // eslint-disable-next-line
        component: (resolve) => require(['../views/base/chart.vue'], resolve),
      },
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
    ],
  },
  {
    path: '/dashboard',
    icon: 'stats-bars',
    name: 'dashboard',
    title: 'DashBoard',
    // component: Layout,
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
    // component: Layout,
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
    // component: Layout,
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
];

export { layout, menu, logo, logoMini };
