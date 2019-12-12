<template id="detail">
  <div class="detail-box">
    <!-- 详情页的头部 -->
    <div class="detail-top">
      <p @click="back">&lt;</p>
      <p>{{data.name}}</p>
      <p>&nbsp;</p>
    </div>
    <!-- 电影详情部分 -->
    <div class="detail-move">
      <div class="bj">
        <img :src="img.img" alt />
      </div>
      <!-- 图片 -->
      <div class="detail-move-box">
        <img :src="img.img" alt />
        <!-- 电影信息 -->
        <div class="detail-move-content" @click="jump('/moveie/introduce',list.nm,img.img,list.id)">
          <p class="name">{{list.nm}}</p>
          <p class="enm">{{list.enm}}</p>
          <p v-if="list.onSale" class="sale">暂无评分</p>
          <p v-else class="sc">
            <span>{{list.sc}}</span>
            <span>({{list.snum}}人评)</span>
          </p>
          <p class="cat">
            {{list.cat}}
            <span>{{list.ver}}</span>
          </p>
          <p class="dur">{{list.src}}/{{list.dur}}分钟</p>
          <p class="pubDesc">{{list.pubDesc}}</p>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getmovedetail } from "../api/index";
export default {
  data() {
    return {
      data: this.$route.query,
      img: this.$route.query,
      list: []
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    jump(path, name, img, id) {
      this.$router.push({
        path: path,
        query: { name: name, img: img, id: id }
      });
    }
  },
  created() {
    let id = this.$route.query.id;
    getmovedetail(id).then(data => {
      this.list = data.detailMovie;
      console.log(this.list);
    });
  }
};
</script>

<style lang="less" >
@import url("../style/index.less");
.detail-box {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0;
  right: 0;
  background: white;
  z-index: 1;
  .detail-top {
    .w(375);
    .h(50);
    background: red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: @fs_xl;
    color: white;
    p:nth-of-type(1) {
      font-size: @fs_xxxl;
      margin-left: 10px;
    }
  }
  .detail-move {
    .w(375);
    .h(188);
    .bj {
      background: #7777;
      position: absolute;
      .w(375);
      .h(188);
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
        filter: blur(10px);
      }
    }
    .detail-move-box {
      display: flex;
      justify-items: center;
      align-items: center;
      img {
        .w(110);
        .h(150);
        margin: 10px;
      }
    }
    .detail-move-content {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 10px;
      .w(270);
      .h(150);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .name {
        font-size: @fs_xxl;
        color: white;
        font-weight: bolder;
      }
      .sc {
        font-size: @fs_xxl;
        color: #ffcc00;
        span:nth-of-type(2) {
          font-size: @fs_s;
          color: #fff;
        }
      }
      .enm,
      .sale,
      .cat,
      .dur,
      .pubDesc {
        color: #fff;
        font-size: @fs_s;
        span {
          background: #3c9fe6;
        }
      }
    }
  }
}
</style>