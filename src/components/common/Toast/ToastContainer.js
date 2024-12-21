// src/components/common/Toast/ToastContainer.js
import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import ToastPresenter from './ToastPresenter';

const Container = styled.div`
  position: fixed;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  z-index: 9999;
`;

function ToastContainer({ children }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = 'info', duration = 5000) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type, duration }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <>
      {children({ addToast })}
      <Container>
        {toasts.map((toast) => (
          <ToastPresenter
            key={toast.id}
            message={toast.message}
            type={toast.type}
            duration={toast.duration}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </Container>
    </>
  );
}

export default ToastContainer;
