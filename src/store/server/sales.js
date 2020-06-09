import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
const SET_ITEMS = 'SET_ITEMS'
const CLONE_ITEM = 'CLONE_ITEM'
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
    commit('SET_ITEMS', data.data)
    return data.data
  },
  async create ({ commit }, payload) {
    return await Api['widgets'].create(payload)
  },
  async edit ({ commit }, payload) {
    return await Api['widgets'].update(payload)
  },
  async clone ({ commit }, payload) {
    await Api['widget/clone']()
    commit('CLONE_ITEM', payload.id)
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
  [CLONE_ITEM] (state, id) {
    let index = _.findIndex(state.items, el => el.id === id)
    state.items.push(index, 1)
  },
  [REMOVE_ITEM] (state, id) {
    let index = _.findIndex(state.items, el => el.id === id)
    state.items.splice(index, 1)
  }
}
