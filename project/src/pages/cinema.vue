<template id="cinema">
  <div>
    <div class="cinema">
      <p>影院</p>
      <div class="search">
        <input type="text" @click="jump('/moveie/search')" placeholder="搜索影院" />
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    jump(path) {
      this.$router.push({ path: path });
    }
  },
  created() {}
};
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
.search {
  .w(375);
  .h(45);
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    .w(350);
    .h(30);
    border: 1px solid #d7d7d7;
    text-align: center;
  }
}
</style>