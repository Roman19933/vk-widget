import { Api } from '~/plugins/axios-rest-client'
const SET_ITEMS = 'SET_ITEMS'

export const state = () => ({
  items: []
})

export const getters = {
  items: state => state.items,
}

export const actions = {
  async getGroup ({ commit }, group_id) {
    let {data} = await Api[`groups/${group_id}`]()
    commit('SET_ITEMS', data.data)
    return data.data
  },
  getInfoForGroupToUrl({commit},link) {
    return Api[`groups?url=${link}`]()
  },
  getInfoForComments({commit},{group_id,link}) {
    return Api[`comments?group_id=${group_id}&url=${link}`]()
  }
}

export const mutations = {
  [SET_ITEMS] (state, payload) {
    state.items = payload
  }
}
