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
  const formatDate = (dateString) => {
    const date = new Date(dateString); // 문자열을 Date 객체로 변환
    const formattedDate = date.toLocaleDateString('ko-KR'); // 한국 형식으로 날짜 포맷 (예: 2024. 12. 21.)
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
              {/* 카드의 이미지 URL을 올바르게 연결 */}
              <DetailPageCardProfileImgImage
                src={card.profileImageURL}
                alt="Profile"
              />
            </DetailPageCardProfileImg>
            <DetailPageCardProfileWho>
              <DetailPageCardProfileWhoFrom>
                <p className="text-xl font-regular">From.</p>
                <p className="text-xl font-bold">{card.sender}</p>{' '}
                {/* card.sender로 보내는 사람의 이름 출력 */}
              </DetailPageCardProfileWhoFrom>
              <DetailPageCardProfileWhoRelation>
                {/* 카드의 관계를 출력 */}
                <Realtion relation={card.relationship} />
              </DetailPageCardProfileWhoRelation>
            </DetailPageCardProfileWho>
          </DetailPageCardProfile>
          <DetailPageCardTextContainer>
            <DetailPageCardText>
              {/* 카드의 내용 텍스트 출력 */}
              <p className="text-lg font-regular">{card.content}</p>
            </DetailPageCardText>
          </DetailPageCardTextContainer>
          <DetailPageCardDate>
            {/* 카드 작성일 출력: 날짜만 표시 */}
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
