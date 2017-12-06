<template>
  <div>
    <td-table
      :tableTitle="tableTitle"
      :tableTools="tableTools"
      :tableData="tableData"
    ></td-table>
  </div>
</template>
<script>
  import tdTable from '../../components/table/index.vue';

  export default {
    components: {
      tdTable,
    },
    data() {
      const tableName = '渠道总览';
      return {
        tableTitle: {
          show: true,
          title: tableName,
        },
        tableTools: {
          setting: {
            show: true,
            url: '',
          },
          search: {
            show: true,
          },
          download: {
            show: true,
            filename: tableName,
          },
          help: {
            show: true,
            title: '提示标题',
            content: '提示内容',
          },
        },
        tableData: {
          columns: [
            {
              title: 'Name',
              key: 'name',
            }, {
              title: 'Age',
              key: 'age',
            }, {
              title: 'Address',
              key: 'address',
            },
          ],
          data: [
            {
              name: 'John Brown',
              age: 20,
              address: 'New York No. 1 Lake Park',
              date: '2016-10-03',
            }, {
              name: 'Jim Green',
              age: 24,
              address: 'London No. 1 Lake Park',
              date: '2016-10-01',
            }, {
              name: 'Joe Black',
              age: 30,
              address: 'Sydney No. 1 Lake Park',
              date: '2016-10-02',
            }, {
              name: 'Jon Snow',
              age: 26,
              address: 'Ottawa No. 2 Lake Park',
              date: '2016-10-04',
            }
          ],
        },
      };
    },
  };

</script>

