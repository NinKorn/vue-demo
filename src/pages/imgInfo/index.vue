<template>
  <div class="img-info">
    <div class="title">
      <h2>{{imgInfo.title}}</h2>
      <div class="sub-title">
        <span>发表时间：{{imgInfo.add_time | getTime}}</span>
        <span>点击{{imgInfo.click}}次</span>
      </div>
    </div>
    <hr>

    <!-- 图片缩略图 -->
    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in imgList"
      :src="item.src" height="100" @click="$preview.open(index, imgList)"
      :key="item.src"
      >
    </div>

    <!-- 图片文字 -->
    <div class="content" v-html="imgInfo.content"></div>
    <comment :id="id"></comment>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      imgInfo: {},
      imgList: []
    };
  },
  created() {
    this.getImgInfo();
    this.getImgList();
  },
  methods: {
    //获取图文详情列表
    getImgInfo() {
      this.$http.get("api/getimageInfo/" + this.id).then(res => {
        this.imgInfo = res.body.message[0];
      });
    },
    //获取缩略图
    getImgList() {
      this.$http.get("api/getthumimages/" + this.id).then(res => {
        console.log(res);
        this.imgList = res.body.message;
      });
    }
  }
};
</script>

<style lang="less" scoped>
</style>


