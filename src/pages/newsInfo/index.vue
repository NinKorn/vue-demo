<template>
  <div class="news-info">
    <h2 class="title">{{this.infoData.title}}</h2>
    <p class="text-time">
      <span>发表时间:{{this.infoData.add_time | getTime}}</span>
      <span>点击：{{this.infoData.click}} 次</span>
    </p>
    <hr>
    <div class="text-content" v-html="this.infoData.content"></div>
    <comment :id="this.id"></comment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      infoData: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("api/getnew/" + this.id).then(res => {
        this.infoData = res.body.message[0]
      });
    }
    }
  }
</script>

<style lang="less">
.news-info {
  margin: 0 4px;
  .title {
    font-size: 16px;
    font-weight: 600;
    padding: 15px 0;
    text-align: center;
    color: red;
  }
  .text-time {
    display: flex;
    justify-content: space-between;
    color: #226aff;
    font-size: 13px;
  }
  .text-content {
    img {
      width: 100%;
    }
  }
}
</style>

