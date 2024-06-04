import APIErrorFallbackModal from '@_components/common/APIErrorFallbackModal';
import * as S from './style';
import { LoadingSpinner } from '@_components/common/LoadingSpinner/style';

interface ProductListProps {
  loading: boolean;
  error: Error | null;
}

export default function ProductList({ error, loading, children }: React.PropsWithChildren<ProductListProps>) {
  return (
    <S.Grid>
      {error && <APIErrorFallbackModal errorMessage={error.message} />}

      {children}

      {loading && (
        <S.LoadingContainer>
          <LoadingSpinner />
        </S.LoadingContainer>
      )}
    </S.Grid>
  );
}
