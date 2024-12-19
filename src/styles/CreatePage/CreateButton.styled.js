//버튼 컴포넌트 스타일 코드

import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${({ disabled }) => (disabled ? '#cccccc' : '#9935ff')};
  color: white;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;