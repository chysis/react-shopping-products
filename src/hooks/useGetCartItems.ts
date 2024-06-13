import { FetchCartItemsResponse, fetchCartItems } from '@_api/cart';
import { QUERY_KEYS } from '@_constants/queryKeys';
import { CartItem } from '@_types/cartItem';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';

interface UseGetCartItemsResult {
  cartItems: CartItem[];
  error: Error | null;
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => void;
}

interface UseGetCartItemsOptions extends Omit<UseQueryOptions<FetchCartItemsResponse, Error>, 'queryKey' | 'queryFn'> {}

interface UseGetCartItemsProps {
  options?: UseGetCartItemsOptions;
}

export default function useGetCartItems({ options }: UseGetCartItemsProps = {}): UseGetCartItemsResult {
  const { data, error, isLoading, isFetching, refetch } = useQuery<FetchCartItemsResponse>({
    queryKey: [QUERY_KEYS.cart],
    queryFn: () => fetchCartItems(),
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
    ...options,
  });

  const cartItems = (data && data.content) || [];

  return { cartItems, error, isLoading, isFetching, refetch };
}
