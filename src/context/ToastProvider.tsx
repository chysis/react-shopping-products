// ToastContext.tsx
import Toast from '@_components/common/ToastModal';
import { createContext, useState, useCallback } from 'react';

export interface ToastContextValue {
  showToast: (message: string, duration?: number) => void;
}

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [toastDuration, setToastDuration] = useState<number>(3000);

  const showToast = useCallback((message: string, duration = 3000) => {
    setToastMessage(message);
    setToastDuration(duration);
    setTimeout(() => {
      setToastMessage(null);
    }, duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toastMessage && <Toast message={toastMessage} duration={toastDuration} />}
    </ToastContext.Provider>
  );
};
