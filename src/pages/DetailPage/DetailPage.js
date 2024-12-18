import Header from '../../components/layout/Header';
import React, { useState } from 'react';
import { id, cardData } from './DetailPageData';
import DetailPageEditButton from './DetailPageEditButton';
import Modal from './DetaiPageModal';
import DetailPageCards from './DetailPageCards';
import {
  DetailPageContainer,
  DetailPageCardContainer,
  DetailPageEditBtnContainer,
} from './DetailPage.style';

function DetailPage() {
  const [selectedCard, setSelectedCard] = useState(null);
  const handleCardClick = (card) => {
    setSelectedCard(card); // 클릭한 카드 정보 저장
  };
  const closeModal = () => {
    setSelectedCard(null); // 모달 닫을 때 카드 정보 초기화
  };

  return (
    <>
      <Header />
      <DetailPageContainer>
        <DetailPageEditBtnContainer>
          <DetailPageEditButton />
        </DetailPageEditBtnContainer>
        <DetailPageCardContainer>
          <DetailPageCards
            id={id}
            cardData={cardData}
            onCardClick={handleCardClick}
          />
        </DetailPageCardContainer>
      </DetailPageContainer>
      {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}]
    </>
  );
}

export default DetailPage;
