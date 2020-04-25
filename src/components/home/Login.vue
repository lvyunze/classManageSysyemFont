<template>
  <div>
    <el-button round @click="dialogFormVisible = true">登录</el-button>

<el-dialog title="登录" :visible.sync="dialogFormVisible" center>

  <!-- 插入测试 -->
   <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

 <el-form-item label="账号" prop="email">
    <el-input v-model="ruleForm2.email"></el-input>
  </el-form-item>

  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
  </el-form-item>

  <el-form-item label="记住密码" prop="delivery">
    <el-switch v-model="ruleForm2.delivery"></el-switch>
  </el-form-item> 
  <span><a>忘记密码？</a></span>

</el-form>
   <!-- 插入测试 -->

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false; resetForm('ruleForm2')">取 消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm2')">登 录</el-button>
  </div>
</el-dialog>
  </div>
</template>
<script>
import axios from 'axios'
import Qs from "qs"
export default {
  data() {
    /*插入form方法*/
    var checkNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
            var myreg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if (!myreg.test(value) ) {
              callback(new Error('请输入正确的手机号码'));
            } else {
              callback();
            }

        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {

          callback();
        }
      };
    /*插入form方法*/

      return {
            loginPower:false,
      /*插入form方法*/
       /*设定规则指向*/
        ruleForm2: {
          password: '',
          email: '',
           delivery: false,
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],

          email: [
            { validator: checkNum, trigger: 'blur' }
          ]
        },

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
        methods: {
      submitForm(formName) {
         this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$store.dispatch('auth/login', this.ruleForm2).then(() => {
          this.$router.push({ path: this.redirect || '/login1' }, onComplete => { }, onAbort => { })
          /*假设login1为登陆后的界面 */

				});        
          } 
        }); 
      },
    resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="">
  
</style>