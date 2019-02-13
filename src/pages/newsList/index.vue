<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            {{item.title}}
            <p>
              <span class="mui-ellipsis">发表时间:{{item.add_time}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("http://lovegf.cn:8899/api/getnewslist")
      .then(res => {
        this.newslist = res.body.message;
      });
    }
  }
};
</script>

<style lang="less" scoped>
  .mui-media-body {
    font-weight: 600;
    font-size: 14px;
  }
</style>

