# mock数据

使用 json-server 配合 mockjs，实现应用的数据模拟方案。

## 启动
```
$ npm run mock
```

## 新增接口

mock/list.js

```
const Mock = require('mockjs');

module.exports = Mock.mock({
  'list|15': [{
    'id|+1': 1,
    data: {},
  }],
});
```

详细内容请移步: [http://mockjs.com/](http://mockjs.com/)

在 mock/index.js 中注册新接口。

```
const list = require('./list.js').list;

module.exports = () => ({
  list,
  user: { name: 'wxnet' },
});

```

## 访问接口

http://localhost:8080/api/list

本质上访问的接口是通过 webpack 中 devServer 的 proxy功能实现的，可以直接访问 json-server 中的服务地址：http://localhost:3000/list

```
proxyTable: {
  '/api': {
    target: "http://localhost:3000",
    pathRewrite: {"^/api" : ""}
  }
},
```

## 接口文档

理想状况下，希望直接从 Mock 约定的配置生成前后端依赖的接口文档，修改 Mock 配置即可更新文档。Ant Design Pro 提供了很好的[解决方案](https://pro.ant.design/docs/theme-cn#生成-API-文档)，未来希望能移植到 Vue 技术栈，欢迎各位贡献实现代码。
