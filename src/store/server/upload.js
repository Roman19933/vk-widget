import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
const GET_FOTO_ID = 'GET_FOTO_ID';
const GET_FOTO_URL = 'GET_FOTO_URL';

export const state = () => ({
    fotoId: "",
    urlFoto: ""
})

export const getters = {
    fotoId: state => state.fotoId,
    urlFoto: state => state.urlFoto
}

export const actions = {
    async uploadFoto({ commit }, payload) {
        try {
            let id = await Api['groups/image'].create(payload)
            commit('GET_FOTO_ID', id.data.response.id)
            console.log('id', id.data.response.id)
        } catch (e) {
            console.log('e', e)
        }
    },
    async getUrl({ commit }, { group_id, image_id }) {
        // try {
        return await Api[`groups/image/${group_id}/${image_id}`]()
        // let url = await Api[`groups/image/${group_id}/${image_id}`]()
        // commit('GET_FOTO_URL', url.data.response[0].images[0].url)
        // console.log('url', url.data.response[0].images[0].url)
        // } catch (e) {
        //     console.log('e', e)
        // }
    }
}

export const mutations = {
    [GET_FOTO_ID](state, payload) {
        state.fotoId = payload
    },
    [GET_FOTO_URL](state, payload) {
        state.urlFoto = payload
    }
}
