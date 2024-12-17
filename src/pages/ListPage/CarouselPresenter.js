import styled from 'styled-components';
import ListPageCard from './ListPageCard';
import CarouselButton from '../../components/common/CarouselButton';
import {
  CarouselOuterWrapper,
  CarouselInnerWrapper,
  CardsContainer,
} from './ListPage.styles';
import CarouselContainer from './CarouselContainer';

const MobileScrollContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  cursor: grab;
  &.grabbing {
    cursor: grabbing;
  }
`;

const SlideWrapper = styled.div`
  flex: 0 0 auto;
  width: 27.5rem;
  height: 26rem;
  overflow: hidden;
`;

function CarouselPresenter({
  data,
  isMobile,
  currentIndex,
  handlePrev,
  handleNext,
  maxIndex,
  cardsToShow,
  containerRef,
  onMouseDown,
  onMouseLeave,
  onMouseUp,
  onMouseMove,
}) {
  if (isMobile) {
    return (
      <MobileScrollContainer
        ref={containerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {data.map((item) => (
          <SlideWrapper key={item.id}>
            <ListPageCard data={item} />
          </SlideWrapper>
        ))}
      </MobileScrollContainer>
    );
  }
  // 데스크톱일 경우
  return (
    <CarouselOuterWrapper>
      <CarouselButton
        direction="left"
        onClick={handlePrev}
        hidden={currentIndex === 0}
      />
      <CarouselInnerWrapper>
        <CardsContainer cardsToShow={cardsToShow} currentIndex={currentIndex}>
          {data.map((item) => (
            <ListPageCard key={item.id} data={item} />
          ))}
        </CardsContainer>
      </CarouselInnerWrapper>
      <CarouselButton
        direction="right"
        onClick={handleNext}
        hidden={currentIndex >= maxIndex}
      />
    </CarouselOuterWrapper>
  );
}

export default CarouselPresenter;
