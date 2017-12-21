# 路由和菜单

## 菜单和路由配置
编辑配置文件`@/src/router/config.js`，可以灵活的配置左侧菜单和路由。
```javascript
{
  path: '/',
  redirect: '/base/layout',
  icon: 'stats-bars',
  name: 'base',
  title: '基础组件',
  children: [
    {
      path: 'base/chart',
      title: '图表',
      name: 'chart',
      // eslint-disable-next-line
      component: (resolve) => require(['../views/base/chart.vue'], resolve),
    },
    // ...
  ],
},
```

## 权限管理
todo
