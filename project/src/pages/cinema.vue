<template id="cinema">
  <div class="cinema">
    <p>影院</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped >
@import url("../style/index.less");
.cinema {
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