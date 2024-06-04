import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface ToastContainerProps {
  duration: number;
}

const fadeOut = keyframes`
  from, 50% { 
    opacity: 1;
  }

  100%, to {
    opacity: 0;
  }
`;

export const ToastContainer = styled.div<ToastContainerProps>`
  position: fixed;
  top: 64px;
  left: 50%;

  transform: translateX(-50%);
  background-color: ${({ theme }) => theme.colors.errorFallback};
  color: ${({ theme }) => theme.colors.black};
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: ${fadeOut} ${({ duration }) => `${duration / 1000}s`} ease-in-out
    forwards;
`;
