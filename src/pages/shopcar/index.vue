<template>
  <div class="shop-car">
    <!-- 购物车商品列表 -->
    <div class="mui-card shop-car-list">
      <mt-switch v-model="tage"></mt-switch>
      <img src="http://www.lovegf.cn:8899/xm1.jpg" alt>
      <div class="info">
        <h2>苹果Apple iPhone 6 Plus 16G 4G手机（联通三网版）</h2>
        <div class="pre-info">
          <span class="red">￥999</span>
          <div class="numbox">
            <!-- <span class="red">￥999</span> -->
            <input type="button" value="-">
            <input type="number" v-model="num">
            <input type="button" value="+">
          </div>
          <a href="#">删除</a>
        </div>
      </div>
    </div>

    <!-- 结算 -->
    <div class="mui-card payfor">
      <div class="pay-info">
        <p>总计（不含运费）</p>
        <p>已勾选商品1件,总价￥660</p>
      </div>
      <button class="mint-button mint-button--danger mint-button--normal">去结算</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tage: true,
      num: 1
    };
  },
  methods: {}
};
</script>

<style lang="less">
.shop-car {
  .shop-car-list {
    padding: 5px 10px;
    display: flex;
    img {
      width: 80px;
      height: 80px;
    }
    .info {
      h2 {
        font-size: 14px;
      }
      .pre-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .red {
          color: red;
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
      }
    }
  }
  .payfor.mui-card {
    margin: 0;
  }
  .payfor {
    width: 100%;
    position: fixed;
    bottom: 50px;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }
}
</style>

