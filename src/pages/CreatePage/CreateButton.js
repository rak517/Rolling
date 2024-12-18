
//생성 버튼 컴포넌트


import React from 'react';
import styles from './CreateButton.module.scss';

const CreateButton = ({ disabled, handleClick }) => {
  return (
    <button 
      className={styles.button} 
      onClick={handleClick} 
      disabled={disabled}
    >
      생성하기
    </button>
  );
};

export default CreateButton;
