import Vue from 'vue'
import Router from 'vue-router'
import homeComponents from '@/pages/home'
import memberComponents from '@/pages/member'
import shopcarComponents from '@/pages/shopcar'
import searchComponents from '@/pages/search'
import newsListComponents from '@/pages/newsList'
import newsInfoComponents from '@/pages/newsInfo'
import imgListComponents from '@/pages/imgList'
import imgInfoComponents from '@/pages/imgInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect: '/home'},
    {path: '/home',component: homeComponents},
    {path: '/member',component: memberComponents},
    {path: '/shopcar',component: shopcarComponents},
    {path: '/search',component: searchComponents},
    {path: '/home/newsList',component: newsListComponents},
    {path: '/home/newsInfo/:id',component: newsInfoComponents},
    {path: '/home/imgList',component: imgListComponents},
    {path: '/home/imgInfo/:id',component: imgInfoComponents}
  ],
  linkActiveClass:'mui-active'

})
