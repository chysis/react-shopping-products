import * as S from './style';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '@_assets/images/logo.png';
import CartIcon from '@_assets/images/cartIcon.png';
import { PAGE_INFORMATION } from '@_constants/page';
import CartModal from '@_components/cart/CartModal';
import useGetCartItems from '@_hooks/useGetCartItems';

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
    navigate(PAGE_INFORMATION.main.path);
  };

  return (
    <S.Button onClick={moveToHome} type='button'>
      <S.Logo src={Logo} alt='SHOP 로고' />
    </S.Button>
  );
}

function CartButton() {
  const { cartItems } = useGetCartItems();
  const [modalOpened, setModalOpened] = useState(false);

  const handleModalOpen = () => {
    setModalOpened(true);
    document.body.setAttribute('style', 'overflow: hidden');
  };

  const handleModalClose = () => {
    setModalOpened(false);
    document.body.setAttribute('style', 'overflow: auto');
  };

  return (
    <>
      <S.Button onClick={handleModalOpen} type='button'>
        <S.CartIcon src={CartIcon} alt='장바구니 버튼' />
        <S.CartItemQuantity>{cartItems.length}</S.CartItemQuantity>
      </S.Button>
      <CartModal isOpened={modalOpened} modalClose={handleModalClose} />
    </>
  );
}
