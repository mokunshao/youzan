<template>
  <div class="container " style="min-height: 597px;">
    <div class="section section-first">
      <div class="block form js-form">
        <input class="js-id" name="id" type="hidden" value="">
        <div class="block-item" style="border-top:0;">
          <label>收货人</label>
          <input type="text" placeholder="请输入姓名" name="user_name" v-model.trim="name" maxlength="20">
        </div>
        <div class="block-item">
          <label>联系电话</label>
          <input type="tel" placeholder="联系电话" name="tel" v-model.trim="phone" maxlength="11">
        </div>
        <div class="block-item">
          <label>选择地区</label>
          <div class="select-group">
            <select class="js-province-selector" v-model="provinceValue">
              <option value="-1">选择省份</option>
              <option :value="p.value" v-for="p in addressData.list" :key="p.label">{{p.label}}</option>
            </select>
            <select class="js-city-selector" v-model="cityValue">
              <option value="-1">选择城市</option>
              <option :value="c.value" v-for="c in cityList" :key="c.value">{{c.label}}</option>
            </select>
            <select class="js-county-selector" name="area_code" data-code="" v-model="districtValue">
              <option value="-1">选择地区</option>
              <option :value="d.value" v-for="d in districtList" :key="d.value">{{d.label}}</option>
            </select>
          </div>
        </div>
        <div class="block-item">
          <label>详细地址</label>
          <input type="text" placeholder="街道门牌信息" name="address_detail" v-model="location" maxlength="100">
        </div>
      </div>
    </div>
    <div class="block section js-save block-control-btn" @click="save">
      <div class="block-item c-blue center">保存</div>
    </div>
    <div class="block section js-delete block-control-btn" v-if="type==='edit'" @click="remove">
      <div class="block-item c-red center">删除</div>
    </div>
    <div class="block stick-bottom-row center js-save-default" v-if="type==='edit'">
      <button class="btn btn-standard js-save-default-btn" @click="setDefault">设为默认收货地址</button>
    </div>
  </div>
</template>

<script>
  import addressData from './address.json';
  import axios from 'axios';

  export default {
    name: 'Form',
    data() {
      return {
        name: '',
        phone: '',
        provinceValue: -1,
        cityValue: -1,
        districtValue: -1,
        location: '',
        id: -1,
        type: this.$route.query.type,
        instance: this.$route.params.instance,
        addressData,
        cityList: null,
        districtList: null,
        cityChangeTimes: 0
      };
    },
    mounted() {
      if (this.type === 'edit' && this.instance) {
        this.provinceValue = this.instance.provinceValue;
        this.cityValue = this.instance.cityValue;
        this.districtValue = this.instance.districtValue;
        this.name = this.instance.name;
        this.phone = this.instance.phone;
        this.location = this.instance.location;
        this.id = this.instance.id;
      }
    },
    methods: {
      save() {
        let {name, phone, provinceValue, cityValue, districtValue, location} = this;
        let data = {name, phone, provinceValue, cityValue, districtValue, location};
        if (this.type === 'add') {
          axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/address/add', {data}).then(() => {
            this.$router.go(-1);
          });
        }
        if (this.type === 'edit') {
          axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/address/update', {data}).then(() => {
            this.$router.go(-1);
          });
        }
      },
      remove() {
        if (window.confirm('确认删除？')) {
          axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/address/remove', {id: this.id}).then(() => {
            this.$router.go(-1);
          });
        }
      },
      setDefault() {
        axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/address/setDefault', {id: this.id}).then(() => {
          this.$router.go(-1);
        });
      }
    },
    watch: {
      provinceValue(val, oldVal) {
        if (val === -1 || val === '-1') return;
        let index = this.addressData.list.findIndex(item => {
          return item.value === val;
        });
        this.cityList = this.addressData.list[index].children;
        this.cityValue = -1;
        this.districtValue = -1;
        if (this.type === 'edit' && this.instance) {
          if (oldVal === -1 || oldVal === '-1') {
            this.cityValue = this.instance.cityValue;
          }
        }
        if (!this.cityValue) {
          this.cityValue = -1;
        }
      },
      cityValue(val, oldVal) {
        if (val === -1 || val === '-1') return;
        this.districtValue = -1;
        let index = this.cityList.findIndex(item => {
          return item.value === val;
        });
        this.districtList = this.cityList[index].children;
        if (this.type === 'edit' && this.instance) {
          if (oldVal === -1 || oldVal === '-1') {
            if (this.cityChangeTimes === 0) {
              this.districtValue = this.instance.districtValue;
            }
          }
        }
        this.cityChangeTimes += 1;
      }
    }
  };
</script>