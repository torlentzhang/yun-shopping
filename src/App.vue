<template>
  <div id="app">
    <div class="box"></div>
    <van-button type="primary">主要按钮</van-button>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">内容</van-popup>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },

  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style lang="less">
.box {
  width: 300px;
  height: 300px;
  background-color: aqua;
}
</style>
