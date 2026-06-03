import tailwindcss from "@tailwindcss/vite";
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
  ogImage: {
    enabled: process.env.NODE_ENV !== "development",
    zeroRuntime: true,
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
});
