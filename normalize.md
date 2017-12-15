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
