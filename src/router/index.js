import Vue from "vue";
import VueRouter from "vue-router";
import axiosAuth from '@/api/axios-auth';
import PictureUpload from '../components/PictureUpload'


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
    {
        path: "/class_fee",
        name: "class_fee",
        component: () =>
            import ("@/views/users/class_fee"),
    },
    {
        path: '/photo',
        component: () =>
            import ("@/views/users/photo"),
        name: 'photo'
    },
    {
        path: '/showphoto',
        component: () =>
            import ("@/views/users/showphoto"),
        name: 'showphoto'
    },
    {
        path: '/pictureUpload',
        component: PictureUpload,
        name: 'pictureUpload'
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
            axiosAuth.post('/verify_token').then(() => {
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