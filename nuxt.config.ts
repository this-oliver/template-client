// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	
  /**
   * Use styling globally in app
   */
  css: [
		'~/assets/styles/fonts.css'
	],

	/**
   * Use components in this array globaly without having to import
   * the explicitly
   */
	components: [
		'~/components',
		{ path: '~/components/base' },
		{ path: '~/components/cards' },
		{ path: '~/components/forms' }
	],

  /**
   * Adds modules to app
   */
	modules: [
		'@invictus.codes/nuxt-vuetify',
		'@pinia/nuxt'
	],

	/**
   * NOTE: `runtimeConfig.public.restApi` is available in the client
   * and server side while `runtimeConfig.secret` is only available
   * in the server side.
   */
	runtimeConfig: { public: { restApi: '' } }
});
