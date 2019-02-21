<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from "vue";
  import VueRouter from 'vue-router';
  import Member from './address/Member.vue';
  import Test from './address/Test.vue';

  Vue.use(VueRouter);

  const routes = [
    {path: '/foo', component: Test},
    {path: '/', component: Member},
  ];

  let router = new VueRouter({routes});

  export default {
    router
  };
</script>

