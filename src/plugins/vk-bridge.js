import bridge from '@vkontakte/vk-bridge'

export const vkBridge = bridge

export default (context, inject) => {
  inject('vkBridge', bridge)
}
