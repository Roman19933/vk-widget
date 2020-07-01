import createPersistedState from "vuex-persistedstate"
export default ({store}) => {
  createPersistedState({
    key: 'vkQuery',
    paths: ['server.token.vkQuery']
  })(store)
}
