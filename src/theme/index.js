import { icons } from './icons'

export const theme = {
  colors: {
    blue: '#1F2F97',
    black: '#000000',
    white: '#ffffff',
  },
  fonts: {
    OpenSansBold: 'Open Sans Bold',
    OpenSansSemibold: 'Open Sans Semibold',
    OpenSansRegular: 'Open Sans Regular',
    OpenSansSemiboldItalic: 'Open Sans Semibold Italic',
  },
  screen: {
    xxs: '320px',
    xs: '480px',
    sm: '640px',
    md: '768px',
    md1: '769px',
    lg: '1024px',
    lg1: '1025px',
    xl: '1440px',
    xxl: '1920px',
    xxxl: '2450px',
  },
  fontStyles: {
    displays: {
      xLarge: {
        fontSizeMin: 50,
        fontSizeMax: 80,
        lineHeight: `70px`,
      },
      large: {
        fontSizeMin: 50,
        fontSizeMax: 50,
        lineHeight: `50px`,
      },
      medium: {
        fontSizeMin: 34,
        fontSizeMax: 82,
        lineHeight: 1.2,
      },
      small: {
        fontSizeMin: 28,
        fontSizeMax: 56,
        lineHeight: 1.2,
      },
    },
    text: {
      regular: {
        fontSizeMin: 20,
        fontSizeMax: 20,
      },
      small: {
        fontSizeMin: 16,
        fontSizeMax: 16,
      },
    },
  },
  icons: {
    ...icons,
  },
}
