import React from 'react';
import { Link } from 'react-router-dom';
import { DetailPageEditBtn } from './DetailPage.style';

function DetailPageEditButton({ id }) {
  return (
    <Link to={`/post/${id}/edit`}>
      <DetailPageEditBtn size={40} variant="primary" fullWidth={92}>
        수정하기
      </DetailPageEditBtn>
    </Link>
  );
}

export default DetailPageEditButton;
