import * as S from './style';

interface PaymentDetailProps {
  title: string;
  amount: number | string;
  directionStyle?: 'row' | 'column';
}

const PaymentDetail = ({ title, amount, directionStyle = 'row' }: PaymentDetailProps) => {
  return (
    <S.Container directionStyle={directionStyle}>
      <S.Title>{title}</S.Title>
      <S.Amount>{typeof amount === 'string' ? amount : amount.toLocaleString() + '원'}</S.Amount>
    </S.Container>
  );
};

export default PaymentDetail;
