module.exports = {
  pages: {
    index: {
      entry: "src/pages/index/index.js",
      template: "src/pages/index/index.html",
      filename: "index.html",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
    cart: {
      entry: "src/pages/cart/cart.js",
      template: "src/pages/cart/cart.html",
      filename: "cart.html",
      chunks: ["chunk-vendors", "chunk-common", "cart"]
    },
    category: {
      entry: "src/pages/category/category.js",
      template: "src/pages/category/category.html",
      filename: "category.html",
      chunks: ["chunk-vendors", "chunk-common", "category"]
    },
    member: {
      entry: "src/pages/member/member.js",
      template: "src/pages/member/member.html",
      filename: "member.html",
      chunks: ["chunk-vendors", "chunk-common", "member"]
    },
    search: {
      entry: "src/pages/search/search.js",
      template: "src/pages/search/search.html",
      filename: "search.html",
      chunks: ["chunk-vendors", "chunk-common", "search"]
    },
    goods: {
      entry: "src/pages/goods/goods.js",
      template: "src/pages/goods/goods.html",
      filename: "goods.html",
      chunks: ["chunk-vendors", "chunk-common", "goods"]
    }
  }
};
