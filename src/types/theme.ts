import { CSSProperties } from 'react';

export interface ZIndex {
  header: CSSProperties['zIndex'];
  dropdown: CSSProperties['zIndex'];
}

export interface Colors {
  white: CSSProperties['color'];
  semiBlack: CSSProperties['color'];
  gray: CSSProperties['color'];
  black: CSSProperties['color'];

  border: CSSProperties['color'];
  text: CSSProperties['color'];
  divider: CSSProperties['color'];

  optionBorder: CSSProperties['color'];
  optionBg: CSSProperties['color'];

  btnBgColor: CSSProperties['color'];
  btnActiveBgColor: CSSProperties['color'];

  errorFallback: CSSProperties['color'];
  spinnerColor: CSSProperties['color'];
}

export interface FontSize {
  title: CSSProperties['fontSize'];
  description: CSSProperties['fontSize'];
  normal: CSSProperties['fontSize'];

  cartIcon: CSSProperties['fontSize'];
  cartTitle: CSSProperties['fontSize'];
  cartItemName: CSSProperties['fontSize'];

  paymentDetailTitle: CSSProperties['fontSize'];
  paymentDetailAmount: CSSProperties['fontSize'];
}

export interface FontWeight {
  bold: CSSProperties['fontWeight'];
  semibold: CSSProperties['fontWeight'];
  medium: CSSProperties['fontWeight'];
  normal: CSSProperties['fontWeight'];
}
