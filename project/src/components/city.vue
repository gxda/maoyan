<template id="city">
  <div class="city_box">
    <div class="city">
      <!-- 所有的城市 -->
      <div v-for="(item,index) in city" :key="index">{{item.nm}}</div>
    </div>
  </div>
</template>

<script>
import { getcity } from "../api/index";
import { handlecitydata } from "../utils/city";
export default {
  data() {
    return {
      city: []
    };
  },
  created() {
    getcity().then(data => {
      this.city = handlecitydata(data.cts);
    });
  }
};
</script>

<style lang="less">
@import url("../style/index.less");
.city_box {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: red;
  z-index: 5;
}
</style>