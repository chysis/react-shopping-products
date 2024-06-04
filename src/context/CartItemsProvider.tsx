import { SetStateAction, createContext, useEffect, useState } from 'react';
import { CartItem } from '../types';
import useCartItems from '@_hooks/useCartItems';

interface CartItemsContextValue {
  cartItems: CartItem[];
  setRefresh: React.Dispatch<SetStateAction<boolean>>;
}

export const CartItemsContext = createContext<CartItemsContextValue>({
  cartItems: [],
  setRefresh: () => {},
});

export const CartItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const { cartItems, getCartItems } = useCartItems();
  const [refresh, setRefresh] = useState<boolean>(true);

  useEffect(() => {
    if (refresh) {
      getCartItems();
      setRefresh(false);
    }
  }, [refresh]);

  return <CartItemsContext.Provider value={{ cartItems, setRefresh }}>{children}</CartItemsContext.Provider>;
};
