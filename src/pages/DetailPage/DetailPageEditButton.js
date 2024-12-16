import React from 'react';
import { Link } from 'react-router-dom';
import { DetailPageEditBtn } from './DetailPage.style';

function DetailPageEditButton({ id }) {
  return (
    <Link to={`/post/${id}/edit`}>
      <DetailPageEditBtn
        size={40}
        label="수정하기"
        variant="primary"
        fullWidth={92}
      />
    </Link>
  );
}

export default DetailPageEditButton;
