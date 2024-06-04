import styled from '@emotion/styled';

export const Grid = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: auto auto;
  gap: 20px 16px;

  height: 100%;
`;

export const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
