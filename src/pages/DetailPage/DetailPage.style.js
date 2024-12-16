import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

export const DetailPageContainer = styled.div`
  width: 100%;
  background-color: pink;
  overflow-y: auto;
  padding-bottom: 200px;
  position: relative;
  min-height: 100vh;
`;

export const DetailPageCardContainer = styled.div`
  width: 120rem; // desktop에서는 120px 고정
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  position: relative;
  margin-top: 18px;

  @media (max-width: 1248px) {
    width: calc(100% - 4.8rem);
    gap: 1.6rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 4.8rem);
    flex-direction: column;
  }
`;

export const DetailPageCard = styled.div`
  width: 38.4rem;
  height: 28rem;
  border-radius: 1.6rem;
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

export const DetailPageEditBtn = styled(Button)`
  width: 9.2rem;
`;

export const DetailPageEditBtnContainer = styled.div`
  width: 120rem; // desktop에서는 120px 고정
  height: 3.9;
  margin: 6.3rem auto 0 auto;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1248px) {
    width: calc(100% - 4.8rem);
    gap: 1.6rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 4.8rem);
  }
`;

export const DetailPageCardCreateBtn = styled(Link)`
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
