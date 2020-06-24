import Vue from 'vue'

import AppSvgIcon from './AppSvgIcon'
import AppSwitch from "./form/AppSwitch.vue"
import AppLoader from "./wrapper/AppLoader.vue"
import AppModalWrapper from "./modal/AppModalWrapper.vue"
import AppNavigationMenu from "./AppNavigationMenu.vue";
import AppErrorPopover from "./wrapper/AppErrorPopoverComponent"
import AppWidgetError from "./setup/AppWidgetErrorComponent"
import AppTokenString from '@/components/AppTokenStringComponent'

Vue.component('app-svg-icon', AppSvgIcon)
Vue.component('app-switch', AppSwitch)
Vue.component('app-loader', AppLoader)
Vue.component('app-modal-wrapper', AppModalWrapper)
Vue.component('app-navigation-menu', AppNavigationMenu)
Vue.component('app-error-popover', AppErrorPopover)
Vue.component('app-widget-error', AppWidgetError)
Vue.component('app-token-string', AppTokenString)
