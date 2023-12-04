// api.js
import axios from 'axios';

import router from "@/router";
axios.defaults.withCredentials = true;  // 设置cross跨域 并设置访问权限 允许跨域携带cookie信息

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'
axios.defaults.headers.delete['Content-Type'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/json'

// 创建一个自定义的Axios实例
const api = axios.create({
    baseURL: 'http://localhost:8080/', // 设置你的API基本URL
});


api.interceptors.request.use(
    config => {
        if(config.url.includes('login') ){
            return config;
        }
        else if(localStorage.getItem('token') === undefined || localStorage.getItem('token') === ''){
            alert("请先登录");
            //跳转到登录页面
            //window.location.href = '/login';
            router.push('/login');
            return Promise.reject("请先登录");
        }else {

            config.headers['Authorization'] = localStorage.getItem('token');
            return config;
        }
    },
    error => {
        // 对请求错误做些什么
        alert("请求错误");
        return Promise.reject(error);
    }
);
// api.interceptors.response.use(
//     (res)=>{
//         console.log(res);
//         return res;
//     },
//     error => {
//         // 对响应错误做点什么
//         alert(error.response.data);
//         localStorage.removeItem('token');
//         //跳转到登录页面
//         router.push("/login");
//         return Promise.reject(error);
//
//     }
// )

export default api;
