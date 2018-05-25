module.exports = {
  head: {
    title: 'Auth Test',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'sd frontend application'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css'},
      {rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.8/css/all.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Serif:300,400,500,600'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=GFS+Didot|Lato:100,300,400,700,900'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ]

  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
    'bootstrap-vue/nuxt'
  ],
  toast: {
    position: 'top-right',
    duration: 2000
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/user/login', method: 'post', propertyName: 'token' },
          logout: false,
          user: {url: '/user/user', method: 'get', propertyName: 'data'},
        },
        tokenRequired: true,
        tokenType: 'Bearer'
      },
      facebook: {
        client_id: '',
        userinfo_endpoint: false,
        scope: ['public_profile', 'email'],
        redirect_uri:'http://localhost:3000/callback'
      },
      google: {
        client_id: '',
        user:false,
        redirect_uri:'http://localhost:3000/callback'

      },
    },
    redirect: {
      login: '/?login=1',
      logout: '/',
    }
  },
  axios: {
    baseURL:'api base url'
  },
  plugins: ['~plugins/vee.js',{ src:'~plugins/spinners.js', ssr: false },{ src:'~plugins/auth.js', ssr: false },'~plugins/axios.js'],
  loading: '~/components/Loading.vue',
  build: {
    vendor: ['vee-validate'],
    extend (config, { isDev, isClient }) {
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
