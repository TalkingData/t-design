<template>
  <div>
    <i-row class="item-row" :gutter="24">
      <i-col span="6" class="pr-8">
        <cardcontaier
          title="日均下单量"
          border
          type="normal"
        >
        </cardcontaier>
      </i-col>
      <i-col span="6" class="pr-8">
        <cardcontaier
          title="日均下单量"
          content="32,625"
          subContent="-12.15%"
          status="error"
          :help="false"
          border
          type="normal"
        >
        </cardcontaier>
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
      </i-col>
    </i-row>
  </div>
</template>

<script>
  import { Row, Col } from 'iview';
  import tLine from 't-charts/lib/line';
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
      tLine,
      cardcontaier,
      chartcontaier,
      outercontaier,
    },
  };
</script>

<style scoped>
</style>
