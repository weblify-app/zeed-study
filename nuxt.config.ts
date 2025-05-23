// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxt/ui", "@nuxt/eslint"],
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  nitro: {
    preset: "cloudflare_module",

    cloudflare: {
      deployConfig: true,
      nodeCompat: true,
    },
  },
  colorMode: {
    preference: "light",
  },
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    payloadExtraction: true,
  },
  compatibilityDate: "2025-03-28",
});
