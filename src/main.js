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

import MintUI from 'mint-ui' //把所有的组件都导入进来
// 这里 可以省略 node_modules 这一层目录
import 'mint-ui/lib/style.css'
// 将 MintUI 安装到 Vue 中
Vue.use(MintUI) // 把所有的组件，注册为全局的组件

//引入vue-resource
import vueResource from 'vue-resource'
Vue.use(vueResource)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
