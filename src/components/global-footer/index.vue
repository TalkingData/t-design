<template>
  <footer class="t-design-footer">
    Copyright{{title}}{{msg}}
  </footer>
</template>
<script>
export default {
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
