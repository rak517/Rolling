import Header from '../../components/layout/Header';
import React from 'react';
import { id, cardData } from './DetailPageData';
import DetailPageEditButton from './DetailPageEditButton';
import DetailPageCards from './DetailPageCards';
import {
  DetailPageContainer,
  DetailPageCardContainer,
  DetailPageEditBtnContainer,
} from './DetailPage.style';

function DetailPage() {
  return (
    <>
      <Header />
      <DetailPageContainer>
        <DetailPageEditBtnContainer>
          <DetailPageEditButton />
        </DetailPageEditBtnContainer>
        <DetailPageCardContainer>
          <DetailPageCards id={id} cardData={cardData} />
        </DetailPageCardContainer>
      </DetailPageContainer>
    </>
  );
}

export default DetailPage;
