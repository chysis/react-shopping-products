import * as S from './style';
import { LoadingSpinner } from '@_components/common/LoadingSpinner/style';
import { useToast } from '@_hooks/useToast';
import { useEffect } from 'react';

interface ProductListProps {
  loading: boolean;
  error: Error | null;
}

export default function ProductList({ error, loading, children }: React.PropsWithChildren<ProductListProps>) {
  const { showToast } = useToast();

  useEffect(() => {
    switch (error && error.message[0]) {
      case '4':
      case '5':
        showToast('서버 오류가 발생했습니다.');
        break;

      default:
        break;
    }
  }, [error]);

  return (
    <S.Grid>
      {children}

      {loading && (
        <S.LoadingContainer>
          <LoadingSpinner />
        </S.LoadingContainer>
      )}
    </S.Grid>
  );
}
