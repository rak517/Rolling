import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1160px;
  margin: 0 auto;
  margin-bottom: 4rem;
  padding-top: 4rem;
`;

export const SectionWrapper = styled.section`
  margin-bottom: 4rem;

  h2 {
    margin-bottom: 2rem;
  }
`;

export const ListSection = styled.section`
  position: relative;
  overflow: visible;
`;

export const CarouselOuterWrapper = styled.div`
  position: relative;
`;

export const CarouselInnerWrapper = styled.div`
  overflow: hidden;

  @media (max-width: 1248px) {
    overflow: auto;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 2rem;
  transform: translateX(${(props) => -props.currentIndex * (27.5 + 2)}rem);
  transition: transform 0.5s ease-in-out;
  flex-shrink: 0;
  width: calc(
    ${(props) => props.cardsToShow} * 27.5rem +
      ${(props) => props.cardsToShow - 1} * 2rem
  );

  @media (max-width: 1248px) {
    transform: none;
    width: auto;
    display: inline-flex;
    white-space: nowrap;
    overflow-x: visible;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
  text-decoration: none;

  @media (max-width: 1248px) {
    padding: 0 1rem;
  }
`;
