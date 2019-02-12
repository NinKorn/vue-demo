import Vue from 'vue'
import Router from 'vue-router'
import homeComponents from '@/components/home'
import memberComponents from '@/components/member'
import shopcarComponents from '@/components/shopcar'
import searchComponents from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component: homeComponents},
    {path: '/member',component: memberComponents},
    {path: '/shopcar',component: shopcarComponents},
    {path: '/search',component: searchComponents}
  ],
  linkActiveClass:'mui-active'

})
