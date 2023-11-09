# Nuxt Template

> Template for Nuxt.js projects

## Features

- [x] Base Components (buttons, inputs, etc.)
- [x] State Management with `Pinia`
- [x] Responsive UI Framework with `Vuetify`
- [x] Multi-language support with `vue-i18n`

### `I18n` - Support Multiple Languages

Support multiple languages with [vue-i18n](https://vue-i18n.intlify.dev/). All you have to do is:

1. install the [@nuxt/i18n](https://i18n.nuxtjs.org/) plugin,
2. add a language file to the `locales/` directory and then
3. import it in the [i18n plugin](./plugins/i18n.ts).

Dependancies:

- [@nuxt/i18n](https://i18n.nuxtjs.org/)
- `@intlify/unplugin-vue-i18n/vite` (optimizes purposes as explained in this [guide](https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html#optimize-with-intlify-unplugin-vue-i18n) )

### User Friendly Editor

Provide non-technical users with an alternative to markdown syntax with [tiptap](https://www.tiptap.dev/).

Dependancies:

- `@tiptap/vue-3` - core library
- `@tiptap/pm` - prosemirror for tiptap
- `@tiptap/starter-kit` - basic editor styling
- `@tiptap/extension-placeholder` - placeholder for empty editor
- `sass` for editor styling

## Deployment

### Docker

Building the image:

```bash
# `pnpm docker:build` performs the same command
docker build -t nuxt-template .
```

Running the image:

```bash
# `pnpm docker:run` performs the same command
docker run -p 3000:3000 --env-file .env nuxt-template
```
