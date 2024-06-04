import { useEffect } from 'react';
import * as S from './style';

interface ToastProps {
  message: string;
  duration?: number;
  onClose?: () => void;
}

export default function Toast({
  message,
  duration = 3000,
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return <S.ToastContainer duration={duration}>{message}</S.ToastContainer>;
}
