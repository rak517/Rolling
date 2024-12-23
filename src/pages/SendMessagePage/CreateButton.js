import React from 'react';
import { Button } from '../../styles/SendMessagePage/CreateButton.styled';

const CreateButton = ({ disabled, handleClick }) => (
  <Button onClick={handleClick} disabled={disabled}>
    생성하기
  </Button>
);

export default CreateButton;
