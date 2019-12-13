<template id="cinema">
  <div>
    <div class="cinema">
      <p class="cinema_top">影院</p>
      <div class="search">
        <input type="text" @click="jump('/moveie/search')" placeholder="搜索影院" />
      </div>
      <!-- 导航部分 -->
      <div class="cinema_nav">
        <p>
          <span>全部</span>
        </p>
        <p>
          <span>品牌</span>
        </p>
        <p>
          <span>特色</span>
        </p>
      </div>
      <!-- 电影院详细部分 -->
      <!-- 视图层 -->
      <div class="cinema_box">
        <!-- 容器层 -->
        <div class="cinema_detail_box">
          <div class="cinema_detail" v-for="(item,index) in list" :key="index">
            <p class="name">
              {{item.nm}}
              <span>{{item.sellPrice}}起</span>
            </p>
            <p class="addr">
              {{item.addr}}
              <span>{{item.distance}}</span>
            </p>
            <p class="tag">{{item.promotion.cardPromotionTag}}</p>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import BS from "better-scroll";
import { getcinemadata } from "../api/index";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    jump(path) {
      this.$router.push({ path: path });
    },
    initBS() {
      new BS(".cinema_box");
    }
  },
  created() {
    getcinemadata().then(data => {
      this.list = data.cinemas;
      console.log(this.list);
    });
  },
  mounted() {
    this.initBS();
  }
};
</script>

<style lang="less" scoped >
@import url("../style/index.less");
.cinema {
  .cinema_top {
    display: flex;
    justify-content: center;
    align-items: center;
    .w(375);
    .h(50);
    background: @background;
    font-size: @fs_xl;
    color: white;
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
  .cinema_nav {
    .w(375);
    .h(40);
    border-bottom: 1px solid #d7d7d7;
    display: flex;
    p {
      .h(40);
      .w(125);
      font-size: @fs_m;
      text-align: center;
      color: #777;
      .l_h(30);
      span {
        .w(125);
        display: inline-block;
        border-right: 1px solid #d7d7d7;
      }
    }
  }
  .cinema_box {
    .w(375);
    .h(700);
    overflow: hidden;
    .cinema_detail_box {
      .w(340);
      .cinema_detail {
        margin: 20px 0 20px 20px;
        .name {
          font-size: @fs_l;
          span {
            margin-left: 10px;
            font-size: @fs_xxl;
            color: #f03d37;
          }
        }
        .addr {
          margin: 5px 0 0 0;
          font-size: @fs_m;
          display: flex;
          justify-content: space-between;
          color: #666;
          span {
            margin: 2px 0 2px 0;
            font-size: @fs_s;
          }
        }
        .tag {
          margin: 2px 0 2px 0;
          font-size: @fs_s;
          color: #999;
        }
      }
    }
  }
}
</style>