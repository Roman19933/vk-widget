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
  // async getSales ({ commit }) {
  //   let res = await Api.widgets()
  //   commit(SET_SALES, res.data)
  //   return res
  // },
  async create ({ commit }, payload) {
    return await Api['widgets'].create(payload)
  }
}

export const mutations = {
  [SET_SALES] (state, payload) {
    state.items = payload
  }
}
