<template>
  <div>
    <el-button round @click="dialogFormVisible = true">校园热门信息</el-button>

<el-dialog title="查看校园热门信息" :visible.sync="dialogFormVisible" center>

  

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false; resetForm('ruleForm2')">取 消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm2')">确 定</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
import Message from 'element-ui'
import axios from 'axios'
import Qs from "qs"
export default {
  data() {
      return {
            loginPower:false,

    /*插入form方法*/

        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          type: [],
          resource: '',
          desc: ''
        },
       formLabelWidth: '120px' 
      };
    },

  }
</script>
<style lang="">
  
</style>