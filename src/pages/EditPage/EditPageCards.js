import React from 'react';
import {
  EditPageCard,
  EditPageCardCreateBtn,
  EditPageCardProfile,
  EditPageCardProfileImgImage,
  EditPageCardProfileImg,
  EditPageCardProfileWho,
  EditPageCardTextContainer,
  EditPageCardDate,
  EditPageCardText,
  EditPageCardProfileWhoFrom,
  EditPageCardProfileWhoRelation,
  EditPageCardDelete,
} from './EditPageCrads.style';
import cardBtn from '../../assets/icons/cardBtn.png';
import deleteBtn from '../../assets/icons/delete-btn.png';
import Realtion from '../DetailPage/CardRealtion';

function EditPageCards({ id, cardData, onCardClick }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('ko-KR');
    return formattedDate.slice(0, -1); // 마지막 '.'을 제거
  };

  return (
    <>
      <EditPageCardCreateBtn to={`/post/${id}/message`}>
        <img src={cardBtn} alt="" />
      </EditPageCardCreateBtn>
      {cardData.map((card) => (
        <EditPageCard key={card.id} onClick={() => onCardClick(card)}>
          <EditPageCardProfile>
            <EditPageCardProfileImg>
              <EditPageCardProfileImgImage
                src={card.profileImageURL}
                alt="Profile"
              />
            </EditPageCardProfileImg>
            <EditPageCardProfileWho>
              <EditPageCardProfileWhoFrom>
                <p className="text-xl font-regular">From.</p>
                <p className="text-xl font-bold">{card.sender}</p>{' '}
              </EditPageCardProfileWhoFrom>
              <EditPageCardProfileWhoRelation>
                <Realtion relation={card.relationship} />
              </EditPageCardProfileWhoRelation>
            </EditPageCardProfileWho>
          </EditPageCardProfile>
          <EditPageCardDelete>
            <img src={deleteBtn} alt="" />
          </EditPageCardDelete>

          <EditPageCardTextContainer>
            <EditPageCardText>
              <p className="text-lg font-regular">{card.content}</p>
            </EditPageCardText>
          </EditPageCardTextContainer>
          <EditPageCardDate>
            <p className="text-2xs font-regular">
              {formatDate(card.createdAt)}
            </p>
          </EditPageCardDate>
        </EditPageCard>
      ))}
    </>
  );
}

export default EditPageCards;
