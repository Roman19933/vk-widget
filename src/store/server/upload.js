import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'

export const actions = {
    uploadImage({ commit }, payload) {
        return Api['groups/image'].create(payload)
    },
}

