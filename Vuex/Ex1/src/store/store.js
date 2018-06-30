import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    counter
  }
})
