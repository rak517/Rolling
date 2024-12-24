import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import FromSection from './FromSection';
import ProfileImageSection from './ProfileImageSection';
import RelationshipSection from './RelationshipSection';
import MessageContentSection from './MessageContentSection';
import FontSelectionSection from './FontSelectionSection';
import CreateButton from './CreateButton';
import { Container } from '../../styles/SendMessagePage/MessageForm.styled';

const MessageForm = () => {
  const navigate = useNavigate();
  const [fromValue, setFromValue] = useState('');
  const [relationship, setRelationship] = useState('지인');
  const [font, setFont] = useState('Noto Sans');
  const [messageContent, setMessageContent] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (!fromValue.trim()) setError(true);
  };

  const handleCreate = () => {
    if (fromValue.trim() && messageContent.trim()) {
      const generatedId = Math.floor(Math.random() * 1000);
      navigate(`/post/${generatedId}`);
    }
  };

  const handleImageUpload = (e) => {
    if (e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container>
      <Header navigate={navigate} />
      <FromSection fromValue={fromValue} setFromValue={setFromValue} error={error} handleBlur={handleBlur} />
      <ProfileImageSection profileImage={profileImage} handleImageUpload={handleImageUpload} />
      <RelationshipSection relationship={relationship} setRelationship={setRelationship} />
      <MessageContentSection messageContent={messageContent} setMessageContent={setMessageContent} />
      <FontSelectionSection font={font} setFont={setFont} />
      <CreateButton handleClick={handleCreate} disabled={!fromValue.trim() || !messageContent.trim()} />
    </Container>
  );
};

export default MessageForm;
