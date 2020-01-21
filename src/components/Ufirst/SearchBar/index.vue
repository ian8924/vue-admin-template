<template>
  <div class="filter-container">
    <el-input placeholder="Title" style="width: 200px;" class="filter-item" />

    <el-button class="filter-item" type="primary" icon="el-icon-search">
      Search
    </el-button>
    <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="add">
      Add
    </el-button>
    <el-button class="filter-item" type="primary" icon="el-icon-download">
      Export
    </el-button>
    <el-checkbox class="filter-item" style="margin-left:15px;">
      reviewer
    </el-checkbox>
  </div>
</template>
<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      showDialog: false
    }
  },
  methods: {
    add() {
      this.$emit('showDialog', true)
      this.showDialog = true
    }
  }
}
</script>
