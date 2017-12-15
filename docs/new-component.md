# 新增业务组件

## 目录结构
```
src/components/global-footer
├── index.js                 # 入口
├── index.scss
├── index.test.js            # 单元测试
├── index.vue
└── locale.js                # 多语言定义
```
## 单元测试

```javascript
import { shallow } from 'vue-test-utils';
import HelloWorld from './index.vue';

describe('GlobalHeader test', () => {
  let cmp = null;

  beforeEach(() => {
    cmp = shallow(HelloWorld, {
      // Beaware that props is overriden using `propsData`
      propsData: {
        msg: 'haha',
      },
    });
  });

  it('should render correct contents', () => {
    // cmp.setData({ title: 'TD' })
    expect(cmp.vm.$el.textContent.trim()).toEqual('Copyright © TalkingData');
  });
});

```
如何写组件单元测试，详见文档：[UI Test](/t-design/#ui-test ":ignore")


## 多语言
定义语言文件
```javascript
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
```html
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
