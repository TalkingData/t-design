<template>
  <header class="ivp-nav">
    公共头{{title}}{{msg}}
  </header>
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
