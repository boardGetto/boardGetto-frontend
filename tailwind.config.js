/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        getto50: '#FFF3F3', //exlight
        getto100: '#FFD4D4', //light
        getto200: '#FAABAB',
        getto250: '#FF7C7C',
        getto300: '#F98686', //main
        getto350: '#FF4C4C',
        getto400: '#F56060',
        getto500: '#FB4846',
        getto600: '#D83F3E',
        getto700: '#B83130',
        getto800: '#961D1C',
      },
      secondary: {},
      nutral: {
        white: {
          '01': '#FFFFFF',
          '02': '#FAF8F8',
          '03': '#E8E8E8',
        },
        gray: {
          '01': '#C4C4C4',
          '02': '#878585',
          '03': '#645F5F',
        },
        black: {
          '01': '#302C2C',
          '02': '#1B1717',
          '03': '#383838',
        },
      },
      caption: {
        error01: '#FFF7EF',
        error02: '#F0790B',
        subBlue01: '#F1F3FF',
        subBlue02: '#5166D3',
      },
    },
    fontSize: {
      'headBold-20': ['20px', { fontWeight: '700', lineHeight: 'auto' }],
      'headRegular-20': ['20px', { fontWeight: '400', lineHeight: 'auto' }],
      'headBegular-18': ['20px', { fontWeight: '400', lineHeight: 'auto' }],
      'headBold-18': ['18px', { fontWeight: '700', lineHeight: 'auto' }],
      'textBold-16': ['16px', { fontWeight: '700', lineHeight: 'auto' }],
      'textRegular-16': ['20px', { fontWeight: '400', lineHeight: 'auto' }],
      'textBold-14': ['14px', { fontWeight: '700', lineHeight: 'auto' }],
      'textRegular-14': ['14px', { fontWeight: '400', lineHeight: 'auto' }],
      'captionBold-12': ['12px', { fontWeight: '700', lineHeight: 'auto' }],
      'captionRegular-12': ['12px', { fontWeight: '400', lineHeight: 'auto' }],
      'bodyRegular-16': ['16px', { fontWeight: '400', lineHeight: 'auto' }],
      'bodyRegular-15': ['15px', { fontWeight: '400', lineHeight: 'auto' }],
      'bodyRegular-14': ['14px', { fontWeight: '400', lineHeight: 'auto' }],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
