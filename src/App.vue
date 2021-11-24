<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import * as echarts from 'echarts'
import { provide } from 'vue'

export default {
  name: 'app',
  setup(){
    provide('ec',echarts)//provide
  },
}
</script>

<style>
body{
  margin: 0;
}
ul,li{
  list-style: none;
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.el-input__inner{
  border-radius: 20px;
}
.el-divider--horizontal {
    margin: 12px 0;
}
@font-face {
  font-family: 'iconfont';
  src: url('./assets/font/iconfont.woff2?t=1637550548680') format('woff2'),
       url('./assets/font/iconfont.woff?t=1637550548680') format('woff'),
       url('./assets/font/iconfont.ttf?t=1637550548680') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.p_1{
  color:#8E8E8E;
  font-size: 16px;
}
.p_2{
  color:#A6A6A6;
  font-size: 14px;
}
.p_3{
  color:#C3C3C3;
  font-size: 12px;
  font-style: italic;
  word-break: keep-all;
}
.d_1{
  font-size: 30px;
}
.d_2{
  font-size: 12px;
}
.d_3{
  font-family:'TxMedium';
  font-size: 26px;
}
.d_4{
  font-family:'TxMedium';
  font-size: 12px;
}
.d_5{
  color:#C3C3C3;
  font-style: italic;
  word-break: keep-all;
  transform: scale(0.8);
  display: inline-flex;
}
</style>
