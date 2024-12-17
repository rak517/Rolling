import { useState, useRef } from 'react';
import CarouselPresenter from './CarouselPresenter';

function CarouselContainer({
  data,
  isMobile,
  currentIndex,
  handlePrev,
  handleNext,
  maxIndex,
  cardsToShow,
}) {
  // 드래그를 위한 상태와 ref
  const containerRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const onMouseDown = (e) => {
    const container = containerRef.current;
    setIsDown(true);
    container.classList.add('grabbing');
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
  };

  const onMouseLeave = () => {
    if (!isDown) return;
    setIsDown(false);
    containerRef.current.classList.remove('grabbing');
  };

  const onMouseUp = () => {
    setIsDown(false);
    containerRef.current.classList.remove('grabbing');
  };

  const onMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const container = containerRef.current;
    const x = e.pageX - container.offsetLeft;
    const walk = x - startX;
    container.scrollLeft = scrollLeft - walk;
  };

  return (
    <CarouselPresenter
      data={data}
      isMobile={isMobile}
      currentIndex={currentIndex}
      handlePrev={handlePrev}
      handleNext={handleNext}
      maxIndex={maxIndex}
      cardsToShow={cardsToShow}
      containerRef={containerRef}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    />
  );
}

export default CarouselContainer;
