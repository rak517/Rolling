import React from 'react';
import styled from 'styled-components';
import Button from '../../components/ui/Button';
import Realtion from './CardRealtion';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 1.6rem;
  width: 60rem;
  height: 47.6rem;
  position: relative;
  top: 28rem; //  34.8rem이 맞는데 아직 sub header없어서 그 크기만큼..
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalBtn = styled(Button)`
  width: 12rem;
  position: relative;
  top: 2.4rem;
`;

const ModalContentHeader = styled.div`
  width: 59.9rem; // 피그마 시안에서는 왜 1px 작게 만들까? 무슨 의도로 ?
  height: 11.6rem;
  display: flex;
  justify-content: space-between;
`;

const ModalContentHeaderProfile = styled.div`
  width: 18.1rem;
  height: 5.6rem;
  display: flex;
  justify-content: space-between;
  margin-left: 39px;
  margin-top: 40px;
`;

const ModalContentHeaderDate = styled.div`
  width: 7rem;
  height: 2rem;
  margin-top: 56px;
  margin-right: 39px;
  color: var(--gray-500);
`;

const ModalContentTextContainer = styled.div`
  border-top: 1px solid #eeeeee;
  width: 52rem;
  height: 25.6rem;
  overflow-y: auto;
  display: flex;
  align-items: end;

  &::-webkit-scrollbar {
    width: 0.4rem; /* 수직 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border-radius: 8px;
    min-height: 20px; /* 수직 스크롤바의 손잡이 높이 */
  }
`;

const ModalContentHeaderProfileImg = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 100px;
  overflow: hidden;
`;

const DetailPageCardProfileImgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ModalContentHeaderProfileFrom = styled.div`
  width: 109px;
  height: 50px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const ModalContentHeaderProfileFromName = styled.div`
  width: 100%;
  height: 2.4rem;
  display: flex;
  gap: 6px;
`;

const ModalContentHeaderProfileFromRelation = styled.div`
  width: 4.1rem;
  height: 2rem;
`;

const ModalContentHeaderProfileFromNameFirst = styled.div`
  width: 5.1rem;
  height: 2.4rem;
`;

const ModalContentHeaderProfileFromNameId = styled.div`
  width: 5.2rem;
  height: 2.4rem;
`;

const ModalContentText = styled.div`
  width: 50rem;
  height: 24rem;
  color: #5a5a5a; // 색상 css에 없어서 이렇게 했습니다.
`;

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
