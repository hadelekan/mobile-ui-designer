export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ui-editor',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/app.css',
    '@/assets/fonts/flaticon.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDr7qdrkDCuvVVS7NHFQBW4dhwxkhbb2c8",
          authDomain: "mobile-designer-1e44e.firebaseapp.com",
          projectId: "mobile-designer-1e44e",
          storageBucket: "mobile-designer-1e44e.appspot.com",
          messagingSenderId: "155768646725",
          appId: "1:155768646725:web:c6d2a5a65e33582e81472c"
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          firestore: true,
          storage: true,
        }
      }
    ]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
