<template>
  <div id="app">
    <!-- 头部 -->
    <mt-header fixed title="Vue商城项目"></mt-header>
    <transition>
      <router-view/>
    </transition>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
      <a href="home.html" class="mui-tab-item mui-active" id="defaultTab">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a href="message.html" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">商城</span>
      </a>
      <a href="setting.html" class="mui-tab-item">
        <span class="mui-icon mui-icon-home">
          <span class="mui-badge">5</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="less" scoped>
#app {
  padding-top: 40px;
}
</style>

