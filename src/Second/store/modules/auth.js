// import ProviderService from '@/services/ProviderService'
// import getProviderBeautyById from '@/services/providerBeauty/getProvider'

// import User from '@/domain/models/user/User'
// import Provider from '@/domain/models/provider/Provider'

const auth = {
  namespaced: true,
  state: {
    token: null,
    provider: {},
    providerModel: {},
    user: {}
  },
  mutations: {
    setToken (state, token) {
      state.token = token
    },
    setProvider (state, provider) {
      state.provider = provider
    },
    setProviderModel (state, provider) {
      state.providerModel = provider
    },
    // setUser (state, user) {
    //   state.user = new User(user)
    // }
  },
  actions: {
    // getProvider ({ commit }, { providerId }) {
    //   return ProviderService.getProviderById(providerId)
    //     .then(res => {
    //       const provider = new Provider(res)
    //       commit('setProviderModel', provider)
    //       commit('setProvider', res)
    //       return res
    //     })
    //     .catch(err => { throw err })
    // },
    // getProviderBeauty ({ commit }, { providerId }) {
    //   return getProviderBeautyById(providerId)
    //     .then(res => {
    //       commit('setProvider', res)
    //       return res
    //     })
    //     .catch(err => { throw err })
    // }
  },
  getters: {
    userHasNewProcessingPermission: (state) => () => state.provider.countryCode !== 'ES',
    providerCountryCode: (state) => state.provider.countryCode
  }
}

export default auth
