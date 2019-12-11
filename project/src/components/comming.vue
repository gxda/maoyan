<template  id="comming">
  <div class="comming">
    <div class="comming-box">
      <div class="comming-content">
        <div class="expected-box">
          <div class="expected">
            <li v-for="item  in 100">{{item}}</li>
          </div>
        </div>
        <li v-for="item  in 100">{{item}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
import { getcomming } from "../api/index";
export default {
  methods: {
    initbs() {
      new BS(".comming-box");
      new BS(".expected-box", {
        scrollX: true
      });
    }
  },
  created() {
    getcomming().then(data => {
      console.log(data);
    });
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
  .h(520);
  overflow: hidden;
  .comming-content {
    .expected-box {
      width: 100%;
      .h(216);
      background: red;
      overflow: hidden;
      .expected {
        .h(216);
        display: flex;
      }
    }
  }
}
</style>
