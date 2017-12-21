<style lang="scss">
@import "./layout.scss";
</style>
<template>
  <div>
    <div class="item">
      <ve-container>
        <ve-header>Vue</ve-header>
        <ve-container>
          <ve-aside>menu</ve-aside>
          <ve-container>
            <ve-main>cnontent</ve-main>
            <ve-footer>footer</ve-footer>
          </ve-container>
        </ve-container>
      </ve-container>
    </div>

    <div class="item">
      <ve-container>
        <ve-header>Vue</ve-header>
        <ve-main>cnontent</ve-main>
        <ve-footer>footer</ve-footer>
      </ve-container>
    </div>
    <div class="item">
      <ve-container>
        <ve-header >Vue</ve-header>
        <ve-container>
          <ve-aside>menu</ve-aside>
          <ve-main>cnontent</ve-main>
        </ve-container>
        <ve-footer>footer</ve-footer>
      </ve-container>
    </div>
    <div class="item">
      <ve-container>
        <ve-header>Vue</ve-header>
        <ve-container>
          <ve-main>cnontent</ve-main>
          <ve-aside>menu</ve-aside>
        </ve-container>
        <ve-footer>footer</ve-footer>
      </ve-container>
    </div>
  </div>
</template>

<script>
import { container, header, aside, main, footer } from '../../components';

export default {
  name: 'Layout',
  components: {
    've-container': container,
    've-main': main,
    've-header': header,
    've-aside': aside,
    've-footer': footer,
  },
};
</script>
