import { useCallback, useState } from 'react';
import useFetch from './useFetch';
import { CartItem } from '@_types/cartItem';
import { CART_ITEMS_ENDPOINT } from '@_api/endpoints';

interface UseCartItemsResult {
  cartItems: CartItem[];
  getCartItems: () => void;
}

interface FetchCartItemsResponse {
  content: CartItem[];
}

export default function useCartItems(): UseCartItemsResult {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { fetchData } = useFetch<FetchCartItemsResponse>({
    url: CART_ITEMS_ENDPOINT,
  });

  const getCartItems = useCallback(async () => {
    fetchData({
      size: 100,
    }).then((response) => {
      if (!response) return;

      const { content } = response;
      setCartItems(content);
    });
  }, []);

  return { cartItems, getCartItems };
}
