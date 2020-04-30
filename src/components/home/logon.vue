<!--注册-->
<template>
<div>
    <el-button round @click="dialogFormVisible = true">注册</el-button>

<el-dialog title="注册" :visible.sync="dialogFormVisible" center>

  <!-- 插入测试 -->
   <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">

  <el-form-item label="账号" prop="email">
    <el-input v-model="ruleForm2.email"></el-input>
  </el-form-item>
  <el-form-item label="用户名" prop="username">
     <el-input v-model="ruleForm2.username"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
        </el-form-item>
</el-form>
   <!-- 插入测试 -->

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false; resetForm('ruleForm2')">取 消</el-button>
    <el-button type="primary" @click="submitForm('ruleForm2')">注 册</el-button>
    <el-button plain @click="open1" id="rerror"></el-button>
  </div>
</el-dialog>
</div>
</template>
<script>
import { Message } from 'element-ui'
import axios from 'axios'
import Qs from "qs"
export default {
    data(){
        /*插入form方法*/
    var checkNum = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
            var myreg=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
            if (!myreg.test(value) ) {
              callback(new Error('请输入正确的账号'));
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
      var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var vapass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var varepass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.password) {
        callback(new Error("两次输入密码不一致!"));
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
            email: '',
            username:'',
            password:'',
            checkPass:'',
        
           delivery: false,
        },
        rules2: {
          password: [
            { validator: validatePass, trigger: 'blur' }
          ],

          email: [
            { validator: checkNum, trigger: 'blur' }
          ],
         checkPass: [{ validator: varepass, trigger: "blur" }],
         username: [{ validator: checkUser, trigger: "blur" }],
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
    methods:{
        submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          /*在这里进行跨域请求*/
          this.axios({
            method: "put",
            url: "/register",
            data: Qs.parse(this.ruleForm2)
          })
            .then(function(res) {
              if (res.status !=200) {
                //提示信息
                return Message('注册失败');
                document.getElementById("rerror").click();
                //提示信息
              } else {
                //跳转到主页页面
                  Message({
                  type: 'success',
                  message: '注册成功' 
                    });
                  this.$router.push('/');
              }
            })
            .catch(function(err) {
                Message({
                type: 'fail',
                message: '注册失败' 
                   });
              console.log(err);
            });
          /*在这里进行跨域请求*/
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    open1() {
        this.$notify.error({
          title: '错误',
          message: '用户名已存在，换一个试试吧'
        });
      },
    }
    }
    
</script>>

