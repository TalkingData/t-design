<template>
  <div class="form-step">
    <Row class="form-step-row">
      <iCol class="form-step-row-title" :sm="5" :lg="3">表单名称</iCol>
      <iCol span="8">
        <iInput
          placeholder="步骤表单名称">
        </iInput>
      </iCol>
    </Row>
    <p class="form-step-info">{{ formDescription }}</p>
    <iForm class="form-step-iform"
      :label-width="80"
      :models="formDynamic">
      <FormItem
        class="form-step-iform-item"
        v-for="(item, index) in formDynamic.items"
        :label="labelName + (index + 1)" :key="index">
        <Row>
          <iCol span="11">
            <iInput></iInput>
          </iCol>
          <iCol span="1" offset="10">
            <Icon
              type="ios-minus-outline"
              class="form-step-close"
              size="16"
              @click.native="handleRemove(index)">
            </Icon>
          </iCol>
        </Row>
      </FormItem>
      <FormItem class="form-step-iform-btn">
        <iButton type="primary" shape="circle" @click="handleAdd">新增步骤</iButton>
      </FormItem>
      <FormItem class="form-step-iform-set">
        <iButton type="primary" style="width:20%;">保存</iButton>
        <iButton type="text" style="margin-left: 8px">清空</iButton>
      </FormItem>
    </iForm>
  </div>
</template>
<script>
  import { Row, Col, Input, Form, FormItem, Button, Icon } from 'iview';

  export default {
    name: 'BasisForm',
    components: {
      Row,
      iCol: Col,
      iInput: Input,
      iForm: Form,
      FormItem,
      iButton: Button,
      Icon,
    },
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
@import "./basic-form.scss";
</style>
