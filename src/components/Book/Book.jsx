import React, { useRef } from 'react';
import { BookCover } from './BookCover';
import { SpiralBinding } from './SpiralBinding';
import { PageStackEdge } from './PageStackEdge';
import { usePageDrag } from '../../hooks/usePageDrag';

// Import all 12 page components
import { Page01CoverReveal } from '../Pages/Page01CoverReveal';
import { Page02AboutMe } from '../Pages/Page02AboutMe';
import { Page03Journey } from '../Pages/Page03Journey';
import { Page04Experience } from '../Pages/Page04Experience';
import { Page05Skills } from '../Pages/Page05Skills';
import { Page06PharmaCore } from '../Pages/Page06PharmaCore';
import { Page07PermitSystem } from '../Pages/Page07PermitSystem';
import { Page08MoreProjects } from '../Pages/Page08MoreProjects';
import { Page09HowIThink } from '../Pages/Page09HowIThink';
import { Page10OpenSource } from '../Pages/Page10OpenSource';
import { Page11Education } from '../Pages/Page11Education';
import { Page12Contact } from '../Pages/Page12Contact';

export function Book({
  isOpen,
  onOpenBook,
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
  viewMode,
  isFlipping,
  flipDirection
}) {
  const bookRef = useRef(null);

  // Hook for interactive corner drag-to-turn physics
  const { isDragging, dragOffset, dragSide, startDrag, onDrag, stopDrag } = usePageDrag({
    onTurnNext: onNextPage,
    onTurnPrev: onPrevPage,
    enabled: isOpen
  });

  // Render page by index (1 to 12)
  const renderPage = (pageNum) => {
    switch (pageNum) {
      case 1:
        return <Page01CoverReveal onNextPage={onNextPage} />;
      case 2:
        return <Page02AboutMe />;
      case 3:
        return <Page03Journey />;
      case 4:
        return <Page04Experience />;
      case 5:
        return <Page05Skills />;
      case 6:
        return <Page06PharmaCore />;
      case 7:
        return <Page07PermitSystem />;
      case 8:
        return <Page08MoreProjects />;
      case 9:
        return <Page09HowIThink />;
      case 10:
        return <Page10OpenSource />;
      case 11:
        return <Page11Education />;
      case 12:
        return <Page12Contact />;
      default:
        return <Page01CoverReveal onNextPage={onNextPage} />;
    }
  };

  const isSpread = viewMode === 'spread';
  const leftPageNum = isSpread ? (currentPage % 2 === 0 ? currentPage - 1 : currentPage) : currentPage;
  const rightPageNum = isSpread ? leftPageNum + 1 : null;

  // Compute dynamic 3D transform when turning/dragging
  const getFlippingStyles = (side) => {
    if (isDragging && dragSide === side) {
      const angle = side === 'right' ? -dragOffset * 1.5 : dragOffset * 1.5;
      return {
        transform: `rotateY(${angle}deg)`,
        transition: 'none'
      };
    }
    return {};
  };

  return (
    <div
      ref={bookRef}
      onMouseMove={onDrag}
      onTouchMove={onDrag}
      onMouseUp={stopDrag}
      onTouchEnd={stopDrag}
      className="book-stage relative w-full max-w-5xl mx-auto flex items-center justify-center my-auto min-h-[580px] sm:min-h-[640px] px-2 sm:px-4 py-4 select-none"
    >
      {/* Closed Book Hardcover View */}
      <div
        className={`relative w-full max-w-lg aspect-3/4 sm:aspect-4/5 rounded-2xl shadow-2xl transition-all duration-700 ease-out preserve-3d ${
          isOpen ? 'hidden' : 'block'
        }`}
      >
        <BookCover onOpen={onOpenBook} isOpen={isOpen} />
      </div>

      {/* Opened Book View */}
      {isOpen && (
        <div
          className={`relative w-full rounded-2xl shadow-2xl bg-[#FAF7EE] border-4 border-[#2A231D] preserve-3d transition-all duration-500 overflow-hidden flex ${
            isSpread
              ? 'max-w-5xl h-[620px] sm:h-[680px]'
              : 'max-w-lg h-[620px] sm:h-[680px]'
          }`}
        >
          {/* Left Side Page Stack Edge */}
          <PageStackEdge side="left" thickness={leftPageNum} />

          {/* Left Page (in Spread mode) or Single Page */}
          <div
            className={`relative h-full overflow-hidden preserve-3d ${
              isSpread ? 'w-1/2 border-r border-zinc-300' : 'w-full'
            }`}
          >
            {renderPage(leftPageNum)}

            {/* Left page corner drag target for previous page */}
            {leftPageNum > 1 && (
              <div
                onMouseDown={(e) => startDrag(e, 'left', bookRef.current)}
                onTouchStart={(e) => startDrag(e, 'left', bookRef.current)}
                className="absolute bottom-0 left-0 w-16 h-16 z-30 cursor-grab active:cursor-grabbing flex items-end justify-start p-2 group"
                title="Drag or click to flip backward"
              >
                <div className="w-8 h-8 bg-zinc-400/20 rounded-tr-xl border-t border-r border-zinc-500/40 group-hover:bg-zinc-400/40 transition-colors pointer-events-none"></div>
              </div>
            )}
          </div>

          {/* Center Spiral Binding for 2-Page Spread */}
          {isSpread && <SpiralBinding count={18} position="center" />}

          {/* Single Page Left Spiral Binding */}
          {!isSpread && <SpiralBinding count={18} position="left" />}

          {/* Right Page (in Spread mode) */}
          {isSpread && (
            <div
              style={getFlippingStyles('right')}
              className="relative w-1/2 h-full overflow-hidden preserve-3d origin-left transition-transform duration-300 ease-out"
            >
              {rightPageNum <= totalPages ? (
                renderPage(rightPageNum)
              ) : (
                <div className="w-full h-full p-8 flex items-center justify-center paper-dots text-zinc-400 font-script text-xl">
                  <span>(Blank Notebook Page)</span>
                </div>
              )}

              {/* Right page corner drag target for next page */}
              {rightPageNum < totalPages && (
                <div
                  onMouseDown={(e) => startDrag(e, 'right', bookRef.current)}
                  onTouchStart={(e) => startDrag(e, 'right', bookRef.current)}
                  className="absolute bottom-0 right-0 w-16 h-16 z-30 cursor-grab active:cursor-grabbing flex items-end justify-end p-2 group"
                  title="Drag or click to flip forward"
                >
                  <div className="w-8 h-8 bg-zinc-400/20 rounded-tl-xl border-t border-l border-zinc-500/40 group-hover:bg-zinc-400/40 transition-colors pointer-events-none"></div>
                </div>
              )}
            </div>
          )}

          {/* Right Side Page Stack Edge */}
          <PageStackEdge side="right" thickness={totalPages - (rightPageNum || leftPageNum)} />
        </div>
      )}
    </div>
  );
}
