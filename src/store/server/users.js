import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
const SET_ITEMS = 'SET_ITEMS'


export const state = () => ({
  items: []
})

export const getters = {
  items: state => state.items,
  byId: state => (id) => _.find(state.items, (el) => el.id === id)
}

export const actions = {
  async getUsers({ commit }, filters) {
    let res = await Api['users.json']();
    commit('SET_ITEMS', res.data)
    return res.data
  }
}

export const mutations = {
  [SET_ITEMS] (state, payload) {
    state.items = payload
  }
}
