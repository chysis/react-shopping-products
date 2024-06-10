import { CSSProperties } from 'react';
import * as S from './style';

export interface ButtonProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  fontWeight?: CSSProperties['fontWeight'];
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
  isHighlight?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  width = 'fit-content',
  height = '24px',
  fontSize = '12px',
  fontWeight = '500',
  border = `1px solid lightgrey`,
  borderRadius = '4px',
  isHighlight = false,
  isDisabled = false,
  onClick,
}: React.PropsWithChildren<ButtonProps>) => {
  return (
    <S.Button
      width={width}
      height={height}
      fontSize={fontSize}
      fontWeight={fontWeight}
      border={border}
      borderRadius={borderRadius}
      isHighlight={isHighlight}
      isDisabled={isDisabled}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </S.Button>
  );
};

export default Button;
