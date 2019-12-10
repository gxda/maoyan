<template>
  <div class="wraper">
    <div class="tab_content">
      <!-- 显示的内容 -->
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <tab class="tab_title"></tab>
  </div>
</template>

<script>
import tab from "./components/tab";
export default {
  components: {
    tab
  }
};
</script>

<style lang="less">
@import url("./style/index.less");
.wraper {
  .tab_content {
    width: 100%;
    height: 100%;
  }
  .tab_title {
    position: fixed;
    bottom: 0;
    z-index: 1;
    background: white;
  }
}
</style>