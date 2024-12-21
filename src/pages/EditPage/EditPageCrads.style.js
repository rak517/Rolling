import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EditPageCard = styled.div`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  background-color: white;
  border: none;
  cursor: pointer;

  @media (max-width: 1248px) {
    width: calc((100% - 1.6rem) / 2);
    height: 28.4rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 23rem;
  }
`;

export const EditPageCardCreateBtn = styled(Link)`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
  background-color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 1248px) {
    width: calc((50% - 0.8rem));
    height: 28.4rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 23rem;
  }
`;

export const EditPageCardProfile = styled.div`
  width: 17.9rem;
  height: 5.6rem;
  margin-left: 2.4rem;
  margin-top: 2.8rem;
  display: flex;
  justify-content: space-between;
`;

export const EditPageCardProfileImg = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  overflow: hidden;
`;

export const EditPageCardProfileImgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EditPageCardProfileWho = styled.div`
  width: 10.9rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const EditPageCardTextContainer = styled.div`
  width: 33.6rem;
  height: 12.2rem;
  border-top: 1px solid #eeeeee; // 수정된 부분
  margin: 0 auto;
  overflow: hidden;
  text-overflow: ellipsis; // 넘치는 글자를 '...'으로 표시
  @media (max-width: 1248px) {
    width: calc(100% - 4.8rem);
  }

  @media (max-width: 768px) {
    width: calc(100% - 4.8rem);
  }
`;

export const EditPageCardDate = styled.div`
  width: 6rem;
  height: 1.8rem;
  margin-left: 2.4rem;
  white-space: nowrap;
  color: var(--gray-400);

  @media (max-width: 768px) {
    margin-bottom: 2.4rem;
  }
`;

export const EditPageCardText = styled.div`
  width: 33.6rem;
  height: 10.6rem;
  margin-top: 1.6rem;
  color: #4a4a4a;

  @media (max-width: 1248px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  p {
    @media (max-width: 1248px) {
      width: 100%;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const EditPageCardProfileWhoFrom = styled.div`
  width: 100%;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
`;

export const EditPageCardProfileWhoRelation = styled.div`
  width: 4.1rem;
  height: 2rem;
`;

export const EditPageCardDelete = styled.button`
  width: 4rem;
  height: 4rem;
  top: 2.8rem;
  right: 2.4rem;
  position: absolute;
  border-radius: 0.8rem;
  border: 1px solid #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:active {
    background-color: red;
  }
`;
