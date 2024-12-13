import styled from 'styled-components';
import Header from '../../components/layout/Header';

// id 값 받아서 추가하는 로직도 생성해야 함.
// 모바일 규격부터 짜보기
// 스크롤에 따른 높이는 어떻게 지정할 것인지 고민 해 보기.
// 무한 스크롤 처리를 하되, min-height 값을 주는 방법도 좋아보임.
// 모바일 pigma 시안보면 좌우 간격 24px을 안 지키는지? 분명 조건에는 그렇게... 뭘 따라서 ?

const DetailPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: pink; // id값에 따른 색 지정?
`;

const DetailPageCardContainer = styled.div`
  width: 120rem; // destop에서는 120px 고정
  height: 260px;
  margin: 0 auto;
  background-color: blue;
  position: relative;
  top: 127px;

  @media (max-width: 1248px) {
    width: calc(100% - 48px);
    top: 93px;
  }

  @media (max-width: 768px) {
    width: calc(100% - 48px); // 근데 피그마 시안에서는 -40 px 이던데..
    top: 32px;
  }
`;

function DetailPage() {
  return (
    <>
      <Header />
      <DetailPageContainer>
        <DetailPageCardContainer></DetailPageCardContainer>
      </DetailPageContainer>
    </>
  );
}

export default DetailPage;
