// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/styles/fonts.css'
  ],

  modules: [
    '@pinia/nuxt',
    '@invictus.codes/nuxt-vuetify'
  ]
})
