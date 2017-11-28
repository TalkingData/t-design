<style lang="scss">
@import "index.scss";
</style>
<template>
  <aside class="t-design-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script>
  export default {
    name: 'Iaside',
    componentName: 'Iaside',
    props: {
      width: {
        type: String,
        default: '200px',
      },
    },
  };
</script>
