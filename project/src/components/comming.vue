<template  id="comming">
  <div class="comming">
    <div class="comming-box">
      <div class="comming-content">
        <li v-for="(item,index )in 100" :key="index">{{item}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
export default {
  methods: {
    initbs() {
      new BS(".comming-box");
    }
  },
  mounted() {
    this.initbs();
  }
};
</script>

<style lang="less">
@import url("../style/index.less");

.comming-box {
  width: 100%;
  height: 100%;
  .comming-content {
    overflow: hidden;
  }
}
</style>
