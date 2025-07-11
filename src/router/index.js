import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入一级路由
import Login from '@/views/login'
import Layout from '@/views/layout'
import GoodsDetail from '@/views/goodsdetail'
import Order from '@/views/order'
import Pay from '@/views/pay'
import Search from '@/views/search'
import Searchlist from '@/views/search/searchlist'

// 引入首页二级路由
import Cart from '@/views/layout/cart'
import User from '@/views/layout/user'
import Category from '@/views/layout/category'
import Home from '@/views/layout/home'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/login', component: Login },
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      // 配置二级路由
      children: [
        { path: '/home', component: Home },
        { path: '/cart', component: Cart },
        { path: '/category', component: Category },
        { path: '/user', component: User }
      ]
    },
    // 商品详情页需要动态路由传参，确认是哪个商品需要展示，参数中携带id
    { path: '/goodsdetail/:id', component: GoodsDetail },
    { path: '/order', component: Order },
    { path: '/pay', component: Pay },
    { path: '/search', component: Search },
    { path: '/searchlist', component: Searchlist }
  ]
})

export default router
