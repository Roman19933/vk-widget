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
      let res = await vkBridge.send('VKWebAppGetUserInfo')
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
    console.log(group_id, payload)

    /* try {
      let res = await vkBridge.send('VKWebAppGetCommunityToken', payload)
      console.log(res)
    } catch(e) {
      console.log(e)
    } */
     


    /*  this.dispatch('server/token/setToken', {
      group_id: group_id,
      token: res.access_token
    }) */
  }
}

export const mutations = {
  [SET_USER] (state, payload) {
    state.user = payload
  }
}
