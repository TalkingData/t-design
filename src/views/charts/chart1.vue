<template>
  <div>
    <i-row class="item-row"
           :gutter="24">
      <i-col span="6"
             class="pr-8">
        <cardcontaier border
                      type="normal">
            <line-mini :data="chartData"
                       :settings="chartSettings"
                       :grid="miniGrid"
                       height="70px">
            </line-mini>
        </cardcontaier>
      </i-col>
      <i-col span="6"
             class="pr-8">
        <cardcontaier border
                      type="normal"
                      title="日均下单量">
          <histogram-mini :data="hData"
                          :settings="hSettings"
                          :grid="miniGrid"
                          height="70px" >
          </histogram-mini>
        </cardcontaier>
      </i-col>
      <i-col span="6"
             class="pr-8">
        <cardcontaier border
                      type="normal"
                      title="日均下单量"
                      content="32,625"
                      subContent="-12.15%"
                      status="error">
            <line-mini :data="chartData"
                       :settings="chartSettings"
                       :grid="miniGrid"
                       height="70px">
            </line-mini>
        </cardcontaier>
      </i-col>
      <i-col span="6"
             class="pr-8">
        <cardcontaier border
                      type="normal"
                      title="日均下单量"
                      content="32,625"
                      subContent="-12.15%"
                      status="error">
            <histogram-mini :data="hData"
                            :settings="hSettings"
                            :grid="miniGrid"
                            height="70px">
            </histogram-mini>
        </cardcontaier>
      </i-col>
    </i-row>
  </div>
</template>
<script>
  import { Row, Col } from 'iview';
  import lineMini from 't-charts/lib/line-mini';
  import barMini from 't-charts/lib/bar-mini';
  import histogramMini from 't-charts/lib/histogram-mini';
  import cardcontaier from '../base/card-container';
  import chartcontaier from '../base/chart-container';
  import outercontaier from '../base/outer-container';

  export default {
    name: 'chart1',
    data() {
      return {};
    },
    components: {
      iRow: Row,
      iCol: Col,
      lineMini,
      barMini,
      histogramMini,
      cardcontaier,
      chartcontaier,
      outercontaier,
    },
    created() {
      this.chartData = {
        columns: ['日期', '成本'],
        rows: [
          { '日期': '1月1日', '成本': 1523 },
          { '日期': '1月2日', '成本': 1223 },
          { '日期': '1月3日', '成本': 2123 },
          { '日期': '1月4日', '成本': 4123 },
          { '日期': '1月5日', '成本': 3123 },
          { '日期': '1月6日', '成本': 8123 },
        ],
      }
      this.chartSettings = {
        stack: { '售价': ['成本', '利润'] },
        area: true,
      };
      this.miniGrid = {
        show: false,
        left: '0%',
        right: '10%',
        top: '0%',
        bottom: '0%',
        containLabel: false,
        padding: 0
      };
      this.hData = {
        columns: ['日期', '成本'],
        rows: [
          { '日期': '1月1日', '成本': 1523 },
          { '日期': '1月2日', '成本': 1223 },
          { '日期': '1月3日', '成本': 2123 },
          { '日期': '1月4日', '成本': 4123 },
          { '日期': '1月5日', '成本': 3123 },
          { '日期': '1月6日', '成本': 8123 },
          { '日期': '1月1日', '成本': 1523 },
          { '日期': '1月2日', '成本': 1223 },
          { '日期': '1月3日', '成本': 2123 },
          { '日期': '1月4日', '成本': 4123 },
          { '日期': '1月5日', '成本': 3123 },
          { '日期': '1月6日', '成本': 8123 },
        ],
      }
      this.hSettings = {
        stack: { '售价': ['成本', '利润'] },
        area: true,
      };
    },
  };
</script>

