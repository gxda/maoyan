<template  id="showing">
  <div class="showing">
    <div class="showing-content">
      <div class="main" v-for="(item,index) in list" :key="index">
        <img :src="item.img" alt />
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
          <p v-if="item.preShow" class="blue">预售</p>
          <p v-else class="red">购买</p>
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
      let list = this.getmoveieimg(data.movieList);
      this.list = list;
    });
  },
  methods: {
    initbs() {
      new BS(".showing");
    },
    getmoveieimg(data) {
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        let { img } = data[index];
        let img2 = img.split("/")[2];
        let img4 = img.split("/")[4];
        let img5 = img.split("/")[5];
        let image = `https://${img2}/${img4}/${img5}`;
        // console.log(image);
        data[index].img = image;
        // console.log(data[index].img);
      }
      return data;
    }
  },
  mounted() {
    this.initbs();
  }
};
</script>

<style lang="less">
@import url("../style/index.less");
.showing {
  .w(375);
  .h(520);
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
        }
        .pingjia,
        .star,
        .showinfo {
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
