<style lang="scss" scoped>
@import "./index.scss";
</style>
<template>
  <section class="chart-container">
    <div v-if="title" class="chart-container-title clearfix">
      <div class="float-left">
        {{title}}
      </div>
      <div class="float-right">
        <Icon class="cursor-pointer" size="16" color="#80848F" type="ios-download"></Icon>
      </div>
    </div>
    <div class="chart-container-content">
      <div class="chart-or-table">
        <i-button @click="showChart('chart')" type="text" icon="ios-pulse"></i-button>
        <i-button @click="showChart('table')" type="text" icon="ios-grid-view"></i-button>
      </div>
      <slot name="chart" v-if="tabValue === 'chart'"></slot>
      <div class="table-show-area" v-if="tabValue === 'table'">
        <slot name="table"></slot>
      </div>
    </div>
  </section>
</template>
<script>
  import { Icon, Button } from 'iview';

  export default {
    name: 'ChartContainer',
    components: {
      Icon,
      iButton: Button,
    },
    props: {
      type: {
        type: String,
        default: '',
      },
      // 名称
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
    },
    data() {
      return {
        tabValue: 'chart',
      };
    },
    methods: {
      showChart(value) {
        this.tabValue = value;
      },
    },
    computed: {
    },
  };
</script>
