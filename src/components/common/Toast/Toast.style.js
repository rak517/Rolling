import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-20px); }
`;

export const ToastWrapper = styled.div`
  width: 52.4rem;
  background-color: ${({ type }) =>
    type === 'success'
      ? 'rgba(0, 0, 0, 0.8)'
      : type === 'error'
        ? '#F44336'
        : '#333'};
  color: var(--white);
  padding: 1.6rem 2.4rem;
  border-radius: 0.8rem;
  margin-top: 10px;
  min-width: 200px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  animation:
    ${fadeIn} 0.3s ease,
    ${fadeOut} 0.3s ease ${({ duration }) => duration - 300}ms forwards;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 400px;
  }
`;

export const ToastSuccess = styled.img``;

export const ToastCancel = styled.img`
  cursor: pointer;
`;

export const ToastSection = styled.div`
  display: flex;
  gap: 1.2rem;
`;
