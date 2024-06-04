import styled from '@emotion/styled';

export const Button = styled.button<{ isPushed: boolean }>`
  position: absolute;
  bottom: 8px;
  right: 8px;

  height: 24px;

  background-color: ${({ isPushed, theme }) => (isPushed ? theme.colors.btnActiveBgColor : theme.colors.btnBgColor)};
  color: ${({ isPushed, theme }) => (isPushed ? theme.colors.black : theme.colors.white)};
  padding: 4px 8px;
  border-radius: 4px;

  font-size: ${({ theme }) => theme.fontSize.description};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  line-height: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;
