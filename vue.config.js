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
    }
  }
};
