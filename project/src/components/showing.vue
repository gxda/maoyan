<template  id="showing">
  <div class="showing">
    <div class="showing-box">
      <div class="showing-content">
        <div class="main" v-for="(item,index) in list" :key="index">
          <img
            src="https://p1.meituan.net/128.180/moviemachine/f4df6f9c2c55e347266e35027da415251124290.jpg"
            alt
          />
          <div class="main_content">
            <h3>
              {{item.nm}}
              <span>{{item.version}}</span>
            </h3>
            <p class="pingjia">
              观众评:
              <span>{{item.sc}}</span>
            </p>
            <p class="star">主演:{{item.star}}</p>
            <p class="showinfo">{{item.showInfo}}</p>
          </div>
          <div class="btn">
            <p v-if="item.preShow">预售</p>
            <p v-else>购买</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
import { getshowing } from "../api/index";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    getshowing().then(data => {
      this.list = data;
      console.log(this.list);
    });
  },
  methods: {
    initbs() {
      new BS(".showing-box");
    }
  },
  mounted() {
    this.initbs();
  }
};
</script>

<style lang="less">
@import url("../style/index.less");

.showing-box {
  width: 100%;
  height: 100%;
  .showing-content {
    .main {
      margin: 5px;
      padding: 10px;
      .w(346);
      .h(114);
      display: flex;
      img {
        .w(64);
        .h(90);
      }
      .main_content {
        .w(240);
        padding: 5px;
        h3 {
          font-size: @fs_l;
        }
        .pingjia,
        .star,
        .showinfo {
          font-size: @fs_m;
          color: #666;
          span {
            font-size: @fs_l;

            color: red;
          }
        }
      }
      .btn {
        p {
          font-size: @fs_l;
          .l_h(90);
        }
      }
    }
  }
}
</style>
