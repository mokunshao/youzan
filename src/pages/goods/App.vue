<template>
  <div v-cloak>
    <div v-if="detail">
      <div class="container wap-goods internal-purchase" style="min-height: 617px;">
        <div class="content no-sidebar">
          <div class="content-body">
            <Swiper :bannerList="detail.imgs"/>
            <div class="goods-header">
              <h2 class="title">{{detail.title}}</h2>
              <span
                class="hide js-add-wish js-wish-animate wish-add font-size-12 tag tag-redf30 pull-right"
              >喜欢</span>
              <div class="goods-price">
                <div class="current-price">
                  <span>¥</span>
                  <i class="js-goods-price price">{{detail.price}}</i>
                </div>
                <span class="btn btn-blue btn-retail hide js-retail-btn">门店有售</span>
                <div class="original-price">{{detail.originalPrice}}</div>
              </div>
              <hr class="with-margin-l">
              <div class="stock-detail">
                <dl>
                  <dt>运费:</dt>
                  <dd class="js-postage-desc" data-postage="免运费">{{detail.postage}}</dd>
                </dl>
                <dl>
                  <dt>剩余:</dt>
                  <dd>{{detail.remain}}</dd>
                </dl>
                <dl>
                  <dt>销量:</dt>
                  <dd>{{detail.sold}}</dd>
                </dl>
              </div>
            </div>
            <div class="sku-detail adv-opts">
              <div class="sku-detail-inner adv-opts-inner">
                <dl class="sku-group select-sku js-select-sku" @click="chooseSku(1)">
                  <dt>
                    <span class="js-sku-label">选择</span>：
                  </dt>
                  <dd class="js-sku-value">
                    <span class="sku-item">净含量</span>
                  </dd>
                </dl>
              </div>
            </div>
            <div class="js-store-info">
              <div class="block block-list goods-store">
                <div class="custom-store block-item">
                  <a
                    class="custom-store-link clearfix"
                    href="https://h5.youzan.com/v2/home/cz0mk59k"
                  >
                    <div class="custom-store-img"></div>
                    <div class="custom-store-name">{{detail.shopName}}</div>
                    <span class="custom-store-enter">进入店铺</span>
                  </a>
                </div>
                <a class="offline-store block-item js-retail-store hide">
                  <span class="offline-store-img"></span>
                  <span class="offline-store-name">线下门店</span>
                  <div class="offline-store-branch js-retail-store-name"></div>
                </a>
                <div class="renzheng block-item">
                  <span
                    class="js-rz-item-alert rz-item"
                    v-for="item in detail.identification"
                    :key="item"
                  >
                    <span class="rz-name font-size-12 c-gray-darker">{{item}}</span>
                  </span>
                </div>
              </div>
            </div>
            <a class="js-package-buy-block hide"></a>
            <div class="js-detail-container" style="margin-top: 10px;">
              <div class="js-tabber-container goods-detail">
                <div class="js-tabber tabber tabber-n2 clearfix orange">
                  <!-- <button data-type="goods" class="active">商品详情</button>
                  <button data-type="sales">本店成交</button>-->
                  <button
                    v-for="(item,index) in detailTab"
                    :key="item"
                    :class="{active:index===tabIndex}"
                    @click="changeTab(index)"
                  >{{item}}</button>
                </div>

                <div class="js-tabber-content">
                  <div class="js-part" data-type="sales" v-show="tabIndex===1">
                    <div class="js-traderecord-list block-list-traderecord">
                      <div class="list-header">
                        <span class="col-1">买家</span>
                        <span class="col-2 center">成交时间</span>
                        <span class="col-3 center">数量</span>
                      </div>
                      <div class="js-list b-list block block-list">
                        <div class="block-item" v-for="(item,index) in deals" :key="index">
                          <span class="col-1 c-gray-darker">{{item.buyer}}</span>
                          <span class="col-2 c-gray-dark center">{{item.time}}</span>
                          <span class="col-3 c-gray-darker center">{{item.num}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="js-part js-goods-detail goods-tabber-c"
                    data-type="goods"
                    v-html="detail.description"
                    v-show="tabIndex===0"
                  ></div>
                </div>
              </div>
            </div>
            <div class="js-bottom-opts js-footer-auto-ele stick-bottom">
              <div class="stick-bottom-icons">
                <a href="javascript:;" class="js-yz-im icons icons-im">店主</a>
                <a
                  href="https://h5.youzan.com/v2/showcase/homepage?kdt_id=16546132"
                  class="js-call-im icons icons-home"
                >店铺</a>
                <a href="javascript:;" class="js-yz-zan icons icons-zan">收藏</a>
              </div>
              <div class="stick-bottom-btns">
                <!-- 尚未开售 -->
                <div class="btn-cart" @click="chooseSku(2)">
                  <a class="js-add-cart">加入购物车</a>
                </div>
                <div class="btn-buy" @click="chooseSku(3)">
                  <a href="javascript:;" class="js-buy-it">立即购买</a>
                </div>
              </div>
            </div>
            <!-- <div id="right-icon" class="js-right-icon hide">
          <div class="js-right-icon-container right-icon-container clearfix">
            <a id="global-cart" href="https://h5.youzan.com/v2/trade/cart?kdt_id=16546132" class="icon hide" style="">
              <p class="icon-img"></p>
              <p class="icon-txt">购物车</p>
            </a>
            <a class="js-show-more-btn icon show-more-btn hide"></a>
          </div>
            </div>-->
            <div id="right-icon" class="js-right-icon" v-show="isAddCart">
              <div class="js-right-icon-container right-icon-container clearfix">
                <a id="global-cart" :href="'cart.html?id='+id" class="icon new s0" style>
                  <p class="icon-img"></p>
                  <p class="icon-txt">购物车</p>
                </a>
                <a class="js-show-more-btn icon show-more-btn"></a>
              </div>
            </div>
            <div class="js-recommend">
              <p class="center font-size-14 c-black" style="padding: 5px 0;margin-top: 10px;">更多精选商品</p>
              <div class="js-recommend-goods-list">
                <ul
                  class="js-goods-list sc-goods-list pic clearfix size-1"
                  data-size="1"
                  data-showtype="card"
                  style="visibility: visible;"
                >
                  <!-- 商品区域 -->
                  <!-- 展现类型判断 -->
                  <li class="js-goods-card goods-card small-pic card">
                    <a
                      href="https://h5.youzan.com/v2/goods/2ov83y79gkn38"
                      class="js-goods link clearfix"
                      target="_blank"
                      data-goods-id="343086880"
                      title="【28号陆续发货】寻找田野|青海有机鲜枸杞 营养价值高安全无农残 吃水果一样吃枸杞"
                    >
                      <div
                        class="photo-block"
                        data-width="750"
                        data-height="750"
                        style="background-color: rgb(255, 255, 255);"
                      >
                        <img
                          class="goods-photo js-goods-lazy"
                          data-src="https://img.yzcdn.cn/upload_files/2017/07/11/FoN0SazpvslhoiiyuHETeyWHqzTE.jpg?imageView2/2/w/280/h/280/q/75/format/webp"
                          src="https://img.yzcdn.cn/upload_files/2017/07/11/FoN0SazpvslhoiiyuHETeyWHqzTE.jpg?imageView2/2/w/280/h/280/q/75/format/webp"
                          style
                        >
                      </div>
                      <div class="info clearfix info-title info-price btn0">
                        <p class="goods-title">
                          【28号陆续发货】寻找田野|青海有机鲜枸杞
                          营养价值高安全无农残 吃水果一样吃枸杞
                        </p>
                        <p class="goods-sub-title c-black hide"></p>
                        <p class="goods-price">
                          <em>¥88.00</em>
                        </p>
                        <p class="goods-price-taobao hide"></p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <p class="center" style="margin: 10px 0 20px;">
                <a
                  href="https://h5.youzan.com/v2/showcase/homepage?kdt_id=16546132"
                  class="center btn btn-white btn-xsmall font-size-14"
                  style="padding:8px 26px;"
                >进店逛逛&gt;</a>
              </p>
            </div>
          </div>
          <div id="shop-nav"></div>
        </div>
      </div>
      <div class="js-footer" style="min-height: 1px;">
        <div>
          <div class="footer">
            <div class="copyright">
              <div class="ft-links">
                <a
                  href="https://h5.youzan.com/v2/showcase/homepage?kdt_id=16546132"
                  target="_blank"
                >店铺主页</a>
                <a
                  href="https://h5.youzan.com/v2/showcase/usercenter?kdt_id=16546132"
                  target="_blank"
                >会员中心</a>
                <a href="javascript:;" class="js-open-follow">关注我们</a>
                <a href="https://h5.youzan.com/v2/showcase/cert" target="_blank">店铺信息</a>
                <!-- 第三方app隐藏topbar时，需要在底部显示购物记录入口 -->
              </div>
              <div
                class="ft-copyright"
                style="background-image: url(https://img.yzcdn.cn/upload_files/2017/06/16/FgtL3QzprXTGrVPaolozNT08Xs2K.png);"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="search-bar" style="display:none;">
        <form class="search-form" action="https://h5.youzan.com/v2/search" method="GET">
          <input type="search" class="search-input" placeholder="搜索商品" name="q" value>
          <input type="hidden" name="kdt_id" value="16546132">
          <a class="js-search-cancel search-cancel" href="javascript:;">取消</a>
          <span class="search-icon"></span>
          <span class="close-icon hide"></span>
        </form>
        <div class="history-wrap center">
          <ul class="history-list search-recom-list js-history-list clearfix"></ul>
          <a class="tag tag-clear js-tag-clear c-gray-darker hide" href="javascript:;">清除历史搜索</a>
        </div>
      </div>
      <!-- 阴影层 -->
      <transition name="fade">
        <div
          id="yFzBKP9GDL"
          style="height: 100%; position: fixed; top: 0px; left: 0px; right: 0px; background-color: rgba(0, 0, 0, 0.7); z-index: 1000; "
          v-show="showSku"
          @click="showSku=false"
        ></div>
      </transition>
      <!-- 规格确认弹窗 popout -->
      <transition name="slide">
        <div
          id="QfEqtDbeK9"
          class="sku-layout sku-box-shadow popup"
          style="overflow: hidden; position: absolute; z-index: 1000; background: white; bottom: 0px; left: 0px; right: 0px; "
          v-show="showSku"
        >
          <div class="sku-layout-title name-card sku-name-card">
            <div class="thumb">
              <img
                class="js-goods-thumb goods-thumb"
                src="https://img.yzcdn.cn/upload_files/2017/07/12/FkSvYz8FLLD9-t0smXO43hF6ov7S.jpg?imageView2/2/w/100/h/100/q/75/format/webp?imageView2/2/w/100/h/100/q/75/format/webp"
                alt
              >
            </div>
            <div class="detail goods-base-info clearfix">
              <p class="title c-black ellipsis">寻找田野|最正宗的上海南汇8424 得奖最多奥运会指定西瓜1只/箱 9-11斤</p>
              <div class="goods-price clearfix">
                <div class="current-price pull-left c-black">
                  <span class="price-name pull-left font-size-14 c-orange">¥</span>
                  <i class="js-goods-price price font-size-16 vertical-middle c-orange">98.00</i>
                </div>
                <div class="original-price vertical-middle font-size-14 line-through">108</div>
              </div>
            </div>
            <div class="js-cancel sku-cancel" @click="showSku=false">
              <div class="cancel-img"></div>
            </div>
          </div>
          <div
            class="sku-detail adv-opts hotel-checkin-select"
            style="border: none; margin: 0; display: none;"
          >
            <div class="sku-detail-inner adv-opts-inner-addons">
              <dl class="sku-group select-sku js-select-checkin-date">
                <dt>时间：</dt>
                <dd class="js-checkin-date-value">选择入住时间</dd>
              </dl>
            </div>
          </div>
          <div class="adv-opts layout-content" style="max-height: 554px;">
            <div class="goods-models js-sku-views block block-list border-top-0">
              <dl class="clearfix block-item sku-list-container">
                <dt class="model-title sku-sel-title">
                  <label>净含量：</label>
                </dt>
                <dd>
                  <ul class="model-list sku-sel-list">
                    <li class="tag sku-tag pull-left ellipsis active">4500g-5000g</li>
                  </ul>
                </dd>
              </dl>
              <dl class="clearfix block-item">
                <dt class="sku-num pull-left">
                  <label>购买数量：</label>
                </dt>
                <dd class="sku-quantity-contaienr">
                  <dl class="clearfix">
                    <div class="quantity">
                      <button class="minus" :class="skuNum===1?'disabled':''" type="button" :disabled="skuNum===1"></button>
                      <input type="text" class="txt" pattern="[0-9]*" v-model="skuNum">
                      <button class="plus" type="button"></button>
                      <div class="response-area response-area-minus" @click="changeSkuNum(-1)"></div>
                      <div class="response-area response-area-plus" @click="changeSkuNum(1)"></div>
                    </div>
                  </dl>
                </dd>
                <dt class="other-info">
                  <div class="stock">剩余450件</div>
                </dt>
              </dl>
              <div class="block-item block-item-messages" style="display: none;"></div>
            </div>
            <!-- <div class="bottom-padding"></div> -->
            <div class="confirm-action content-foot clearfix">
              <!-- 加入购物车 -->
              <div class="big-btn-1-1" v-show="skuType===2" @click="addCart()">
                <a href="javascript:;" class="js-confirm-it big-btn red-btn main-btn">加入购物车</a>
              </div>
              <!-- 立即购买 -->
              <div class="big-btn-1-1" v-show="skuType===3">
                <a href="javascript:;" class="js-confirm-it big-btn red-btn main-btn">下一步</a>
              </div>
              <!-- 选择规格 -->
              <div class="big-btn-2-1" v-show="skuType===1" @click="addCart()">
                <a
                  href="javascript:;"
                  class="js-mutiBtn-confirm cart big-btn orange-btn vice-btn"
                >加入购物车</a>
                <a
                  href="javascript:;"
                  class="js-mutiBtn-confirm confirm big-btn red-btn main-btn"
                >立即购买</a>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="motify" v-show="showAddMessage">
        <div class="motify-inner">已成功添加到购物车</div>
      </div>
    </div>
    <div v-if="!detail" class="loading-more">
      <span></span>
    </div>
  </div>
</template>

<script>
import "./goods_common.css";
import "./goods_custom.css";
import "./goods.css";
import "./goods_theme.css";
import "./goods_mars.css";
import "./goods_sku.css";
import "./goods_base.css";
import axios from "axios";
import qs from "qs";
import Swiper from "../../components/Swiper";

let { id } = qs.parse(location.search.substr(1));

let detailTab = ["商品详情", "本店成交"];

export default {
  components: {
    Swiper
  },
  data() {
    return {
      detail: null,
      detailTab,
      tabIndex: 0,
      deals: null,
      skuType: 1,
      showSku: false,
      skuNum: 1,
      isAddCart: false,
      showAddMessage: false,
      id
    };
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      axios
        .get(
          `https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/getDetail?id=${id}`
        )
        .then(e => {
          this.detail = e.data.detail;
        });
    },
    changeTab(index) {
      this.tabIndex = index;
      if (this.tabIndex === 1) {
        this.getDeals();
      }
    },
    getDeals() {
      axios
        .get(
          `https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/goods/deals?id=${id}`
        )
        .then(e => {
          this.deals = e.data.dealsList;
        });
    },
    chooseSku(type) {
      this.skuType = type;
      this.showSku = true;
    },
    changeSkuNum(num) {
      if (num < 0 && this.skuNum === 1) return;
      this.skuNum += num;
    },
    addCart() {
      axios
        .post(
          "https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/addCart",
          { id, number: this.skuNum }
        )
        .then(e => {
          if (e.data.status) {
            this.chooseSku(2);
            this.isAddCart = true;
            this.showSku = false;
            this.showAddMessage = true;
            setTimeout(() => {
              this.showAddMessage = false;
            }, 2000);
          }
        });
    }
  },
  watch: {
    showSku(val) {
      document.body.style.overflow = val ? "hidden" : "auto";
      document.querySelector("html").style.overflow = val ? "hidden" : "auto";
      document.body.style.height = val ? "100%" : "auto";
      document.querySelector("html").style.height = val ? "100%" : "auto";
    }
  }
};
</script>

<style>
[v-cloak] {
  display: none;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
  transform: translateY(0);
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
