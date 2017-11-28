<style lang="scss">
@import "index.scss";
</style>
<template>
  <header class="t-design-header" :style="{ height }">
    <slot></slot>
  </header>
</template>
<script>
  export default {
    name: 'Iheader',
    props: {
      height: {
        type: String,
        default: '60px',
      },
    },
  };
</script>
