import { useState } from 'react';
import Toast from '../ToastModal';

interface APIErrorFallbackModalProps {
  errorMessage: string;
}

export default function APIErrorFallbackModal({ errorMessage }: APIErrorFallbackModalProps) {
  const [isVisible, setIsVisible] = useState(!!errorMessage);
  const closeToast = () => setIsVisible(false);

  return isVisible && <Toast message={errorMessage} onClose={closeToast} />;
}
