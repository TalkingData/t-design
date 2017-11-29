<style lang="scss">
@import "./layout.scss";
</style>
<template>
  <div>
    <div class="item">
      <icontainer>
        <iheader>Vue</iheader>
        <icontainer>
          <iaside>menu</iaside>
          <icontainer>
            <imain>cnontent</imain>
            <ifooter>footer</ifooter>
          </icontainer>
        </icontainer>
      </icontainer>
    </div>

    <div class="item">
      <icontainer>
        <iheader >Vue</iheader>
        <imain>cnontent</imain>
        <ifooter>footer</ifooter>
      </icontainer>
    </div>
    <div class="item">
      <icontainer>
        <iheader >Vue</iheader>
        <icontainer>
          <iaside>menu</iaside>
          <imain>cnontent</imain>
        </icontainer>
        <ifooter>footer</ifooter>
      </icontainer>
    </div>
    <div class="item">
      <icontainer>
        <iheader >Vue</iheader>
        <icontainer>
          <imain>cnontent</imain>
          <iaside>menu</iaside>
        </icontainer>
        <ifooter>footer</ifooter>
      </icontainer>
    </div>
  </div>
</template>

<script>
import { container, header, aside, main, footer } from '../../components';

export default {
  name: 'Layout',
  components: {
    icontainer: container,
    imain: main,
    iheader: header,
    iaside: aside,
    ifooter: footer,
  },
};
</script>
