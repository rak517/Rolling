import React from 'react';
import {
  Section,
  SectionHeading,
  Input,
  ErrorMessage,
} from '../../styles/SendMessagePage/FromSection.styled';

const FromSection = ({ fromValue, setFromValue, error, handleBlur }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length <= 3) {
      // 3글자 이상 입력하지 못하도록 제한
      setFromValue(value);
    }
  };

  return (
    <Section>
      <SectionHeading>From.</SectionHeading>
      <Input
        type="text"
        placeholder="이름을 입력해 주세요."
        value={fromValue}
        onChange={handleChange} // handleChange로 변경
        onBlur={handleBlur}
        error={error}
      />
      {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </Section>
  );
};

export default FromSection;
