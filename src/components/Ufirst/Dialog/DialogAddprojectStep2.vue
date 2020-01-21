<template>
  <el-form ref="dataForm" :model="dataForm" label-position="left" label-width="20%" style="width: 70%; margin-left:10%;">
    <el-form-item label="注意事項">
      <tinymce v-model="dataForm.content" :height="300" :width="'100%'" style="overflow:auto" />
    </el-form-item>
    <el-form-item label="預覽">
      <div class="editor-content" style=" width:100%; overflow: auto;" v-html="dataForm.content" />
    </el-form-item>
    <el-button type="primary" @click="editNotice">上一步</el-button>
  </el-form>
</template>
<script>
import Tinymce from '@/components/from/Tinymce'

export default {
  name: 'DialogAddprojectStep2',
  components: { Tinymce },
  data() {
    return {
      dataForm: {
        content: `<div class="editor-content" style="border: 3px solid rgb(204, 204, 204); width: 600px;">
                    <h1>注意事項</h1>
                    <p style="text-align: center; font-size: 15px;">&nbsp;</p>
                    <ol>
                    <li><strong>test1</strong></li>
                    <li><span style="color: #0000ff;">test2</span></li>
                    <li><span style="color: #ff0000;"><em>test3</em></span></li>
                    <li><span style="text-decoration: line-through;">test4</span><br><hr>
                    <table style="border-collapse: collapse; width: 64.0143%; margin-left: auto; margin-right: auto;" border="1">
                    <tbody>
                    <tr>
                    <td style="width: 16.6667%; text-align: center;">1</td>
                    <td style="width: 16.6667%; text-align: center;">2</td>
                    <td style="width: 16.6667%; text-align: center;">3</td>
                    <td style="width: 16.6667%; text-align: center;">4</td>
                    </tr>
                    <tr>
                    <td style="width: 16.6667%; text-align: center;">row</td>
                    <td style="width: 16.6667%; text-align: center;">row</td>
                    <td style="width: 16.6667%; text-align: center;">row</td>
                    <td style="width: 16.6667%; text-align: center;">row</td>
                    </tr>
                    <tr>
                    <td style="width: 16.6667%; text-align: center;">row</td>
                    <td style="width: 16.6667%; text-align: center;">row</td>
                    <td style="width: 16.6667%; text-align: center;">row</td>
                    <td style="width: 16.6667%; text-align: center;">row</td>
                    </tr>
                    </tbody>
                    </table>
                    </li>
                    </ol>
                  </div>`
      }
    }
  },
  methods: {
    editNotice() {
      this.$emit('changeStep', 1)
    }
  }

}
</script>
