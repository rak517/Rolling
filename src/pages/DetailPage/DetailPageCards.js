import React from 'react';
import { DetailPageCard, DetailPageCardCreateBtn } from './DetailPage.style';
import cardBtn from '../../assets/icons/cardBtn.png';

function DetailPageCards({ id, cardData }) {
  return (
    <>
      <DetailPageCardCreateBtn to={`/post/${id}/message`}>
        <img src={cardBtn} alt="" />
      </DetailPageCardCreateBtn>
      {cardData.map((card) => (
        <DetailPageCard key={card.id}></DetailPageCard>
      ))}
    </>
  );
}

export default DetailPageCards;
