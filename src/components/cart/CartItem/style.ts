import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const Container = styled.div`
  display: flex;

  width: 365px;
  height: 80px;

  gap: 16px;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;

  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 8px;
  overflow: hidden;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  width: 269px;
  gap: 8px;
`;

export const NameAndPrice = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const Name = styled.p`
  font-size: ${({ theme }) => theme.fontSize.cartItemName};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 26px;
`;

export const Price = styled.p`
  font-size: ${({ theme }) => theme.fontSize.description};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 15px;
`;

export const QuantityController = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 80px;

  gap: 4px;
`;

export const DeleteButtonBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
