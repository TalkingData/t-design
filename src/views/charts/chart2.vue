<template>
  <div class="chart2">
    <i-row>
      <i-col span="6">
        <cardcontaier
        title="累计设备"
        content="32,625,318"
        sub-content="-12.15%"
        status="error"
        border
        ></cardcontaier>
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
import tLine from 't-charts/lib/line';
import cardcontaier from './card-container';
import chartcontaier from './chart-container';
import lineChartData from '../../libs/line';

export default {
  name: 'chart2',
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
@import "./chart2.scss";
</style>
