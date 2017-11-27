<template>
  <footer class="t-design-footer">
    Copyright{{title}}{{msg}}
  </footer>
</template>
<script>
export default {
  name: 'GlobalFooter',
  props: {
    msg: String,
  },
  data() {
    return {
      title: 'test',
    };
  },
};
</script>
<style lang="scss">
@import 'index.scss';
</style>
