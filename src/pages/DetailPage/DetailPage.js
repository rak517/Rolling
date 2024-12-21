import Header from '../../components/layout/Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchRecipientById from '../../api/DetailPage/fetchRecipientsById';
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
  const { id } = useParams();
  const [selectedCard, setSelectedCard] = useState(null);
  const [recipientData, setRecipientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipient = await fetchRecipientById(id);
        setRecipientData({ ...recipient });
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const backgroundStyle = {
    $backgroundColor: recipientData?.backgroundColor || 'blue',
    $backgroundImageURL: recipientData?.backgroundImageURL || null,
  };

  return (
    <>
      <Header />
      <MessageStatusBarContainer />
      <DetailPageContainer {...backgroundStyle}>
        <DetailPageEditBtnContainer>
          <DetailPageEditButton id={id} />
        </DetailPageEditBtnContainer>
        <DetailPageCardContainer>
          <DetailPageCards
            id={id}
            cardData={recipientData?.recentMessages || []}
            onCardClick={handleCardClick}
          />
        </DetailPageCardContainer>
      </DetailPageContainer>
      {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}
    </>
  );
}

export default DetailPage;
