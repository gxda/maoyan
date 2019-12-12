<template  id="showing">
  <div class="showing">
    <div class="showing-content">
      <div
        class="main"
        v-for="(item,index) in list"
        :key="index"
        @click="jump('/cinema/detail',item.nm,item.img,item.id)"
      >
        <img :src="item.img" alt />
        <div class="main_content">
          <h3>
            {{item.nm}}
            <span v-if="item.version">{{item.version}}</span>
          </h3>
          <p class="pingjia" v-if="item.globalReleased">
            {{item.sc===0?'暂无评分':'观众评:'}}
            <span v-if="item.sc!=0">{{item.sc}}</span>
          </p>
          <p class="wish" v-else>
            <span>{{item.wish}}</span>人想看
          </p>
          <p class="star">主演:{{item.star}}</p>
          <p class="showinfo">{{item.showInfo}}</p>
        </div>
        <div class="btn">
          <p v-if="item.globalReleased" class="red">购买</p>
          <p v-else class="blue">预售</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
import { getshowing, getmoredata } from "../api/index";
import { getmoveieimg, getmore } from "../utils/moveie";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    getshowing().then(data => {
      // console.log(data.movieIds);
      let list = getmoveieimg(data.movieList);
      this.list = list;
      // let moredata = getmore(data.movieIds);
      // getmoredata(moredata).then(data => {
      //   console.log(data);
      // });
    });
  },
  methods: {
    initbs() {
      new BS(".showing", { click: true });
    },
    // 跳转到详情页面
    jump(path, name, img, id) {
      this.$router.push({
        path: path,
        query: { name: name, img: img, id: id }
      });
    }
  },
  mounted() {
    this.initbs();
  }
};
</script>

<style lang="less" scoped >
@import url("../style/index.less");
.showing {
  .w(375);
  .h(720);
  overflow: hidden;
  .showing-content {
    .main {
      margin: 10px;
      .w(346);
      .h(114);
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        .w(64);
        .h(90);
      }
      .main_content {
        .w(200);
        padding: 5px;
        h3 {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: @fs_l;
          span {
            background: #3c9fe6;
            margin-left: 5px;
          }
        }
        .pingjia,
        .star,
        .showinfo,
        .wish {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
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
          text-align: center;
          .l_h(27);
          .w(47);
          .h(27);
          font-size: @fs_s;
          color: white;
          border-radius: 5px;
        }
        .red {
          background: #f03d37;
        }
        .blue {
          background: #3c9fe6;
        }
      }
    }
  }
}
</style>
