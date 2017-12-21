
<template>
  <div class="editor-code">
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script>
import CodeMirror from 'codemirror';
import 'codemirror/mode/python/python';
import 'codemirror/mode/javascript/javascript';

export default {
  name: 'VeEditorCode',
  data() {
    return {
      jsonEditor: false,
    };
  },
  props: {
    code: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'python',
    },
  },
  watch: {
    value(value) {
      const editorValue = this.Editor.getValue();
      if (value !== editorValue) {
        this.Editor.setValue(this.value);
      }
    },
  },
  mounted() {
    const mode = {
      name: this.mode,
      version: 3,
      singleLineStringErrors: false,
      theme: 'material',
    };
    this.Editor = CodeMirror.fromTextArea(this.$refs.textarea, {
      mode,
      lineNumbers: true,
      indentUnit: 2,
      matchBrackets: true,
    });

    this.Editor.setValue(this.code);
    this.Editor.on('change', (cm) => {
      this.$emit('changed', cm.getValue());
      this.$emit('input', cm.getValue());
    });
  },
  methods: {
    getValue() {
      return this.Editor.getValue();
    },
  },
};
</script>

<style lang="scss">
@import "index.scss";
</style>
