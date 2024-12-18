
//메인 페이지 컴포넌트


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreatePage.module.scss';
import ToSection from './components/ToSection';
import BackgroundSection from './components/BackgroundSection';
import CreateButton from './components/CreateButton';

const CreatePage = () => {
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

  // 프롭스 객체로 묶기
  const toSectionProps = { toValue, setToValue, error, handleBlur };
  const backgroundSectionProps = { selectedColor, setSelectedColor };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button 
          className={styles.logoButton} 
          onClick={() => navigate('/')}
        >
          Rolling
        </button>
      </header>

      <ToSection {...toSectionProps} />
      <BackgroundSection {...backgroundSectionProps} />
      <CreateButton 
        disabled={!toValue.trim()} 
        handleClick={handleCreate} 
      />
    </div>
  );
};

export default CreatePage;
