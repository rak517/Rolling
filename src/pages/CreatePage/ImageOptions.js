import React from 'react';
import {
  ImageGrid,
  ImageBox,
} from '../../styles/CreatePage/BackgroundSection.styled';

const imageOptions = [
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf_mr6dx1OYsdjbGStsFqWdWZlTUWe-jpQcg&s',
    label: '이미지 1',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsBlbGhLfS6zHpGdWtXiCh5I0TWpB4YIJbPA&s',
    label: '이미지 2',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2017/09/16/15/49/sea-2755858_1280.jpg',
    label: '이미지 3',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2023/06/04/23/09/desert-8041046_1280.jpg',
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
