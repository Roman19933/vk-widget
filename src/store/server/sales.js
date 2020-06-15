import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
const SET_ITEMS = 'SET_ITEMS'
const CLONE_ITEM = 'CLONE_ITEM'
const REMOVE_ITEM = 'REMOVE_ITEM'
const ID_ITEM = 'ID_ITEM'

export const state = () => ({
  items: [],
  item:[]
})

export const getters = {
  items: state => state.items,
  item: state => state.item,
  byId: state => (id) => _.find(state.items, (el) => el.id === id)
}

export const actions = {
  async getItems ({ commit }, groupId) {
    let {data} = await Api[`groups/widget/${groupId}`]()
    commit('SET_ITEMS', data.data)
    return data.data
  },
  async disable ({ commit }, { groupId, vidId }) {
    return await Api[`widget/disable?group_id=${groupId}&widget_id=${vidId}`]()
  },
  async enable ({ commit }, { groupId, vidId }) {
    return await Api[`widget/enable?group_id=${groupId}&widget_id=${vidId}`]()
  },
  async create ({ commit }, payload) {
    return await Api['widgets'].create(payload)
  },
  async edit ({ commit }, payload) {
    return await Api['widgets'].update(payload.id,payload)
  },
  async editName ({ commit }, payload) {
    return await Api['widgets/rename'].patch(payload.widget_id,payload)
  },
  async clone ({ commit }, {group_id,id}) {
   let {data} = await Api[`widget/clone?group_id=${group_id}&widget_id=${id}`]()
    commit('SET_ITEMS', data.data)
  },
  async remove ({ commit }, id) {
    let {data} = await Api[`widgets`].remove(id)
    commit('REMOVE_ITEM', id)
    commit('SET_ITEMS', data.data)
  },
  async edit1 ({ commit }, id) {
    commit('ID_ITEM', id)
  }
}

export const mutations = {
  [SET_ITEMS] (state, payload) {
    state.items = payload
  },
  [REMOVE_ITEM] (state, id) {
    let index = _.findIndex(state.items, el => el.id === id)
    state.items.splice(index, 1)
  },
  [ID_ITEM] (state, id) {
    let itemId = _.find(state.items, (el) => el.id === id)
    state.item = itemId
  }
}
