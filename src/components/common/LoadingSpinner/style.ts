import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadingSpinner = styled.span`
  display: inline-block;

  width: 48px;
  height: 48px;

  border-radius: 50%;
  border-top: 4px solid ${({ theme }) => theme.colors.spinnerColor};
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: ${rotation} 1s linear infinite;
  position: relative;

  &::after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-bottom: 4px solid ${({ theme }) => theme.colors.semiBlack};
    border-left: 4px solid transparent;
  }
`;
