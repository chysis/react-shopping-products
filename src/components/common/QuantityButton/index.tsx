import { HiOutlineMinus, HiOutlinePlus } from 'react-icons/hi';
import { MdDelete } from 'react-icons/md';
import * as S from './style';

export type ButtonType = 'plus' | 'minus' | 'canDelete';

interface QuantityProps {
  type: ButtonType;
  onClick?: () => void;
}

const QuantityButton = ({ type, onClick }: QuantityProps) => {
  const buttonMap = {
    plus: <HiOutlinePlus size={16} />,
    minus: <HiOutlineMinus size={16} />,
    canDelete: <MdDelete size={16} />,
  };

  return <S.Button onClick={onClick}>{buttonMap[type]}</S.Button>;
};

export default QuantityButton;
