<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide" v-for="(item,index) in bannerList" :key="index">
        <a class="js-no-follow" href="https://h5.koudaitong.com/v2/index/rukou">
          <img class="goods-main-photo fadeIn" :src="item.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.css";

export default {
  name: "Swiper",
  props: ["bannerList"],
  mounted() {
    new Swiper(".swiper-container", {
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      }
    });
  }
};
</script>