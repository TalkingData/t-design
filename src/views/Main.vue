<style lang="scss">
@import "./main.scss";

</style>
<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <div class="sidebar-menu-con" :style="{width: shrink?'60px':'200px', overflow: shrink ? 'visible' : 'auto'}">
      <global-menu 
        :shrink="shrink" 
        @on-change="handleSubmenuChange" 
        :theme="menuTheme" 
        :before-push="beforePush" 
        :open-names="openedSubmenuArr" 
        :menu-list="menuList">
        <div slot="top" class="logo-con">
          <img v-show="!shrink" src="../assets/logo.jpg" key="max-logo" />
          <img v-show="shrink" src="../assets/logo-min.jpg" key="min-logo" />
        </div>
      </global-menu>
    </div>
    <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
      <div class="main-header">
        <div class="navicon-con">
          <i-button :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
        </div>
        <div class="header-avator-con">
        </div>
      </div>
    </div>
    <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
      <div class="single-page">
        <router-view></router-view>
      </div>
    </div>
    <tfooter></tfooter>
  </div>
</template>
<script>
import { Button, Icon } from 'iview';
import globalMenu from '../components/global-menu/global-menu';
import tfooter from '../components/global-footer';
import Router from '../router';

export default {
  components: {
    iButton: Button,
    Icon,
    globalMenu,
    tfooter,
  },
  data() {
    return {
      shrink: false, // 左侧栏宽窄控制
      userName: '',
      isFullScreen: false,
      // openedSubmenuArr: [], // 要展开的菜单数组
      menuTheme: 'dark',
      menuList: [],
    };
  },
  computed: {
    // 要展开的菜单数组
    openedSubmenuArr: {
      get() {
        const pathArr = this.$route.path.split('/');
        if (pathArr.length >= 2) {
          return [pathArr[1]];
        }
        return [];
      },
      set(newValue) {
        this.openedSubmenuArr = newValue;
      },
    }, // 要展开的菜单数组
  },
  methods: {
    // 展开与关闭左侧栏
    toggleClick() {
      this.shrink = !this.shrink;
    },
    // 路由切换
    handleSubmenuChange() {
      // console.log(val);
    },
    // eslint-disable-next-line
    beforePush(name) { // 权限校验
      // if (name === 'accesstest_index') {
      //     return false;
      // } else {
      //     return true;
      // }
      return true;
    },
  },
  watch: {
  },
  mounted() {
    // 从router中取出路径
    this.menuList = Router.options.routes;
  },
  created() {
  },
};

</script>
