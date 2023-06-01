// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiKey: "redacted",
    riotApiBaseUrl: "https://euw1.api.riotgames.com/lol",
  },
});
