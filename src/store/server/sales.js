import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
const SET_ITEMS = 'SET_ITEMS'
const REMOVE_ITEM = 'REMOVE_ITEM'

export const state = () => ({
  items: []
})

export const getters = {
  items: state => state.items
}

export const actions = {
  async getItems ({ commit }, groupId) {
    let {data} = await Api[`groups/widget/${groupId}`]()
    // commit('SET_ITEMS', data.data)
    return data.data
  },
  async enable ({ commit }, payload) {
    return await Api['widget/enable'].find(payload)
  },
  async create ({ commit }, payload) {
    return await Api['widgets'].create(payload)
  },
  async edit ({ commit }, payload) {
    return await Api['widgets'].update(payload)
  },
  async remove ({ commit }, id) {
    await Api[`widgets`].remove(id)
    commit('REMOVE_ITEM', id)
  }
}

export const mutations = {
  [SET_ITEMS] (state, payload) {
    state.items = payload
  },
  [REMOVE_ITEM] (state, id) {
    let index = _.findIndex(state.items, el => el.id === id)
    state.items.splice(index, 1)
  }
}
