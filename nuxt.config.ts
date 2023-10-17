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
   * in the server side. You can access these values in your code
   * using the `const config = useRuntimeConfig()` composable.
   * 
   * See: https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    secret: '',

    public: {
      restApi: ''
    }
  }
})
