<template>
  <div class="container">

    <ve-row class="chart-show-area">
      <!-- <ve-contaier-chart title="累计设备">
        <div slot="chart">
          <div class="chart-item">
            <ve-line
              :data="lineData"
              :settings="lineSetting">
            </ve-line>
          </div>
        </div>
        <div slot="table">
          <div class="chart-item">
            <i-table :data="testData" :columns="tableColumn" border></i-table>
          </div>
        </div>
      </ve-contaier-chart> -->
      <ve-contaier-outer
        title="新增设备"
        border
        type="tab"
        :tabs="tabs"
        :value="tabValue"
        @on-click="getTabKey">
          <div>title="新增设备";
          border;
        type="tab"</div>
        </ve-contaier-outer>
      <ve-contaier-outer class="mt-16"
        title="新增设备"
        border
        type="mix"
        :tabs="tabs"
        :value="tabValue1"
        @on-click="getTabKey1">
        <ve-row>
          title="新增设备";border;type="mix"
        </ve-row>
        <ve-row>
          <ve-col span="6" class="pr-8">
            <ve-contaier-card
            title="title"
            content="content"
            subContent="subContent"
            status="error"
            border
            type="normal"
            >
            </ve-contaier-card>
            <div class="mt-16">type:normal;含有title,content,sub-content</div>
          </ve-col>
          <ve-col span="6" class="pr-8">
            <ve-contaier-card
            title="title"
            content="content"
            subContent="subContent"
            status="error"
            :help="false"
            border
            type="normal"
            >
            </ve-contaier-card>
            <div class="mt-16">type:normal;含有title,content,sub-content;不含help</div>
          </ve-col>
          <ve-col span="6" class="pr-8">
            <ve-contaier-card
            title="日均下单量"
            content="32,625,318"
            sub-content="-12.15%"
            color="#19be6b"
            border
            type="center"
            >
              <!-- <span slot="header">日均下单量</span> -->
            </ve-contaier-card>
            <div class="mt-16">type:center;content,sub-content;无title</div>
          </ve-col>
          <ve-col span="6" class="pr-8">
            <ve-contaier-card
            content="32,625,318"
            size="20"
            sub-content="日均下单量"
            color="#80848F"
            border
            type="left"
            ></ve-contaier-card>
            <div class="mt-16">type:left;content,sub-content;无title</div>
          </ve-col>
        </ve-row>
      </ve-contaier-outer>
    </ve-row>
    <ve-row>
      <ve-contaier-outer class="mt-16"
        title="新增设备"
        border
        type="normal"
        @on-todo="download"
        >title="新增设备";border;type="normal"
        </ve-contaier-outer>
    </ve-row>
  </div>
</template>

<script>
import { Row, Col, Message } from 'iview';
import tLine from 't-charts/lib/line';
import contaierCard from './card-container';
import contaierChart from './chart-container';
import contaierOuter from './outer-container';
import lineChartData from '../../libs/line';

export default {
  name: 'container',
  components: {
    've-row': Row,
    've-col': Col,
    've-line': tLine,
    've-contaier-card': contaierCard,
    've-contaier-chart': contaierChart,
    've-contaier-outer': contaierOuter,
  },
  data() {
    return {
      lineData: [],
      lineSetting: {},
      testData: [],
      tableColumn: [{
        title: '日期',
        key: '日期',
      }, {
        title: '余额',
        key: '余额',
      }, {
        title: '年龄',
        key: '年龄',
      }],
      // tab点击按钮
      tabs: [{
        name: 'all',
        label: '点击概览',
      }, {
        name: 'active',
        label: '激活概览',
      }, {
        name: 'status',
        label: '查看状态',
      }],
      tabValue: 'all', // tab的值
      tabValue1: 'all', // tab的值
    };
  },
  methods: {
    getTabKey(name) {
      this.tabValue = name;
    },
    getTabKey1(name) {
      this.tabValue1 = name;
    },
    // 下载or其他
    download() {
      Message.info('download');
    },
  },
  mounted() {
    this.lineData = lineChartData.data[0].data;
    this.lineSetting = lineChartData.data[0].settings;
    this.testData = lineChartData.data[0].data.rows;
  },
};
</script>

<style lang="scss">
@import "./container.scss";
</style>
