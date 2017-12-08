<template>
  <div class="area-rank-list">
    <div class="list-container">
      <ul>
        <li>1</li>
        <li>广东省</li>
        <li><label>23.45%</label><b><i style="width:90%"></i></b></li>
      </ul>
      <ul>
        <li>2</li>
        <li>广东省</li>
        <li><label>23.45%</label><b><i style="width:80%"></i></b></li>
      </ul>
      <ul>
        <li>3</li>
        <li>广东省</li>
        <li><label>23.45%</label><b><i style="width:70%"></i></b></li>
      </ul>
      <ul>
        <li>4</li>
        <li>广东省</li>
        <li><label>23.45%</label><b><i style="width:60%"></i></b></li>
      </ul>
      <ul>
        <li>5</li>
        <li>广东省</li>
        <li><label>23.45%</label><b><i style="width:50%"></i></b></li>
      </ul>
      <ul>
        <li>6</li>
        <li>广东省</li>
        <li><label>23.45%</label><b><i style="width:40%"></i></b></li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss">
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
        margin-right: 130px;
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
