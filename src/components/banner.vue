<template>
  <div class="banner">
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item class="slide1" v-for="item in bannerImgsList" :key="item.img">
        <a :href="item.url || item.src">
          <img :src="item.img || item.src" alt>
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  props: ["bannerImgsList"]
};
</script>
<style lang="less" scoped>
  .banner {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>

