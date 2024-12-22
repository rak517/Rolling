import styled from 'styled-components';
import Button from '../../components/ui/Button';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none; /* 모바일 화면에서는 모달 오버레이 숨기기 */
  }
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 1.6rem;
  width: 60rem;
  height: 47.6rem;
  position: absolute;
  top: 8.5rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;

  @media (max-width: 1248px) {
    top: 5rem;
  }
`;

export const ModalBtn = styled(Button)`
  width: 12rem;
  position: relative;
  top: 2.4rem;
`;

export const ModalContentHeader = styled.div`
  width: 59.9rem;
  height: 11.6rem;
  display: flex;
  justify-content: space-between;
`;

export const ModalContentHeaderProfile = styled.div`
  width: 18.1rem;
  height: 5.6rem;
  display: flex;
  justify-content: space-between;
  margin-left: 39px;
  margin-top: 40px;
`;

export const ModalContentHeaderDate = styled.div`
  width: 7rem;
  height: 2rem;
  margin-top: 5.6rem;
  margin-right: 3.9rem;
  color: var(--gray-500);
  white-space: nowrap; /* 줄 바꿈 방지 */
`;

export const ModalContentTextContainer = styled.div`
  border-top: 1px solid #eeeeee;
  width: 52rem;
  height: 25.6rem;
  overflow-y: auto;
  display: flex;
  align-items: end;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cccccc;
    border-radius: 8px;
    min-height: 20px;
  }
`;

export const ModalContentHeaderProfileImg = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  overflow: hidden;
`;

export const DetailPageCardProfileImgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ModalContentHeaderProfileFrom = styled.div`
  width: 10.9rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const ModalContentHeaderProfileFromName = styled.div`
  width: 100%;
  height: 2.4rem;
  display: flex;
  gap: 0.6rem;
`;

export const ModalContentHeaderProfileFromRelation = styled.div`
  width: 4.1rem;
  height: 2rem;
`;

export const ModalContentHeaderProfileFromNameFirst = styled.div`
  width: 5.1rem;
  height: 2.4rem;
`;

export const ModalContentHeaderProfileFromNameId = styled.div`
  width: 5.2rem;
  height: 2.4rem;
`;

export const ModalContentText = styled.div`
  width: 50rem;
  height: 24rem;
  color: #5a5a5a;
`;
