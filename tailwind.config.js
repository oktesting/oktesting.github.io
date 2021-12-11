const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'jit', // just in time mode will purge all the massive unused css sent to browser while developing
  purge: ['./**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#d9e7f8'
    }),
    extend: {
      colors: {
        primary: '#4a90e2',
        'custom-gray': '#81899c',
        'custom-purple': '#5b6a9a'
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
