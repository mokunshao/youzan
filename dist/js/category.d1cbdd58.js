(function(t){function s(s){for(var e,o,c=s[0],r=s[1],l=s[2],d=0,p=[];d<c.length;d++)o=c[d],n[o]&&p.push(n[o][0]),n[o]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(t[e]=r[e]);u&&u(s);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,s=0;s<i.length;s++){for(var a=i[s],e=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(e=!1)}e&&(i.splice(s--,1),t=o(o.s=a[0]))}return t}var e={},n={category:0},i=[];function o(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=e,o.d=function(t,s,a){o.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,s){if(1&s&&(t=o(t)),8&s)return t;if(4&s&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var e in t)o.d(a,e,function(s){return t[s]}.bind(null,e));return a},o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,"a",s),s},o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},o.p="/youzan/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var u=r;i.push([2,"chunk-vendors","chunk-common"]),a()})({2:function(t,s,a){t.exports=a("8cc6")},"8cc6":function(t,s,a){"use strict";a.r(s);a("cadf"),a("551c"),a("f751"),a("097d");var e=a("2b0e"),n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"container with-bottom-nav"},[a("div",{staticClass:"custom-search js-search-bar"},[a("form",{on:{submit:function(s){return s.preventDefault(),t.goToSearch()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"custom-search-input",attrs:{type:"search",autocomplete:"off",name:"keyword",placeholder:"搜索更赞的商品"},domProps:{value:t.keyword},on:{input:function(s){s.target.composing||(t.keyword=s.target.value)}}}),a("span",{staticClass:"icon-custom-search"})]),a("button",{staticClass:"custom-search-type-selection-btn"},[t._v("商品")]),a("span",{staticClass:"cancel"},[t._v("取消")]),t._m(0)]),a("div",{staticClass:"search-content",staticStyle:{display:"none"}}),a("div",{staticClass:"content"},[a("div",{staticClass:"class-nav"},[a("div",{attrs:{id:"scroll-nav"}},[a("ul",{staticClass:"nav",staticStyle:{transform:"translate3d(0px, 0px, 0px)"},attrs:{id:"scroll-nav-content"}},t._l(t.topList,function(s,e){return a("li",{key:e,staticClass:"category-name js-category-nam e",class:{active:e===t.topListIndex},attrs:{"data-cid":"-1"},on:{click:function(s){return t.getSubList(e)}}},[t._v(t._s(s.name)+"\n            ")])}),0)])]),a("div",{staticClass:"class-category"},[a("div",{staticClass:"main-content",attrs:{id:"scroll-main-wrap"}},[0===t.topListIndex?a("div",{staticClass:"js-main-content inner-content",staticStyle:{transform:"translate3d(0px, 0px, 0px)"}},[a("div",{staticClass:"hot-wrap"},[a("div",{staticClass:"hot-goods"},[t._m(1),t.ranking?a("ul",t._l(t.ranking.topGoods,function(s,e){return a("li",{key:e,staticClass:"goods-item"},[a("a",{attrs:{href:"goods.html?id="+s.id}},[a("div",{staticClass:"thumb badge center-img"},[a("img",{attrs:{src:s.img}}),a("span",{staticClass:"num"},[t._v(t._s(e+1))])]),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v(t._s(s.name))]),a("div",{staticClass:"price"},[t._v(t._s(t._f("currency")(s.price)))]),a("div",{staticClass:"recommend"},[a("span",[t._v("推荐值:")]),a("span",[t._v(t._s(s.recommend))])])])])])}),0):t._e()]),a("div",{staticClass:"hot-shops",staticStyle:{position:"relative"}},[t._m(2),t.ranking?a("ul",t._l(t.ranking.topShops,function(s,e){return a("li",{key:e,staticClass:"shop-item"},[a("div",{staticClass:"shop-title"},[a("span",{staticClass:"badge"},[t._v(t._s(e+1))]),a("a",{attrs:{href:"https://h5.youzan.com/v2/showcase/homepage?kdt_id=10695955&source=yzapp"}},[t._v(t._s(s.name))]),a("span",{staticClass:"follows"},[t._v("/ 关注度: "+t._s(s.followed))])]),a("ul",{staticClass:"shop-images"},t._l(s.productImgs,function(t,s){return a("li",{key:s},[a("a",{attrs:{href:"https://h5.youzan.com/v2/showcase/homepage?kdt_id=10695955&source=yzapp"}},[a("img",{attrs:{src:t.img}})])])}),0)])}),0):t._e()]),a("div",{staticClass:"hot-keywords"},[t._m(3),t.ranking?a("ul",{staticClass:"keywords-list"},t._l(t.ranking.topKeywords,function(s,e){return a("li",{key:e},[a("a",{staticClass:"js-hot-keyword",attrs:{href:"javascript:;"},on:{click:function(a){return t.goToSearch2(s.keyword)}}},[t._v(t._s(s.keyword))])])}),0):t._e()])])]):t._e(),t.topListIndex>0?a("div",{staticClass:"js-main-content inner-content",staticStyle:{transform:"translate3d(0px, 0px, 0px)"},attrs:{id:"scroll-main-content"}},[a("h3",{staticClass:"category-title"},[t._v("热门品牌")]),t.subList?a("ul",{staticClass:"category-content"},t._l(t.subList.brands,function(s,e){return a("li",{key:e,staticClass:"category-item js-category-item",attrs:{"data-item-id":"85","data-item-name":s.name},on:{click:function(a){return t.goToSearch2(s.name)}}},[a("img",{staticClass:"category-img",attrs:{src:s.img,alt:s.name}}),a("span",{staticClass:"category-item-name"},[t._v(t._s(s.name))])])}),0):t._e(),a("h3",{staticClass:"category-title"},[t._v("热门分类")]),t.subList?a("ul",{staticClass:"category-content"},t._l(t.subList.categories,function(s,e){return a("li",{key:e,staticClass:"category-item js-category-item",attrs:{"data-item-id":"10","data-item-name":s.name},on:{click:function(a){return t.goToSearch2(s.name)}}},[a("img",{staticClass:"category-img",attrs:{src:s.img,alt:s.name}}),a("span",{staticClass:"category-item-name"},[t._v(t._s(s.name))])])}),0):t._e()]):t._e()])])])]),a("Footer",{attrs:{currentTabIndex:1}})],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"search-type-dropdown-menu",staticStyle:{display:"none"}},[a("span",{staticClass:"search-type-dropdown-menu-indicator"},[a("i")]),a("div",{staticClass:"drop-menu-content"},[a("div",{staticClass:"search-type-goods"},[a("i",{staticClass:"icon-goods"}),a("span",[t._v("商品")])]),a("div",{staticClass:"search-type-dropdown-menu-divider"}),a("div",{staticClass:"search-type-shop"},[a("i",{staticClass:"icon-shop"}),a("span",[t._v("店铺")])])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hot-title"},[a("p",{staticClass:"pull-left"},[t._v("热销商品榜")]),a("a",{staticClass:"pull-right icon-right",attrs:{href:"https://maijia.youzan.com/mars/rank/hotgoods"}},[t._v("更多")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hot-title"},[a("p",{staticClass:"pull-left"},[t._v("TOP店铺榜")]),a("a",{staticClass:"pull-right icon-right",attrs:{href:"https://maijia.youzan.com/mars/rank/hotshops"}},[t._v("更多")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"hot-title"},[a("p",{staticClass:"pull-left"},[t._v("热搜词排行")])])}],o=(a("d1a6"),a("dde2"),a("fd2d")),c=a("bc3a"),r=a.n(c),l=a("1b62"),u={data:function(){return{topList:null,topListIndex:0,keyword:null,subList:null,ranking:null}},components:{Footer:o["a"]},methods:{getTopList:function(){var t=this;r.a.get("https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/category/topList").then(function(s){return t.topList=s.data})},getSubList:function(t){var s=this;this.topListIndex=t,0===t?this.getRanking():r.a.post("https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/category/subList",{index:t}).then(function(t){return s.subList=t.data.subList})},getRanking:function(){var t=this;r.a.get("https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/getRank").then(function(s){t.ranking=s.data.ranking})},goToSearch:function(){location.href="search?keyword=".concat(this.keyword)},goToSearch2:function(t){location.href="search?keyword=".concat(t)}},mounted:function(){this.getTopList(),this.getRanking()},mixins:[l["a"]]},d=u,p=a("2877"),m=Object(p["a"])(d,n,i,!1,null,null,null),h=m.exports;e["default"].config.productionTip=!1,new e["default"]({render:function(t){return t(h)}}).$mount("#app")},dde2:function(t,s,a){}});
//# sourceMappingURL=category.d1cbdd58.js.map