//배경색상선택 컴포넌트 스타일 코드

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Heading = styled.h3`
  font-size: 24px;
  font-weight: 700;
`;

export const ColorOptions = styled.div`
  display: flex;
  gap: 16px;
`;

export const ColorBox = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 16px;
  cursor: pointer;
  border: 1px solid ${({ selected }) => (selected ? '#9935ff' : '#cccccc')};
  background-color: ${({ color }) => color};
`;