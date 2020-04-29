// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import VueAxios from 'vue-axios';
import router from "./router";
import BootstrapVue from 'bootstrap-vue';
import store from './store/index'

import {
    Message,
    Button,
    Select,
    Menu,
    Submenu,
    MenuItem,
    Row,
    Col,
    Carousel,
    CarouselItem,
    Tabs,
    TabPane,
    Table,
    TableColumn,
    Popover,
    Tag,
    Form,
    FormItem,
    Input,
    Dialog,
    Switch,

} from "element-ui";
Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:5000/api/v1';

Vue.use(BootstrapVue);
Vue.use(Button);
Vue.use(Select);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Row);
Vue.use(Col);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Popover);
Vue.use(Tag);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Dialog);
Vue.use(Switch);
Vue.use(VueAxios, axios)
Vue.prototype.$message = Message;

var flag; // 首先定义一个开关

router.beforeEach((to, from, next) => {

    if (to.path == '/homepage' || to.path == '/') { // 当进入这个页面进行记录

        flag = true; // 改变信号

        next();

    } else {

        if (flag) { // 如果路由发生变化判断信号

            Vue.prototype.$confirm('您确定要退出此页面?', '提示', {

                confirmButtonText: '确定',

                cancelButtonText: '取消',

                type: 'warning'

            }).then(() => {

                next()

                flag = false;

            })

        } else {

            next()

        }

    }

});

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    components: { App },
    template: "<App/>",
});