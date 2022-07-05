/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    container : {
      center : true,
      padding : '16px'
    },
    extend: {
      colors : {
        primary : '#14b8a6',
        dark : '#27272a'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
