import * as S from './style';
import { LoadingSpinner } from '@_components/common/LoadingSpinner/style';
import { useToast } from '@_hooks/useToast';
import { useEffect } from 'react';
import errorImage from '@_assets/images/errorImage.png';

interface ProductListProps {
  loading: boolean;
  error: Error | null;
  refetch: () => void;
}

export default function ProductList({ error, loading, refetch, children }: React.PropsWithChildren<ProductListProps>) {
  const { showToast } = useToast();

  useEffect(() => {
    if (error) {
      showToast('상품 목록을 불러오는 도중 에러가 발생했어요.');
    }
  }, [error, showToast]);

  if (loading) {
    return (
      <S.Wrapper>
        <S.LoadingContainer>
          <LoadingSpinner />
        </S.LoadingContainer>
      </S.Wrapper>
    );
  }

  if (error) {
    return (
      <S.Wrapper>
        <S.ErrorContainer>
          <S.ErrorImage src={errorImage} alt='에러 이미지' />
          <S.ErrorMessage>상품 목록을 불러오지 못했어요.</S.ErrorMessage>
        </S.ErrorContainer>
        <S.RefetchButton onClick={refetch}>다시 불러오기</S.RefetchButton>
      </S.Wrapper>
    );
  }

  return <S.Grid>{children}</S.Grid>;
}
