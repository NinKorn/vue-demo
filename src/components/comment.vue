<template>
  <div class="template">
    <h3 class="comment-title">发表评论</h3>
    <hr>
    <textarea maxlength="150" placeholder="输入内容请不要超过150字"></textarea>
    <mt-button size="large" type="primary">发表评论</mt-button>
    <div class="comment-list">
      <ul>
        <li v-for="(item,index) in commentList" :key="index">
          <div class="cmt-title">
            <span>第{{index+1}}楼</span>
            <span>用户:{{item.user_name}}</span>
            <span>发表时间:{{item.add_time | getTime}}</span>
          </div>
          <div class="cmt-content">{{item.content}}</div>
        </li>
      </ul>
    </div>
    <mt-button size="large" type="danger" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commentList: [],
      pageindex: 1
    };
  },
  created() {
    this.getCommentList();
  },
  methods: {
    getMore() {
      this.pageindex += 1;
      this.getCommentList();
    },
    getCommentList() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageindex)
        .then(res => {
            console.log(res.body)
          this.commentList = this.commentList.concat(res.body.message);
        });
    }
  },
  props: {
    id: ""
  }
};
</script>

<style lang="less" scoped>
.template {
    padding: 5px 0;
  .comment-title {
    font-size: 18px;
    font-weight: 700;
  }
  .comment-list {
    margin: 10px 0;
    li {
      .cmt-title {
        padding: 7px 0;
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        background-color: #ccc;
      }
      .cmt-content {
        padding: 7px 0;
        line-height: 25px;
        text-indent: 2em;
      }
    }
  }
}
</style>

