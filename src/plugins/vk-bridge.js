import Vue from 'vue'
import bridge from '@vkontakte/vk-bridge'

// if (!Vue.prototype.plugin) {
  Vue.use(bridge)
// }