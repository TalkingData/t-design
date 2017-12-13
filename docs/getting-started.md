# 开始使用

T Design 是在 [iView](github.com/iview/iview)基础组件和 TalkingData 设计规范的基础之上，继续向上构建，提炼 Vue 技术栈下的业务组件/最佳实践/设计模式，进一步提升 Vue 在企业级中后台产品、设计和研发过程中的效率和体验。

随着三方（产品、设计和研发）设计者的不断反馈，我们将持续迭代，逐步沉淀出一个业务组件库和更多最佳实践，也十分期待你的参与和共建。

## 安装

### 直接 clone git 仓库
```
$ git clone git@github.com:TalkingData/t-design.git t-design
$ cd t-design
```

### 下载安装包

点击 [https://github.com/TalkingData/t-design/archive/master.zip](https://github.com/TalkingData/t-design/archive/master.zip) 下载到本地后解压.

### 目录结构
```
├── build                          # 构建脚本
├── config                         # 配置文件                         
├── mock                           # 本地模拟数据
├── src
│   ├── assets
│   ├── components                 # 业务通用组件
│   │   ├── aside
│   │   ├── container
│   │   ├── footer
│   │   ├── global-footer
│   │   ├── global-header
│   │   ├── global-menu
│   │   ├── header
│   │   ├── layout-basic
│   │   ├── layout-simple
│   │   └── main
│   ├── libs
│   ├── mixins
│   ├── router
│   ├── styles                      # 公共样式
│   │   ├── core
│   │   └── mixins
│   └── views                       # 页面目录
│       ├── base
│       │   ├── card-container
│       │   └── chart-container
│       ├── charts
│       ├── dashboard
│       ├── form
│       ├── list
│       └── table
├── static
└── test
```

## 本地开发

### 安装项目依赖
```
$ npm i --registry=https://registry.npm.taobao.org --chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
```

```
$ npm run dev
```

启动完成后访问 [http://localhost:8080/](http://localhost:8080/),看到下面的界面就代表成功了。
