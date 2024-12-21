import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

export const DetailPageContainer = styled.div`
  width: 100%;
  overflow-y: auto;
  padding-bottom: 200px;
  position: relative;
  min-height: 100vh;

  /* 배경 색상 설정 */
  background-color: ${(props) =>
    props.$backgroundImageURL
      ? 'transparent'
      : {
          purple: 'var(--purple-200)', // purple일 경우
          green: 'var(--green-200)', // green일 경우
          blue: 'var(--blue-200)', // blue일 경우
          beige: 'var(--beige-200)', // beige일 경우
        }[props.$backgroundColor] || 'var(--blue-200)'}; // 기본값: blue

  /* 배경 이미지 설정 */
  background-image: ${(props) =>
    props.$backgroundImageURL
      ? `url("${props.$backgroundImageURL}")`
      : `url(${
          {
            purple: '/assets/images/purple-bg.svg',
            green: '/assets/images/green-bg.svg',
            blue: '/assets/images/blue-bg.svg',
            beige: '/assets/images/beige-bg.svg',
          }[props.$backgroundColor] || 'none'
        })`};
`;

export const DetailPageCardContainer = styled.div`
  width: 120rem; // desktop에서는 120px 고정
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  position: relative;
  margin-top: 11px;

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

export const DetailPageEditBtn = styled(Button)`
  width: 9.2rem;
`;

export const DetailPageCardProfile = styled.div`
  width: 17.9rem;
  height: 5.6rem;
  margin-left: 2.4rem;
  margin-top: 2.8rem;
  display: flex;
  justify-content: space-between;
`;

export const DetailPageCardProfileImg = styled.div`
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  overflow: hidden;
`;

export const DetailPageCardProfileImgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // 이미지 비율을 유지하며, div 영역을 꽉 채움
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

export const DetailPageCardProfileWho = styled.div`
  width: 10.9rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const DetailPageCardTextContainer = styled.div`
  width: 33.6rem;
  height: 12.2rem;
  border-top: 1px solid #eeeeee; // 수정된 부분
  margin: 0 auto;
  overflow: hidden; // 넘치는 내용 숨기기
  text-overflow: ellipsis; // 넘치는 글자를 '...'으로 표시
  @media (max-width: 1248px) {
    width: calc(100% - 4.8rem);
  }

  @media (max-width: 768px) {
    width: calc(100% - 4.8rem);
  }
`;

export const DetailPageCardText = styled.div`
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

export const DetailPageCardDate = styled.div`
  width: 6rem;
  height: 1.8rem;
  margin-left: 2.4rem;
  white-space: nowrap; /* 줄 바꿈 방지 */
  color: var(--gray-400);

  @media (max-width: 768px) {
    margin-bottom: 2.4rem;
  }
`;

export const DetailPageCardProfileWhoFrom = styled.div`
  width: 100%;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
`;

export const DetailPageCardProfileWhoRelation = styled.div`
  width: 4.1rem;
  height: 2rem;
`;
