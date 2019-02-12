<template>
  <div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item class="slide1" v-for="item in bannerImgs" :key="item.img">
        <a :href="item.url">
          <img :src="item.img" alt>
        </a>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="@/assets/menu1.png" alt="">
          <div class="mui-media-body">Home</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="@/assets/menu2.png" alt="">
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="@/assets/menu3.png" alt="">
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="@/assets/menu4.png" alt="">
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="@/assets/menu5.png" alt="">
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
            <img src="@/assets/menu6.png" alt="">
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerImgs: []
    };
  },
  created() {
    this.getBanner();
  },
  methods: {
    getBanner() {
      this.$http.get("http://lovegf.cn:8899/api/getlunbo").then(res => {
        console.log(res.body);
        this.bannerImgs = res.body.message;
      });
    }
  }
};
</script>

<style lang="less">
.home {
  .banner {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mui-grid-view.mui-grid-9 {
      background-color: #fff;
      img {
          width: 70%;
      }
  }
}
</style>

