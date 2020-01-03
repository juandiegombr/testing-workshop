const auth = {
  namespaced: true,
  state: {
    provider: {},
    user: {}
  },
  mutations: {
    SET_PROVIDER (state, provider) {
      state.provider = provider
    }
  }
}

export default auth
