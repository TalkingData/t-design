<template>
  <footer class="t-design-g-footer">
    Copyright {{title}} {{ $t('global-footer.hello') }}
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
    return {
      title: 'test',
    };
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
