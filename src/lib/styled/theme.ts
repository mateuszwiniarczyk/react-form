export const theme = {
  color: {
    gray: 'rgb(220, 220, 220)',
    darkGray: 'rgb(85, 85, 85)',
    black: 'rgb(40, 40, 40)',
    blue: 'rgb(0, 130, 250)',
    neutral: 'rgb(247, 247, 247)',
    white: 'rgb(255, 255, 255)',
    red: 'rgb(229, 57, 53)',
    lightRed: 'rgb(254, 242, 242)',
    lightBlue: 'rgb(230, 242, 255)',
    lightGreen: 'rgb(233, 247, 238)',
    green: 'rgb(51, 153, 88)',
  },
  font: {
    family: {
      roboto: '"Roboto", sans-serif',
    },
    weight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
  borderRadius: {
    sm: '0.8rem',
    md: '1.2rem',
    roundedFull: '999rem',
  },
  mq: {
    sm: '@media (min-width: 480px)',
    md: '@media (min-width: 768px)',
    lg: '@media (min-width: 1024px)',
    xl: '@media (min-width: 1280px)',
    xxl: '@media (min-width: 1440px)',
  },
} as const;

export type ThemeType = typeof theme;
