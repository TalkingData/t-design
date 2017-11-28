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
    name: 'Ifooter',
    props: {
      height: {
        type: String,
        default: '60px',
      },
    },
  };
</script>
