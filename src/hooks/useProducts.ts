import { useEffect, useState } from 'react';
import useFetch from './useFetch';
import { Product } from '@_types/product';
import { PRODUCTS_ENDPOINT } from '@_api/endpoints';
import { INITIAL_PAGING_SIZE, PAGING_SIZE, START_PAGE_NUMBER } from '@_constants/api';

export type SortType = 'desc' | 'asc';

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: Error | null;
  page: number;
  isLastPage: boolean;
  fetchNextPage: () => void;

  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setSort: React.Dispatch<React.SetStateAction<SortType>>;
}

interface FetchProductsResponse {
  last: boolean;
  content: Product[];
}

export default function useProducts(): UseProductsResult {
  const { error, loading, fetchData } = useFetch<FetchProductsResponse>({
    url: PRODUCTS_ENDPOINT,
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState<SortType>('asc');
  const [category, setCategory] = useState<string>('');
  const [isLastPage, setIsLastPage] = useState<boolean>(false);

  const getProducts = async () => {
    fetchData({
      page,
      size: page === START_PAGE_NUMBER ? INITIAL_PAGING_SIZE : PAGING_SIZE,
      sort: `price,${sort}`,
      category,
    }).then((response) => {
      if (!response) return;
      const { last, content } = response;

      setIsLastPage(last);
      setProducts((prevProducts) => (page === START_PAGE_NUMBER ? content : [...prevProducts, ...content]));
    });
  };

  useEffect(() => {
    if (!isLastPage) {
      getProducts();
    }
  }, [page]);

  useEffect(() => {
    setPage(START_PAGE_NUMBER);
    setIsLastPage(false);
    getProducts();
  }, [category, sort]);

  const fetchNextPage = () => {
    if (isLastPage) return;

    if (page === START_PAGE_NUMBER) setPage(page + INITIAL_PAGING_SIZE / PAGING_SIZE);
    else setPage(page + 1);
  };

  return {
    products,
    loading,
    error,
    page,
    fetchNextPage,
    setCategory,
    setSort,
    isLastPage,
  };
}
