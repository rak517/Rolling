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

  // URL 파라미터에서 recipientId를 가져옵니다.
  const { id } = useParams(); // id가 recipientId로 사용됨
  console.log('recipientId:', id); // recipientId를 콘솔에 출력하여 확인

  const [fromValue, setFromValue] = useState('');
  const [relationship, setRelationship] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [messageContent, setMessageContent] = useState('');
  const [profileImage, setProfileImage] = useState(
    'https://your-default-image-url.com/default-image.jpg',
  );

  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (!fromValue.trim()) setError(true);
  };

  const handleCreate = async () => {
    if (fromValue.trim() && messageContent.trim() && profileImage && id) {
      // id는 URL에서 가져온 recipientId
      try {
        // 메시지 생성 함수 호출, id는 URL에서 가져온 값
        const response = await sendMessage(
          id, // URL에서 가져온 recipientId (id가 실제로 recipientId)
          fromValue, // 보낸 사람 이름
          profileImage, // 프로필 이미지 URL
          relationship, // 관계 (친구, 지인 등)
          messageContent, // 메시지 내용
          font, // 폰트
        );

        console.log('메시지 생성 성공:', response);

        // 성공 시, 메시지 페이지로 이동
        navigate(`/post/${response.id}`);
      } catch (error) {
        console.error('메시지 생성 실패:', error);
      }
    } else {
      setError(true);
    }
  };

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
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
          handleImageUpload={handleImageUpload}
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
