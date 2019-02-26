import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {list: null};

const store = new Vuex.Store({
  state,
  mutations: {
    init(state, list) {
      state.list = list;
    },
    add(state, {data}) {
      state.list.push(data);
    },
    update(state, {data}) {
      let newList = JSON.parse(JSON.stringify(state.list));
      let index = newList.findIndex((item) => {
        return item.id === data.id;
      });
      data.isDefault = state.list[index].isDefault;
      newList[index] = data;
      state.list = newList;
    },
    remove(state, {id}) {
      let index = state.list.findIndex((item) => {
        return item.id === id;
      });
      state.list.splice(index, 1);
    },
    setDefault(state, {id}) {
      let newList = JSON.parse(JSON.stringify(state.list));
      newList.forEach(item => {
        item.isDefault = item.id === id;
      });
      state.list = newList;
    }
  },
  actions: {
    getList({commit}) {
      axios.get('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/address/list').then(e => {
        commit('init', e.data);
      });
    },
    addAddress({commit}, {data}) {
      data.id = Math.random() * 10000;
      axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/address/add', {data}).then(() => {
        commit('add', {data});
      });
    },
    updateAddress({commit}, {data}) {
      axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/address/update', {data}).then(() => {
        commit('update', {data});
      });
    },
    removeAddress({commit}, {id}) {
      axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/address/remove', {id}).then(() => {
        commit('remove', {id});
      });
    },
    setDefault({commit}, {id}) {
      axios.post('https://nei.netease.com/api/apimock/dd43479bc45ee7491c66cc246d9c46b8/address/setDefault', {id}).then(() => {
        commit('setDefault', {id});
      });
    }
  }
});

export default store;