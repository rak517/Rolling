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
} from './Modal.style';

import Realtion from './CardRealtion';
// 네이밍 부분이 너무 길어지네요 ㅜㅜ BEM처럼 네이밍을 하고싶은데 StyledCompnet이다보니
// 고민이 많이 됩니다.
const Modal = ({ card, onClose }) => {
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalContentHeader>
          <ModalContentHeaderProfile>
            <ModalContentHeaderProfileImg>
              <DetailPageCardProfileImgImage src={card.imageUrl} />
            </ModalContentHeaderProfileImg>
            <ModalContentHeaderProfileFrom>
              <ModalContentHeaderProfileFromName>
                <ModalContentHeaderProfileFromNameFirst>
                  <p className="text-xl font-regular">From.</p>
                </ModalContentHeaderProfileFromNameFirst>
                <ModalContentHeaderProfileFromNameId>
                  <p className="text-xl font-bold">{card.name}</p>
                </ModalContentHeaderProfileFromNameId>
              </ModalContentHeaderProfileFromName>
              <ModalContentHeaderProfileFromRelation>
                <Realtion relation={card.relation} />
              </ModalContentHeaderProfileFromRelation>
            </ModalContentHeaderProfileFrom>
          </ModalContentHeaderProfile>
          <ModalContentHeaderDate>
            <p className="text-xs font-regular">{card.date}</p>
          </ModalContentHeaderDate>
        </ModalContentHeader>
        <ModalContentTextContainer>
          <ModalContentText>
            <p className="text-lg font-regular">{card.text}</p>
          </ModalContentText>
        </ModalContentTextContainer>
        <ModalBtn
          size={40}
          label="확인"
          variant="primary"
          fullWidth={120}
          onClick={onClose}
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
