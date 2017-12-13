<style lang="scss" scoped>
@import "./index.scss";
</style>
<template>
  <div class="main-header">
    <div class="navicon-con">
      <i-button :style="{transform: 'rotateZ(' + (shrink ? '-90' : '0') + 'deg)'}" type="text" @click="toggleClick">
        <Icon type="navicon" size="32"></Icon>
      </i-button>
    </div>
    <div class="header-avator-con">
      <div class="message-con">
        <Badge :count="notice" @click.native="showNotice">
          <Icon type="ios-bell-outline" size="26"></Icon>
        </Badge>
      </div>
      <div class="change-language">
        <Row type="flex" justify="end" align="middle">
          <Dropdown transfer trigger="click" @on-click="changeLanguage">
            <i class="language-kind cursor-pointer">{{language}}</i>
            <DropdownMenu slot="list">
              <DropdownItem name="EN">EN</DropdownItem>
              <DropdownItem name="CN" divided>CN</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
      </div>
      <div class="user-dropdown-menu-con">
        <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
          <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
            <a href="javascript:void(0)">
              <span class="main-user-name">{{ userName }}</span>
              <Icon type="arrow-down-b"></Icon>
            </a>
            <Icon type="person" size="18"></Icon>
            <DropdownMenu slot="list">
              <DropdownItem name="ownSpace">个人中心</DropdownItem>
              <DropdownItem name="loginout" divided>退出登录</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
  import { Icon, Button, Badge, Row, Dropdown, DropdownMenu, DropdownItem } from 'iview';

  export default {
    name: 'tHeader',
    components: {
      Icon,
      iButton: Button,
      Badge,
      Row,
      Dropdown,
      DropdownMenu,
      DropdownItem,
    },
    props: {
      icon: {
        type: String,
        default: 'ios-download',
      },
      // 缩进
      shrink: {
        type: Boolean,
        default: false,
      },
      // language
      language: {
        type: String,
        default: 'EN',
      },
      // 通知
      notice: [Number, String],
    },
    data() {
      return {
        tabValue: 'chart',
        userName: 'ceshi',
      };
    },
    methods: {
      // 切换缩进
      toggleClick() {
        const shrink = !this.shrink;
        this.$emit('on-toggle', shrink);
      },
      // 查看用户信息
      handleClickUserDropdown() {},
      // 修改语言
      changeLanguage(name) {
        this.$emit('on-change-language', name);
      },
      // 查看消息
      showNotice() {
        this.$emit('on-show-notice', this.notice);
      },
    },
    computed: {
    },
    watch: {
    },
  };
</script>
