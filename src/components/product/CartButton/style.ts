import styled from '@emotion/styled';

export const AddButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;

  height: 24px;

  background-color: ${({ theme }) => theme.colors.btnBgColor};
  color: ${({ theme }) => theme.colors.white};
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

export const QuantityController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 8px;
  right: 8px;

  width: 80px;

  gap: 4px;
`;
