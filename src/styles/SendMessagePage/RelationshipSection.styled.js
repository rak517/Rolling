import styled from 'styled-components';

// 'relationship' prop을 HTML DOM에 전달하지 않도록 필터링
export const Section = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'relationship', // relationship을 필터링
})`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #181818;
`;

export const Select = styled.select`
  width: 320px;
  padding: 12px 16px;
  border: 1px solid #cccccc;
  border-radius: 8px;
  font-size: 16px;
  color: #555555;
`;
