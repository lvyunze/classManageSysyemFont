<template>
  <div>
    <Head/>
    <div class="regedit">
      <div class="mylogo">

      </div>
      <!-- 选项卡 -->
      <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label" class="titlte">注册</span>
    <!-- 注册 -->
    <!-- 选项卡 -->
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rls"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item label="账号" prop="email">
          <el-input v-model.number="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
           <el-button plain @click="open1" id="rerror"></el-button>
        </el-form-item>
      </el-form>
  <!-- 注册 -->
  </el-tab-pane>
  <el-tab-pane >
    <span slot="label" class="titlte">登录</span>
      <!-- 登录 -->
<el-form
        status-icon
        :rules="rls"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item label="账号"  >
          <el-input type="text" v-model.number="ruleForm.email" id="uname" ></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model.number="ruleForm.password" id="pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
           <el-button plain @click="open1" id="lerror"></el-button>
        </el-form-item>
      </el-form>
  <!-- 登录 -->
 
  </el-tab-pane>
</el-tabs>
 
    </div>
  </div>
</template>
<script>
import Qs from "qs"
import router from '../router/index.js'
export default {
  data() {
    var email = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
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
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var varepass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        email:"",
        password: "",
        checkPass: "",
        username: ""
      },
      rls: {
        email: [{ validator: email, trigger: "blur" }],
        username: [{ validator: checkUser, trigger: "blur" }],
        password: [{ validator: vapass, trigger: "blur" }],
        checkPass: [{ validator: varepass, trigger: "blur" }],
       
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          /*在这里进行跨域请求*/
          this.axios({
            method: "put",
            url: "http://127.0.0.1:5000/api/v1/register",
            data: Qs.parse(this.ruleForm)
          })
            .then(function(res) {
              if (res.data == "fail") {
                //提示信息
                document.getElementById("rerror").click();
                //提示信息
              } else {
                alert("注册成功");
                this.$router.push('/');
               
                //跳转到登录页面
              }
            })
            .catch(function(err) {
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
      login(){
        //登录，把表单的数据传过来
        var uname=document.getElementById("uname").value;
        var pass=document.getElementById("pass").value;
        let data = {
         'email': uname,
         'password': pass
        }
        console.log(data)
         /*在这里进行跨域请求*/
          this.axios({
            method: "post",
            url: "http://127.0.0.1:5000/api/v1/login",
            data: data
          })
            .then( (res) => {
              if (res.data == "fail") {
                //提示信息
               alert("用户名或密码输入不正确");
                //提示信息
              } else {
                  //把用户名、登录身份存储起来
                localStorage.setItem("identity","user");
                localStorage.setItem("email",uname);
                //跳转到首页
                this.$router.push('/index');
                //跳转到首页
              }
            })
            .catch(function(err) {
              console.log(err);
            });
          /*在这里进行跨域请求*/
         //登录，把表单的数据传过来
      }
  }
};
 
</script>
<style>
.regedit {
  width: 30%;
  height: 40%;
  margin-left: 33%;
  margin-top: 10%
}
.titlte{
  font-size: 30px;
}
</style>