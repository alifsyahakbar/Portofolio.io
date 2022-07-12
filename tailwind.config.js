/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container : {
      center : true,
      padding : '16px'
    },
    extend: {
      colors : {
        primary : '#313bac',
        dark : '#27272a',
        muda : '#3d3d40'
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
