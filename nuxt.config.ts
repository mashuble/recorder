// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxthub/core',
    'nuxt-auth-utils',
    '@pinia/nuxt',
    // '@nuxtjs/i18n'
    '@pinia/colada-nuxt',
    '@sentry/nuxt/module'
  ],

  devtools: {
    enabled: true
  },

  colorMode: {
    disableTransition: true
  },

  ui: {
    safelistColors: ['primary', 'red', 'orange', 'green']
  },

  routeRules: {
    // Temporary workaround for prerender regression. see https://github.com/nuxt/nuxt/issues/27490
    '/': { prerender: true }
  },

  sourcemap: {
    client: 'hidden'
  },

  future: {
    compatibilityVersion: 4
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    experimental: {
      tasks: true
    }
  },

  typescript: {
    strict: false
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  sentry: {
    sourceMapsUploadOptions: {
      org: 'spotlightd',
      project: 'recorder'
    }
  }
})
