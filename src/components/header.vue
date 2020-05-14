<template>
  <div>
    <el-menu
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
      <el-menu-item index="5"  v-if="!isAuth"><v-Login>登录</v-Login></el-menu-item>
      <el-menu-item index="6" ><v-logon>注册</v-logon></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import Login from "../components/home/Login";
import logon from "../components/home/logon";
import { mapGetters } from 'vuex'
export default {
  components: {
    "v-Login": Login,
    "v-logon": logon
  },
  data() {
    return {
    };
  },
  computed: {
			...mapGetters('auth', {
				isAuth: 'isAuthenticated',
			})
		},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onLogout() {
				this.$store.dispatch('auth/logout');
			}
  }
};
</script>
<style lang="">
.el-menu-demo {
  padding-left: 60%;
}
</style>