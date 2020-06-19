import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'

export const actions = {
  async getHistory({ commit }, group_id) {
    return await Api[`payments?group_id=${group_id}`]();
  }
}
