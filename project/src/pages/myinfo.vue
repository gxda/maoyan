<template id="myinfo">
  <div class="myinfo">
    <p>猫眼电影</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped >
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
}
</style>