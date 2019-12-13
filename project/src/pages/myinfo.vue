<template id="myinfo">
  <div class="myinfo">
    <p>猫眼电影</p>
    <div class="login">
      <input type="text" placeholder="账户名/手机号/Enail" />
      <input type="password" placeholder="请输入你的密码" />
      <p class="btn">登录</p>
      <div class="subline">
        <span>立即注册</span>
        <span>找回密码</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less"  >
@import url("../style/index.less");
.myinfo {
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    .w(375);
    .h(50);
    background: @background;
    font-size: @fs_xl;
    color: white;
  }
  .login {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .w(350);
    .h(130);
    input {
      background: white;
      border: none;
      border-bottom: 1px solid #d6d6d6;
      .h(30);
    }
    .btn {
      .w(350);
      .h(30);
    }
    .subline {
      .w(350);
      .h(20);
      font-size: @fs_s;
      display: flex;
      justify-content: space-between;
      color: #fe8c00;
    }
  }
}
</style>