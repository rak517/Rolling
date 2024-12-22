import Header from '../../components/layout/Header';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchRecipientById from '../../api/DetailPage/fetchRecipientsById';
import EditPageAllDeleteButton from './EditPageAllDeleteButton';
import EditPageCards from './EditPageCards';
import {
  DetailPageContainer,
  DetailPageCardContainer,
  DetailPageEditBtnContainer,
} from '../DetailPage/DetailPage.style';
import MessageStatusBarContainer from '../../components/layout/MessageStatusBar/MessageStatusBarContainer';

function EditPage() {
  const { id } = useParams();
  const [recipientData, setRecipientData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
          <EditPageAllDeleteButton recipientId={id} />
        </DetailPageEditBtnContainer>
        <DetailPageCardContainer>
          <EditPageCards
            id={id}
            cardData={recipientData?.recentMessages || []}
          />
        </DetailPageCardContainer>
      </DetailPageContainer>
    </>
  );
}

export default EditPage;
