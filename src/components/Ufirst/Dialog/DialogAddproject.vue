<template>
  <el-dialog
    title="新增專案"
    :visible="showDialog"
    :direction="'btt'"
    :before-close="handleClose"
    :width="'80%'"
  >
    <DialogAddprojectStep1
      v-show="step===1"
      @changeStep="changeStep"
    />
    <DialogAddprojectStep2
      v-show="step===2"
      @changeStep="changeStep"
    />
  </el-dialog>
</template>
<script>
import DialogAddprojectStep1 from './DialogAddprojectStep1'
import DialogAddprojectStep2 from './DialogAddprojectStep2'

export default {
  name: 'DialogAddproject',
  components: {
    DialogAddprojectStep1,
    DialogAddprojectStep2
  },
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      step: 1
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('確認關閉？')
        .then(_ => {
          this.$emit('showDialog', false)
          done()
        })
        .catch(_ => {})
    },
    changeStep(value) {
      this.step = value
    }
  }
}
</script>
