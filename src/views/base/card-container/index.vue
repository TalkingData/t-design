<style lang="scss" scoped>
@import "./index.scss";
</style>
<template>
  <section :class="[classes, { 'border': border }, {'shadow': shadow}]">
    <div v-if="type === 'normal' || type === 'left'">
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
    </div>
    <div v-if="type === 'center'">
      <div class="card-container-content" v-if="showContent">
        <slot name="content">
          <div class="card-container-content-main" 
          :class="{'content-main-mb-16': showContentSub}" 
          v-if="content"
          :style="stylesContent">{{content}}</div>
        </slot>
        <slot name="subContent">
          <div class="card-container-content-sub" v-if="subContent">
            <slot name="header">
              <span class="card-container-title card-container-title-center" :class="{'mb-16': showContent}" v-if="showHead">
                {{title}}
              </span>
            </slot>
            <span :class="status" :style="stylesSubContent">{{subContent}}</span>
          </div>
        </slot>
      </div>
    </div>
    <div class="card-loading" v-if="loading">
      <p class="card-loading-block" style="width: 94%;"></p>
      <p>
        <span class="card-loading-block" style="width: 28%;"></span>
        <span class="card-loading-block" style="width: 62%;"></span>
      </p>
      <p>
        <span class="card-loading-block" style="width: 22%;"></span>
        <span class="card-loading-block" style="width: 66%;"></span>
      </p>
      <p>
        <span class="card-loading-block" style="width: 56%;"></span>
        <span class="card-loading-block" style="width: 29%;"></span>
      </p>
      <p>
        <span class="card-loading-block" style="width: 21%;"></span>
        <span class="card-loading-block" style="width: 15%;"></span>
        <span class="card-loading-block" style="width: 40%;"></span>
      </p>
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
      size: {
        type: [Number, String],
        default: 30,
      },
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
      loading: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        showHead: true, // 是否显示头部
        showContent: true, // 是否显示主体部分
        showContentMain: true, // 是否显示一级主体部分
        showContentSub: true, // 是否显示次级主体部分
      };
    },
    computed: {
      // 类型
      classes() {
        return `${prefixCls} ${prefixCls}-${this.type}`;
      },
      // content字号
      stylesContent() {
        const style = {};
        if (this.size) {
          style['font-size'] = `${this.size}px`;
          style['line-height'] = `${this.size}px`;
        }
        return style;
      },
      // subcontent字体颜色
      stylesSubContent() {
        const style = {};
        if (this.color) {
          style.color = this.color;
        }
        if (this.type === 'left' && this.size) {
          style['line-height'] = `${this.size}px`;
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
