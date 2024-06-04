import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 430px;
  height: 64px;
  background-color: ${({ theme }) => theme.colors.black};

  padding: 0 24px;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 56px;
  height: 16px;
`;

export const Button = styled.button`
  position: relative;
`;

export const CartIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const CartItemQuantity = styled.div`
  position: absolute;
  bottom: 0%;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 19px;
  height: 19px;
  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.cartIcon};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
