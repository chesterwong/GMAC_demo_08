import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import router from './router'
import 'element-plus/dist/index.css'
import './assets/css/main.css'
import App from './App.vue'
import * as echarts from 'echarts'
import 'default-passive-events'

const app = createApp(App)
app.config.globalProperties.$echarts = echarts

app.use(ElementPlus);
app.use(router);
app.mount('#app')


