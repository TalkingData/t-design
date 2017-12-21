<template>
  <div class="hello">
    <ve-editor-code :code="value" mode="python"></ve-editor-code>
  </div>
</template>

<script>
import editorCode from '../../components/editor-code';

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
