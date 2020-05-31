import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
import bridge from '@vkontakte/vk-bridge';

const APP_ID = +process.env.APP_ID

const SET_TOKEN_GROUP = 'SET_TOKEN_GROUP'

export const state = () => ({
  tokenGroup: ''
})

export const getters = {
  tokenGroup: state => state.tokenGroup,
}

export const actions = {
  async getTokenGroup ({ commit }, payload) {
    bridge
      .send('VKWebAppGetCommunityToken', {
        "app_id": APP_ID,
        "group_id": payload,
        "scope": "app_widget"
      })
      .then( data => {
        console.log(payload, data.access_token)
        let payloadApi = {
          group_id: payload,
          token: data.access_token
        }
        commit('SET_TOKEN_GROUP', data.access_token)
        // return data.access_token
        return Api.tokens.create(payloadApi)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const mutations = {
  [SET_TOKEN_GROUP] (state, payload) {
    state.tokenGroup = payload
  }
}
