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
    setLogoutTimer({commit}, expirationTime) {
      setTimeout(() => {
        commit('clearToken')
      }, expirationTime * 1000)
    },
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
          const now = new Date()
          const exp = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expiresIn', exp)
          dispatch('storeUser', authData)
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))
    },
    login ({commit, dispatch}, authData) {
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
          const now = new Date()
          const exp = new Date(now.getTime() + res.data.expiresIn * 1000)
          localStorage.setItem('token', res.data.idToken)
          localStorage.setItem('userId', res.data.localId)
          localStorage.setItem('expiresIn', exp)
          dispatch('setLogoutTimer', res.data.expiresIn)
        })
        .catch(error => console.log(error))
    },
    autoLogin({commit}) {
      const token = localStorage.getItem('token')
      if(!token) return;
      const expirationDate = localStorage.getItem('expiresIn')
      const now = new Date();
      if(now >= expirationDate) return;
      const userId = localStorage.getItem('userId')
      commit('authUser', {token: token, userId: userId})
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
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expiresIn');
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
