import { createContext } from 'react';
import { CartItem } from '../types';
import useGetCartItems from '@_hooks/useGetCartItems';

interface CartItemsContextValue {
  cartItems: CartItem[];
}

export const CartItemsContext = createContext<CartItemsContextValue>({
  cartItems: [],
});

export const CartItemsProvider = ({ children }: { children: React.ReactNode }) => {
  const { cartItems } = useGetCartItems();

  return <CartItemsContext.Provider value={{ cartItems }}>{children}</CartItemsContext.Provider>;
};
