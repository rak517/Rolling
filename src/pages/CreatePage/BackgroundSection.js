
//배경 색상 선택 컴포넌트


import React from 'react';
import styles from './BackgroundSection.module.scss';

const BackgroundSection = ({ selectedColor, setSelectedColor }) => {
  const colorOptions = [
    { color: '#FFE2AD', label: '베이지' },
    { color: '#ECD9FF', label: '퍼플' },
    { color: '#B1E4FF', label: '블루' },
    { color: '#D0F5C3', label: '그린' },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>배경화면을 선택해 주세요.</h3>
      <div className={styles.colorOptions}>
        {colorOptions.map((option) => (
          <div
            key={option.color}
            className={`${styles.colorBox} ${selectedColor === option.color ? styles.selected : ''}`}
            style={{ backgroundColor: option.color }}
            onClick={() => setSelectedColor(option.color)}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundSection;
