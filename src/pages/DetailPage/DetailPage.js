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
import cardBtn from '../../assets/icons/cardBtn.png';
import { Link } from 'react-router-dom';
import React from 'react';
import Button from '../../components/ui/Button';
import MessageStatusBarContainer from '../../components/layout/MessageStatusBar/MessageStatusBarContainer';

const DetailPageContainer = styled.div`
  width: 100%;
  background-color: pink;
  overflow-y: auto;
  padding-bottom: 200px;
  position: relative;
  min-height: 100vh;
`;

const DetailPageCardContainer = styled.div`
  width: 120rem; // desktop에서는 120px 고정
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  position: relative;
  margin-top: 18px;

  @media (max-width: 1248px) {
    width: calc(100% - 4.8rem);
    gap: 1.6rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 4.8rem);
    flex-direction: column;
  }
`;

const DetailPageCard = styled.div`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  background-color: white;
  border: none;
  cursor: pointer;

  @media (max-width: 1248px) {
    width: calc((100% - 1.6rem) / 2);
    height: 28.4rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 23rem;
  }
`;

const DetailPageEditBtn = styled(Button)`
  width: 9.2rem;
`;

const DetailPageEditBtnContainer = styled.div`
  width: 120rem; // desktop에서는 120px 고정
  height: 3.9;
  margin: 6.3rem auto 0 auto;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1248px) {
    width: calc(100% - 4.8rem);
    gap: 1.6rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 4.8rem);
  }
`;

const DetailPageCardCreateBtn = styled(Link)`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1248px) {
    width: calc((50% - 0.8rem));
    height: 28.4rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 23rem;
  }
`;

const id = 3; // 임시 처리

// 임시 카드 배열 데이터 id와 함께 api 작업 가져오면 변경
const cardData = [
  { id: 1, imageUrl: cardBtn },
  { id: 2, imageUrl: cardBtn },
  { id: 3, imageUrl: cardBtn },
  { id: 4, imageUrl: cardBtn },
  { id: 5, imageUrl: cardBtn },
  { id: 6, imageUrl: cardBtn },
  { id: 7, imageUrl: cardBtn },
];

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
      <MessageStatusBarContainer />
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
