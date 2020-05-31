import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
const GET_FOTO_ID = 'GET_FOTO_ID'

export const state = () => ({
    fotoId: []
})

export const getters = {
    fotoId: state => state.fotoId,
}

export const actions = {
    async uploadFoto({ commit }, payload) {
        try {
            let id = await Api['groups/image'].create(payload)
            commit('GET_FOTO_ID', id)
            console.log('id', id)
        } catch (e) {
            console.log('e', e)
        }
    }
}

export const mutations = {
    [GET_FOTO_ID](state, payload) {
        state.fotoId = payload
    }
}