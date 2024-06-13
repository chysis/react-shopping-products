import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  AddCartItemArgs,
  RemoveCartItemArgs,
  UpdateCartItemArgs,
  addCartItem,
  removeCartItem,
  updateCartItem,
} from '@_api/cart';
import { QUERY_KEYS } from '@_constants/queryKeys';
import { useToast } from './useToast';

export function useMutateCartItems() {
  const { showToast } = useToast();
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: (productId: number) => addCartItem({ productId }),
    onError: () => {
      showToast('문제가 발생해 상품을 장바구니에 담지 못했어요.');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cart] });
    },
  });

  const removeMutation = useMutation({
    mutationFn: (cartItemId: number) => removeCartItem({ cartItemId }),
    onError: () => {
      showToast('문제가 발생해 상품을 삭제하지 못했어요.');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cart] });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ cartItemId, quantity }: UpdateCartItemArgs) => updateCartItem({ cartItemId, quantity }),
    onError: () => {
      showToast('문제가 발생해 수량을 변경하지 못했어요.');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.cart] });
    },
  });

  const addItemToCart = ({ productId }: AddCartItemArgs) => {
    addMutation.mutate(productId);
  };

  const removeItemFromCart = ({ cartItemId }: RemoveCartItemArgs) => {
    removeMutation.mutate(cartItemId);
  };

  const updateCartItemQuantity = ({ cartItemId, quantity }: UpdateCartItemArgs) => {
    updateMutation.mutate({ cartItemId, quantity });
  };

  return { addItemToCart, removeItemFromCart, updateCartItemQuantity };
}
