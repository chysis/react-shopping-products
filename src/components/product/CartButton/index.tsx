import { useContext } from 'react';
import { AddCartIcon } from './Icons';
import * as S from './style';
import { CartItemsContext } from '@_context/CartItemsProvider';
import QuantityButton from '@_components/common/Buttons/QuantityButton';
import { useMutateCartItems } from '@_hooks/useMutateCartItems';

interface CartButtonProps {
  productId: number;
}

export default function CartButton({ productId }: CartButtonProps) {
  const { cartItems } = useContext(CartItemsContext) || { cartItems: [] };
  const { addItemToCart, removeItemFromCart, updateCartItemQuantity } = useMutateCartItems();

  const targetCartItem = cartItems.find((cartItem) => cartItem.product.id === productId);
  const isPushed = !!targetCartItem;

  const handleAddItem = () => {
    addItemToCart({ productId });
  };

  const handleDecreaseQuantity = () => {
    if (!targetCartItem) return;
    if (targetCartItem.quantity === 1) {
      if (confirm('해당 상품을 장바구니에서 빼시겠습니까?')) {
        removeItemFromCart({ cartItemId: targetCartItem.id });
      }
    } else {
      updateCartItemQuantity({ cartItemId: targetCartItem.id, quantity: targetCartItem.quantity - 1 });
    }
  };

  const handleIncreaseQuantity = () => {
    if (!targetCartItem) return;
    updateCartItemQuantity({ cartItemId: targetCartItem.id, quantity: targetCartItem.quantity + 1 });
  };

  return isPushed ? (
    <S.QuantityController>
      <QuantityButton type={targetCartItem.quantity === 1 ? 'canDelete' : 'minus'} onClick={handleDecreaseQuantity} />
      <div>{targetCartItem.quantity}</div>
      <QuantityButton type='plus' onClick={handleIncreaseQuantity} />
    </S.QuantityController>
  ) : (
    <S.AddButton onClick={handleAddItem}>
      <AddCartIcon />
      담기
    </S.AddButton>
  );
}
