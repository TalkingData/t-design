<style lang="scss">
  @import "./chart.scss";
</style>
<template>
  <div class="hello">
    <div class="main-container">
      <i-row class="item-row" :gutter="24">
        <i-col span="12">
          <outercontaier class="mt-16"
                         title="30日趋势"
                         border
                         type="mix"
                         @on-todo="download"
          ><t-line  :data="lData"
                     :settings="lSettings"

                     :legend-visible="false"
                     height="294px">
          </t-line>
          </outercontaier>
        </i-col>
        <i-col span="12">
          <outercontaier class="mt-16"
                         title="折线堆积面积图"
                         border
                         type="mix"
                         @on-todo="download"
          ><t-line :data="lineData"
                    :settings="lineSettings"
                    height="294px">
          </t-line>
          </outercontaier>
        </i-col>
      </i-row>
      <i-row class="item-row" :gutter="24">
        <i-col span="12">
          <outercontaier class="mt-16"
                         title="柱状图"
                         border
                         type="mix"
                         @on-todo="download"
          ><t-histogram :data="histogramData"
                         :settings="histogramSettings"
                         height="294px">
          </t-histogram>
          </outercontaier>
        </i-col>
        <i-col span="12">
          <outercontaier class="mt-16"
                         title="柱状堆积图"
                         border
                         type="mix"
                         @on-todo="download"
          ><t-histogram :data="hData"
                        :settings="hSettings"
                        height="294px">
          </t-histogram>
          </outercontaier>
        </i-col>
      </i-row>
      <i-row class="item-row" :gutter="24">
        <i-col span="12">
          <outercontaier class="mt-16"
                         title="条形图"
                         border
                         type="mix"
                         @on-todo="download"
          ><t-bar :data="barData"
                  :settings="barSettings"
                  height="294px">
          </t-bar>
          </outercontaier>
        </i-col>
        <i-col span="12">
          <outercontaier class="mt-16"
                         title="雷达图"
                         border
                         type="mix"
                         @on-todo="download"
          ><t-radar :data="radarData"
                     :settings="radarSettings"
                     height="294px">
          </t-radar>
          </outercontaier>
        </i-col>
      </i-row>
      <i-row class="item-row" :gutter="24">
        <i-col span="12">
          <outercontaier class="mt-16"
                         title="饼图"
                         border
                         type="mix"
          ><t-pie :data="pieData"
                     :settings="pieSettings"
                     height="294px">
          </t-pie>
          </outercontaier>
        </i-col>
        <i-col span="12">
          <outercontaier class="mt-16"
                         title="环形图"
                         border
                         type="mix"
          ><t-ring :data="ringData"
                    :settings="ringSettings"
                    height="294px">
          </t-ring>
          </outercontaier>
        </i-col>
      </i-row>
    </div>
  </div>
</template>

<script>
  import { Row, Col, Table, Message } from 'iview';
  import tLine from 't-charts/lib/line';
  import tPie from 't-charts/lib/pie';
  import tHistogram from 't-charts/lib/histogram';
  import tBar from 't-charts/lib/bar';
  import tRadar from 't-charts/lib/radar';
  import tRing from 't-charts/lib/ring';
  import cardcontaier from './card-container';
  import chartcontaier from './chart-container';
  import outercontaier from './outer-container';

  export default {
    created() {
      this.pieData = {
        columns: ['日期', '成本', '利润'],
        rows: [
          { '日期': '1月1号', '成本': 123, '利润': 4 },
          { '日期': '1月2号', '成本': 1223, '利润': 4 },
          { '日期': '1月3号', '成本': 2123, '利润': 4 },
          { '日期': '1月4号', '成本': 4123, '利润': 4 },
          { '日期': '1月5号', '成本': 3123, '利润': 4 },
          { '日期': '1月6号', '成本': 7123, '利润': 4 },
        ],
      }
      this.pieSettings = {
        dimension: '成本',
        metrics: '利润',
        offsetY: 150,
      };
      this.lineData = {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '成本': 1223, '利润': 1523, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '成本': 2123, '利润': 1523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31, '其他': 100 },
          { '日期': '1月5日', '成本': 3123, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月6日', '成本': 7123, '利润': 1523, '占比': 0.65, '其他': 100 },
        ],
      }
      this.lineSettings = {
        stack: { '售价': ['成本', '利润'] },
        area: true,
      };
      this.lData = {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '成本': 1523, '日期': '1月1日', '利润': 1523, '占比': 0.12, '其他': 100 },
          { '成本': 1223, '日期': '1月2日', '利润': 1523, '占比': 0.345, '其他': 100 },
          { '成本': 2123, '日期': '1月3日', '利润': 1523, '占比': 0.7, '其他': 100 },
          { '成本': 4123, '日期': '1月4日', '利润': 1523, '占比': 0.31, '其他': 100 },
          { '成本': 3123, '日期': '1月5日', '利润': 1523, '占比': 0.12, '其他': 100 },
          { '成本': 7123, '日期': '1月6日', '利润': 1523, '占比': 0.65, '其他': 100 }
        ]
      }
      this.lSettings = {
        metrics: ['成本', '利润'],
        dimension: ['日期'],
        smooth: false,
      }
      this.histogramData = {
        columns: ['日期', '成本', '利润', '占比'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12 },
          { '日期': '1月2日', '成本': 1223, '利润': 1523, '占比': 0.345 },
          { '日期': '1月3日', '成本': 2123, '利润': 1523, '占比': 0.7 },
          { '日期': '1月4日', '成本': 4123, '利润': 1523, '占比': 0.31 },
        ],
      }
      this.histogramSettings = {
        axisSite: { right: ['占比'] },
        yAxisType: ['KMB', 'percent'],
      };
      this.hData = {
        columns: ['日期', '成本', '利润', '占比', '其他'],
        rows: [
          { '日期': '1月1日', '成本': 1523, '利润': 1523, '占比': 0.12, '其他': 100 },
          { '日期': '1月2日', '成本': 1223, '利润': 1921, '占比': 0.345, '其他': 100 },
          { '日期': '1月3日', '成本': 2123, '利润': 5523, '占比': 0.7, '其他': 100 },
          { '日期': '1月4日', '成本': 4123, '利润': 6523, '占比': 0.31, '其他': 100 },
        ],
      }
      this.hSettings = {
        metrics: ['成本', '利润'],
        stack: { '单价': ['成本', '利润'] },
      };
      this.ringData = {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 123, '年龄': 6 },
          { '日期': '1-3', '余额': 123, '年龄': 9 },
        ],
      }
      this.ringSettings = {
        offsetY: 150,
        label: {
          normal: {
            show: false,
            position: 'center',
          },
        },
        radius: [75, 100],
      };
      this.rData = {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 123, '年龄': 6 },
          { '日期': '1-3', '余额': 123, '年龄': 9 },
          { '日期': '1-4', '余额': 123, '年龄': 12 },
          { '日期': '1-5', '余额': 123, '年龄': 15 },
          { '日期': '1-6', '余额': 123, '年龄': 20 },
        ],
      }
      this.rSettings = {
        offsetY: 150,
        label: {
          normal: {
            show: false,
            position: 'center',
          },
        },
        radius: [40, 90],
      };
      this.radarData = {
        columns: ['城市', '房价', '收入', '人口比例'],
        rows: [
          { '房价': 10000, '收入': 4000, '人口比例': 0.4, '城市': '北京' },
          { '房价': 20000, '收入': 6000, '人口比例': 0.6, '城市': '上海' },
          { '房价': 30000, '收入': 8000, '人口比例': 0.2, '城市': '广州' },
        ],
      }
      this.radarSettings = {
        dataType: {
          '人口比例': 'percent',
        },
      };
      this.barData = {
        columns: ['日期', '余额', '年龄'],
        rows: [
          { '日期': '1-1', '余额': 123, '年龄': 3 },
          { '日期': '1-2', '余额': 1223, '年龄': 6 },
          { '日期': '1-3', '余额': 2123, '年龄': 90 },
          { '日期': '1-4', '余额': 4123, '年龄': 12 },
          { '日期': '1-5', '余额': 3123, '年龄': 15 },
          { '日期': '1-6', '余额': 7123, '年龄': 20 },
        ],
      };
      this.barSettings = {
        metrics: ['年龄'],
        dataOrder: {
          label: '年龄',
          order: 'desc',
        },
      };
    },
    components: {
      iRow: Row,
      iCol: Col,
      iTable: Table,
      tLine,
      tRing,
      tBar,
      tRadar,
      tHistogram,
      tPie,
      cardcontaier,
      chartcontaier,
      outercontaier,
    },
  };
</script>
