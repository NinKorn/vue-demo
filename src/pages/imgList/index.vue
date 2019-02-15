<template>
  <div>
    <div class="top-scroll">
      <div
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', { 'mui-active' : item.id == 0 } ]"
            v-for="(item) in imgCategoryList"
            :key="item.id"
            @click="getImgList(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <div class="img-center">
      <ul>
        <li v-for="item in imgList" :key="item.id">
          <img alt v-lazy="item.img_url">
          <div class="text-center">
            <h2>{{item.title}}</h2>
            <div class="text-body">{{item.zhaiyao}}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mui from "@/lib/mui/js/mui.js";

export default {
  data() {
    return {
      imgCategoryList: [],
      imgList: []
    };
  },
  created() {
    this.getImgCategory();
    this.getImgList(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getImgCategory() {
      this.$http.get("api/getimgcategory").then(res => {
        res.body.message.unshift({
          title: "全部",
          id: 0
        });
        this.imgCategoryList = res.body.message;
      });
    },
    //获取图文
    getImgList(id) {
      this.$http.get("api/getimages/" + id).then(res => {
        console.log(res);
        this.imgList = res.body.message;
      });
    },
    //点击获取不同的图
  }
};
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.img-center {
  ul {
    padding: 10px;
    li {
      text-align: center;
      position: relative;
      margin-bottom: 10px;
      img {
        width: 100%;
      }
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .text-center {
        text-align: left;
        background-color: rgba(0, 0, 0, 0.4);
        max-height: 88px;
        color: #fff;
        position: absolute;
        bottom: 0;
        h2 {
          font-size: 15px;
          font-weight: 600;
        }
        .text-body {
          font-size: 13px;
        }
      }
    }
  }
}
</style>

