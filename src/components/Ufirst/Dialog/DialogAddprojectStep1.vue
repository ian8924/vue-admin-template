<template>
  <el-form ref="dataForm" :model="dataForm" label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
    <el-form-item label="活動名稱">
      <el-input v-model="dataForm.name" />
    </el-form-item>
    <el-form-item label="銀行">
      <el-select v-model="dataForm.region" placeholder="请選擇銀行">
        <el-option label="区域一" value="shanghai" />
        <el-option label="区域二" value="beijing" />
      </el-select>
    </el-form-item>
    <el-form-item label="上架時間">
      <el-col :span="11">
        <el-date-picker v-model="dataForm.date1" type="date" placeholder="選擇日期" style="width: 100%;" />
      </el-col>
      <el-col class="line" :span="2" style="padding-left:3%">-</el-col>
      <el-col :span="11">
        <el-time-picker v-model="dataForm.date2" placeholder="選擇时间" style="width: 100%;" />
      </el-col>
    </el-form-item>
    <el-form-item label="下架時間">
      <el-col :span="11">
        <el-date-picker v-model="dataForm.date3" type="date" placeholder="選擇日期" style="width: 100%;" />
      </el-col>
      <el-col class="line" :span="2" style="padding-left:3%">-</el-col>
      <el-col :span="11">
        <el-time-picker v-model="dataForm.date4" placeholder="選擇时间" style="width: 100%;" />
      </el-col>
    </el-form-item>
    <el-form-item label="是否公開">
      <el-switch v-model="dataForm.delivery" />
    </el-form-item>
    <el-form-item label="專案標籤">
      <el-cascader
        :options="options"
        :props="{ multiple: true, checkStrictly: true }"
        size="medium"
        clearable
      />
    </el-form-item>
    <el-button type="primary" @click="goStep2">下一步</el-button>
  </el-form>
</template>
<script>
export default {
  name: 'DialogAddprojectStep1',
  data() {
    return {
      dataForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        date3: '',
        date4: '',
        delivery: true
      },
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则'
        }, {
          value: 'daohang',
          label: '导航'
        }]
      }, {
        value: 'zhinan',
        label: 'test',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则'
        }, {
          value: 'daohang',
          label: '导航'
        }]
      }]
    }
  },
  methods: {
    goStep2() {
      this.$emit('changeStep', 2)
    }
  }

}
</script>
