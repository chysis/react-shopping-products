import Divider from '@_components/common/Divider';

import { CartItem as CartItemType } from '@_types/cartItem';

import * as S from './style';
import { useMutateCartItems } from '@_hooks/useMutateCartItems';
import QuantityButton from '@_components/common/QuantityButton';

interface CartItemProps {
  cartItemInfo: CartItemType;
}

function CartItem({ cartItemInfo }: CartItemProps) {
  const { removeItemFromCart, updateCartItemQuantity } = useMutateCartItems();

  const handleDecreaseQuantity = () => {
    if (cartItemInfo.quantity === 1) {
      if (confirm('해당 상품을 장바구니에서 빼시겠습니까?')) {
        removeItemFromCart({ cartItemId: cartItemInfo.id });
      }
    } else {
      updateCartItemQuantity({ cartItemId: cartItemInfo.id, quantity: cartItemInfo.quantity - 1 });
    }
  };

  const handleIncreaseQuantity = () => {
    updateCartItemQuantity({ cartItemId: cartItemInfo.id, quantity: cartItemInfo.quantity + 1 });
  };

  const handleDeleteItem = () => {
    if (confirm('해당 상품을 장바구니에서 빼시겠습니까?')) {
      removeItemFromCart({ cartItemId: cartItemInfo.id });
    }
  };

  return (
    <S.Wrapper>
      <Divider />
      <S.Container>
        <S.Image src={cartItemInfo.product.imageUrl} alt={cartItemInfo.product.name} />
        <S.Information>
          <S.NameAndPrice>
            <S.Name>{cartItemInfo.product.name}</S.Name>
            <S.Price>{cartItemInfo.product.price.toLocaleString() + '원'}</S.Price>
          </S.NameAndPrice>
          <S.QuantityController>
            <QuantityButton
              type={cartItemInfo.quantity === 1 ? 'canDelete' : 'minus'}
              onClick={handleDecreaseQuantity}
            />
            <div>{cartItemInfo.quantity}</div>
            <QuantityButton type='plus' onClick={handleIncreaseQuantity} />
          </S.QuantityController>
          <S.DeleteButton onClick={handleDeleteItem}>삭제</S.DeleteButton>
        </S.Information>
      </S.Container>
    </S.Wrapper>
  );
}

export default CartItem;
