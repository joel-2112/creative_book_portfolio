import { useState, useEffect } from 'react';

export function useCustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch screen device to disable custom cursor
    if (typeof window !== 'undefined') {
      const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
      if (isTouch) return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('button, a, input, [role="button"], .interactive-element, .washi-tape, .sticky-note, .page-turn-corner');
      setIsHovering(!!isInteractive);
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  return {
    position,
    isHovering,
    isClicking,
    isVisible,
    isTouchDevice
  };
}
