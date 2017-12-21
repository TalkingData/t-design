# 独立使用 T-Design 组件

## 组件类别

T Design 之中内置了三类组件：
1. iView 组件，关于 iView 组件的用法可以查看官方文档. [https://www.iviewui.com](https://www.iviewui.com)
2. t-charts 图表组件. [https://talkingdata.github.io/t-charts/](https://talkingdata.github.io/t-charts/#/)
3. 抽象的业务组件.

## 按需加载
直接引用组件
```javascript
import layoutBasic from 't-design/components/layout-basic';
import 't-design/components/layout-basic/style';
```

如果你使用了 babel，那么可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，加入这个插件后。你可以仍然这么写：
```javascript
import { layoutBasic } from 't-design';
```

## 组件列表
```javascript
module.exports = {
  header: { src: 'src/components/header/index.js', dist: 'components/header/index' },
  aside: { src: 'src/components/aside/index.js', dist: 'components/aside/index' },
  container: { src: 'src/components/container/index.js', dist: 'components/container/index' },
  main: { src: 'src/components/main/index.js', dist: 'components/main/index' },
  footer: { src: 'src/components/footer/index.js', dist: 'components/footer/index' },
  'global-footer': { src: 'src/components/global-footer/index.js', dist: 'components/global-footer/index' },
  'layout-basic': { src: 'src/components/layout-basic/index.js', dist: 'components/layout-basic/index' },
  'layout-simple': { src: 'src/components/layout-simple/index.js', dist: 'components/layout-simple/index' },
};

```
