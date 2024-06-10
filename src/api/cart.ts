import { CartItem } from '../types';
import { generateQueryParams } from '../utils/generateQueryParams';
import { HEADERS } from './common';
import { CART_ITEMS_ENDPOINT } from './endpoints';

export const fetchCartItems = async (): Promise<CartItem[]> => {
  const params = generateQueryParams({ size: 100 });
  const response = await fetch(`${CART_ITEMS_ENDPOINT}?${params}`, {
    method: 'GET',
    headers: HEADERS,
  });

  if (!response.ok) {
    throw new Error(`${response.status}`);
  }

  const data = await response.json();
  return data.content;
};

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
