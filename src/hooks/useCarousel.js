import { useState } from 'react';

function useCarousel(dataLength, cardsToShow = 4) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = dataLength - cardsToShow;

  const handleNext = () => {
    if (currentIndex < maxIndex) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return {
    currentIndex,
    maxIndex,
    handleNext,
    handlePrev,
  };
}

export default useCarousel;
