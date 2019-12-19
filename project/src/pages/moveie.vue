<template id="moveie">
  <div class="moveie">
    <div class="moveie_top_box">
      <div class="moveie_top">猫眼电影</div>
      <div class="topbar">
        <p @click="gocity('/moveie/city')">{{city}}</p>

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
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "北京"
    };
  },
  updated() {
    this.city = this.$route.query.name;
  },
  methods: {
    gocity(path) {
      this.$router.push({ path: path });
    }
  }
};
</script>

<style lang="less"  scoped>
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
}
</style>