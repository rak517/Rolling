import cardImg from '../../assets/images/main-img-02.svg';
import styled from 'styled-components';

const SectionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 6rem 6rem 0;
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
  flex: 1;

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
    order: 1;
    padding: 4rem;

    .responsive-br {
      display: none;
    }
  }
`;

const CardWrapper = styled.img`
  @media (max-width: 1200px) {
    order: 2;
    width: 100%;
  }
`;

function Point02Section() {
  return (
    <SectionWrapper>
      <CardWrapper src={cardImg} alt="카드 이미지" />
      <TextWrapper>
        <span className="point-tag text-xs font-bold">Point. 02</span>
        <h2 className="text-2xl font-bold">
          서로에게 이모지로 감정을
          <br className="responsive-br" /> 표현해보세요
        </h2>
        <p className="text-lg">롤링 페이퍼에 이모지를 추가할 수 있어요</p>
      </TextWrapper>
    </SectionWrapper>
  );
}

export default Point02Section;
