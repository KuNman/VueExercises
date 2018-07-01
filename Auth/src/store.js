import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth';
import globalAxios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.idToken
      state.userId = userData.userId
    },
    storeUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    signup({commit, dispatch}, authData) {
      axios.post('signupNewUser?key=AIzaSyCdQXl8ycjDWMEV9gtdQTpnqwTVDDapG-w', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId
            })
            dispatch('storeUser', authData)
          })
        .catch(error => console.log(error))
    },
    login({commit}, data) {
      axios.post('verifyPassword?key=AIzaSyCdQXl8ycjDWMEV9gtdQTpnqwTVDDapG-w', {
        email: data.email,
        password: data.password,
        returnSecureToken: true
      })
      .then(res => {
        commit('authUser', {
          token: res.data.idToken,
          userId: res.data.localId
          })
        })
        .catch(error => console.log(error))
    },
    storeUser({commit}, userData) {
      globalAxios.post('/users.json', userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser({commit}, ) {
      globalAxios.get('/users.json')
        .then(res => {
          console.log(res)
          const data = res.data
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          console.log(users)
          commit('storeUser', users[0]);
        })
        .catch(error => console.log(error))
    }
  },
  getters: {
    user (state) {
      return state.user;
    }
  }
})
