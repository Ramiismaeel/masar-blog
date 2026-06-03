import tailwindcss from "@tailwindcss/vite"
const siteUrl =
  process.env.NUXT_PUBLIC_SITE_URL || "https://masar-blog.netlify.app"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-06-03",
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["vue", "@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1, maximum-scale=6",
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  i18n: {
    baseUrl: siteUrl,
    locales: [
      {
        code: "en",
        file: "en.json",
        language: "en-US",
        name: "English",
        icon: "gb-flag",
      },
      {
        code: "de",
        file: "de.json",
        language: "de-DE",
        name: "Deutsch",
        icon: "de-flag",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },
  ogImage: {
    enabled: process.env.NODE_ENV !== "development",
    zeroRuntime: true,
  },
  fonts: {
    defaults: {
      weights: [400, 700],
      styles: ["normal"],
    },
  },
  colorMode: {
    preference: "system", // 'light' | 'dark' | 'system'
    fallback: "light",
    storageKey: "theme",
    storage: "cookie",
    classSuffix: "",
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
  ],

  $production: {
    modules: ["@nuxt/scripts", "@nuxtjs/sitemap", "nuxt-og-image"],
  },
})
