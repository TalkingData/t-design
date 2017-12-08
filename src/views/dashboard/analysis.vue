<style lang="scss">
  .item-row{
    margin-bottom: 20px;
  }
  .list-container {
    height: 300px;
    overflow: auto;
    margin-top: 20px;
  }
  .area-rank-list ul{
    display: flex;
    padding: 0 24px;
    li{
      height: 40px;
      display: inline;
      line-height: 20px;
      margin-right: 20px;
      label{
        margin-right: 20px;
      }
      &:nth-child(1){
        background: #E9EAEC ;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: center;
      }
      &:nth-child(2){
        margin-right: 150px;
      }
      &:nth-child(3) b {
        display: inline-block;
        position: relative;
        overflow: hidden;
        width: 180px;
        background: #F2F2F3;
        height: 8px;
        i{
          position: absolute;
          left: 0;
          top: 0;
          height: 8px;
          background: #2D8CF0;
        }
      }
    }
    &:nth-child(1) li:nth-child(1){
      background: #FF8454;
      color:#fff;
    }
    &:nth-child(2) li:nth-child(1){
      background: #FCC45F;
      color:#fff;
    }
    &:nth-child(3) li:nth-child(1){
      background: #2DE2C5;
      color:#fff;
    }
  }
</style>
<template>
  <div class="hello">
    <div class="main-container">
      <Row class="item-row" type="flex" justify="end">
        <Col span="11">
        <Card style="width: 584px;height: 344px">
          <p slot="title">饼图</p>
          <ve-pie :data="pieData"
                  :settings="pieSettings"
                  height="294px">
          </ve-pie>
        </Card>
        </Col>
        <Col span="11">
        <Card style="width: 584px;height: 344px">
          <p slot="title">折线堆积面积图</p>
          <ve-line :data="lineData"
                   :settings="lineSettings"
                   height="294px">
          </ve-line>
        </Card>
        </Col>
      </Row>
      <Row class="item-row" type="flex" justify="end">
        <Col span="11">
        <Card style="width: 584px;height: 344px">
          <p slot="title">柱状图</p>
          <ve-histogram :data="histogramData"
                        :settings="histogramSettings"
                        height="294px">
          </ve-histogram>
        </Card>
        </Col>
        <Col span="11">
        <Card style="width: 584px;height: 344px">
          <p slot="title">柱状堆积图</p>
          <ve-histogram :data="hData"
                        :settings="hSettings"
                        height="294px">
          </ve-histogram>
        </Card>
        </Col>
      </Row>
      <Row class="item-row" type="flex" justify="end">
        <Col span="11">
        <Card style="width: 584px;height: 344px">
          <p slot="title">环形图</p>
          <ve-ring :data="ringData"
                   :settings="ringSettings"
                   height="294px">
          </ve-ring>
        </Card>
        </Col>
        <Col span="11">
        <Card style="width: 584px;height: 344px">
          <p slot="title">环形图</p>
          <ve-ring :data="rData"
                   :settings="rSettings"
                   height="294px">
          </ve-ring>
        </Card>
        </Col>
      </Row>
      <Row class="item-row" type="flex" justify="end">
        <Col span="11">
        <Card style="width: 584px;height: 344px">
          <p slot="title">雷达图</p>
          <ve-radar :data="radarData"
                    :settings="radarSettings"
                    height="294px">
          </ve-radar>
        </Card>
        </Col>
        <Col span="11">
        <Card style="width: 584px;height: 344px">
          <p slot="title">条形图</p>
          <ve-bar :data="barData"
                  :settings="barSettings"
                  height="294px">
          </ve-bar>
        </Card>
        </Col>
      </Row>
      <Card>
        <p slot="title">城市排名TOP10</p>
        <Row class="item-row" type="flex" justify="end">
          <Col span="12">
          <ve-map :data="mapData"
                 :settings="mapSettings"
                 :visualMap="visualMap"
                 height="294px">
          </ve-map>
          </Col>
          <Col span="12">
            <top-10></top-10>
          </Col>
        </Row>
      </Card>
    </div>
  </div>
</template>

<script>
  import top10 from './top10';

  export default {
    components: {
      top10,
    },
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
      this.mapData = {
        columns: ['位置', 'GDP'],
        rows: [
          { '位置': '吉林', '税收': 123, '人口': 123, '面积': 92134 },
          { '位置': '北京', '税收': 1223, '人口': 2123, '面积': 29234 },
          { '位置': '上海', '税收': 2123, '人口': 1243, '面积': 94234 },
          { '位置': '浙江', '税收': 4123, '人口': 5123, '面积': 29234 },
        ],
      };
      this.mapSettings = {
        position: 'china',
        dimension: '位置',
        metrics: ['人口', '面积'],
        dataType: {
          '面积': 'KMB',
        },
      };
      this.visualMap = {
        min: 0,
        max: 92134,
        inRange: {
          color: ['#D7E9FC', '#8EC1F7', '#5FA8F4', '#2D8CF0'],
        },
      };
    },
  };
</script>
