<template  id="tab">
  <div class="tab">
    <ul>
      <router-link to="/moveie" tag="li">电影</router-link>
      <router-link to="/cinema" tag="li">影院</router-link>
      <router-link to="/myinfo" tag="li">我的</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped  >
@import url("../style/index.less");
ul {
  display: flex;
  justify-content: space-around;
  border: 1px solid #d8d8d8;
  li {
    .w(125);
    .h(48);
    text-align: center;
    font-size: @fs_m;
    .l_h(48);
    color: @tabcolor;
  }
}
</style>
