# 新增业务组件

## 多语言
定义语言文件
```
// locale.js
export default {
  'en-US': {
    'message': {
      hello: 'Tendcloud',
    },
  },
  'zh-CN': {
    'message': {
      hello: '腾云天下',
    },
  },
};
```

单文件组件
```
<template>
  <div>... {{ $t(message.hello) }}</div>
</template>
<script>
import core from '../../mixins/core';
import locale from './locale';

export default {
  mixins: [core],
  methods: {
    getLocale() {
      return locale;
    },
  },
  // ...
};
</script>
```
