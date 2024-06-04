import { Colors, FontSize, FontWeight, ZIndex } from '@_types/theme';
import { Theme } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    zIndex: ZIndex;
    fontSize: FontSize;
    fontWeight: FontWeight;
  }
}

const zIndex: ZIndex = {
  header: 1000,
  dropdown: 900,
};

const colors: Colors = {
  white: 'white',
  black: '#000000',
  semiBlack: '#0000001A',
  gray: '#BEBEBE',

  text: '#0A0D13',
  divider: '#0000001A',
  border: '#eaeaea',

  optionBorder: '#ddd',
  optionBg: '#e1e1e1',

  btnBgColor: '#000000',
  btnActiveBgColor: '#eaeaea',

  errorFallback: '#ffc9c9B3',
  spinnerColor: '#CA5514',
};

const fontSize: FontSize = {
  title: '24px',
  description: '12px',
  normal: '14px',

  cartIcon: '10px',
};

const fontWeight: FontWeight = {
  bold: '700',
  semibold: '600',
  medium: '500',
  normal: '400',
};

const theme: Theme = {
  colors,
  zIndex,
  fontSize,
  fontWeight,
};

export default theme;
