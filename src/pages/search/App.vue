<template>
  <div>
    <div class="container with-top-search" style="min-height: 667px;">
      <div class="custom-search js-search-bar">
        <form>
          <input
            type="search"
            class="custom-search-input"
            autocomplete="off"
            name="keyword"
            :value="keyword"
            placeholder="搜索更赞的商品"
            style="padding-left: 66px;"
          >
          <span class="icon-custom-search"></span>
        </form>
        <button class="custom-search-type-selection-btn custom-search-type-selection-btn-focus">商品</button>
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
      <div class="content">
        <div class="search-wrap js-waterfull-wrap">
          <ul class="js-list" v-if="searchResult">
            <li class="goods-item" v-for="item in searchResult" :key="item.id">
              <a
                href="https://h5.youzan.com/v2/showcase/goods?alias=2755moo9i2r1c&amp;source=yzapp&amp;f_platform=yzapp"
              >
                <div class="thumb">
                  <img :src="item.img">
                  <i class="sell-out" v-if="!item.inStock"></i>
                </div>
                <div class="detail">
                  <div class="title">{{item.name}}</div>
                  <div class="meta relative">
                    <span class="price">￥{{item.price}}</span>
                    <span class="ship pull-right" v-if="item.freeShipping">包邮</span>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <div class="list-finished">已经没有更多了</div>
        </div>
      </div>
      <div
        class="go-to-top"
        style="display: block; transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
      ></div>
    </div>
  </div>
</template>

<script>
import "./search.css";
import "../../modules/css/common.css";
import qs from "qs";
import axios from "axios";

let { keyword } = qs.parse(location.search.substring(1));

export default {
  data() {
    return {
      keyword,
      searchResult: null
    };
  },
  mounted() {
    this.getSearchReasult(this.keyword);
  },
  methods: {
    getSearchReasult(keyword) {
      axios
        .get(
          `https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/search?keyword=${this.keyword}`
        )
        .then(e => {
          this.searchResult = e.data;
        });
    }
  }
};
</script>
