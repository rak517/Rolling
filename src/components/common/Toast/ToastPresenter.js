import { useEffect } from 'react';
import {
  ToastSuccess,
  ToastWrapper,
  ToastSection,
  ToastCancel,
} from './Toast.style';
import toastCheck from '../../../assets/icons/toast-check.svg';
import toastX from '../../../assets/icons/toast-cancel.svg';

function ToastPresenter({ message, type, onClose, duration }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <ToastWrapper type={type} duration={duration} className="text-base">
      <ToastSection>
        <ToastSuccess src={toastCheck} alt="성공" />
        {message}
      </ToastSection>
      <ToastCancel src={toastX} alt="지우기" onClick={onClose} />
    </ToastWrapper>
  );
}

export default ToastPresenter;
