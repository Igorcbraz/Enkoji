/* eslint-disable */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#CEE4B6',
          200: '#ADC295',
          300: '#8DA276',
          400: '#6E8258',
          500: '#50643c',
        },
        secondary: {
          100: '#F3DCD3',
          200: '#D5BFB6',
          300: '#B8A29A',
          400: '#9C877E',
          500: '#806C64',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'history': "url('/src/assets/images/background.png')",
      }
    },
  },
  plugins: [],
}
