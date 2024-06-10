import styled from '@emotion/styled';

export const Divider = styled.hr`
  width: '100%';
  border-style: 'solid';
  border-color: ${({ theme }) => theme.colors.divider};
  margin: 0;
`;
