# mock数据
使用 json-server 配合 mockjs，实现应用的数据模拟方案。

## 启动
```
$ npm run mock
```

## 访问接口
直接访问 json-server http://localhost:3000/list

代理访问 http://localhost:8080/api/list

## 配置
json-server 的入口文件
```
const list = require('./list.js').list;

module.exports = () => ({
  list,
  user: { name: 'wxnet' },
});
```

在 list.js 中使用mockjs模拟数据
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
