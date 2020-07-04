// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      purple: '#7D06E3',
      white: '#FFFFFF',
      menuGray: '#8a8a8a',
      gray: {
        100: '#F9F9F9',
        200: '#DADADA',
        300: '#B7B7B7',
        400: '#6C6C6C',
        500: '#373737',
        600: '#202020',
        700: '#131414',
      },
    },
    extend: {
      spacing: {
        '2-75': '0.6875rem',
        '7-5': '1.875rem',
        '52': '13rem'
      }
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
