<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="introduce">
    <el-tab-pane label="班级小工具" name="first">班级小工具</el-tab-pane>
    <el-tab-pane label="课表管理" name="second">课表管理</el-tab-pane>
    <el-tab-pane label="班费管理" name="fourth">班费管理</el-tab-pane>
    <el-tab-pane label="班级通讯录" name="five">班级通讯录</el-tab-pane>
    <el-tab-pane label="班级相册管理" name="six">相册管理</el-tab-pane>
  </el-tabs>
</template>
<script>
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