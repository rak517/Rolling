import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ListPageCard from './ListPageCard';
import CarouselButton from '../../components/common/CarouselButton';
import {
  CarouselOuterWrapper,
  CarouselInnerWrapper,
  CardsContainer,
} from './ListPage.styles';

function ResponsiveCarousel({
  data,
  isMobile,
  currentIndex,
  handlePrev,
  handleNext,
  maxIndex,
  cardsToShow,
}) {
  if (isMobile) {
    const slideStyle = {
      width: '275px',
      height: '260px',
      overflow: 'hidden',
    };

    return (
      <Swiper spaceBetween={20} slidesPerView="auto" grabCursor={true}>
        {data.map((item) => (
          <SwiperSlide key={item.id} style={slideStyle}>
            <ListPageCard data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
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

export default ResponsiveCarousel;
