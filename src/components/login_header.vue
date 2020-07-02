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
      <el-menu-item index="1"><v-couse>个人课表</v-couse></el-menu-item>
      <el-menu-item index="2"><v-userset>个人设置</v-userset></el-menu-item>
      <el-menu-item index="3"></el-menu-item>
      <el-menu-item index="4"  v-if="!isAuth"><v-Login>登录</v-Login></el-menu-item>
      <el-menu-item index="5" ><v-logon>注册</v-logon></el-menu-item>
      <el-menu-item index="6"  @click="onLogout" v-if="isAuth">注销</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import schoolthing from "../views/users/schoolthing"
import couse from "../views/users/couse";
import userset from "../views/users/userset";
import Login from "../components/home/Login";
import logon from "../components/home/logon";
import { mapGetters } from 'vuex'
export default {
  components: {
    "v-Login": Login,
    "v-logon": logon,
    "v-userset":userset,
    "v-couse":couse,
    "v-schoolthing":schoolthing,
  },
  data() {
    return {
      //   activeIndex2: "1"
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
  padding-left: 30%;
}
</style>