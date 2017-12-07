<template>
  <div class="form-step">
    <Row class="form-step-row">
      <Col class="form-step-row-title" :sm="5" :lg="3">表单名称</Col>
      <Col span="8">
        <Input
          placeholder="步骤表单名称">
        </Input>
      </Col>
    </Row>
    <p class="form-step-info">{{ formDescription }}</p>
    <Form class="form-step-iform"
      :label-width="80"
      :models="formDynamic">
      <FormItem
        class="form-step-iform-item"
        v-for="(item, index) in formDynamic.items"
        :label="labelName + (index + 1)">
        <Row>
          <Col span="11">
            <Input></Input>
          </Col>
          <Col span="1" offset="10">
            <Icon
              type="ios-minus-outline"
              class="form-step-close"
              size="16"
              @click.native="handleRemove(index)">
            </Icon>
          </Col>
        </Row>
      </FormItem>
      <FormItem class="form-step-iform-btn">
        <Button type="primary" shape="circle" @click="handleAdd">新增步骤</Button>
      </FormItem>
      <FormItem class="form-step-iform-set">
        <Button type="primary" style="width:20%;">保存</Button>
        <Button type="text" style="margin-left: 8px">清空</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        labelName: 'Step',
        formDynamic: {
          items: [{
            value1: '',
            value2: '',
          }],
        },
      };
    },
    props: {
      formDescription: {
        type: String,
        default: '步骤表单的描述',
      },
    },
    methods: {
      handleAdd() {
        this.formDynamic.items.push({
          value1: '',
          value2: '',
        });
      },
      handleRemove(index) {
        this.formDynamic.items.splice(index, 1);
      },
    },
  };
</script>
<style lang="scss">
.form-step {
  padding: 48px;
  background: #fff;
  box-shadow: 0 1px 4px 0 #e3e8ee;
  border-radius: 4px;

  &-row {
    padding-bottom: 30px;
    border-bottom: 2px solid #ccc;

    &-title {
      font-family: PingFangSC-Semibold;
      font-size: 12px;
      color: #464c5b;
      line-height: 32px;
      font-weight: 600;
      text-align: left;
    }
  }

  &-close {
    cursor: pointer;
  }

  &-info {
    padding: 28px 0;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #464c5b;
    text-align: left;
  }

  &-iform {

    &-item {
      background: #f7f8f8;
      padding: 8px 16px;

      & > .ivu-form-item-label {
        text-align: left !important;
        font-family: PingFangSC-Semibold;
        font-size: 14px;
        font-weight: 600;
        color: #464c5b;
      }

      & > .ivu-form-item-content {

        & > .ivu-row {
          & .ivu-form-item-label {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #9ea7b4;
          }

          & .ivu-form-item-content {
            width: 65%;
            display: inline-block;
          }
        }
      }
    }

    &-btn {
      text-align: left;

      & > .ivu-form-item-content {
        margin-left: 0 !important;
      }
    }

    &-set {
      text-align: left;
    }

  }

    @media (max-width: 1024px) {
      &-iform {
        padding-right: 0;
        &-set {
          padding-top: 30px;
          margin-top: 30px;
          position: relative;

          &::before {
            content: '';
            width: 100%;
            position: absolute;
            top: 0;
            left: 0;
            border-top: 2px solid #d7dde4;
          }

          & > .ivu-form-item-content {
            margin-left: 0 !important;
          }
        }
      }
    }

    @media (min-width: 1025px) {
      &-iform {
        padding-right: 20%;
        &-set {
          padding-top: 30px;
          margin-top: 30px;
          position: relative;

          &::before {
            content: '';
            width: 125%;
            position: absolute;
            top: 0;
            left: 0;
            border-top: 2px solid #d7dde4;
          }

          & > .ivu-form-item-content {
            margin-left: 0 !important;
          }
        }
      }
    }
}
</style>