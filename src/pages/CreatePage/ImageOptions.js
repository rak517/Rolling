import React from 'react';
import {
  ImageGrid,
  ImageBox,
} from '../../styles/CreatePage/BackgroundSection.styled';

const imageOptions = [
  {
    url: 'https://s3-alpha-sig.figma.com/img/16cd/1b46/e5a1c8c110aa1788a682f388bef979a4?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VU7Bk3pH8nF7P7IOLYarvLqv~V-G94juaYT-~SdLqI1zY5qlxO9ufV8-l4Mxabm65o2qeMwsNHZpj-HdyHhgaueBkwRo8aKw5udGaBgpRC4HpnMj-IPEGczdNuNBm5XmEsjhZ2nNTYrijysahsFDnpJqdOq9FWgqR-0NHftTYjWZPgyiDVkvttMJvFwFzEwT1rBLrp9X8mnc6B5trSfMcRKyr-k-pFN1ICo7B2eg2n707ZkLRSXliGUzLphagvr27ibKDne~Rhd96W0zP3~0hWnGlsGaoBynIBnqsJC4uSuEuo-xXg0kD6pcwZr1TZzIkV~-2ue4O-Mx7NvaGzSZsQ__',
    label: '이미지 1',
  },
  {
    url: 'https://s3-alpha-sig.figma.com/img/20c6/e481/31612bf263d24dd830adf62fd00509ed?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=frJ5~XixhYls1hSAd-iBR1C3xSdEsm99C8MQW1gMlH0T7OrySXoPjMUUom2yoaN1sqFUTvvSaqPmAo6PfnueNJHWxUTX0-5bLumdB69nqNVKfjKMWuKFMP4obXLBCT-GsnPACcVZtRO3tSHBG-hA7op3Ft-Ps6ORvqNwVActxeNCuJBjEDNeZY5TBMXEQm8bZeUvuTji8PX6L4WjF5GO92ftiuvDbcAAzM9hiTkZ~--FFex1IoEB86IJU6oSXEQ5o9xK8sHG5SlnBarO-yge6Z0u-v1dSYMTXKAAYpFPfIUCdKmMpdTNLJrA-e0inMjdvw0oR-29Rq28ZCV6BwiUDw__',
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
