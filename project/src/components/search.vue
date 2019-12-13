<template id="search">
  <div class="search">
    <input type="text" placeholder="搜索影院" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import url("../style/index.less");
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