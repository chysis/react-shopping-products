import { CartItem } from '@_types/cartItem';
import { HEADERS } from './common';
import { CART_ITEMS_ENDPOINT } from './endpoints';
import { fetchData } from './fetch';

export interface FetchCartItemsResponse {
  last: boolean;
  number: number;
  content: CartItem[];
}

export async function fetchCartItems() {
  return await fetchData<FetchCartItemsResponse>(CART_ITEMS_ENDPOINT, {
    size: 100,
  });
}

export interface AddCartItemArgs {
  productId: number;
}

export async function addCartItem({ productId }: AddCartItemArgs) {
  const response = await fetch(`${CART_ITEMS_ENDPOINT}`, {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ productId, quantity: 1 }),
  });

  if (!response.ok) throw new Error(`${response.status}`);
}

export interface RemoveCartItemArgs {
  cartItemId: number;
}

export async function removeCartItem({ cartItemId }: RemoveCartItemArgs) {
  const response = await fetch(`${CART_ITEMS_ENDPOINT}/${cartItemId}`, {
    method: 'DELETE',
    headers: HEADERS,
  });

  if (!response.ok) throw new Error(`${response.status}`);
}

export interface UpdateCartItemArgs {
  cartItemId: number;
  quantity: number;
}

export async function updateCartItem({ cartItemId, quantity }: UpdateCartItemArgs) {
  const response = await fetch(`${CART_ITEMS_ENDPOINT}/${cartItemId}`, {
    method: 'PATCH',
    headers: HEADERS,
    body: JSON.stringify({ quantity }),
  });

  if (!response.ok) throw new Error(`${response.status}`);
}
