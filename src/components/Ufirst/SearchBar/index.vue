<template>
  <div class="filter-container">
    <el-input v-model="searchText" placeholder="Title" style="width: 200px;" class="filter-item" @input="search" />
    <el-button class="filter-item" type="primary" icon="el-icon-search" @click="search">
      搜尋
    </el-button>
    <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="insert">
      新增專案
    </el-button>
    <el-button class="filter-item" type="primary" icon="el-icon-download">
      輸出
    </el-button>

  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      showDialog: false,
      searchText: ''
    }
  },
  methods: {
    insert() {
      this.$emit('showDialog', true)
      this.showDialog = true
    },
    search() {
      this.$emit('saerchText', this.searchText)
    }
  }
}
</script>
