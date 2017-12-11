<style lang="scss">
@import './global-menu.scss';

</style>
<template>
  <i-menu ref="sideMenu" :active-name="$route.name" :open-names="openNames" :theme="menuTheme" width="auto" @on-select="changeMenu">
    <template v-for="item in menuList">
      <i-menu-item v-if="item.children.length <= 1" :name="item.children[0].name" :key="item.path">
      <Icon :type="item.icon" :size="iconSize" :key="item.path"></Icon>
      <span class="layout-text" :key="item.path">{{ itemTitle(item) }}</span>
      </i-menu-item>
      <Submenu v-if="item.children.length > 1" :name="item.name" :key="item.path">
        <template slot="title">
          <Icon :type="item.icon" :size="iconSize"></Icon>
          <span class="layout-text">{{ itemTitle(item) }}</span>
        </template>
        <template v-for="child in item.children">
          <i-menu-item :name="child.name" :key="child.name">
          <Icon :type="child.icon" :size="iconSize" :key="child.name"></Icon>
          <span class="layout-text" :key="child.name">{{ child.title }}</span>
          </i-menu-item>
        </template>
      </Submenu>
    </template>
  </i-menu>
</template>
<script>
import { Menu, MenuItem, Submenu, Icon } from 'iview';

export default {
  name: 'sidebarMenu',
  components: {
    iMenu: Menu,
    iMenuItem: MenuItem,
    Submenu,
    Icon,
  },
  props: {
    menuList: Array,
    iconSize: Number,
    menuTheme: {
      type: String,
      default: 'dark',
    },
    openNames: {
      type: Array,
    },
  },
  methods: {
    changeMenu(active) {
      this.$emit('on-change', active);
    },
    itemTitle(item) {
      if (typeof item.title === 'object') {
        // return this.$t(item.title.i18n);
        return item.title.i18n;
      }
      return item.title;
    },
  },
  updated() {
    this.$nextTick(() => {
      if (this.$refs.sideMenu) {
        this.$refs.sideMenu.updateOpened();
        this.$refs.sideMenu.updateActiveName();
      }
    });
  },
  computed: {
    // activeName() {
    //   console.log(this.$route.name);
    //   return this.$route.name;
    // },
  },
  mounted() {
  },
};

</script>
