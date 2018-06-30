import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    divideCounter: state => {
      return state.counter / 2;
    },
    stringCounter: state => {
      return state.counter + ' clicks';
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    increment: ({commit}) => {
      commit('increment');
    },
    decrement: ({commit}) => {
      commit('decrement');
    },
    asyncIncrement: ({commit}, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration)
    },
    asyncDecrement: ({commit}) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000)
    }
  }
})
