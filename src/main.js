import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import axios from 'axios'

import Vuetify from 'vuetify'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // vuetify中图标样式
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import VeeValidate from 'vee-validate' // 在vuetify中引入的表单验证插件
import Mock from './mock' // mock 服务
import VueMessage from './components/messageBox/index' // 提示语句
import VueLoading from './components/loading/index' // 请求loading
import vuex from 'vuex'
import store from './vuex/store'

Mock.bootstrap() // 启动mock服务

Vue.config.productionTip = false
Vue.prototype.$axios = axios // 全局定义 $axios 对象

Vue.use(Vuetify, {
    iconfont: 'mdi' // 引用图标
})

Vue.use(VueMessage)
Vue.use(VueLoading)
Vue.use(VeeValidate)
Vue.use(vuex)

if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = '/hy' // 设置axios 基础 请求 url
} else if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL = '/investorhub' // 基地址，所有请求都会加上前缀
}

var app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')

export default app
