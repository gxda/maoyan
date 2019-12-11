<template id="moveie">
  <div class="moveie">
    <div class="moveie_top_box">
      <div class="moveie_top">猫眼电影</div>
      <topbar></topbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import topbar from "../components/topbar";

export default {
  components: {
    topbar
  }
};
</script>

<style lang="less" >
@import url("../style/index.less");
.moveie {
  .moveie_top_box {
    position: static;
    top: 0;
  }
  .moveie_top {
    .w(375);
    .h(50);
    font-size: @fs_xl;
    background: @background;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>