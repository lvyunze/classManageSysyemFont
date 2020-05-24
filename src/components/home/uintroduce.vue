<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="introduce">
    <el-tab-pane label="班级管理" name="first">班级管理</el-tab-pane>
    <el-tab-pane label="班级资料共享" name="third">资料管理</el-tab-pane>
    <el-tab-pane label="班费管理" name="fourth"><router-link to='/class_fee'>班费管理</router-link></el-tab-pane>
    <el-tab-pane label="班级通讯录" name="five">班级通讯录</el-tab-pane>
    <el-tab-pane label="班级相册管理" name="six"><router-link to='/photo'>相册管理</router-link></el-tab-pane>
  </el-tabs>
</template>
<script>
import class_fee from "../../views/users/class_fee"
import photo from "../../views/users/photo"
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>


<style lang="">
.introduce {
  padding-left: 25%;
  padding-right: 28%;
}
</style>