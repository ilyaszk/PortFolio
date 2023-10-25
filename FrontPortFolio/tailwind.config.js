/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#939597",
        secondary: "#CF5C78",
        tertiary: "#DCDDDF",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
