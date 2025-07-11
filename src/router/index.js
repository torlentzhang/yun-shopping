import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由
import Login from '@/views/login'
import Layout from '@/views/layout'
import GoodsDetail from '@/views/goodsdetail'
import Order from '@/views/order'
import Pay from '@/views/pay'
import Search from '@/views/search'
import Searchlist from '@/views/search/searchlist.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    { path: '/', component: Layout },
    // 商品详情页需要动态路由传参，确认是哪个商品需要展示，参数中携带id
    { path: '/goodsdetail/:id', component: GoodsDetail },
    { path: '/order', component: Order },
    { path: '/pay', component: Pay },
    { path: '/search', component: Search },
    { path: '/searchlist', component: Searchlist }
  ]
})

export default router
