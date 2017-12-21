# 规范化

规范化是保证工程长期可维护的基础，引入规范化工具，除了能统一代码风格，还能尽早避免低级的错误。
在 T Design 中，我们用 eslint 工具在三个阶段规范化代码，编辑器配置 eslint 插件、代码编译过程和代码提交阶段。
Airbnb 的 [javascript规范](http://airbnb.io/javascript/)

## 编辑阶段尽早处理规范问题
编辑器插件
1. eslint 插件 `linter-eslint`
2. stylelint插件 `linter-stylelint`

## webpack “编译”阶段
1. 配置了 webpack 加载器 `eslint-loader`
2. 配置 webpack 插件 `stylelint-webpack-plugin`

## 代码提交前校验代码
```javascript
{
  // ...
  "devDependencies": {
    // ...
    "pre-commit": "^1.2.2"
  },
  "scripts": {
    // ...
    "css-lint": "./node_modules/.bin/stylelint --config .stylelintrc --syntax scss \"src/**/*.scss\"",
    "es-lint": "eslint --ext .js,.vue src test/unit/specs test/e2e/specs",
    "lint": "npm run es-lint && npm run css-lint"
  },
  "pre-commit": {
    "run": [
      "lint"
    ],
    "silent": false
  }
}
```

## 组件命名规范
T Design 建议，组件名称无论用在单文件组件、dom模块，命名上都使用 kebab-case 风格，以 `ve-` 为前缀，表明这是 vue element.

```html
<ve-row class="item-row" :gutter="24">
  <ve-col span="6" class="pr-8">
    <ve-contaier-card
      title="日均下单量"
      content="32,625"
      subContent="-12.15%"
      status="error"
      border
      type="normal"
    >
    </ve-contaier-card>
  </ve-col>
  <ve-col span="6" class="pr-8">
    <ve-contaier-card
      title="日均下单量"
      content="32,625"
      subContent="-12.15%"
      status="error"
      :help="false"
      border
      type="normal"
    >
    </ve-contaier-card>
  </ve-col>
</ve-row>
```
