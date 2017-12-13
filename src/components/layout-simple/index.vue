<style lang="scss">
@import "./index.scss";
</style>
<template>
    <div class="layout">
        <el-menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo"></div>
            <div class="layout-nav">
                <el-menu-item name="1">
                    <Icon type="ios-navigate"></Icon>
                    Item 1
                </el-menu-item>
                <el-menu-item name="2">
                    <Icon type="ios-keypad"></Icon>
                    Item 2
                </el-menu-item>
                <el-menu-item name="3">
                    <Icon type="ios-analytics"></Icon>
                    Item 3
                </el-menu-item>
                <el-menu-item name="4">
                    <Icon type="ios-paper"></Icon>
                    Item 4
                </el-menu-item>
            </div>
        </el-menu>
        <el-menu mode="horizontal" active-name="1">
            <div class="layout-assistant">
                <el-menu-item name="1">Option 1</el-menu-item>
                <el-menu-item name="2">Option 2</el-menu-item>
                <el-menu-item name="3">Option 3</el-menu-item>
            </div>
        </el-menu>
        <div class="layout-breadcrumb">
            <Breadcrumb>
                <BreadcrumbItem href="#">Home</BreadcrumbItem>
                <BreadcrumbItem href="#">Projects</BreadcrumbItem>
                <BreadcrumbItem>iView</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div class="layout-content">
            <div class="layout-content-main">
              <slot name="view"></slot>
            </div>
        </div>
        <div class="layout-copy">
            2011-2016 &copy; TalkingData
        </div>
    </div>
</template>
<script>
import { Menu, MenuItem, Icon, Breadcrumb, BreadcrumbItem } from 'iview';
import core from '../../mixins/core';

export default {
  mixins: [core],
  props: {
    menus: {
      type: Array,
      required: true,
    },
  },
  components: {
    'el-menu': Menu,
    'el-menu-item': MenuItem,
    Icon,
    Breadcrumb,
    BreadcrumbItem,
  },
};
</script>
