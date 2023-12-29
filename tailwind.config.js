/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = withMT({
  darkMode: 'class',
  content: ["./public/**/*.html","./node_modules/flowbite/**/*.js"],
  theme: {
    screens:{
      "3xl":"1600px",
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
})