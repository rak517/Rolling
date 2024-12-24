import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/layout/Header';
import FromSection from './FromSection';
import ProfileImageSection from './ProfileImageSection';
import RelationshipSection from './RelationshipSection';
import MessageContentSection from './MessageContentSection';
import FontSelectionSection from './FontSelectionSection';
import CreateButton from './CreateButton';
import { Container } from '../../styles/SendMessagePage/SendMessagePage.styled';
import sendMessage from '../../api/SendMessagePage/sendMessage';

const SendMessagePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [fromValue, setFromValue] = useState('');
  const [relationship, setRelationship] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [messageContent, setMessageContent] = useState('');
  const [profileImage, setProfileImage] = useState(
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaaJm0XjU003rv43s5vdv0r-rUMqur61vcDg&s', // default
  );

  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (!fromValue.trim()) setError(true);
  };

  const handleCreate = async () => {
    console.log('보내는 데이터 확인:', {
      id,
      fromValue,
      profileImage,
      relationship,
      messageContent,
      font,
    }); // 데이터 확인

    if (fromValue.trim() && messageContent.trim() && profileImage && id) {
      try {
        const response = await sendMessage(
          id,
          fromValue,
          profileImage,
          relationship,
          messageContent,
          font,
        );

        console.log('메시지 생성 성공:', response);

        navigate(`/post/${response.recipientId}`);
      } catch (error) {
        console.error('메시지 생성 실패:', error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Header navigate={navigate} />
      <Container>
        <FromSection
          fromValue={fromValue}
          setFromValue={setFromValue}
          error={error}
          handleBlur={handleBlur}
        />
        <ProfileImageSection
          profileImage={profileImage}
          setProfileImage={setProfileImage} // 이 부분 추가
        />
        <RelationshipSection
          relationship={relationship}
          setRelationship={setRelationship}
        />
        <MessageContentSection
          messageContent={messageContent}
          setMessageContent={setMessageContent}
        />
        <FontSelectionSection font={font} setFont={setFont} />
        <CreateButton
          handleClick={handleCreate}
          disabled={
            !fromValue.trim() || !messageContent.trim() || !profileImage || !id
          }
        />
      </Container>
    </>
  );
};

export default SendMessagePage;
