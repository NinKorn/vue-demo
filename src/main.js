import Vue from 'vue'
import App from './App'
import router from './router'

//引入样式 清除默认样式
import './style/vue.css'
//引入UI库
import './lib/mui/fonts/mui-icons-extra.ttf'
import './lib/mui/fonts/mui.ttf'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//把所有的mint-ui组件都导入进来
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI) // 把所有的组件，注册为全局的组件

//引入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)

// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)

//引入moment时间处理插件
import moment from 'moment'
// 全局过滤器处理时间
Vue.filter('getTime', (data, options = 'YYYY-MM-DD hh-mm-ss') => {
  return moment(data).format(options)
})

Vue.http.options.root = 'http://lovegf.cn:8899/';

//定义全局评论组件
import comment from './components/comment'
Vue.component('comment', comment)

//定义全局轮播图组件
import banner from './components/banner'
Vue.component('banner', banner)

import VuePreview from 'vue-pic-preview'
Vue.use(VuePreview)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state:{
    count:1
  },
  mutations:{
    
  },
  getters:{}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
