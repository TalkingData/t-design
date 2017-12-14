# 图表
### line-mini
<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
<template>
  <div>
    <line-mini  :data="chartData"
               :settings="chartSettings">
    </line-mini>
  </div>
</template>

<script>
  module.exports = {
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
    },
  }
</script>
</script>

### bar-mini
<vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
<template>
  <div>
    <t-line :data="chartData"
               :settings="chartSettings">
    </t-line>
  </div>
</template>

<script>
  module.exports = {
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
    },
  }
</script>
</script>

#### settings 配置项

| 配置项 | 简介 | 类型 | 备注 |
| --- | --- | --- | --- |
| dimension | 维度 | Array | 默认columns第一项为维度 |
| metrics | 指标 | Array | 默认columns第二项起为指标 |
| xAxis   | 坐标系X轴  | Object  | 默认show: false  |
| yAxis  | 坐标系Y轴  | Object  | 默认show: false  |
| xAxisType | 横轴的数据类型 | String | 可选值: category, value, time, log |
| yAxisType | 左右坐标轴数据类型 | Array | 可选值: KMB, normal, percent |
| yAxisName | 左右坐标轴标题 | Array | - |
| axisSite | 指标所在的轴 | Object | 默认不在right轴的指标都在left轴 |
| stack | 堆叠选项 | Object | - |
| area | 是否展示为面积图 | Boolean | 默认为false |
| legend   | 图例组件  | Object  | 默认为show：false  |
| scale | 是否是脱离 0 值比例 | Array | 默认为[false, false]，表示左右<br>两个轴都不会脱离0值比例。<br>设置成 true 后坐标刻度不会<br>强制包含零刻度<br> |
| min | 左右坐标轴最小值 | Array | - |
| max | 左右坐标轴最大值 | Array | - |
| nullAddZero | 空值补零 | Boolean | 设置为true后，如果数据中对应某项<br>为null或undefined，则在表格中补0 |
| digit | 设置数据类型为percent时保留的位数 | Number | 默认为2 |
| labelMap | 设置指标的别名，同时作用于提示框和图例 | Object | - |
| label | 设置图形上的文本标签 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-line.label) |
| itemStyle | 设置折线拐点标志的样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-line.itemStyle) |
| lineStyle | 设置线条样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-line.lineStyle) |
| areaStyle | 设置区域填充样式 | Object | 内容参考[文档](http://echarts.baidu.com/option.html#series-line.areaStyle) |
