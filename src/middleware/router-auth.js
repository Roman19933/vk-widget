export default async function({ store, redirect, route }) {

    if (route.query.vk_group_id !== undefined) {
        store.commit('server/token/SET_VK_QUERY', route.query)
    }

    const groupId = store.getters['server/token/vkQuery'].vk_group_id

    store.dispatch('vk/bridge/updateTokenGroup', groupId)

    /* if(await validToken(store, groupId)) {
        // redirect({ path: '/catalog/nav' })
    } else if(route.path !== '/') {
        // redirect({ path: '/' })
    } */
}



async function validToken(store, groupId) {
    
    return false
}