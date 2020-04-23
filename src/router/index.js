import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";


Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "login1",
    component: () => import("@/views/login1"),
  },
  {
    path: '/class_fee',
    name: 'class_fee',
    component: () => import("@/views/users/class_fee")
  },
  {
    path: "/index",
    name: "index",
    component: () => import("@/views/index"),
  },
  
];
const router = new VueRouter({
  routes,
});
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login1') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === 'null' || token === '') {
      next('/login1');
    } else {
      next();
    }
  }
});
export default router;
