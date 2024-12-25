import React from 'react';
import {
  Section,
  SectionHeading,
  ProfileContainer,
  ProfileBox,
} from '../../styles/SendMessagePage/ProfileImageSection.styled';

const ProfileImageSection = ({ profileImage, setProfileImage }) => {
  const imageLinks = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaaJm0XjU003rv43s5vdv0r-rUMqur61vcDg&s',
    'https://th.bing.com/th/id/OIP.QlfieL67_nYX6p7e2w-U0AHaES?w=259&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDg-f3NRWgiVOZTFs6RpvBpI9tupgOkK51Bg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwQsqkOYK7YvNEIMB853hKpRsoqfqkUF2lMA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVEr1OIhJ5u05GfLjAr4VbMwzGWUJ7kvQAVw&s',
  ];

  const handleImageClick = (imageUrl) => {
    setProfileImage(imageUrl);
    console.log('선택된 이미지:', imageUrl);
  };

  return (
    <Section>
      <SectionHeading>프로필 이미지</SectionHeading>
      <ProfileContainer>
        {imageLinks.map((url, index) => (
          <ProfileBox
            key={index}
            onClick={() => handleImageClick(url)}
            isSelected={profileImage === url}
          >
            <img src={url} alt={`프로필 ${index + 1}`} />
          </ProfileBox>
        ))}
      </ProfileContainer>
    </Section>
  );
};

export default ProfileImageSection;
