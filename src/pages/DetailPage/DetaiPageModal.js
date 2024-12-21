import React from 'react';
import {
  ModalOverlay,
  ModalContent,
  ModalBtn,
  ModalContentHeader,
  ModalContentHeaderProfile,
  ModalContentHeaderDate,
  ModalContentTextContainer,
  ModalContentHeaderProfileImg,
  DetailPageCardProfileImgImage,
  ModalContentHeaderProfileFrom,
  ModalContentHeaderProfileFromName,
  ModalContentHeaderProfileFromRelation,
  ModalContentHeaderProfileFromNameFirst,
  ModalContentHeaderProfileFromNameId,
  ModalContentText,
} from './DetailPageModal.style';

import Realtion from './CardRealtion';
// 네이밍 부분이 너무 길어지네요 ㅜㅜ BEM처럼 네이밍을 하고싶은데 StyledCompnet이다보니
// 고민이 많이 됩니다.

const Modal = ({ card, onClose }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString); // 문자열을 Date 객체로 변환
    const formattedDate = date.toLocaleDateString('ko-KR'); // 한국 형식으로 날짜 포맷 (예: 2024. 12. 21.)
    return formattedDate.slice(0, -1); // 마지막 '.'을 제거
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalContentHeader>
          <ModalContentHeaderProfile>
            <ModalContentHeaderProfileImg>
              <DetailPageCardProfileImgImage src={card.profileImageURL} />
            </ModalContentHeaderProfileImg>
            <ModalContentHeaderProfileFrom>
              <ModalContentHeaderProfileFromName>
                <ModalContentHeaderProfileFromNameFirst>
                  <p className="text-xl font-regular">From.</p>
                </ModalContentHeaderProfileFromNameFirst>
                <ModalContentHeaderProfileFromNameId>
                  <p className="text-xl font-bold">{card.sender}</p>
                </ModalContentHeaderProfileFromNameId>
              </ModalContentHeaderProfileFromName>
              <ModalContentHeaderProfileFromRelation>
                <Realtion relation={card.relationship} />
              </ModalContentHeaderProfileFromRelation>
            </ModalContentHeaderProfileFrom>
          </ModalContentHeaderProfile>
          <ModalContentHeaderDate>
            <p className="text-xs font-regular">{formatDate(card.createdAt)}</p>
          </ModalContentHeaderDate>
        </ModalContentHeader>
        <ModalContentTextContainer>
          <ModalContentText>
            <p className="text-lg font-regular">{card.content}</p>
          </ModalContentText>
        </ModalContentTextContainer>
        <ModalBtn size={40} variant="primary" fullWidth={120} onClick={onClose}>
          확인
        </ModalBtn>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
