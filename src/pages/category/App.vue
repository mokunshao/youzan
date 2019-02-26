<template>
  <div>
    <div class="container with-bottom-nav" style>
      <div class="custom-search js-search-bar">
        <form @submit.prevent="goToSearch()">
          <input
            type="search"
            class="custom-search-input"
            autocomplete="off"
            name="keyword"
            v-model="keyword"
            placeholder="搜索更赞的商品"
          >
          <span class="icon-custom-search"></span>
        </form>
        <button class="custom-search-type-selection-btn">商品</button>
        <span class="cancel">取消</span>
        <div class="search-type-dropdown-menu" style="display: none;">
          <span class="search-type-dropdown-menu-indicator">
            <i></i>
          </span>
          <div class="drop-menu-content">
            <div class="search-type-goods">
              <i class="icon-goods"></i>
              <span>商品</span>
            </div>
            <div class="search-type-dropdown-menu-divider"></div>
            <div class="search-type-shop">
              <i class="icon-shop"></i>
              <span>店铺</span>
            </div>
          </div>
        </div>
      </div>
      <div class="search-content" style="display: none;"></div>
      <div class="content" style>
        <div class="class-nav">
          <div id="scroll-nav" style>
            <ul class="nav" id="scroll-nav-content" style=" transform: translate3d(0px, 0px, 0px);">
              <li
                v-for="(item,index) in topList"
                :key="index"
                @click="getSubList(index)"
                class="category-name js-category-nam e"
                :class="{active:index===topListIndex}"
                data-cid="-1"
              >{{item.name}}</li>
            </ul>
          </div>
        </div>
        <div class="class-category">
          <div id="scroll-main-wrap" class="main-content">
            <div
              class="js-main-content inner-content"
              style="transform: translate3d(0px, 0px, 0px); "
              v-if="topListIndex===0"
            >
              <div class="hot-wrap">
                <div class="hot-goods">
                  <div class="hot-title">
                    <p class="pull-left">热销商品榜</p>
                    <a
                      href="https://maijia.youzan.com/mars/rank/hotgoods"
                      class="pull-right icon-right"
                    >更多</a>
                  </div>
                  <ul v-if="ranking">
                    <li class="goods-item" v-for="(item,index) in ranking.topGoods" :key="index">
                      <a :href="'goods.html?id='+item.id">
                        <div class="thumb badge center-img">
                          <img :src="item.img">
                          <span class="num">{{index+1}}</span>
                        </div>
                        <div class="detail">
                          <div class="title">{{item.name}}</div>
                          <div class="price">￥{{item.price}}</div>
                          <div class="recommend">
                            <span>推荐值:</span>
                            <span>{{item.recommend}}</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="hot-shops" style="position: relative;">
                  <div class="hot-title">
                    <p class="pull-left">TOP店铺榜</p>
                    <a
                      href="https://maijia.youzan.com/mars/rank/hotshops"
                      class="pull-right icon-right"
                    >更多</a>
                  </div>
                  <ul v-if="ranking">
                    <li class="shop-item" v-for="(item,index) in ranking.topShops" :key="index">
                      <div class="shop-title">
                        <span class="badge">{{index+1}}</span>
                        <a
                          href="https://h5.youzan.com/v2/showcase/homepage?kdt_id=10695955&amp;source=yzapp"
                        >{{item.name}}</a>
                        <span class="follows">/ 关注度: {{item.followed}}</span>
                      </div>
                      <ul class="shop-images">
                        <li v-for="(item,index) in item.productImgs" :key="index">
                          <a
                            href="https://h5.youzan.com/v2/showcase/homepage?kdt_id=10695955&amp;source=yzapp"
                          >
                            <img :src="item.img">
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div class="hot-keywords">
                  <div class="hot-title">
                    <p class="pull-left">热搜词排行</p>
                  </div>
                  <ul class="keywords-list" v-if="ranking">
                    <li v-for="(item,index) in ranking.topKeywords" :key="index">
                      <a
                        href="javascript:;"
                        class="js-hot-keyword"
                        @click="goToSearch2(item.keyword)"
                      >{{item.keyword}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              id="scroll-main-content"
              class="js-main-content inner-content"
              style=" transform: translate3d(0px, 0px, 0px);"
              v-if="topListIndex>0"
            >
              <h3 class="category-title">热门品牌</h3>
              <ul class="category-content" v-if="subList">
                <li
                  v-for="(item,index) in subList.brands"
                  :key="index"
                  class="category-item js-category-item"
                  data-item-id="85"
                  :data-item-name="item.name"
                  @click="goToSearch2(item.name)"
                >
                  <img :src="item.img" :alt="item.name" class="category-img">
                  <span class="category-item-name">{{item.name}}</span>
                </li>
              </ul>
              <h3 class="category-title">热门分类</h3>
              <ul class="category-content" v-if="subList">
                <li
                  v-for="(item,index) in subList.categories"
                  :key="index"
                  class="category-item js-category-item"
                  data-item-id="10"
                  :data-item-name="item.name"
                  @click="goToSearch2(item.name)"
                >
                  <img :src="item.img" :alt="item.name" class="category-img">
                  <span class="category-item-name">{{item.name}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer currentTabIndex="1"/>
  </div>
</template>

<script>
import "../../modules/css/common.css";
import "./category.css";
import Footer from "../../components/Footer.vue";
import axios from "axios";

export default {
  data() {
    return {
      topList: null,
      topListIndex: 0,
      keyword: null,
      subList: null,
      ranking: null
    };
  },
  components: {
    Footer
  },
  methods: {
    getTopList() {
      axios
        .get(
          "https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/category/topList"
        )
        .then(e => (this.topList = e.data));
    },
    getSubList(index) {
      this.topListIndex = index;
      if (index === 0) {
        this.getRanking();
      } else {
        axios
          .post(
            "https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/category/subList",
            { index }
          )
          .then(e => (this.subList = e.data.subList));
      }
    },
    getRanking() {
      axios
        .get(
          "https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/getRank"
        )
        .then(e => {
          this.ranking = e.data.ranking;
        });
    },
    goToSearch() {
      location.href = `search.html?keyword=${this.keyword}`;
    },
    goToSearch2(keyword) {
      location.href = `search.html?keyword=${keyword}`;
    }
  },
  mounted() {
    this.getTopList();
    this.getRanking();
  }
};
</script>

<style>
</style>
