import { ToastContext, ToastContextValue } from '@_context/ToastProvider';
import { useContext } from 'react';

export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('ToastProvider 내부에서만 context 사용 가능');
  }
  return context;
};
