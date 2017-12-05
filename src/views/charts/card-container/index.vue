<style lang="scss">
@import "./index.scss";
</style>
<template>
  <section class="card-container" :class="{'border': border}">
    <div v-if="title" class="card-container-title clearfix">
      <div class="float-left">
        {{title}}
      </div>
      <div class="float-right">
        <Icon class="cursor-pointer" size="14" color="#80848F" type="ios-help-outline"></Icon>
      </div>
    </div>
    <div class="card-container-content" v-if="content || subContent">
      <div class="card-container-content-main">{{content}}</div>
      <div class="card-container-content-sub" :class="status">{{subContent}}</div>
    </div>
    <slot name="content"></slot>
  </section>
</template>
<script>
  import { Icon } from 'iview';

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
      // 内容
      content: {
        type: String,
        default: '',
      },
      subContent: {
        type: String,
        default: '',
      },
      status: {
        type: String,
        default: '',
      },
      border: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
    computed: {
    },
    methods: {},
    mounted() {
    },
  };
</script>
