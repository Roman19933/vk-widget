import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'

const CHECK_TOKEN = 'CHECK_TOKEN'
const SET_VK_QUERY = 'SET_VK_QUERY'

export const state = () => ({
  checkToken: false,
  vkQuery: {
    group_id: null
  }
})

export const getters = {
  checkToken: state => state.checkToken,
  vkQuery: state => state.vkQuery
}

export const actions = {
  async setToken ({ commit }, payload) {
    await Api.tokens.create(payload)
    commit('CHECK_TOKEN', true)
  },
  async checkToken ({ commit }, payload) {
    let checkToken = await Api['tokens/check'].find(payload)
    commit('CHECK_TOKEN', checkToken)
    console.log(checkToken)
    return checkToken
  }
}

export const mutations = {
  [CHECK_TOKEN] (state, payload) {
    console.log(payload)
    state.checkToken = payload
  },
  [SET_VK_QUERY] (state, payload) {
    state.vkQuery = payload
  }
}
