<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="Vue商城项目">
      <span slot="left" class="back">
        <mt-button icon="back" @click="back" v-show="isshow">返回</mt-button>
      </span>
    </mt-header>
    <transition name="app">
      <router-view/>
    </transition>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" class="mui-tab-item1" id="defaultTab">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="mui-tab-item1">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopcar" class="mui-tab-item1">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">0</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" class="mui-tab-item1">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isshow:false
    }
  },
  created() {},
  methods: {
    back(){
      history.go(-1);
    }
  },
  watch: {
    '$route' (to,from){
      if(to.path == '/home'){
        this.isshow= false;
      }else{
        this.isshow= true;
      }
    }
  },

}
</script>

<style lang="less" scoped>
.app-enter {
  opacity: 0;
  transform: translateX(100%);
}

.app-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
.app-enter-active,
.app-leave-active {
  transition: all 0.5s ease-in-out;
}
.app-leave-active {
  position: absolute;
}
#app {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
}
</style>

