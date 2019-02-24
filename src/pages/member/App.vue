<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Vue from "vue";
  import VueRouter from 'vue-router';
  import Member from './address/Member.vue';
  import Address from './address/Address.vue';
  import Form from './address/Form.vue';
  import All from './address/All.vue';

  Vue.use(VueRouter);

  const routes = [
    {
      path: '/address', component: Address, children: [
        {path: '', redirect: 'all'},
        {path: 'all', name: 'all', component: All},
        {path: 'form', name: "form", component: Form}
      ]
    },
    {path: '/', component: Member},
  ];

  let router = new VueRouter({routes});

  export default {
    router
  };
</script>

