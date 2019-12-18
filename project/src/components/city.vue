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
      new Bs(".city_box");
    }
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
    height: 100%;
    overflow: scroll;
    .wraper {
      ul {
        li {
          background-color: #ddd;
          font-size: @fs_xxxl;
          p {
            .h(45);
            .l_h(45);
            font-size: @fs_l;
            border-bottom: 1px solid #c8c7cc;
            background-color: #ebebeb;
            color: #333;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>