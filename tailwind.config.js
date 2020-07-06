// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ['./src/**/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      purple: '#7D06E3',
      darkPurple: '#7105CC',
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
    fontFamily: {
      'open-sans': ['Open Sans'],
      poppins: ['Poppins'],
    },
    extend: {
      spacing: {
        '2-5': '0.625rem',
        '2-75': '0.6875rem',
        '7-5': '1.875rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '52': '13rem',
        '5px': '5px',
        '10px': '10px',
        '20px': '20px',
        '30px': '30px',
        '51px': '51px',
        '93': '93px',
        '110': '110px',
        '130': '130px',
        '140': '140px',
        '144': '144px',
        '156': '156px',
        '162': '162px',
        '165': '165px',
        '183': '183px',
        '190': '190px',
        '200': '200px',
        '281': '281px',
        '289': '289px',
        '241': '241px',
        '400': '400px',
        '580': '580px',
        '699': '699px',
        '764': '764px',
        '800': '800px',
        '843': '843px',
        '860': '860px',
      },
      lineHeight: {
        '28px': '28px'
      },
      fontSize: {
        '3-5xl': '2rem',
        '6-5xl': '4.5rem'
      }
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require('@tailwindcss/custom-forms')],
};
