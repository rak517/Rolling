
//To 입력 섹션 컴포넌트


import React from 'react';
import styles from './ToSection.module.scss';

const ToSection = ({ toValue, setToValue, error, handleBlur }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>To.</h2>
      <input
        type="text"
        placeholder="받는 사람 이름을 입력해 주세요."
        value={toValue}
        onChange={(e) => setToValue(e.target.value)}
        onBlur={handleBlur}
        className={`${styles.input} ${error ? styles.error : ''}`}
      />
      {error && <p className={styles.errorMessage}>값을 입력해 주세요.</p>}
    </div>
  );
};

export default ToSection;
