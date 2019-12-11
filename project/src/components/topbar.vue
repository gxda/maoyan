<template  id="topbar">
  <div>
    <div class="topbar">
      <p>北京</p>
      <router-link to="/moveie/showing" tag="p" active-class="sel">
        <span>正在热映</span>
      </router-link>
      <router-link to="/moveie/comming" tag="p" active-class="sel">
        <span>即将上映</span>
      </router-link>
      <router-link to="/moveie/search" tag="p" active-class="sel">
        <span>🔍</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" >
@import url("../style/index.less");
.topbar {
  display: flex;
  .w(375);
  .h(44);
  justify-content: space-around;
  align-items: center;
  font-size: @fs_m;
  color: #666;
  border-bottom: #d8d8d8 1px solid;
  font-weight: bolder;

  span {
    display: inline-block;
    width: 100%;
  }
  .sel {
    span {
      display: inline-block;
      width: 100%;
      .h(44);
      .l_h(44);
    }
    border-bottom: 1px solid #ef4238;
    color: #ef4238;
  }
}
</style>
