<template id="city">
  <div class="city">
    <div class="city_box">
      <div class="wraper">
        <!-- 左侧的城市列表 -->
        <ul>
          <li v-for="(item,index) in city" :key="index" ref="test">
            <div class="title">{{item.title}}</div>
            <ol>
              <!-- 循环城市列表 -->
              <li v-for="(sitem, index) in item.list" :key="index">
                <p>{{sitem.nm}}</p>
              </li>
            </ol>
          </li>
        </ul>
      </div>
    </div>
    <!-- 右侧城市分类 -->
    <div class="right" ref="=text">
      <p v-for="(item,index) in city" :key="index" @click="jump(index)">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import { getcity } from "../api/index";
import { handlecitydata } from "../utils/city";
import Bs from "better-scroll";
export default {
  data() {
    return {
      city: []
    };
  },

  created() {
    getcity().then(data => {
      this.city = handlecitydata(data.cts);
    });
  },
  methods: {
    initBS() {
      this.bs = new Bs(".city_box");
    },
    jump(index) {
      this.bs.scrollToElement(this.$refs.test[index]);
    }
  },
  mounted() {
    this.initBS();
  }
};
</script>

<style lang="less">
@import url("../style/index.less");
.city {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;

  .city_box {
    .w(375);
    .h(700);
    overflow: hidden;
    background-color: #ebebeb;
    .wraper {
      ul {
        li {
          .title {
            padding-left: 25px;
            background-color: #ebebeb;
            font-size: @fs_m;
            .h(30);
            .w(350);
            background: #ddd;
            .l_h(30);
            color: #333;
          }

          p {
            margin-left: 15px;

            .h(45);
            .l_h(45);
            font-size: @fs_l;
            border-bottom: 1px solid #c8c7cc;

            -webkit-tap-highlight-color: transparent;
            color: #333;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    }
  }
  .right {
    position: fixed;
    top: 30px;
    right: 10px;
    z-index: 10;

    p {
      .w(30);
      .h(25);
      .l_h(25);
      text-align: center;
      font-size: @fs_s;
    }
  }
}
</style>