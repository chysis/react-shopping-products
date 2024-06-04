import { Product } from '@_types/product';
import * as S from './style';
import CartButton from '../CartButton';

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product: { imageUrl, name, price, id } }: ProductItemProps) {
  return (
    <S.Container>
      <S.Image src={imageUrl} alt={name} />
      <S.Information>
        <S.Name>{name}</S.Name>
        <S.Price>{price}</S.Price>
      </S.Information>

      <CartButton productId={id} />
    </S.Container>
  );
}
