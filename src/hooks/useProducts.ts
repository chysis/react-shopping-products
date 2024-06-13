import { useInfiniteQuery } from '@tanstack/react-query';
import { Product } from '@_types/product';
import { PRODUCTS_ENDPOINT } from '@_api/endpoints';
import { INITIAL_PAGING_SIZE, PAGING_SIZE, START_PAGE_NUMBER } from '@_constants/api';
import { useState } from 'react';
import { fetchData } from '@_api/fetch';
import { QUERY_KEYS } from '@_constants/queryKeys';

export type SortType = 'desc' | 'asc';

interface UseProductsResult {
  products: Product[];
  refetch: () => void;
  isLoading: boolean;
  error: Error | null;
  page: number;
  isLastPage: boolean;
  fetchNextPage: () => void;

  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<SortType>>;
}

interface FetchProductsResponse {
  last: boolean;
  number: number;
  content: Product[];
}

export default function useProducts(): UseProductsResult {
  const [sort, setSort] = useState<SortType>('asc');
  const [category, setCategory] = useState<string>('');

  const getProducts = async (pageParam: number) => {
    return await fetchData<FetchProductsResponse>(PRODUCTS_ENDPOINT, {
      page: pageParam,
      size: pageParam === START_PAGE_NUMBER ? INITIAL_PAGING_SIZE : PAGING_SIZE,
      sort: `price,${sort}`,
      category,
    });
  };

  const { data, refetch, error, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery<FetchProductsResponse>({
    queryKey: [QUERY_KEYS.products, category, sort],
    queryFn: ({ pageParam }) => getProducts(pageParam as number),
    initialPageParam: START_PAGE_NUMBER,
    getNextPageParam: (lastPage) => {
      if (lastPage.last) return undefined;

      if (lastPage.number === START_PAGE_NUMBER) {
        return lastPage.number + INITIAL_PAGING_SIZE / PAGING_SIZE;
      } else {
        return lastPage.number + 1;
      }
    },
    networkMode: 'always',
    retry(failureCount, error) {
      const errorStatus = Number(error.message);
      if (errorStatus >= 400 && errorStatus < 500) {
        return false;
      }

      if (errorStatus >= 500 && errorStatus < 600) {
        return failureCount < 3;
      }
      return false;
    },
  });

  const products = data?.pages.flatMap((page) => page.content) || [];
  const page = data?.pageParams.length || 0;
  const isLastPage = !hasNextPage;

  return {
    products,
    refetch,
    isLoading,
    error,
    page,
    isLastPage,
    fetchNextPage,
    setCategory,
    setSort,
  };
}
