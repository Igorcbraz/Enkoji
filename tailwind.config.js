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
          600: '#465835',
          700: '#3C4B2D',
          800: '#323F25',
          900: '#28321E',
        },
        secondary: {
          100: '#F3DCD3',
          200: '#D5BFB6',
          300: '#B8A29A',
          400: '#9C877E',
          500: '#806C64',
          600: '#705F58',
          700: '#60514B',
          800: '#50443F',
          900: '#403632',
        }
      },
      fontFamily: {
        sans: ['Inter' ,'sans-serif'],
        script: ['Kaushan Script' ,'sans-serif'],
        body: ['DM Sans' ,'sans-serif'],
      },
      backgroundImage: {
        'history': "url('/src/assets/images/background.png')",
      }
    },
  },
  plugins: [
  ]
}
