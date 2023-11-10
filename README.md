# Nuxt Template

> Build apps faster with templates 🔥

The purpose of this project is to provide a template for Nuxt projects so that I can quickly start new projects without having to set up the same things over and over again.

## 🧪 Features

- [x] Base Components (buttons, inputs, etc.)
- [x] State Management with `Pinia`
- [x] Responsive UI Framework with `Vuetify`
- [x] Multi-language support with `vue-i18n`
- [x] User-friendly editor with `tiptap`

## 📜 Documentation

### Adding support for a new language

1. add a language file to the `locales/` directory.
2. import it in the [i18n plugin](./plugins/i18n.ts).

## 🚀 Deployment

### Docker

```bash
# build image (pnpm docker:build)
docker build -t nuxt-template .

# spin up container (pnpm docker:run)
docker run -p 3000:3000 --env-file .env nuxt-template
```

## ⛓️ Dependencies

- Base Components (buttons, inputs, etc.)
- State Management with `Pinia`
- Responsive UI Framework with `Vuetify`
- Multi-language support with `vue-i18n`
  - [@nuxt/i18n](https://i18n.nuxtjs.org/)
  - `@intlify/unplugin-vue-i18n/vite` (optimizes purposes as explained in this [guide](https://vue-i18n.intlify.dev/guide/integrations/nuxt3.html#optimize-with-intlify-unplugin-vue-i18n))
- User-friendly editor with `tiptap`
  - `@tiptap/vue-3` - core library
  - `@tiptap/pm` - prosemirror for tiptap
  - `@tiptap/starter-kit` - basic editor styling
  - `@tiptap/extension-placeholder` - placeholder for empty editor
  - `sass` for editor styling
