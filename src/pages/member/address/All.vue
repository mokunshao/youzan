<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block">
      <a class="block-item js-address-item address-item " @click="toEdit(address)" v-for="address in list"
         :key="address.id"
         :class="{'address-item-default':address.isDefault}">
        <div class="address-title">{{address.name}} {{address.phone}}</div>
        <p>{{address.provinceName}} {{address.cityName}} {{address.districtName}} {{address.location}}</p>
      </a>
    </div>
    <div v-if="list&&!list.length">
      没有地址，请添加地址。
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn" :to='{name:"form",query:{type:"add"}}'>
        新增地址
      </router-link>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'All',
    computed: {
      list() {
        return this.$store.state.list;
      }
    },
    mounted() {
      if (!this.list) {
        this.$store.dispatch('getList');

      }
    },
    methods: {
      toEdit(address) {
        this.$router.push({name: 'form', query: {type: 'edit', id: address.id}, params: {instance: address}});
      }
    }
  };
</script>