<template  id="comming">
  <div class="comming">
    <div class="comming-box">
      <div class="comming-content">
        <!-- 里面的容器 -->
        <p class="title">近期最受期待</p>
        <div class="expected-box">
          <!-- 视图层 -->
          <div class="expected">
            <div
              class="expected_list"
              v-for="(item,index) in list"
              :key="index"
              @click="jump('/moveie/introduce',item.nm,item.img,item.id)"
            >
              <div class="list_img">
                <img :src="item.img" />
                <p class="wish">{{item.wish}}人想看</p>
              </div>

              <p class="name">{{item.nm}}</p>
              <p class="date">{{item.comingTitle}}</p>
            </div>
          </div>
        </div>

        <hr />
        <!-- 下面 -->
        <div class="comming">
          <div v-for="(sitem,index) in data" :key="index">
            <p class="comingTitle">{{sitem.comingTitle}}</p>
            <div class="main" @click="jump('/moveie/introduce',sitem.nm,sitem.img,sitem.id)">
              <img :src="sitem.img" alt />
              <div class="main_content">
                <h3>
                  {{sitem.nm}}
                  <span>{{sitem.version}}</span>
                </h3>
                <p class="pingjia" v-if="sitem.globalReleased">
                  观众评:
                  <span>{{sitem.sc}}</span>
                </p>
                <p class="wish" v-else>
                  <span>{{sitem.wish}}</span>人想看
                </p>
                <p class="star">主演:{{sitem.star}}</p>
                <p class="showinfo">{{sitem.showInfo}}</p>
              </div>
              <div class="btn">
                <p v-if="sitem.globalReleased" class="red">购买</p>
                <p v-else class="blue">预售</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BS from "better-scroll";
import { getcomming, getcomme, getshowing, getmoredata } from "../api/index";
import { getmoveieimg, getmore } from "../utils/moveie";
export default {
  data() {
    return {
      list: [],
      data: []
    };
  },
  methods: {
    initbs() {
      let myscroll = new BS(".comming-box", {
        click: true,
        pullUpLoad: true
      });
      myscroll.on("pullingUp", () => {
        getshowing().then(data => {
          let moredata = getmore(data.movieIds);
          getmoredata(moredata).then(data => {
            let result = getmoveieimg(data.coming);
            console.log(result);
            this.data = result;
          });
        });
        myscroll.finishPullUp();
      });

      new BS(".expected-box", {
        scrollX: true,
        preventDefault: false,
        click: true
      });
    },
    jump(path, name, img, id) {
      this.$router.push({
        path: path,
        query: { name: name, img: img, id: id }
      });
    }
  },
  created() {
    getcomming().then(data => {
      let list = getmoveieimg(data.coming);
      this.list = list;
    });

    getcomme().then(res => {
      let data = getmoveieimg(res.coming);
      this.data = data;
      console.log(this.data);
    });
  },
  mounted() {
    this.initbs();
  }
};
</script>

<style lang="less" scoped>
@import url("../style/index.less");

.comming-box {
  .w(375);
  .h(720);
  overflow: hidden;
  .comming-content {
    .title {
      margin: 3px;
      .w(375);
      .h(20);
      font-size: @fs_s;
      color: #333333;
    }
    .expected-box {
      .w(375);
      .h(200);
      overflow: hidden;
      .expected {
        position: absolute;
        display: flex;

        z-index: 1;
        .h(200);
        .expected_list {
          margin: 10px;
          .h(200);
          .list_img {
            .w(85);
            .h(115);
            position: relative;
            img {
              .w(85);
              .h(115);
            }
            .wish {
              .w(85);
              font-size: @fs_s;
              color: #faaf00;
              position: absolute;
              bottom: 0;
              text-align: center;
            }
          }

          .name {
            font-size: @fs_s;
            text-align: center;
            color: #222222;
            margin: 2px;
          }
          .date {
            font-size: @fs_s;
            color: #9999;
            margin: 2px;
          }
        }
      }
    }
    .comming {
      .comingTitle {
        font-size: @fs_m;
        color: #333;
      }
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
          .showinfo,
          .wish {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            font-size: @fs_m;
            color: #777;
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
}
</style>
