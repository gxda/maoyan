<template id="introduce">
  <div class="introduce" ref="box">
    <!-- 电影介绍 -->
    <div class="introduce-box">
      <img :src="img" alt />
      <!-- 电影信息 -->
      <div class="introduce-content">
        <p class="name">{{list.nm}}</p>
        <p class="enm">{{list.enm}}</p>
        <p class="cat">
          {{list.cat}}
          <span>{{list.ver}}</span>
        </p>
        <p class="star">{{list.star}}</p>

        <p class="pubDesc">{{list.pubDesc}}/{{list.dur}}分钟</p>

        <!-- 按钮 -->
        <div class="btn">
          <p class="watch">想看</p>
          <p class="watched">看过</p>
        </div>
      </div>
    </div>
    <!-- 中间 有多人想看 -->
    <div class="real-time">
      <span class="time">实时口碑</span>
      <span class="watch">{{list.wish}}人想看</span>
    </div>
    <!-- 简介 -->
    <div class="jieshao">
      <p class="title">
        简介
        <span @click="zhankai" v-if="read">展开&or;</span>
        <span @click="zhankai" v-else>隐藏 ^</span>
      </p>
      <div :class="read?'jieshao_content_show':'jieshao_content_hidden'">{{list.dra}}</div>
    </div>
  </div>
</template>

<script>
import { getmovedetail } from "../api/index";

export default {
  data() {
    return {
      img: this.$route.query.img,
      list: [],
      read: true
    };
  },

  created() {
    let id = this.$route.query.id;
    getmovedetail(id).then(data => {
      this.list = data.detailMovie;
      let box = this.$refs.box;
      box.style.background = this.list.backgroundColor;
    });
  },
  methods: {
    zhankai() {
      this.read = !this.read;
    }
  }
  //   mounted() {}
};
</script>

<style lang="less" scoped >
@import url("../style/index.less");

.introduce {
  padding: 10px;

  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  z-index: 5;
  background: white;

  .introduce-box {
    padding-bottom: 10px;
    display: flex;
    justify-items: center;
    align-items: center;
    img {
      .w(100);
      .h(138);
      margin: 10px;
    }
    .introduce-content {
      .w(270);
      .h(138);
      display: flex;
      flex-direction: column;
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
      .cat,
      .star,
      .pubDesc {
        color: #fff;
        font-size: @fs_s;
        opacity: 0.6;
        .l_h(20);

        span {
          background: #3c9fe6;
        }
      }
      .btn {
        .w(231);
        .h(30);
        display: flex;
        justify-content: space-between;
        p {
          text-align: center;
          .w(110);
          .h(30);
          background: hsla(0, 0%, 100%, 0.35);
          color: #fff;
          .l_h(30);
          font-size: @fs_m;
          border-radius: 5px;
        }
      }
    }
  }
  .real-time {
    .w(343);
    .h(20);
    padding: 5px;
    display: flex;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.2);
    .time,
    .watch {
      font-size: @fs_s;
      color: white;
    }
  }
  .jieshao {
    .title {
      font-size: @fs_m;
      color: #fff;
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      opacity: 0.6;
    }
    .jieshao_content_show {
      .w(343);
      .h(90);
      font-size: @fs_l;
      color: #fff;
      .l_h(30);
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .jieshao_content_hidden {
      .w(343);
      font-size: @fs_l;
      color: #fff;
      .l_h(30);
    }
  }
}
</style>>