
import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';
import "echarts";
import ECharts from "vue-echarts";


const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.use(Antd)
app.config.globalProperties.$axios = axios;
app.component('ECharts',ECharts)
app.use(store)
app.mount('#app')
