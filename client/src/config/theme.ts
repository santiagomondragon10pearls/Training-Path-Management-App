const theme = {
  breakpoints: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  color: {
    accents: {
      darkBlue: '#3e416d',
      hoverDarkBlue: '#484b77',
      purple: '#6F42C1',
      indigo: '#6610F2',
      blue: '#007BFF',
    },
    alerts: {
      danger: '#DC3545',
      information: '#17A2B8',
      success: '#20C997',
      warning: '#FFC107',
    },
    gray: {
      darker: '#343A40',
      dark: '#5f6d79',
      main: '#6C757D',
      light: '#EDEFF0',
      lighter: '#F8F9FA',
      gradient: {
        main: 'linear-gradient(120deg,#343A40 0, #5f6d79 100%)',
      },
    },
    white: '#FFFFFF',
  },
  navWidth: {
    shrinked: '72px',
    opened: '192px',
  },
  radius: {
    container: '6px',
    bigItem: '6px',
    smallItem: '4px',
  },
  shadow: {
    container: '0 5px 15px -5px rgba(0, 0, 0, 0.08)',
    input: '0 2px 8px -2px rgba(0, 0, 0, 0.12)',
  },
  width: {
    full: '100%',
    '1/3': 'calc(100% / 3)',
    '1/2': '50%',
    '2/3': 'calc(100% / 3 * 2)',
  },
  numberSpacing(value: number) {
    return value * 8;
  },
  pixelSpacing(value: number) {
    return `${value * 8}px`;
  },
};

export default theme;
