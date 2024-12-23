import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #181818;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 260px;
  padding: 16px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 16px;
  color: #181818;
  resize: none;
`;
