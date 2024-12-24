import React from 'react';
import { Section, SectionHeading, Input, ErrorMessage } from '../../styles/SendMessagePage/FromSection.styled';

const FromSection = ({ fromValue, setFromValue, error, handleBlur }) => (
  <Section>
    <SectionHeading>From.</SectionHeading>
    <Input
      type="text"
      placeholder="이름을 입력해 주세요."
      value={fromValue}
      onChange={(e) => setFromValue(e.target.value)}
      onBlur={handleBlur}
      error={error}
    />
    {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
  </Section>
);

export default FromSection;
