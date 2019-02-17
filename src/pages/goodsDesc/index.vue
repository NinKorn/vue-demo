<template>
  <div class="goods-desc">
    <div class="title">{{ desc.title}}</div>
    <hr>
    <div class="body" v-html="desc.content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      desc: {},
      id: this.$route.params.id
    };
  },
  created() {
    this.getDesc();
  },
  methods: {
    //获取图文信息
    getDesc() {
      this.$http.get("api/goods/getdesc/" + this.id).then(res => {
        this.desc = res.body.message[0];
      });
    }
  }
};
</script>

<style lang="less">
.goods-desc {
  padding: 0 5px;
  .title {
    margin: 15px 0;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
  .body {
    p {
      .gomeImgLoad {
        width: 100%;
      }
    }
  }
}
</style>
