import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
const SET_ITEMS = 'SET_ITEMS'


export const actions = {
  async getCity({ commit }, search) {
    return await Api[`cities?country_id=1&q=${search}`]();
  }
}
