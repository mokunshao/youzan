<template>
  <div>
    <div class="container with-bottom-nav" style="min-height: 667px;">
      <div class="content">
        <div class="js-image-swiper custom-image-swiper custom-image-swiper-single" data-images="1">
          <Swiper :bannerList="bannerList" v-if="bannerList"/>
        </div>
        <div class="section-title">优店推荐</div>
        <div class="section-content shops">
          <div class="shop-wrap">
            <div class="shop-item">
              <a href="https://h5.koudaitong.com/v2/showcase/feature?alias=zjtozpgn">
                <img
                  class="fadeIn"
                  src="https://img.yzcdn.cn/upload_files/2016/09/23/FgQUVNXnvpFKFl1DIN2LXhPA1cxy.png?imageView2/2/w/300/h/0/q/75/format/png"
                >
              </a>
            </div>
            <div class="shop-item">
              <a href="https://h5.koudaitong.com/v2/feature/1e22e3vtu">
                <img
                  class="fadeIn"
                  src="https://img.yzcdn.cn/upload_files/2016/08/03/FqNGnCQS1eq9nIhRg48E_UfFf9K2.png?imageView2/2/w/300/h/0/q/75/format/png"
                >
              </a>
            </div>
            <div class="shop-item">
              <a href="https://h5.koudaitong.com/v2/feature/8oups7zk">
                <img
                  class="fadeIn"
                  src="https://img.yzcdn.cn/upload_files/2016/08/05/Fv5hhMZrtPZQWE7fape0ddEYtSuy.png?imageView2/2/w/300/h/0/q/75/format/png"
                >
              </a>
            </div>
          </div>
        </div>
        <div class="section-content daily">
          <ul></ul>
        </div>
        <div class="line-block line-block-gray">
          <div class="lineblock-title">
            <span class="lineblock-font">最热商品推荐</span>
          </div>
        </div>
        <div class="hot-goods js-waterfull-wrap" data-src>
          <ul
            class="js-list js-lazy"
            data-src
            v-infinite-scroll="getLists"
            infinite-scroll-disabled="loading"
            infinite-scroll-distance="0"
          >
            <li v-for="(item,index) in list" :key="index">
              <div class="goods-item">
                <a
                  href="https://h5.youzan.com/v2/showcase/goods?alias=2fwig6rnqfq6m&amp;source=yzapp&amp;f_platform=yzapp"
                >
                  <div class="thumb img-box">
                    <img class="fadeIn" :src="item.img">
                  </div>
                  <div class="detail">
                    <div class="title">{{item.name}}</div>
                    <div class="price">￥{{item.price}}</div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <div class="loading-more" v-show="loading">
            <span></span>
          </div>
          <div class="nothingLeft" v-if="pageNum===pageSize">没有更多商品了</div>
        </div>
        <div class="js-show-find category-guid" style="display: none;"></div>
      </div>
      <Footer/>
    </div>
  </div>
</template>

<script>
import "../../modules/css/common.css";
import "./index.css";
import axios from "axios";
import { InfiniteScroll } from "mint-ui";
import Vue from "vue";
import Footer from "../../components/Footer.vue";
import Swiper from "../../components/Swiper.vue";

Vue.use(InfiniteScroll);

export default {
  components: {
    Footer,
    Swiper
  },
  data() {
    return {
      list: null,
      loading: false,
      pageNum: 0,
      allLoaded: false,
      pageSize: 5,
      bannerList: null
    };
  },
  methods: {
    getLists() {
      if (!this.allLoaded) {
        if (this.pageNum < this.pageSize) {
          this.loading = true;
          axios
            .post(
              "https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/index/hotLists",
              {
                pageNum: this.pageNum,
                pageSize: this.pageSize
              }
            )
            .then(res => {
              if (this.list) {
                this.list = this.list.concat(res.data.list);
              } else {
                this.list = res.data.list;
              }
              this.loading = false;
            });
          this.pageNum += 1;
        }
      } else {
        this.allLoaded = true;
      }
    },
    getBanner() {
      axios
        .get(
          "https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/index/banner"
        )
        .then(res => {
          this.bannerList = res.data.bannerList;
        });
    }
  },
  mounted() {
    this.getLists();
    this.getBanner();
  }
};
</script>

<style>
.nothingLeft{
  text-align: center;
  margin: 10px;
}
</style>
