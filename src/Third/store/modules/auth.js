// import ProviderService from '@/services/ProviderService'
// import getProviderBeautyById from '@/services/providerBeauty/getProvider'

// import User from '@/domain/models/user/User'
// import Provider from '@/domain/models/provider/Provider'

const auth = {
  namespaced: true,
  state: {
    user: {}
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    }
  }
}

export default auth
