import Vue from 'vue'

import AppSvgIcon from './AppSvgIcon'
import AppSwitch from "./form/AppSwitch.vue"
import AppLoader from "./wrapper/AppLoader.vue"
import AppModalWrapper from "./modal/AppModalWrapper.vue"
import AppNavigationMenu from "./AppNavigationMenu.vue";

Vue.component('app-svg-icon', AppSvgIcon)
Vue.component('app-switch', AppSwitch)
Vue.component('app-loader', AppLoader)
Vue.component('app-modal-wrapper', AppModalWrapper)
Vue.component('app-navigation-menu', AppNavigationMenu)
