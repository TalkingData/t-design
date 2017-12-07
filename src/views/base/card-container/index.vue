<style lang="scss">
@import "./index.scss";
</style>
<template>
  <section :class="[classes, { 'border': border }, {'shadow': shadow}]">
    <div v-if="showHead" class="card-container-title clearfix" :class="{'mb-16': showContent}">
      <slot name="header">
        <div class="float-left">
          {{title}}
        </div>
        <div class="float-right" v-if="help">
          <Icon class="cursor-pointer" size="14" color="#80848F" type="ios-help-outline"></Icon>
        </div>
      </slot>
    </div>
    <div class="card-container-content" v-if="showContent">
      <slot name="content">
        <div class="card-container-content-main" 
        :class="{'content-main-mb-16': showContentSub}" 
        v-if="content"
        :style="stylesContent">{{content}}</div>
      </slot>
      <slot name="subContent">
        <div class="card-container-content-sub" v-if="subContent">
          <span :class="status" :style="stylesSubContent">{{subContent}}</span>
        </div>
      </slot>
    </div>
    <slot></slot>
  </section>
</template>
<script>
  import { Icon } from 'iview';

  const prefixCls = 'card-container';

  export default {
    name: 'CardContainer',
    components: {
      Icon,
    },
    props: {
      // 标题
      title: {
        type: String,
        default: '',
      },
      // 是否显示帮助按钮
      help: {
        type: Boolean,
        default: true,
      },
      // 内容
      content: {
        type: String,
        default: '',
      },
      // 主要内容字号
      size: [Number, String],
      // 次级内容
      subContent: {
        type: String,
        default: '',
      },
      // 次级内容,字体颜色
      color: String,
      // 次级文字,状态：error,success,info
      status: {
        type: String,
        default: '',
      },
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
      // 类型:normal,center,right
      type: {
        type: String,
        default: 'normal',
      },
    },
    data() {
      return {
        showHead: true,
        showContent: true,
        showContentMain: true,
        showContentSub: true,
      };
    },
    computed: {
      // 类型
      classes() {
        return `${prefixCls} ${this.type}`;
      },
      // content字号
      stylesContent() {
        const style = {};
        if (this.size) {
          style['font-size'] = `${this.size}px`;
        }
        return style;
      },
      // subcontent字体颜色
      stylesSubContent() {
        const style = {};
        if (this.color) {
          style.color = this.color;
        }
        return style;
      },
    },
    methods: {},
    mounted() {
      // 头部展示
      let showHead = true;
      if (this.$slots.header === undefined && !this.title) {
        showHead = false;
      }
      this.showHead = showHead;
      // 文字内容展示
      let showContent = true;
      if (this.$slots.content === undefined && !this.content &&
       this.$slots.subContent === undefined && !this.subContent) {
        showContent = false;
      }
      this.showContent = showContent;
      // 文字内容展示主内容
      let showContentMain = true;
      if (this.$slots.content === undefined && !this.content) {
        showContentMain = false;
      }
      this.showContentMain = showContentMain;
      // 文字内容次级
      let showContentSub = true;
      if (this.$slots.subContent === undefined && !this.subContent) {
        showContentSub = false;
      }
      this.showContentSub = showContentSub;
    },
  };
</script>
