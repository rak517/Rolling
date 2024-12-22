import { useState, useRef } from 'react';

function useDrag(threshold = 10) {
  const [isDragging, setIsDragging] = useState(false);
  const didDragRef = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);

  const handlePointerDown = (e) => {
    setIsDragging(false);
    didDragRef.current = false;
    if (e.type === 'touchstart') {
      startX.current = e.touches[0].clientX;
      startY.current = e.touches[0].clientY;
    } else {
      startX.current = e.clientX;
      startY.current = e.clientY;
    }
  };

  const handlePointerMove = (e) => {
    let currentX, currentY;
    if (e.type === 'touchmove') {
      currentX = e.touches[0].clientX;
      currentY = e.touches[0].clientY;
    } else {
      currentX = e.clientX;
      currentY = e.clientY;
    }

    const diffX = Math.abs(currentX - startX.current);
    const diffY = Math.abs(currentY - startY.current);

    if ((diffX > threshold || diffY > threshold) && !isDragging) {
      setIsDragging(true);
      didDragRef.current = true;
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
    startX.current = 0;
    startY.current = 0;
  };

  return {
    isDragging,
    didDrag: didDragRef.current,
    handlePointerDown,
    handlePointerMove,
    handlePointerUp,
  };
}

export default useDrag;
