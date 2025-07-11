<template>
  <div class="login">
    <!-- 头部 -->
    <van-nav-bar title="用户登录" left-arrow @click-left="$router.go(-1)" />
    <!-- 主体 -->
    <div class="main">
      <h2>手机号登录</h2>
      <p>未注册的手机号登录后将自动注册</p>
      <div class="form">
        <div class="form-item">
          <input type="text" placeholder="请输入手机号码">
        </div>
        <div class="form-item">
          <input type="text" placeholder="请输入图形验证码">
          <img src="@/assets/code.png" alt="">
        </div>
        <div class="form-item">
          <input type="text" placeholder="请输入短信验证码">
          <button>获取验证码</button>
        </div>
      </div>
    </div>
    <div class="login-btn">登录</div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex'
}
</script>

<style lang="less" scoped>
.main {
  margin-left: 25px;
  margin-top: 50px;

  h2 {
    font-size: 30px;
    font-weight: 400;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    color: grey
  }

  .form {
    margin-top: 20px;

    .form-item {
      border-bottom: 1px solid #f3f1f2;
      padding: 8px 0;
      margin-bottom: 14px;
      display: flex;
      align-items: center;

      input {
        display: block;
        border: none;
        outline: none;
        height: 32px;
        font-size: 14px;
      }

      img {
        flex: 1;
        margin-left: 80px;
        height: 31px;
      }

      button {
        flex: 1;
        margin-left: 80px;
        height: 31px;
        border: none;
        font-size: 13px;
        color: orange;
        background-color: transparent;
      }
    }
  }
}

.login-btn {
  width: 100%;
  height: 42px;
  margin-top: 40px;
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);
  letter-spacing: 2px;
  border-radius: 39px;
  background-color: lightsalmon;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin-left: 0;
}
</style>
