<template>
  <header class="t-design-g-header">
    Header {{title}}
  </header>
</template>
<script>
import core from '../../mixins/core';
import locale from './locale';

export default {
  name: 'GlobalHeader',
  mixins: [core],
  props: {
    msg: String,
  },
  data() {
    return {
      title: 'test',
    };
  },
  created() {
    this.$bus.$on('testEvent', (evt) => {
      // eslint-disable-next-line
      console.log(evt);
    });
  },
  methods: {
    getLocale() {
      return locale;
    },
  },
};
</script>
<style lang="scss">
@import './index.scss';
</style>
