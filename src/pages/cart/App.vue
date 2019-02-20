<template>
  <div>
    <div class="container" style="min-height: 581px;">
      <div class="content clearfix js-page-content">
        <div id="cart-container">
          <div>
            <div class="js-shop-list shop-list">
              <div class="block block-order block-cart" v-for="shop in cartList" :key="shop.shopId"
              >
                <div class="header">
                  <div class="select-group js-select-group" @click="selectShop(shop)">
                    <span class="check" :class="{checked:shop.checked}" v-show="!editingShop"></span>
                    <span class="check" :class="{checked:shop.removeChecked}" v-show="editingShop"></span>
                  </div>
                  <a class="shop-title">
                    <i class="custom-store-img">店铺：</i>
                    {{shop.shopTitle}}
                  </a>
                  <a
                    href="javascript:;"
                    data-type="cart"
                    class="j-edit-list pull-right c-blue font-size-12 edit-list"
                    @click="edit(shop)"
                  >
                    {{shop.editingMsg}}
                  </a>
                </div>
                <div>
                  <ul class="js-list block block-list block-list-cart border-0">
                    <li
                      class="block-item block-item-cart"
                      v-for="good in shop.goodsList "
                      :key="good.id"
                      :class="{editing:shop.editing}"
                    >
                      <div>
                        <div class="check-container" @click="selectGood(shop,good)">
                          <span class="check" :class="{checked:editingShop? good.removeChecked:good.checked}"></span>
                        </div>
                        <div class="name-card clearfix">
                          <a
                            href="https://h5.youzan.com/v2/showcase/goods?alias=2oivacpjh2ex0"
                            class="thumb js-goods-link"
                          >
                            <img class="js-lazy" :src="good.img">
                          </a>
                          <div class="detail">
                            <a
                              href="https://h5.youzan.com/v2/showcase/goods?alias=2oivacpjh2ex0"
                              class="js-goods-link"
                            >
                              <h3 class="title js-ellipsis">
                                <i>{{good.title}}</i>
                              </h3>
                            </a>
                            <p class="sku ellipsis">{{good.sku}}</p>
                            <!-- 显示状态 -->
                            <div class="num" v-show="!shop.editing">
                              <span class="num-txt">x{{good.num}}</span>
                              <!---->
                            </div>
                            <!-- 编辑状态 -->
                            <div class="num" v-show="shop.editing">
                              <!---->
                              <div class="quantity">
                                <button type="button" class="minus" :class="{disabled:good.num===1}"></button>
                                <input type="text" pattern="[0-9]*" class="txt" v-model="good.num">
                                <button type="button" class="plus"></button>
                                <div class="response-area response-area-minus" @click="reduce(good)"></div>
                                <div class="response-area response-area-plus" @click="add(good)"></div>
                              </div>
                            </div>
                            <div class="price c-orange">
                              ¥
                              <span>{{good.price}}</span>
                            </div>
                          </div>
                          <div class="error-box"></div>
                        </div>
                        <div class="delete-btn" @click="remove(shop,good)">
                          <span>删除</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="js-invalid-goods shop-list">
              <p class="block invalid-list-title">以下商品无法一起购买</p>
              <div class="block block-list-cart block-order border-top-0">
                <ul class="block border-0 invalid-list js-invalid-list">
                  <li class="block-item block-item-cart error">
                    <div index="0">
                      <div class="check-container hide">
                        <span class="check"></span>
                      </div>
                      <div class="name-card clearfix">
                        <a
                          href="https://h5.youzan.com/v2/showcase/goods?alias=36co1k2m80lmu"
                          class="thumb js-goods-link"
                        >
                          <img
                            class="js-lazy"
                            src="https://img.yzcdn.cn/upload_files/2017/06/29/FstNOp77JZHQjZIDFd5LlZYE3j_j.jpg?imageView2/2/w/200/h/200/q/75/format/webp"
                          >
                          <!---->
                        </a>
                        <div class="detail">
                          <a
                            href="https://h5.youzan.com/v2/showcase/goods?alias=36co1k2m80lmu"
                            class="js-goods-link"
                          >
                            <h3 class="title js-ellipsis">
                              <i>国际安徒生奖大奖书系（文学作品系列第二辑 共8册） 国际安徒生奖获奖书系 是经过IBBY各国分会和丛书主编、著名儿童文学理论家方卫平教授层层筛选产生的经典佳作</i>
                            </h3>
                          </a>
                          <p class="sku ellipsis">下周二发货</p>
                          <div class="num">
                            ×
                            <span class="num-txt">1</span>
                            <!---->
                          </div>
                          <!---->
                        </div>
                        <div class="error-box">商品已售罄</div>
                      </div>
                      <div class="delete-btn">
                        <span>删除</span>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="center clear-block">
                  <button class="btn clear-btn js-clear">清空失效商品</button>
                </div>
              </div>
            </div>
            <div style="padding:0;" class="js-bottom-opts bottom-fix">
              <!--<div class="go-shop-tip js-go-shop-tip c-orange font-size-12">你需要分开结算每个店铺的商品哦~</div>-->
              <div class="bottom-cart clear-fix">
                <div class="select-all" @click="selectAll">
                  <span class="check" :class="{checked:editingShop? allRemoveSelected :allSelected}"></span> 全选
                </div>
                <!-- 显示状态 -->return true
                <div class="total-price" v-show="!editingShop">
                  合计：¥
                  <span class="js-total-price" style="color: rgb(255, 102, 0);">{{totalPrice}}</span>
                  <p class="c-gray-dark">不含运费</p>
                </div>
                <button
                  v-show="!editingShop"
                  href="javascript:;"
                  class="js-go-pay btn btn-orange-dark font-size-14"
                  :disabled="!selectedLists.length"
                >结算 ({{selectedLists.length}})
                </button>
                <!-- 编辑状态 -->
                <button
                  v-show="editingShop"
                  href="javascript:;"
                  :disabled="!willRemoveLists.length"
                  class="j-delete-goods btn font-size-14 btn-red"
                  @click="batchRemove"
                >删除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="footer" style="min-height: 86px;">-->
    <!--<div class="copyright">-->
    <!--<div-->
    <!--class="ft-copyright"-->
    <!--style="background-image: url(https://img.yzcdn.cn/upload_files/2016/11/15/147918630760182374.png);"-->
    <!--&gt;-->
    <!--<a class="yz-logo" href="https://www.youzan.com/?from_source=support_logo">有赞提供技术支持</a>-->
    <!--</div>-->
    <!--</div>-->
    <!--</div>-->
    <div id="0SuefKPV4p" v-show="showRemovePopup"
         style="height: 100%; position: fixed; top: 0px; left: 0px; right: 0px; background-color: rgba(0, 0, 0, 0.7); z-index: 1000;  opacity: 1;"></div>
    <div id="d2tfiX27YS" v-show="showRemovePopup" class="popout-confirm popout-box"
         style="overflow: hidden; position: absolute; z-index: 1000; top: 50%; left: 50%; transform: translate3d(-50%, -50%, 0px); visibility: visible; border-radius: 4px; background: white; width: 270px; padding: 15px; opacity: 1;">
      <div class="confirm-content font-size-14" style="line-height: 20px; padding: 5px 5px 10px;">
        <!--你确定要删除吗？-->
        {{this.removeMsg}}
      </div>
      <hr style="margin: 9px -15px 10px;">
      <div class="btn-2-1" style="width: 47.5%;">
        <p class="js-cancel center font-size-16" style="padding-top: 5px;" @click="showRemovePopup=false">取消</p>
      </div>
      <div class="btn-2-1" style="width: 47.5%;">
        <p class="js-ok center c-green font-size-16" style="padding-top: 5px;" @click="confirmRemove">确定</p>
      </div>
    </div>
  </div>
</template>

<script>
  import "../../modules/css/common.css";
  import "./cart.css";
  import "./cart_base.css";
  import "./cart_trade.css";
  import axios from "axios";

  export default {
    data() {
      return {
        cartList: null,
        editingShop: null,
        showRemovePopup: false,
        willRemoveData: null,
        removeMsg: ''
      };
    },
    mounted() {
      this.getCartList();
    },
    methods: {
      getCartList() {
        axios
          .get(
            "https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/cart/list"
          )
          .then(e => {
            let list = e.data.cartList;
            list.forEach(shop => {
              shop.checked = true;
              shop.editing = false;
              shop.editingMsg = '编辑';
              shop.removeChecked = false;
              shop.goodsList.forEach(good => {
                good.checked = true;
                good.removeChecked = false;
              });
            });
            this.cartList = list;
          });
      },
      selectGood(shop, good) {
        let attr = this.editingShop ? 'removeChecked' : 'checked';
        good[attr] = !good[attr];
        shop[attr] = shop.goodsList.every((good) => {
          return good[attr];
        });
      },
      selectShop(shop) {
        let attr = this.editingShop ? 'removeChecked' : 'checked';
        shop[attr] = !shop[attr];
        shop.goodsList.forEach(good => {
          good[attr] = shop[attr];
        });
      },
      selectAll() {
        let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected';
        this[attr] = !this[attr];
      },
      edit(shop) {
        shop.editing = !shop.editing;
        shop.editingMsg = shop.editing === true ? '完成' : '编辑';
        this.cartList.forEach((item) => {
          if (shop.shopId !== item.shopId) {
            item.editing = false;
            item.editingMsg = shop.editing ? '' : '编辑';
          }
        });
        this.editingShop = shop.editing ? shop : null;
      },
      reduce(good) {
        if (good.num === 1) return;
        axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/cart/good/reduce', {id: good.id}).then(() => {
          good.num--;
        });
      },
      add(good) {
        axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/cart/good/add', {id: good.id}).then(() => {
          good.num++;
        });
      },
      remove(shop, good) {
        this.removeMsg = '你确定要删除该商品吗？';
        this.showRemovePopup = true;
        this.willRemoveData = {shop, good};
      },
      batchRemove() {
        this.removeMsg = `你确定要将所选的 ${this.willRemoveLists.length} 个商品删除吗？`;
        this.showRemovePopup = true;
      },
      confirmRemove() {
        if (this.removeMsg === '你确定要删除该商品吗？') {
          axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/cart/good/remove', this.willRemoveData).then(() => {
            this.willRemoveData.shop.goodsList.splice(this.willRemoveData.shop.goodsList.indexOf(this.willRemoveData.good), 1);
            if (!this.willRemoveData.shop.goodsList.length) {
              this.cartList.splice(this.cartList.indexOf(this.willRemoveData.shop), 1);
              this.editingShop = null;
              this.cartList.forEach(shop => {
                shop.editingMsg = '编辑';
              });
            }
            this.showRemovePopup = false;
          });
        } else {
          axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/cart/good/remove', this.willRemoveLists).then(() => {
            this.cartList.forEach(shop => {
              shop.editing = false;
              shop.editingMsg = '编辑';
              this.willRemoveLists.forEach(item => {
                shop.goodsList.forEach(good => {
                  if (good.id === item.id) {
                    shop.goodsList.splice(shop.goodsList.indexOf(item), 1);
                  }
                });
              });
            });

            this.cartList.forEach(shop => {
              if (!shop.goodsList.length) {
                this.cartList.splice(this.cartList.indexOf(shop), 1);
              }
            });

            this.showRemovePopup = false;
            this.editingShop = null;
          });
        }
      }
    },
    computed: {
      allSelected: {
        get() {
          if (this.cartList) {
            return this.cartList.every(shop => {
              return shop.checked;
            });
          }
          return false;
        },
        set(newVal) {
          this.cartList.forEach(shop => {
            shop.checked = newVal;
            shop.goodsList.forEach(good => {
              good.checked = newVal;
            });
          });
        }
      },
      selectedLists() {
        if (this.cartList && this.cartList.length) {
          let arr = [];
          this.cartList.forEach(shop => {
            shop.goodsList.forEach(good => {
              if (good.checked) {
                arr.push(good);
              }
            });
          });
          return arr;
        } else {
          return [];
        }
      },
      totalPrice() {
        if (this.selectedLists) {
          let sum = 0;
          this.selectedLists.map(item => {
            sum += item.price * item.num;
          });
          return sum;
        }
        return 0;
      },
      willRemoveLists() {
        if (this.editingShop) {
          let arr = [];
          this.editingShop.goodsList.forEach(good => {
            if (good.removeChecked) {
              arr.push(good);
            }
          });
          return arr;
        }
        return [];
      },
      allRemoveSelected: {
        get() {
          if (this.editingShop) {
            return this.editingShop.removeChecked;
          }
          return false;
        },
        set(newVal) {
          if (this.editingShop) {
            this.editingShop.removeChecked = newVal;
            this.editingShop.goodsList.forEach(good => {
              good.removeChecked = newVal;
            });
          }
        }
      }
    }
  };
</script>

<style>
</style>
