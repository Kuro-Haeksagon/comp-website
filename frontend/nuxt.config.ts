// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap' }
      ],
      title: 'Kuro Haeksagon',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Kuro Haeksagon' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.jpg' }
      ]
    }
  },
  plugins: [
    '~/plugins/auth.client.js',
  ],
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8080'
    }
  }
})
