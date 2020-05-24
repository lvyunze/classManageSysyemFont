// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import VueAxios from 'vue-axios';
import router from "./router";
import BootstrapVue from 'bootstrap-vue';
import store from './store/index'
import api from './api'
import VuePreview from 'vue-preview'
import preview from 'vue-preview'


import {
    Container,
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
    header,
    aside,
    main,
    Image,

} from "element-ui";
Vue.prototype.$api = api
Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://106.14.117.35:5001/api/v1';

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
Vue.use(Container)
Vue.use(header),
    Vue.use(VuePreview),
    Vue.use(Image),
    Vue.use(aside),
    Vue.use(main),
    Vue.use(VueAxios, axios)
Vue.prototype.$message = Message;
// with parameters install
Vue.use(preview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: { top: 0, bottom: 0 },
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
})


/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    axios,
    components: { App },
    template: "<App/>",
})