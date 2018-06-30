const state = {
  counter: 0
};

const getters = {
  divideCounter: state => {
    return state.counter / 2;
  },
  stringCounter: state => {
    return state.counter + ' clicks';
  }
}

const mutations = {
  increment: (state, payload) => {
    state.counter += payload;
  },
  decrement: state => {
    state.counter--;
  }
}

const actions = {
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

export default {
  state,
  mutations,
  getters,
  actions
}
