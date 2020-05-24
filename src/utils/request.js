import axios from "axios";



// create an axios instance
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    baseURL: "http://106.14.117.35:5001/api/v1",
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 5000 // request timeout
});
//自动给同一个vue项目的所有请求添加请求头
service.interceptors.request.use(function(config) {
    let token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = 'Bearer' + ' ' + token;
        console.log(token)
    }
    return config;
})


export default service;