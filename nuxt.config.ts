// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/fonts.css'
  ],

  modules: [
    '@pinia/nuxt',
    '@invictus.codes/nuxt-vuetify'
  ],

  /**
   * NOTE: `runtimeConfig.public.restApi` is available in the client
   * and server side while `runtimeConfig.secret` is only available
   * in the server side.
   */
  runtimeConfig: {
    secret: '',

    public: {
      restApi: ''
    }
  }
})
