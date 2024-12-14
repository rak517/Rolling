import styled from 'styled-components';
import cardImg from '../../assets/images/main-img-01.svg';

const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 6rem;
  padding: 6rem 0 6rem 6rem;
  width: 100%;
  background-color: var(--surface);
  border-radius: 1.6rem;

  @media (max-width: 1200px) {
    flex-direction: column;
    height: 100%;
    padding: 0;
  }
`;

const TextWrapper = styled.div`
  .point-tag {
    display: inline-block;
    background-color: var(--purple-600);
    color: var(--white);
    border-radius: 5rem;
    padding: 6px 12px;
    margin-bottom: 16px;
  }

  h2 {
    margin-bottom: 16px;
    color: var(--gray-900);
  }

  p {
    color: var(--gray-500);
  }

  @media (max-width: 1200px) {
    padding: 4rem;

    .responsive-br {
      display: none;
    }
  }
`;

const CardWrapper = styled.img`
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

function Point01Section() {
  return (
    <SectionWrapper>
      <TextWrapper>
        <span className="point-tag text-xs font-bold">Point. 01</span>
        <h2 className="text-2xl font-bold">
          누구나 손쉽게, 온라인
          <br className="responsive-br" /> 롤링 페이퍼를 만들 수 있어요
        </h2>
        <p className="text-lg">로그인 없이 자유롭게 만들어요.</p>
      </TextWrapper>
      <CardWrapper src={cardImg} alt="카드 이미지" />
    </SectionWrapper>
  );
}

export default Point01Section;
