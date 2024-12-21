import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Heading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #181818;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#cccccc')};
  border-radius: 8px;
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
`;