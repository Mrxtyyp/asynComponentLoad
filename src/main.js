// /src/main.js
import * as Vue from 'vue'
import App from './App.vue'

// 在 amd 系统中注入依赖供远程组件使用
define("vue", [], function() { return Vue });

const { createApp } = Vue

createApp(App).mount('#app')