import React from 'react';
import {
  ImageGrid,
  ImageBox,
} from '../../styles/CreatePage/BackgroundSection.styled';

const imageOptions = [
  {
    url: 'https://preview.redd.it/nhk8jg3psng71.jpg?auto=webp&s=0614423637af7440921c3932759d8a90a24981fb',
    label: '이미지 1',
  },
  {
    url: 'https://preview.redd.it/fvaecdifsng71.jpg?auto=webp&s=5b58fd8b3baf37248db2253b5bb7b3a7f5a1815f',
    label: '이미지 2',
  },
  {
    url: 'https://preview.redd.it/fire-and-frost-a-winter-tale-in-v%C3%A4rmland-1920x1080-v0-6sq3a0f3q37e1.jpeg?auto=webp&s=ea9dbb178557ff63149c1e86cc92d3886c1533ac',
    label: '이미지 3',
  },
  {
    url: 'https://external-preview.redd.it/cFsTudt5cj4sW8Yi_IQS7GCxZa0Twt6WUK4av0XvWLs.jpg?auto=webp&s=a4f4dc9d7bb78f72414d81f8843d4c26a5348ecb',
    label: '이미지 4',
  },
];

const ImageOptions = ({ selectedImage, setSelectedImage }) => (
  <ImageGrid>
    {imageOptions.map((option, index) => (
      <ImageBox
        key={index}
        isSelected={selectedImage === option.url}
        onClick={() => setSelectedImage(option.url)}
      >
        <img src={option.url} alt={option.label} />
      </ImageBox>
    ))}
  </ImageGrid>
);

export default ImageOptions;
