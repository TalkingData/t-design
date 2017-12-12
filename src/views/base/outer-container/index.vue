<style lang="scss" scoped>
@import "./index.scss";
</style>
<template>
  <section class="outer-container" :class="[classes, { 'border': border }, {'shadow': shadow}]">
    <div class="outer-container-header clearfix" v-if="type === 'normal' || type === 'tab'">
      <div class="float-left outer-container-title" v-if="title && type === 'normal'">
        {{title}}
      </div>
      <div class="float-left outer-container-tab" v-if="title && type === 'tab'">
        <ul class="outer-container-tab-list clearfix">
          <li class="outer-container-tab-item" v-for="(item, index) in tabs" 
          :key="index" 
          :class="{'active' : item.name === activeKey || item === activeKey}"
          @click="tabClick(item)">
            {{item.label || item.name || item}}
          </li>
        </ul>
      </div>
      <div class="float-right outer-container-icon">
        <Icon class="cursor-pointer" size="18" color="#80848F" :type="icon" @click.native="download"></Icon>
      </div>
    </div>
    <div class="outer-container-header" v-if="type === 'mix'">
      <div class="clearfix outer-container-header-mix">
        <div class="float-left outer-container-title" v-if="title">
          {{title}}
        </div>
        <div class="float-right outer-container-icon">
          <Icon class="cursor-pointer" size="18" color="#80848F" :type="icon" @click.native="download"></Icon>
        </div>
      </div>
      <div class="outer-container-tab" v-if="type === 'mix'">
        <ul class="outer-container-tab-list clearfix">
          <li class="outer-container-tab-item" v-for="(item, index) in tabs" 
          :key="index" 
          :class="{'active' : item.name === activeKey || item === activeKey}"
          @click="tabClick(item)">
            {{item.label || item.name || item}}
          </li>
        </ul>
      </div>
    </div>
    <div class="outer-container-content">
      <slot></slot>
    </div>
  </section>
</template>
<script>
  import { Icon, Button } from 'iview';

  const prefixCls = 'outer-container';

  export default {
    name: 'OuterContainer',
    components: {
      Icon,
      iButton: Button,
    },
    props: {
      // 名称
      title: {
        type: String,
        default: '',
      },
      // 类型,分为normal,tab,mix
      type: {
        type: String,
        default: 'normal',
      },
      // 切换键
      tabs: {
        type: Array,
        default: () => [],
      },
      // 当前页
      value: [String, Number],
      // 边框
      border: {
        type: Boolean,
        default: false,
      },
      // 边框阴影
      shadow: {
        type: Boolean,
        default: false,
      },
      icon: {
        type: String,
        default: 'ios-download',
      },
    },
    data() {
      return {
        tabValue: 'chart',
        activeKey: this.value,
      };
    },
    methods: {
      showChart(value) {
        this.tabValue = value;
      },
      // 切换tab
      tabClick(tab) {
        this.activeKey = tab.name || tab;
        const name = tab.name || tab;
        this.$emit('on-click', name);
      },
      // icon触发
      download() {
        if (this.type === 'tab' || this.type === 'mix') {
          this.$emit('on-todo', this.activeKey);
        } else {
          this.$emit('on-todo');
        }
      },
    },
    computed: {
      // 类型
      classes() {
        return `${this.type}-${prefixCls} ${prefixCls}`;
      },
    },
    watch: {
      value(val) {
        this.activeKey = val;
      },
    },
  };
</script>
