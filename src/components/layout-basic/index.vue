<style lang="scss">
@import "./index.scss";
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
          <img v-show="!shrink" :src="logo" key="max-logo" />
          <img v-show="shrink" :src="logoMini" key="min-logo" />
        </div>
      </global-menu>
    </div>
    <div class="main-header-con" :style="{paddingLeft: shrink?'60px':'200px'}">
      <theader
      :shrink="shrink"
      :notice="3"
      :language="language"
      :language-list="languageList"
      :personal-list="personalList"
      userName="td"
      @on-show-personal="showUserInfo"
      @on-toggle="toggleClick"
      @on-show-notice="showNotice"
      @on-change-language="changeLanguage"></theader>
    </div>
    <div class="single-page-con" :style="{left: shrink?'60px':'200px'}">
      <div class="single-page">
        <slot name="view"></slot>
      </div>
    </div>
    <tfooter :style="{paddingLeft: shrink?'60px':'200px'}"></tfooter>
  </div>
</template>
<script>
import { Button, Icon } from 'iview';
import globalMenu from '../global-menu/global-menu';
import tfooter from '../global-footer';
import core from '../../mixins/core';
import theader from '../global-header';

export default {
  mixins: [core],
  components: {
    iButton: Button,
    Icon,
    globalMenu,
    tfooter,
    theader,
  },
  props: {
    logo: {
      type: String,
      required: true,
    },
    logoMini: {
      type: String,
      required: true,
    },
    menus: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      shrink: false, // 左侧栏宽窄控制
      userName: '',
      isFullScreen: false,
      // openedSubmenuArr: [], // 要展开的菜单数组
      menuTheme: 'dark',
      menuList: [],
      language: 'EN',
      languageList: ['EN', 'CN'], // 语言列表
      // 个人中心
      personalList: [{
        label: '个人中心',
        name: 'ownSpace',
      }, {
        label: '退出登录',
        name: 'loginout',
      }],
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
    toggleClick(value) {
      // this.shrink = !this.shrink;
      this.shrink = value;
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
    // 查看用户信息
    showUserInfo() {},
    // 展示通知
    showNotice() {
    },
    // 修改语言
    changeLanguage(value) {
      this.language = value;
    },
  },
  watch: {
  },
  mounted() {
    this.menuList = this.menus;
  },
  created() {
    this.$bus.$on('testEvent', () => {
      // eslint-disable-next-line
      console.log('main event');
    });
  },
};
</script>
