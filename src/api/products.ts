import { SortType } from '@_hooks/useProducts';
import { generateQueryParams } from '../utils/generateQueryParams';
import { HEADERS } from './common';
import { PRODUCTS_ENDPOINT } from './endpoints';

interface ProductQueryParams {
  page: number;
  size: number;
  sort: SortType;
  category?: string;
}

export async function fetchProducts(params: ProductQueryParams) {
  const queryParams = generateQueryParams({
    ...params,
    sort: `price,${params.sort}`,
  });

  const response = await fetch(`${PRODUCTS_ENDPOINT}?${queryParams}`, {
    method: 'GET',
    headers: HEADERS,
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data;
}
