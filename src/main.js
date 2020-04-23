// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import VueAxios from 'vue-axios';
import router from "./router";
import BootstrapVue from 'bootstrap-vue';
import {
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
axios.defaults.baseURL = 'http://localhost:5000';

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
Vue.use(Dialog),
Vue.use(Switch),
Vue.use(VueAxios,axios)
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
});
// 在请求头中加token
axios.interceptors.request.use(
  config => {
  // 判断是否存在token，如果存在的话，则每个http header都加上token
    let token = sessionStorage.getItem('Authorization')
    if (!config.headers.hasOwnProperty('Authorization') && token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  });

