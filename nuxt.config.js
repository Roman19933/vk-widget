require('dotenv').config()

module.exports = {
  srcDir: 'src',
  /*
  ** Headers of the page
  */
  head: {
    title: 'vk_widgets',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '~/assets/sass/style.scss'
  ],
  /**
   * Modules
   */
  modules: [
    ['@nuxtjs/dotenv', { path: '', systemvars: true }],
    
  ],
  /**
   * Plugins
   */
  modules: ['bootstrap-vue/nuxt'],
  bootstrapVue: {
    componentPlugins: [
      'ModalPlugin'
    ]
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
    // { src: '~plugins/vk-bridge' },
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

