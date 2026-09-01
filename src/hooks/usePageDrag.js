import { useState, useRef, useCallback } from 'react';

export function usePageDrag({ onTurnNext, onTurnPrev, enabled = true }) {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0); // -100 to 100 percentage or px
  const [dragSide, setDragSide] = useState(null); // 'right' | 'left'
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const containerWidthRef = useRef(500);

  const startDrag = useCallback((e, side, containerEl) => {
    if (!enabled) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    startXRef.current = clientX;
    startYRef.current = clientY;
    setDragSide(side);
    setIsDragging(true);
    setDragOffset(0);

    if (containerEl) {
      containerWidthRef.current = containerEl.offsetWidth || 500;
    }
  }, [enabled]);

  const onDrag = useCallback((e) => {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startXRef.current;
    
    // Normalize delta relative to container width
    const maxDistance = containerWidthRef.current * 0.8;
    let progress = 0;

    if (dragSide === 'right') {
      // Dragging from right edge to the left (negative deltaX)
      progress = Math.min(100, Math.max(0, (-deltaX / maxDistance) * 100));
    } else if (dragSide === 'left') {
      // Dragging from left edge to the right (positive deltaX)
      progress = Math.min(100, Math.max(0, (deltaX / maxDistance) * 100));
    }

    setDragOffset(progress);
  }, [isDragging, dragSide]);

  const stopDrag = useCallback(() => {
    if (!isDragging) return;
    
    // Threshold for complete page turn: 32%
    if (dragOffset > 32) {
      if (dragSide === 'right' && onTurnNext) {
        onTurnNext();
      } else if (dragSide === 'left' && onTurnPrev) {
        onTurnPrev();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
    setDragSide(null);
  }, [isDragging, dragOffset, dragSide, onTurnNext, onTurnPrev]);

  return {
    isDragging,
    dragOffset,
    dragSide,
    startDrag,
    onDrag,
    stopDrag
  };
}
