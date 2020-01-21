<template>
  <div style="padding:30px;">
    <h2>專案列表</h2>
    <SearchBar @showDialog="openDialog" @saerchText="saerchText" />
    <el-table
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column
        label="日期"
        width="180"
      >
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="姓名"
        width="180"
      >
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button
            size="mini"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <DialogAddproject :show-dialog="showDialog" @showDialog="closeDialog" />
  </div>
</template>

<script>
import ufirst from '../../store/modules/ufirst/index'
import DialogAddproject from '../../components/Ufirst/Dialog/DialogAddproject'
import SearchBar from '../../components/Ufirst/SearchBar/index'

export default {
  components: {
    DialogAddproject,
    SearchBar
  },
  data() {
    return {
      showDialog: false,
      saerchFilter: '',
      FilterTable: []
    }
  },
  create() {
    this.$store.registerModule('ufirst', ufirst())
  },
  computed: {
    tableData() {
      const a = this.saerchFilter
      if (!a) {
        return this.$store.getters['ufirst/allList']
      }
      return this.$store.getters['ufirst/allList'].filter((item) => {
        return item.name.includes(a) || String(item.id) === a || item.address === a
      })
    }

  },
  beforeCreate() {
    if (this.$store._modules.root._children.ufirst === undefined) {
      this.$store.registerModule('ufirst', ufirst())
    }
  },
  beforeDestroy() {
    if (this.$store._modules.root._children.ufirst !== undefined) {
      this.$store.unregisterModule('ufirst')
    }
  },
  methods: {
    closeDialog() {
      this.showDialog = false
    },
    openDialog() {
      this.showDialog = true
    },
    saerchText(value) {
      this.saerchFilter = value
    }
  }

}
</script>
