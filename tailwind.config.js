const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#d9e7f8'
    }),
    extend: {
      colors: {
        primary: '#4a90e2',
        'custom-gray': '#81899c'
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans]
        // serif: ['Lato', ...defaultTheme.fontFamily.serif],
        // mono: ['Lato', ...defaultTheme.fontFamily.mono]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
