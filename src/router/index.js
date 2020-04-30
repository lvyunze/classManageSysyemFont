import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";
import Router from 'vue-router'
import axiosAuth from '@/api/axios-auth'

Vue.use(VueRouter);
const routes = [{
        path: "/homepage",
        name: "homepage",
        component: () =>
            import ("@/views/homepage"),
    },
    {
        path: "/",
        name: "index",
        component: () =>
            import ("@/views/index"),
    },

];
const router = new VueRouter({
    routes,
});
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token');
    let requireAuth = to.matched.some(record => record.meta.requiresAuth);

    if (!requireAuth) {
        next();
    }

    if (requireAuth && !token) {
        next('/');
    }

    if (to.path === '/') {
        if (token) {
            axiosAuth.post('/verify-token').then(() => {
                next('/homepage');
            }).catch(() => {
                next();
            });
        } else {
            next();
        }
    }

    if (requireAuth && token) {
        axiosAuth.post('/verify-token').then(() => {
            next();
        }).catch(() => {
            next('/');
        })
    }

});

export default router;