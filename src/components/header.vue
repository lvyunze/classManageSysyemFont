<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">个人课表</el-menu-item>
      <el-menu-item index="2">校园热门信息</el-menu-item>
      <el-menu-item index="3">个人设置</el-menu-item>
      <el-menu-item index="4"></el-menu-item>
      <el-menu-item index="5">登录</el-menu-item>
      <el-menu-item index="6">注册</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import Login from "../components/home/Login";
export default {
  components: {
    "v-Login": Login
  },
  data() {
    return {
      //   activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="">
.el-menu-demo {
  padding-left: 60%;
}
</style>