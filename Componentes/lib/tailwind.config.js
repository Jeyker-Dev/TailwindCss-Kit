/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../public/**/*.{html,js}"],
  presets: [
    require('./mypreset.js'),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
