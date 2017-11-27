<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <tfooter></tfooter> -->
  </div>
</template>

<script>
import tfooter from '../components/global-footer';

export default {
  name: 'HelloWorld',
  components: {
    tfooter,
  },
  data() {
    return {
      msg: 't-design',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "./hello-world.scss";
</style>
