import styled from 'styled-components';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

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
  background: ${(props) =>
    props.$backgroundImageURL
      ? `url("${props.$backgroundImageURL}")`
      : {
          purple: 'var(--purple-200)', // purple일 경우
          green: 'var(--green-200)', // green일 경우
          blue: 'var(--blue-200)', // blue일 경우
          beige: 'var(--beige-200)', // beige일 경우
        }[props.$backgroundColor] || 'var(--blue-200)'};

  background-repeat: no-repeat;
  background-size: cover;
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

export const StyledLink = styled(Link)`
  text-decoration: none;
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
