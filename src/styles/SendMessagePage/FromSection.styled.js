import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionHeading = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #181818;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ error }) => (error ? 'red' : '#cccccc')};
  border-radius: 8px;
  font-size: 16px;
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
`;
