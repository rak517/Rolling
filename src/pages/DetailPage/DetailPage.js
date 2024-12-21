import Header from '../../components/layout/Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchRecipientById from '../../api/DetailPage/fetchRecipientsById';
import fetchRecipientReactions from '../../api/DetailPage/fetchRecipientReactions';
import DetailPageEditButton from './DetailPageEditButton';
import Modal from './DetaiPageModal';
import DetailPageCards from './DetailPageCards';
import {
  DetailPageContainer,
  DetailPageCardContainer,
  DetailPageEditBtnContainer,
} from './DetailPage.style';
import MessageStatusBarContainer from '../../components/layout/MessageStatusBar/MessageStatusBarContainer';

function DetailPage() {
  const { id } = useParams(); // URL에서 id 파라미터 가져오기
  const [selectedCard, setSelectedCard] = useState(null);
  const [recipientData, setRecipientData] = useState(null); // 대상 데이터 상태
  const [reactionData, setReactionData] = useState(null); // 리액션 데이터 상태
  const [loading, setLoading] = useState(true); // 로딩 상태
  const [error, setError] = useState(null); // 오류 상태

  const handleCardClick = (card) => {
    setSelectedCard(card); // 클릭한 카드 정보 저장
  };

  const closeModal = () => {
    setSelectedCard(null); // 모달 닫을 때 카드 정보 초기화
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 대상 데이터와 리액션 데이터 동시 호출
        const recipient = await fetchRecipientById(id);
        const reactions = await fetchRecipientReactions(id);

        setRecipientData(recipient); // 대상 데이터 상태 저장
        setReactionData(reactions); // 리액션 데이터 상태 저장
        setError(null); // 오류 상태 초기화
      } catch (error) {
        setError(error.message); // 오류 메시지 상태 저장
      } finally {
        setLoading(false); // 로딩 상태 끝
      }
    };

    fetchData(); // 데이터 호출
  }, [id]); // id가 변경될 때마다 다시 호출

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 보여줄 내용
  }

  if (error) {
    return <div>Error: {error}</div>; // 오류가 있을 때 보여줄 내용
  }

  // 배경색과 배경 이미지를 설정
  const backgroundStyle = {
    $backgroundColor: recipientData?.backgroundColor || 'blue', // 기본 색상 'blue'
    $backgroundImageURL: recipientData?.backgroundImageURL || null, // 배경 이미지 URL
  };

  return (
    <>
      <Header />
      <MessageStatusBarContainer />
      <DetailPageContainer {...backgroundStyle}>
        <DetailPageEditBtnContainer>
          <DetailPageEditButton />
        </DetailPageEditBtnContainer>
        <DetailPageCardContainer>
          <DetailPageCards
            id={id}
            cardData={recipientData?.recentMessages || []} // 카드 데이터를 최근 메시지로 처리
            onCardClick={handleCardClick}
          />
        </DetailPageCardContainer>
      </DetailPageContainer>
      {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}
    </>
  );
}

export default DetailPage;
