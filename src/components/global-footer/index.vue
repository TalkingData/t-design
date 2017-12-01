<template>
  <footer class="t-design-g-footer">
    Copyright {{title}} {{ $t('message.hello') }}
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
