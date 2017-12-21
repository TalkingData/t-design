# 代码编辑器

## 代码示例
```html
<template>
  <div class="hello">
    <ve-editor-code :code="value" mode="python"></ve-editor-code>
  </div>
</template>

<script>
import { editorCode } from 't-design';

export default {
  name: 'ViewCode',
  components: {
    've-editor-code': editorCode,
  },
  data() {
    return {
      value: `
def f(a, L=[]):
  L.append(a)
  return L

print f(1)
print f(2)
print f(3)
`,
    };
  },
};
</script>

```

## 配置
| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| code | 代码 | String | 初始化代码 |
| mode | 模式 | String | 可选：python、javascript |
