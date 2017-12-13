# 样式

## 推荐 CSS 框架 Bulma

页面开发中有大部分的时间会花在样式优化上，高效地的方式是使用 CSS 框架。Bulma 是一个轻量化、易用和现在的 CSS 框架，我们直接在 T-Design 中引入了 Bulma 作为基础样式库。

> Bulma is a free and open source CSS framework based on Flexbox.

关于 Bulma 的使用方法，请参考 Bulma 的官方文档 [https://bulma.io](https://bulma.io).

## CSS Modules

在样式开发过程中，有两个问题比较突出：

* 全局污染 —— CSS 文件中的选择器是全局生效的，不同文件中的同名选择器，根据 build 后生成文件中的先后顺序，后面的样式会将前面的覆盖；
* 选择器复杂 —— 为了避免上面的问题，我们在编写样式的时候不得不小心翼翼，类名里会带上限制范围的标识，变得越来越长，多人开发时还很容易导致命名风格混乱，一个元素上使用的选择器个数也可能越来越多。

好在 vue 为我们提供了 scoped 可以很方便的解决上述问题。

```
<template>
  <div class="table-view"></div>
</template>
<style scoped>
	.table-view {}
</style>
```
只要为 style 标记添加 scoped 属性，css 就只会作用在当前组件内了。
