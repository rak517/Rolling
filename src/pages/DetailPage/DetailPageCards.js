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
} from './DetailPage.style';
import cardBtn from '../../assets/icons/cardBtn.png';
import Realtion from './CardRealtion';

function DetailPageCards({ id, cardData, onCardClick }) {
  return (
    <>
      <DetailPageCardCreateBtn to={`/post/${id}/message`}>
        <img src={cardBtn} alt="" />
      </DetailPageCardCreateBtn>
      {cardData.map((card) => (
        <DetailPageCard key={card.id} onClick={() => onCardClick(card)}>
          <DetailPageCardProfile>
            <DetailPageCardProfileImg>
              <DetailPageCardProfileImgImage src={card.imageUrl} />
            </DetailPageCardProfileImg>
            <DetailPageCardProfileWho>
              <DetailPageCardProfileWhoFrom>
                <p className="text-xl font-regular">From.</p>
                <p className="text-xl font-bold">{card.name}</p>
              </DetailPageCardProfileWhoFrom>
              <DetailPageCardProfileWhoRelation>
                <Realtion relation={card.relation} />
              </DetailPageCardProfileWhoRelation>
            </DetailPageCardProfileWho>
          </DetailPageCardProfile>
          <DetailPageCardTextContainer>
            <DetailPageCardText>
              <p className="text-lg font-regular">{card.text}</p>
            </DetailPageCardText>
          </DetailPageCardTextContainer>
          <DetailPageCardDate>
            <p className="text-2xs font-regular">{card.date}</p>
          </DetailPageCardDate>
        </DetailPageCard>
      ))}
    </>
  );
}

export default DetailPageCards;
