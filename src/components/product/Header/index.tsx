import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartItemsContext } from '../../../context/CartItemsProvider';
import Logo from '@_assets/images/logo.png';
import CartIcon from '@_assets/images/cartIcon.png';

export default function Header() {
  return (
    <S.Container>
      <HomeButton />
      <CartButton />
    </S.Container>
  );
}

function HomeButton() {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate(0);
  };

  return (
    <S.Button onClick={moveToHome} type='button'>
      <S.Logo src={Logo} alt='SHOP 로고' />
    </S.Button>
  );
}

function CartButton() {
  const navigate = useNavigate();
  const moveToCartPage = () => {
    navigate(0);
  };

  const { cartItems } = useContext(CartItemsContext) || { cartItems: [] };

  return (
    <S.Button onClick={moveToCartPage} type='button'>
      <S.CartIcon src={CartIcon} alt='장바구니 버튼' />
      <S.CartItemQuantity>{cartItems.length}</S.CartItemQuantity>
    </S.Button>
  );
}
