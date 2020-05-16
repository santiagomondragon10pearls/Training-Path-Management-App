const theme = {
  breakpoints: {
    sm: '',
    md: '',
    lg: '',
    xl: '',
  },
  color: {
    accents: {
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
      dark: '#343A40',
      main: '#6C757D',
      light: '#F8F9FA',
    },
    white: '#FFFFFF',
  },
  navWidth: {
    shrinked: '72px',
    opened: '192px',
  },
  radius: {
    container: '8px',
    bigBtn: '4px',
    smallBtn: '2px',
  },
  pixelSpacing(value: number) {
    return `${value * 8}px`;
  },
  numberSpacing(value: number) {
    return value * 8;
  },
};

export default theme;
