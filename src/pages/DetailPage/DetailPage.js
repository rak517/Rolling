import styled from 'styled-components';
import Header from '../../components/layout/Header';
import cardBtn from '../../assets/icons/cardBtn.png';
import { Link } from 'react-router-dom';
import React from 'react';

const DetailPageContainer = styled.div`
  width: 100%;
  background-color: pink;
  overflow-y: auto;
  padding-bottom: 200px;
  position: relative;
  min-height: 100vh;
`;

const DetailPageCardContainer = styled.div`
  width: 120rem; // desktop에서는 120px 고정
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  position: relative;
  margin-top: 127px;

  @media (max-width: 1248px) {
    width: calc(100% - 4.8rem);
    gap: 1.6rem;
  }

  @media (max-width: 768px) {
    width: calc(100% - 4.8rem);
    flex-direction: column;
  }
`;

const DetailPageCard = styled.div`
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

const BtnLink = styled(Link)`
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

const id = 3; // 임시 처리

function DetailPage() {
  return (
    <>
      <Header />
      <DetailPageContainer>
        <DetailPageCardContainer>
          <BtnLink to={`/post/${id}/message`}>
            <img src={cardBtn} alt="" />
          </BtnLink>
          <DetailPageCard></DetailPageCard>
          <DetailPageCard></DetailPageCard>
          <DetailPageCard></DetailPageCard>
          <DetailPageCard></DetailPageCard>
          <DetailPageCard></DetailPageCard>
          <DetailPageCard></DetailPageCard>
        </DetailPageCardContainer>
      </DetailPageContainer>
    </>
  );
}

export default DetailPage;
