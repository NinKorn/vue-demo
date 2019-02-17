<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goGoodsInfo(item.id)">
      <img :src="item.img_url" alt>
      <div class="title">{{ item.title }}</div>
      <div class="info">
        <p class="price">
          <span>￥{{ item.sell_price }}</span>
          <del>￥{{ item.market_price }}</del>
        </p>
        <div class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </div>
      </div>
    </div>
    <mt-button size="large" type="danger" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageindex: 1,
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    //获取商品列表
    getGoodsList() {
      this.$http.get("api/getgoods?pageindex=" + this.pageindex).then(res => {
          res.body.message.concat();
        this.goodsList = res.body.message;
      });
    },
    getMore() {
        this.pageindex++
        this.getGoodsList()
    },
    goGoodsInfo(id){
        this.$router.push('/home/goodsInfo/'+id)
    }
  }
};
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 5px;
  .goods-item {
    background-color: #fff;
    width: 49%;
    padding: 5px;
    margin-bottom: 10px;
    box-shadow: 0 0 8px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    .title {
      font-size: 15px;
      font-weight: 600;
      margin: 15px 0;
    }
    .info {
      .price {
        span {
          color: red;
          font-size: 16px;
          font-weight: 600;
          margin-right: 20px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        span {
          font-size: 14px;
          color: #aaa;
        }
      }
    }
  }
}
</style>

