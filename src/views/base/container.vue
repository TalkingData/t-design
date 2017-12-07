<template>
  <div class="container">
    <i-row>
      <i-col span="6">
        <cardcontaier 
        title="title"
        content="content"
        sub-content="subContent"
        status="error"
        border
        type="normal"
        ><!-- <div slot="content"></div> -->
        </cardcontaier>
        <div>type:normal;含有title,content,sub-content</div>
      </i-col>
      <i-col span="6">
        <cardcontaier 
        title="累计设备"
        content="32,625,318"
        size="20"
        sub-content="-12.15%"
        color="#19be6b"
        border
        type="center"
        ><!-- <div slot="content"></div> -->
        </cardcontaier>
      </i-col>
    </i-row>
    <i-row class="chart-show-area">
      <chartcontaier title="累计设备">
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
      </chartcontaier>
    </i-row>
  </div>
</template>

<script>
import { Row, Col, Table } from 'iview';
import tLine from 't-charts/src/packages/line';
import cardcontaier from './card-container';
import chartcontaier from './chart-container';
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
    };
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
