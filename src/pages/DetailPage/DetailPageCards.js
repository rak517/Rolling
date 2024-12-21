import React from 'react';
import {
  DetailPageCard,
  DetailPageCardCreateBtn,
  DetailPageCardProfile,
  DetailPageCardProfileImgImage,
  DetailPageCardProfileImg,
  DetailPageCardProfileWho,
  DetailPageCardTextContainer,
  DetailPageCardDate,
  DetailPageCardText,
  DetailPageCardProfileWhoFrom,
  DetailPageCardProfileWhoRelation,
} from './DetailPageCards.style';
import cardBtn from '../../assets/icons/cardBtn.png';
import Realtion from './CardRealtion';

function DetailPageCards({ id, cardData, onCardClick }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('ko-KR');
    return formattedDate.slice(0, -1); // 마지막 '.'을 제거
  };

  return (
    <>
      <DetailPageCardCreateBtn to={`/post/${id}/message`}>
        <img src={cardBtn} alt="" />
      </DetailPageCardCreateBtn>
      {cardData.map((card) => (
        <DetailPageCard key={card.id} onClick={() => onCardClick(card)}>
          <DetailPageCardProfile>
            <DetailPageCardProfileImg>
              <DetailPageCardProfileImgImage
                src={card.profileImageURL}
                alt="Profile"
              />
            </DetailPageCardProfileImg>
            <DetailPageCardProfileWho>
              <DetailPageCardProfileWhoFrom>
                <p className="text-xl font-regular">From.</p>
                <p className="text-xl font-bold">{card.sender}</p>{' '}
              </DetailPageCardProfileWhoFrom>
              <DetailPageCardProfileWhoRelation>
                <Realtion relation={card.relationship} />
              </DetailPageCardProfileWhoRelation>
            </DetailPageCardProfileWho>
          </DetailPageCardProfile>
          <DetailPageCardTextContainer>
            <DetailPageCardText>
              <p className="text-lg font-regular">{card.content}</p>
            </DetailPageCardText>
          </DetailPageCardTextContainer>
          <DetailPageCardDate>
            <p className="text-2xs font-regular">
              {formatDate(card.createdAt)}
            </p>
          </DetailPageCardDate>
        </DetailPageCard>
      ))}
    </>
  );
}

export default DetailPageCards;
