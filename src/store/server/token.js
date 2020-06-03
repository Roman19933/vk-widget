import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'

const SET_VK_QUERY = 'SET_VK_QUERY'

export const state = () => ({
  vkQuery: {
    group_id: null
  }
})

export const getters = {
  vkQuery: state => state.vkQuery
}

export const actions = {
  async setToken ({ commit }, payload) {
    await Api.tokens.create(payload)
  },
  async checkToken ({ commit }, payload) {
    return await Api['tokens/check'].find(payload)
  }
}

export const mutations = {
  [SET_VK_QUERY] (state, payload) {
    state.vkQuery = payload
  }
}
