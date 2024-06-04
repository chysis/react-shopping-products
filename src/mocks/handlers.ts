import { http, HttpResponse } from 'msw';
import products from './products.json';
import { PRODUCTS_ENDPOINT } from '@_api/endpoints';
import { INITIAL_PAGING_SIZE, PAGING_SIZE, START_PAGE_NUMBER } from '@_constants/api';

export const handlers = [
  http.get(PRODUCTS_ENDPOINT, ({ request }) => {
    const url = new URL(request.url);
    const sort = url.searchParams.get('sort');
    const category = url.searchParams.get('category');
    const page = Number(url.searchParams.get('page') || '0');

    const size = page === START_PAGE_NUMBER ? INITIAL_PAGING_SIZE : PAGING_SIZE;
    const start = page === START_PAGE_NUMBER ? page : (page - 5) * PAGING_SIZE + INITIAL_PAGING_SIZE;
    const end = start + size;

    const filterByCategory = category ? products.filter((product) => product.category === category) : products;

    const sortedProducts = filterByCategory.sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price));

    const paginatedProducts = sortedProducts.slice(start, end);
    const last = !products[end + 1];

    return HttpResponse.json({ last, content: [...paginatedProducts] });
  }),
];
