import { useState, useEffect, useCallback } from 'react';

export function useBookNavigation({ totalPages = 12, onPageTurn, onBookOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isContentsOpen, setIsContentsOpen] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next'); // 'next' | 'prev'
  
  // Auto detect initial view mode based on screen width
  const [viewMode, setViewMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 1024 ? 'spread' : 'single';
    }
    return 'spread';
  });

  // Handle window resizing for viewMode
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024 && viewMode === 'spread') {
        setViewMode('single');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [viewMode]);

  const openBook = useCallback(() => {
    setIsOpen(true);
    setCurrentPage(1);
    if (onBookOpen) onBookOpen();
    if (onPageTurn) onPageTurn();
  }, [onBookOpen, onPageTurn]);

  const closeBook = useCallback(() => {
    setIsOpen(false);
    setIsContentsOpen(false);
    if (onBookOpen) onBookOpen();
  }, [onBookOpen]);

  const triggerFlip = useCallback((direction, targetPage) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setFlipDirection(direction);
    if (onPageTurn) onPageTurn();

    setTimeout(() => {
      setCurrentPage(targetPage);
      setIsFlipping(false);
    }, 450); // page turn duration
  }, [isFlipping, onPageTurn]);

  const nextPage = useCallback(() => {
    if (!isOpen) {
      openBook();
      return;
    }
    const step = viewMode === 'spread' ? 2 : 1;
    const target = Math.min(totalPages, currentPage + step);
    if (target !== currentPage) {
      triggerFlip('next', target);
    }
  }, [isOpen, viewMode, totalPages, currentPage, openBook, triggerFlip]);

  const prevPage = useCallback(() => {
    if (!isOpen) return;
    const step = viewMode === 'spread' ? 2 : 1;
    const target = Math.max(1, currentPage - step);
    if (target !== currentPage) {
      triggerFlip('prev', target);
    }
  }, [isOpen, viewMode, currentPage, triggerFlip]);

  const goToPage = useCallback((pageNum) => {
    if (!isOpen) {
      setIsOpen(true);
    }
    setIsContentsOpen(false);
    const clamped = Math.max(1, Math.min(totalPages, pageNum));
    const normalized = (viewMode === 'spread' && clamped % 2 === 0) ? clamped - 1 : clamped;
    const dir = normalized > currentPage ? 'next' : 'prev';
    triggerFlip(dir, normalized);
  }, [isOpen, totalPages, viewMode, currentPage, triggerFlip]);

  const toggleViewMode = useCallback(() => {
    setViewMode(prev => {
      const next = prev === 'spread' ? 'single' : 'spread';
      return next;
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['input', 'textarea'].includes(document.activeElement?.tagName?.toLowerCase())) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault();
        nextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevPage();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToPage(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToPage(totalPages);
      } else if (e.key === 'Escape') {
        if (isContentsOpen) {
          setIsContentsOpen(false);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage, goToPage, totalPages, isContentsOpen]);

  return {
    isOpen,
    openBook,
    closeBook,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    viewMode,
    toggleViewMode,
    isFlipping,
    flipDirection,
    isContentsOpen,
    setIsContentsOpen
  };
}
