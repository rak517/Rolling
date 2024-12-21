import React from 'react';
import { Container, Heading, Input, ErrorMessage } from './ToSection.styled';

const ToSection = ({ toValue, setToValue, error, handleBlur }) => {
  return (
    <Container>
      <Heading>To.</Heading>
      <Input
        type="text"
        placeholder="받는 사람 이름을 입력해 주세요."
        value={toValue}
        onChange={(e) => setToValue(e.target.value)}
        onBlur={handleBlur}
        error={error}
      />
      {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
    </Container>
  );
};

export default ToSection;
