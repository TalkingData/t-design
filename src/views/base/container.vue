<template>
  <div class="container">
    
    <i-row class="chart-show-area">
      <!-- <chartcontaier title="累计设备">
        <div slot="chart">
          <div class="chart-item">
            <tLine
              :data="lineData"
              :settings="lineSetting">
            </tLine>
          </div>
        </div>
        <div slot="table">
          <div class="chart-item">
            <i-table :data="testData" :columns="tableColumn" border></i-table>
          </div>
        </div>
      </chartcontaier> -->
      <outercontaier 
        title="新增设备"
        border
        type="tab"
        :tabs="tabs"
        :value="tabValue"
        @on-click="getTabKey">
          <div>title="新增设备";
          border;
        type="tab"</div>
        </outercontaier>
      <outercontaier class="mt-16"
        title="新增设备"
        border
        type="mix"
        :tabs="tabs"
        :value="tabValue1"
        @on-click="getTabKey1">
        <i-row>
          title="新增设备";border;type="mix"
        </i-row>
        <i-row>
          <i-col span="6" class="pr-8">
            <cardcontaier 
            title="title"
            content="content"
            subContent="subContent"
            status="error"
            border
            type="normal"
            >
            </cardcontaier>
            <div class="mt-16">type:normal;含有title,content,sub-content</div>
          </i-col>
          <i-col span="6" class="pr-8">
            <cardcontaier 
            title="title"
            content="content"
            subContent="subContent"
            status="error"
            :help="false"
            border
            type="normal"
            >
            </cardcontaier>
            <div class="mt-16">type:normal;含有title,content,sub-content;不含help</div>
          </i-col>
          <i-col span="6" class="pr-8">
            <cardcontaier 
            title="日均下单量"
            content="32,625,318"
            sub-content="-12.15%"
            color="#19be6b"
            border
            type="center"
            >
              <!-- <span slot="header">日均下单量</span> -->
            </cardcontaier>
            <div class="mt-16">type:center;content,sub-content;无title</div>
          </i-col>
          <i-col span="6" class="pr-8">
            <cardcontaier 
            content="32,625,318"
            size="20"
            sub-content="日均下单量"
            color="#80848F"
            border
            type="left"
            ></cardcontaier>
            <div class="mt-16">type:left;content,sub-content;无title</div>
          </i-col>
        </i-row>
      </outercontaier>
    </i-row>
    <i-row>
      <outercontaier class="mt-16"
        title="新增设备"
        border
        type="normal"
        @on-todo="download"
        >title="新增设备";border;type="normal"
        </outercontaier>
    </i-row>
  </div>
</template>

<script>
import { Row, Col, Table, Message } from 'iview';
import tLine from 't-charts/src/packages/line';
import cardcontaier from './card-container';
import chartcontaier from './chart-container';
import outercontaier from './outer-container';
import lineChartData from '../../libs/line';

export default {
  name: 'container',
  components: {
    iRow: Row,
    iCol: Col,
    iTable: Table,
    tLine,
    cardcontaier,
    chartcontaier,
    outercontaier,
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
