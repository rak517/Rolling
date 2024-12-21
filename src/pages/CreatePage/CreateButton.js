//컴포넌트 로직 코드

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  LogoButton,
} from '../../styles/CreatePage/CreateMainPage.styled';
import ToSection from './ToSection';
import BackgroundSection from './BackgroundSection';
import CreateButton from './CreateButton';

const CreateMainPage = () => {
  const navigate = useNavigate();
  const [toValue, setToValue] = useState('');
  const [error, setError] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#FFE2AD');

  const handleBlur = () => {
    if (!toValue.trim()) setError(true);
  };

  const handleCreate = () => {
    if (toValue.trim()) {
      const generatedId = Math.floor(Math.random() * 1000);
      navigate(`/post/${generatedId}`);
    }
  };

  return (
    <Container>
      <Header>
        <LogoButton onClick={() => navigate('/')}>Rolling</LogoButton>
      </Header>
      <ToSection
        toValue={toValue}
        setToValue={setToValue}
        error={error}
        handleBlur={handleBlur}
      />
      <BackgroundSection
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <CreateButton disabled={!toValue.trim()} handleClick={handleCreate} />
    </Container>
  );
};

export default CreateMainPage;
