<template>
  <div>
    <!-- 二级路由出口 -->
     <router-view></router-view>
    <!-- 底部导航栏 -->
    <van-tabbar route active-color="#ff0000" inactive-color="#000">
      <van-tabbar-item to="/home" icon="shop-o">首页</van-tabbar-item>
      <van-tabbar-item to="/category" icon="apps-o">分类</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item to="/user" icon="diamond-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style>
</style>
