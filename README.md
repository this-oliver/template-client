# Nuxt Template

> Template for Nuxt.js projects

## Features

### Basics

- [x] Base Components (buttons, inputs, etc.)
- [x] State Management with `Pinia`
- [x] Responsive UI Framework with `Vuetify`

### `I18n` - Support Multiple Languages

Support multiple languages with [vue-i18n](https://vue-i18n.intlify.dev/). All you have to do is:

1. install the [@nuxt/i18n](https://i18n.nuxtjs.org/) plugin,
2. add a language file to the `locales/` directory and then
3. import it in the [i18n plugin](./plugins/i18n.ts).

Dependancies:

- [@nuxt/i18n](https://i18n.nuxtjs.org/)
- `@intlify/unplugin-vue-i18n/vite` (optimizes purposes as explained in this [guide](https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html#optimize-with-intlify-unplugin-vue-i18n) )
