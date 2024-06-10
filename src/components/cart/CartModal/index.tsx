import { Modal } from 'fe-custom-modal';
import CartItem from '../CartItem';
import { useContext } from 'react';
import { CartItemsContext } from '@_context/CartItemsProvider';
import PaymentDetail from '@_components/common/PaymentDetail';
import Divider from '@_components/common/Divider';
import * as S from './style';

interface CartModalProps {
  isOpened: boolean;
  modalClose: () => void;
}

function CartModal({ isOpened, modalClose }: CartModalProps) {
  const { cartItems } = useContext(CartItemsContext) || { cartItems: [] };

  const totalAmount = cartItems.reduce((acc, cur) => {
    return acc + cur.product.price * cur.quantity;
  }, 0);

  return (
    <>
      {isOpened && (
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
      )}
    </>
  );
}
export default CartModal;
