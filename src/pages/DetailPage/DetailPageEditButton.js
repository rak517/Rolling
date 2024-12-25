import React from 'react';
import { Link } from 'react-router-dom';
import { DetailPageEditBtn, StyledLink } from './DetailPage.style';
// edit 페이지랑 색상으로 구분이 필요해 보입니다. 그래서 버튼 색상 ...

function DetailPageEditButton({ id }) {
  return (
    <StyledLink to={`/post/${id}/edit`}>
      <DetailPageEditBtn size={40} variant="outlined" fullWidth={92}>
        수정하기
      </DetailPageEditBtn>
    </StyledLink>
  );
}

export default DetailPageEditButton;
