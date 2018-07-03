import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'
import globalAxios from 'axios'
import router from './router.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser (state, userData) {
      state.idToken = userData.token
      state.userId = userData.userId
      state.user = userData.user
    },
    storeUser (state, user) {
      alert(user);
      state.user = user
    },
    clearToken(state) {
      state.idToken = null
      state.userId = null
      state.user = null
    }
  },
  actions: {
    signup ({commit, dispatch}, authData) {
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
    login ({commit}, authData) {
      axios.post('verifyPassword?key=AIzaSyCdQXl8ycjDWMEV9gtdQTpnqwTVDDapG-w', {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => {
          commit('authUser', {
            token: res.data.idToken,
            userId: res.data.localId,
            user: res.data.email
          })
        })
        .catch(error => console.log(error))
    },
    storeUser ({commit, state}, userData) {
      if (!state.idToken) {
        return
      }
      globalAxios.post('/users.json' + '?auth=' + state.idToken, userData)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    },
    fetchUser ({commit, state}) {
      if (!state.idToken) {
        return
      }
      globalAxios.get('/users.json' + '?auth=' + state.idToken)
        .then(res => {
          const data = res;
          const users = []
          for (let key in data) {
            const user = data[key]
            user.id = key
            users.push(user)
          }
          commit('storeUser', users[0])
        })
        .catch(error => console.log(error))
    },
    logout({commit}) {
      commit('clearToken')
      router.replace('/signin')
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    isAuth(state) {
      return state.idToken !== null
    }
  }
})
