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
                <Icon 
                  type="android-settings"
                  size="20"
                ></Icon>
              </a>
            </span>
            <Input
              v-if="tableTools.search && tableTools.search.show"
              class="search-box table-tool-item" 
              v-model="searchVul" 
              icon="ios-search" 
              placeholder="Enter something..."
            ></Input>
            <span 
              v-if="tableTools.download && tableTools.download.show"
              class="table-tool-item" @click="exportData">
              <Icon 
                type="ios-download-outline"
                size="20"
              ></Icon>
            </span>
            <Poptip 
              v-if="tableTools.help && tableTools.help.show"
              trigger="hover" 
              :title="tableTools.help.title" 
              :content="tableTools.help.content"
              placement="bottom-end"
            >
              <Icon 
                class="table-tool-item"
                type="ios-help-outline"
                size="20"
              ></Icon>
            </Poptip>
          </div>
        </div>
        <Table
          :columns="tableData.columns" 
          :data="tableData.data"
          ref="table"
        ></Table>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
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
