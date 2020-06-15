import { Api } from '~/plugins/axios-rest-client'
const SET_ITEMS = 'SET_ITEMS'

export const state = () => ({
  items: []
})

export const getters = {
  items: state => state.items,
}

export const actions = {
  async getFaq ({ commit }, payload) {
    let {data} = await Api['faqs']()
    commit('SET_ITEMS', data.data)
    return data.data
  }
}

export const mutations = {
  [SET_ITEMS] (state, payload) {
    state.items = payload
  }
}
