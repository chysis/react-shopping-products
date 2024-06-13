import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;

  font-size: 24px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;
