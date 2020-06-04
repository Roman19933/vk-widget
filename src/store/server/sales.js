import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
const SET_SALES = 'SET_SALES'

export const state = () => ({
  items: []
})

export const getters = {
  items: state => state.items,
}

export const actions = {
  async getSales ({ commit }, groupId) {
    let {data} = await Api[`groups/widget/${groupId}`]()
    commit('SET_SALES', data.data)
    return data.data
  },
  async create ({ commit }, payload) {
    return await Api['widgets'].create(payload)
  },
  async edit ({ commit }, payload) {
    return await Api['widgets'].update(payload)
  }
}

export const mutations = {
  [SET_SALES] (state, payload) {
    state.items = payload
  }
}
