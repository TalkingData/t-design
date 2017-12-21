<style lang="scss">
@import "index.scss";
</style>
<template>
  <footer class="t-design-footer" :style="{ height }">
    <slot></slot>
  </footer>

</template>
<script>
  export default {
    name: 'VeFooter',
    props: {
      height: {
        type: String,
        default: '60px',
      },
    },
  };
</script>
