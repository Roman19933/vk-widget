require('dotenv').config()

module.exports = {
  srcDir: 'src',
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Ковальский для рекламы Вконтакте',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Ковальский для рекламы Вконтакте. 19 виджетов для любых целей и задач - установите приложение в сообщество, выберите подходящий виджет из списка и настройте его всего за 5 минут!' },
    ],
    script: [
      { src: 'https://vk.com/js/api/openapi.js?168' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: [
    '~/assets/sass/style.scss'
  ],
  /**
   * Modules
   */
  modules: [
    '@nuxtjs/dotenv',
    ['@nuxtjs/dotenv', { path: '', systemvars: true }],
    'bootstrap-vue/nuxt',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: process.env.NUXT_YANDEX_METRIKA_ID,
        webvisor: true,
        clickmap:true,
        // useCDN:false,
        trackLinks:true,
        accurateTrackBounce:true,
      }
    ],
  ],
  /**
   * Plugins
   */
  bootstrapVue: {
    componentPlugins: [
      'ToastPlugin',
      'ModalPlugin'
    ],
    components: ['BProgress'],
  },
  buildModules: [
    '@nuxtjs/moment',
  ],
  moment: {
    defaultLocale: 'ru',
    locales: ['ru'],
    // plugin: false
  },
  plugins: [
    '~/components',
    { src: '~plugins/axios-rest-client', ssr: false },
    { src: '~plugins/vue-select', ssr: false },
    { src: '~plugins/vuedraggable', ssr: false },
    { src: '~plugins/vk-bridge', ssr: false },
    { src: '~plugins/vuex-persistedstate', ssr: false },
    { src: '~plugins/helpers', ssr: false },
  ],
  router: {
    prefetchLinks: process.env.NUXT_APP_MODE === 'production',
    middleware: 'router-auth'
  },
  generate: {
    fallback: false,
    minify: false,
    // subFolders: false,
    /* async routes () {
      let routes = [
        {
          route: '/'
        },
      ]
      return routes
    } */
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['vk-bridge'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

