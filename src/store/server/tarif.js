import { Api } from '~/plugins/axios-rest-client'

export const state = () => ({
  tarif: []
})

export const getters = {
  tarif: state => state.tarif,
}

export const actions = {
  async getTarif ({ commit }, payload) {
    return await Api.tariffs({group_id: payload})
  }
}