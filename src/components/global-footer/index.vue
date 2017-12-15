<template>
  <footer class="t-design-g-footer">
    Copyright &copy; {{ $t('global-footer.hello') }}
  </footer>
</template>
<script>
import core from '../../mixins/core';
import locale from './locale';

export default {
  name: 'GlobalFooter',
  mixins: [core],
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  created() {
    this.$bus.$emit('testEvent', {
      test: 1,
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
