import styled from '@emotion/styled';

export const Title = styled.h1`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 35px;
  text-align: left;
`;
