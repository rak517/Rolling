//배경색상선택 컴포넌트 로직 코드

import React from 'react';
import { Container, Heading, ColorOptions, ColorBox } from './BackgroundSection.styled';

const BackgroundSection = ({ selectedColor, setSelectedColor }) => {
  const colorOptions = [
    { color: '#FFE2AD', label: '베이지' },
    { color: '#ECD9FF', label: '퍼플' },
    { color: '#B1E4FF', label: '블루' },
    { color: '#D0F5C3', label: '그린' },
  ];

  return (
    <Container>
      <Heading>배경화면을 선택해 주세요.</Heading>
      <ColorOptions>
        {colorOptions.map((option) => (
          <ColorBox
            key={option.color}
            color={option.color}
            selected={selectedColor === option.color}
            onClick={() => setSelectedColor(option.color)}
          />
        ))}
      </ColorOptions>
    </Container>
  );
};

export default BackgroundSection;