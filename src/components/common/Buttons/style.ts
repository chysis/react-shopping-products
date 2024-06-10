import styled from '@emotion/styled';
import { CSSProperties } from 'react';

export const Button = styled.button<{
  width: CSSProperties['width'];
  height: CSSProperties['height'];
  fontSize: CSSProperties['fontSize'];
  fontWeight: CSSProperties['fontWeight'];
  border: CSSProperties['border'];
  borderRadius: CSSProperties['borderRadius'];
  isHighlight: boolean;
  isDisabled: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width};
  height: ${({ height }) => height};

  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  background-color: ${({ isHighlight, theme }) => (isHighlight ? theme.colors.black : theme.colors.white)};

  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  overflow: hidden;
  color: ${({ theme }) => theme.colors.black};

  transition: all 0.2s;
  cursor: ${({ isDisabled }) => (isDisabled ? 'default' : 'pointer')};

  &:hover {
    filter: ${({ isDisabled }) => (isDisabled ? '' : 'brightness(0.96)')};
  }
`;
