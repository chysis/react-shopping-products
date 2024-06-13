import { Modal } from 'fe-custom-modal';
import CartItem from '../CartItem';
import PaymentDetail from '@_components/common/PaymentDetail';
import Divider from '@_components/common/Divider';
import useGetCartItems from '@_hooks/useGetCartItems';
import { useToast } from '@_hooks/useToast';
import { useEffect } from 'react';
import * as S from './style';

interface CartModalProps {
  isOpened: boolean;
  modalClose: () => void;
}

function CartModal({ isOpened, modalClose }: CartModalProps) {
  const { showToast } = useToast();
  const { cartItems, error } = useGetCartItems();

  const totalAmount = cartItems.reduce((acc, cur) => {
    return acc + cur.product.price * cur.quantity;
  }, 0);

  useEffect(() => {
    if (error) {
      showToast('장바구니 목록을 불러오는 도중 에러가 발생했어요.');
      modalClose();
    }
  }, [error, showToast, modalClose]);

  if (!isOpened || error) {
    return null;
  }

  return (
    <Modal
      modalHeader={{
        closeButton: { display: false, onClose: modalClose },
        title: { content: '장바구니', fontSize: '18px', position: 'left' },
      }}
      modalFooter={{ confirmButton: { content: '닫기', onConfirm: modalClose } }}
      modalPosition='bottom'
      modalSize={{ width: '429px', maxHeight: '90vh' }}
    >
      <S.Container>
        {cartItems &&
          cartItems.map((item, idx) => {
            return <CartItem cartItemInfo={item} key={idx} />;
          })}
      </S.Container>
      <S.Result>
        <Divider />
        <PaymentDetail title='총 결제 금액' amount={totalAmount} />
      </S.Result>
    </Modal>
  );
}

export default CartModal;
