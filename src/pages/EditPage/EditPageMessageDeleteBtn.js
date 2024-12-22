import React from 'react';
import fetchDeleteMessage from '../../api/Editpage/fetchDeleteMessage';
import styled from 'styled-components';
import deleteBtn from '../../assets/icons/delete-btn.png';

export const MessageDeleteBtn = styled.button`
  width: 4rem;
  height: 4rem;
  top: 2.8rem;
  right: 2.4rem;
  position: absolute;
  border-radius: 0.8rem;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    background-color: red;
  }
`;

function EditPageMessageDeleteBtn({ messageId, onDeleteSuccess }) {
  const handleDelete = async () => {
    try {
      await fetchDeleteMessage(messageId);
      onDeleteSuccess();
    } catch (error) {
      console.error('메시지 삭제 오류: ', error);
    } finally {
      window.location.reload();
    }
  };

  return (
    <MessageDeleteBtn onClick={handleDelete}>
      <img src={deleteBtn} alt="삭제" />
    </MessageDeleteBtn>
  );
}

export default EditPageMessageDeleteBtn;
