import React, { useState } from 'react';
import { Container, Heading, ToggleContainer, ToggleButton } from './BackgroundSection.styled';
import ColorOptions from './ColorOptions';
import ImageOptions from './ImageOptions';

const BackgroundSection = ({ selectedColor, setSelectedColor, selectedImage, setSelectedImage }) => {
  const [activeTab, setActiveTab] = useState('color'); // 'color' or 'image'

  return (
    <Container>
      <Heading>배경화면을 선택해 주세요.</Heading>
      <p>컬러를 선택하거나, 이미지를 선택할 수 있습니다.</p>
      <ToggleContainer>
        <ToggleButton isActive={activeTab === 'color'} onClick={() => setActiveTab('color')}>
          컬러
        </ToggleButton>
        <ToggleButton isActive={activeTab === 'image'} onClick={() => setActiveTab('image')}>
          이미지
        </ToggleButton>
      </ToggleContainer>
      {activeTab === 'color' ? (
        <ColorOptions selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      ) : (
        <ImageOptions selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
      )}
    </Container>
  );
};

export default BackgroundSection;
