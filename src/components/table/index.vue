<style lang="scss">
  @import 'index.scss';
</style>
<template>
  <div>
    <div class="list-wrap">
      <div class="list-item">
        <div class="table-before">
          <div class="table-title" v-if="tableTitle.show">{{tableTitle.title}}</div>
          <div class="table-tool">
            <span 
               v-if="tableTools.setting && tableTools.setting.show"
              class="setting-circle table-tool-item">
              <a :href="tableTools.setting.url">
                <t-icon 
                  type="android-settings"
                  size="20"
                ></t-icon>
              </a>
            </span>
            <t-input
              v-if="tableTools.search && tableTools.search.show"
              class="search-box table-tool-item" 
              v-model="searchVul" 
              icon="ios-search" 
              placeholder="Enter something..."
            ></t-input>
            <span 
              v-if="tableTools.download && tableTools.download.show"
              class="table-tool-item" @click="exportData">
              <t-icon 
                type="ios-download-outline"
                size="20"
              ></t-icon>
            </span>
            <t-poptip 
              v-if="tableTools.help && tableTools.help.show"
              trigger="hover" 
              :title="tableTools.help.title" 
              :content="tableTools.help.content"
              placement="bottom-end"
            >
              <t-icon 
                class="table-tool-item"
                type="ios-help-outline"
                size="20"
              ></t-icon>
            </t-poptip>
          </div>
        </div>
        <t-table
          :columns="tableData.columns" 
          :data="tableData.data"
          ref="table"
        ></t-table>
      </div>
    </div>

  </div>
</template>
<script>
  import { Table, Icon, Poptip, Input } from 'iview';

  export default {
    components: {
      tTable: Table,
      tIcon: Icon,
      tPoptip: Poptip,
      tInput: Input,
    },
    props: {
      tableTitle: {
        type: Object,
        default() {
          return {
            show: false,
            title: '',
          };
        },
      },
      tableTools: {
        type: Object,
        default() {
          return {};
        },
      },
      tableData: {
        type: Object,
        default() {
          return {
            columns: [],
            data: [],
          };
        },
      },
    },
    data() {
      return {
        searchVul: '',
      };
    },
    methods: {
      exportData() {
        this.$refs.table.exportCsv({
          filename: this.tableTools.download.filename,
        });
      },
    },
  };
</script>
