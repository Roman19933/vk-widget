const SET_USER = 'SET_USER'

import { vkBridge } from '~/plugins/vk-bridge'

export const state = () => ({
  user: [],
})

export const getters = {
  user: state => state.user,
}

export const actions = {
  async getUser ({ commit }) {
    try {
      let res = await vkBridge.send('VKWebAppGetUserInfo',{})
      commit('SET_USER',res)
      console.log(res)
    } catch(e) {
      console.log(e)
    }
  },
  async updateTokenGroup ({ commit }, group_id) {

    let payload = {
      "app_id": +process.env.NUXT_VK_APP_ID,
      "group_id": +group_id,
      "scope": "app_widget"
    }

    try {
      let { access_token } = await vkBridge.send('VKWebAppGetCommunityToken', payload)
      try {
        this.dispatch('server/token/setToken', {
          group_id: group_id,
          token: access_token
        })
      } catch (e) {
        console.log(e)
      }
    } catch(e) {
      console.log(e)
    }
  },
  async resizeWindow ({ commit }, payload) {
    try {
      console.log(payload)
      return await vkBridge.send('VKWebAppResizeWindow', payload)
    } catch(e) {
      console.log(e)
    }
  }
}

export const mutations = {
  [SET_USER] (state, payload) {
    state.user = payload
  }
}
