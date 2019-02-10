import Vue from "vue";
import App from './App.vue'
import "../../modules/css/common.css";
import "../../modules/js/api.js";
import "./index.css";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
