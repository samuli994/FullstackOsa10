import { Platform } from 'react-native';

const theme = {
  colors: {
    primary: '#0366d6',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    appBarBackground: '#24292e',
  },
    fontFamily: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System',
    }),
  fontSizes: {
    body: 14,
  },
  fontWeights: {
    bold: '700',
  },
};

export default theme;
