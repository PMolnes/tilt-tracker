// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/image"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiKey: process.env.RIOT_API_KEY,
    riotApiBaseUrl: "https://euw1.api.riotgames.com/lol",
  },
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
  image: {
    inject: true,
    domains: ["https://ddragon.leagueoflegends.com"],
  },
});
