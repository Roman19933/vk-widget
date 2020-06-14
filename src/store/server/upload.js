import _ from 'lodash'
import { Api } from '~/plugins/axios-rest-client'
const GET_FOTO_ID = 'GET_FOTO_ID';
const GET_FOTO_URL = 'GET_FOTO_URL';

export const actions = {
    uploadImage({ commit }, payload) {
        return Api['groups/image'].create(payload)
    },
    // async getUrl({ commit }, { group_id, image_id }) {
    //     // try {
    //     return await Api[`groups/image/${group_id}/${image_id}`]()
    //     // let url = await Api[`groups/image/${group_id}/${image_id}`]()
    //     // commit('GET_FOTO_URL', url.data.response[0].images[0].url)
    //     // console.log('url', url.data.response[0].images[0].url)
    //     // } catch (e) {
    //     //     console.log('e', e)
    //     // }
    // }
}

