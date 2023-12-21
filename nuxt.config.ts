// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  runtimeConfig: {
    public: {
      api: process.env.APIURL,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "nuxt-snackbar",
    "@sidebase/nuxt-auth",
    "nuxt-swiper",
  ],
  snackbar: {
    bottom: true,
    right: true,
    duration: 5000,
  },
  css: ["~/assets/css/tailwind.css"],
});
