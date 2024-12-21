import React from 'react';
import { ColorGrid, ColorBox } from '../../styles/CreatePage/BackgroundSection.styled';

const colorOptions = [
  { color: '#FFE2AD', label: '베이지' },
  { color: '#ECD9FF', label: '퍼플' },
  { color: '#B1E4FF', label: '블루' },
  { color: '#D0F5C3', label: '그린' },
];

const ColorOptions = ({ selectedColor, setSelectedColor }) => (
  <ColorGrid>
    {colorOptions.map((option) => (
      <ColorBox
        key={option.color}
        color={option.color}
        isSelected={selectedColor === option.color}
        onClick={() => setSelectedColor(option.color)}
      />
    ))}
  </ColorGrid>
);

export default ColorOptions;
