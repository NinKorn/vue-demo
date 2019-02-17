<template>
  <div class="goodsinfo-container">
    <!-- 购物车小球动画 -->
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" name="ball">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- 轮播图子组件 -->
          <banner :bannerImgsList="goodsBanner"></banner>
        </div>
      </div>
    </div>

    <!-- 商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">{{ goodsInfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{ goodsInfo.market_price }}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">￥{{ goodsInfo.sell_price }}</span>
          </p>
          <div class="numbox">
            <span class="title">购买数量：</span>
            <input type="button" value="-" @click="num >= 2 && num--">
            <input type="number" v-model="num">
            <input type="button" value="+" @click="num <= goodsInfo.stock_quantity && num++">
          </div>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" :disabled="isballFlag" size="small" @click="ballFlag = !ballFlag">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsInfo.goods_no }}</p>
          <p>库存情况：{{ goodsInfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsInfo.add_time | getTime }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goGoodsDesc(goodsInfo.id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goGoodsCom(goodsInfo.id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ballFlag: false,
      isballFlag: false,
      num: 1,
      id: this.$route.params.id,
      goodsInfo: {},
      goodsBanner: []
    };
  },
  created() {
    this.getGoodsInfo();
    this.getGoodsBanner();
  },
  methods: {
    getGoodsInfo() {
      this.$http.get("api/goods/getinfo/" + this.id).then(res => {
        this.goodsInfo = res.body.message[0];
      });
    },
    //获取商品详情轮播图
    getGoodsBanner() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        this.goodsBanner = res.body.message;
      });
    },
    beforeEnter(el) {
      this.isballFlag = !this.isballFlag;
      setTimeout(() => {
        this.isballFlag = !this.isballFlag;
      }, 600);
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${xDist}px, ${yDist}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter() {
      this.ballFlag = !this.ballFlag;
    },
    goGoodsDesc(id) {
      this.$router.push("/home/goodsDesc/" + id);
    },
    goGoodsCom(id) {
      this.$router.push("/home/goodsCom/" + id);
    }
  }
};
</script>

<style lang="less" scoped>
.ball {
  position: absolute;
  left: 133px;
  z-index: 9;
  top: 397px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
}
.numbox {
  display: flex;
  height: 50px;
  align-items: center;
  input {
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 0;
    text-align: center;
    border-radius: 0;
    &[type="number"] {
      border-left: 0;
      border-right: 0;
      font-size: 12px;
      color: gray;
      min-width: 35px;
    }
  }
}
.mui-card-footer {
  flex-wrap: wrap;
  button {
    margin: 10px 0;
  }
}
</style>

