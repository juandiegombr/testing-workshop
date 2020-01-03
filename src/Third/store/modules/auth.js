import jwt from 'jwt-decode'

import authService from '@/Third/services/auth'

const auth = {
  namespaced: true,
  state: {
    user: {},
    token: null
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
    SET_TOKEN (state, token) {
      state.token = token
    }
  },
  actions: {
    login ({ commit }, data) {
      return authService.login(data)
        .then(res => {
          const { token } = res.data
          const user = jwt(token)
          localStorage.setItem('token', token)
          commit('SET_TOKEN', token)
          commit('SET_USER', user)
          return user
        })
    }
  }
}

export default auth
