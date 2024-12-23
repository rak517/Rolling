import React from 'react';
import { Section, SectionHeading, ProfileContainer, ProfileBox } from '../../styles/SendMessagePage/ProfileImageSection.styled';

const ProfileImageSection = ({ profileImage, setProfileImage }) => {
  const imageLinks = [
    'https://s3-alpha-sig.figma.com/img/bcd8/1e02/83d4548012c43eedb0a9280e682876fa?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JBjT685xUQseDFZIzFpu-Ji1JxRhVyKoIaV~Nawn1oniUP30ObHWXziMJ~TTkCpUHV66DfdobhKP99iEeE2ipNnhvHsOjlxMi24Puar-XU~asFueB5CnUDt4cB2MfynWedmUoH2OjS4TpELq3VauNpMQVQsOx69Kch9ahyndsrwd5cwWn6Y08CYurFGN-IVjHRMxICBqoJ9l8tU0PVwGTIEf8VgJO9vsNranvZx~1Atv6Vzl9G5MrKWo1FlXUcVaZwsY0xTNh4PVDH41jddpn1ukcFvpz3vHcF9cDh4xzRAxQQiVN1YScim~0gEIMA0yHkq9ifbob1vwVLAe8vJogA__',
    'https://s3-alpha-sig.figma.com/img/430b/8076/77e27471075445c5aa0dfb4553ee9ae2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ei7flZY-0OmdJ8y5UXOyui~3-z~30MnWyYn0E6ZU7jQ51kGGCwz0EFCiEqlF369Qul~E9nNYfCswdVafMrY5uNfsFf64cPsIv06Bx1wny97W-rHvD~ziUSA2358ztdde3JBK12GkpfZHI9iVH9ZYGzCcBu~FwPc2kWWjmUJNM7zkKX6oHTTqemAROPO9CDa7tUH~OaScsaGzGF-3Ycb3mjrAv9lZME4gMzPEfFi7Wzd9l2pcdtgS14Bvr5OlopZYnGo3YFS2cM~N1BLO1Tqzet-L8j0oD4SWBydpbm0QtqWnh32P7C37N9~S0MU7rvuMMc0tnwGNHVZZ3vWC6MiS8Q__',
  ];

  const handleImageClick = (imageUrl) => {
    setProfileImage(imageUrl);
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
