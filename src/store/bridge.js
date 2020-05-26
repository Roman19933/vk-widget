import bridge from '@vkontakte/vk-bridge'
bridge.send("VKWebAppInit", {})

const SET_LOADING_USER = 'SET_LOADING_USER'
const SET_USER = 'SET_USER'

export const state = () => ({
  user: []
})

export const getters = {
  loadedUser: state => state.loadingUser,
  user: state => state.user,
}

export const actions = {
  getUser ({ commit }, payload) {
    commit(SET_LOADING_USER, true)
    bridge
      .send('VKWebAppGetUserInfo')
      .then(data => {
        // Обработка события в случае успеха
        console.log(data);
      })
      .catch(error => {
        console.log('error')
        // Обработка события в случае ошибки
      });
  }
}

export const mutations = {
  [SET_LOADING_USER] (state, payload) {
    state.loadingUser = payload
  },
  [SET_USER] (state, payload) {
    state.user = payload.data
  }
}
