/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      width: {
        default: "min(100vw, 72rem)",
      },
      fontSize: {
        dynamic: "clamp(2.25rem, 12vw, 8rem)",
      },
    },
  },
  plugins: [],
};
