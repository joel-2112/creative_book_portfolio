import React from 'react';
import { useBookNavigation } from './hooks/useBookNavigation';
import { useSoundEffects } from './hooks/useSoundEffects';
import { Book } from './components/Book/Book';
import { BookNavHeader } from './components/Navigation/BookNavHeader';
import { BookNavFooter } from './components/Navigation/BookNavFooter';
import { TableOfContents } from './components/Navigation/TableOfContents';
import { DeskAccessories } from './components/Desk/DeskAccessories';
import { CustomCursor } from './components/Desk/CustomCursor';

export default function App() {
  const {
    soundEnabled,
    toggleSound,
    playPageTurn,
    playBookOpen,
    playPencilClick
  } = useSoundEffects();

  const {
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
  } = useBookNavigation({
    totalPages: 12,
    onPageTurn: playPageTurn,
    onBookOpen: playBookOpen
  });

  const isSpread = viewMode === 'spread';
  const effectiveMax = isSpread ? totalPages - 1 : totalPages;
  const canNext = currentPage < effectiveMax;
  const canPrev = currentPage > 1;

  return (
    <div className="h-[100dvh] w-full bg-[#181412] text-[#2c2825] flex flex-col justify-between relative overflow-hidden selection:bg-amber-300 selection:text-amber-950 pt-[env(safe-area-inset-top,0px)] pb-[env(safe-area-inset-bottom,0px)] pl-[env(safe-area-inset-left,0px)] pr-[env(safe-area-inset-right,0px)]">
      {/* Ambient Wood / Leather Desk Texture & Vignette */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/30 via-[#181412] to-black"></div>
      
      {/* Top Navigation Header */}
      <div className="flex-shrink-0 z-30 w-full">
        <BookNavHeader
          soundEnabled={soundEnabled}
          onToggleSound={toggleSound}
          viewMode={viewMode}
          onToggleViewMode={toggleViewMode}
          onOpenContents={() => setIsContentsOpen(true)}
          onCloseBook={closeBook}
          isOpen={isOpen}
        />
      </div>

      {/* Main 3D Desk Stage with Book */}
      <main className="flex-1 min-h-0 w-full flex items-center justify-center relative z-10 px-2 sm:px-4 py-1 sm:py-2 overflow-hidden">
        <Book
          isOpen={isOpen}
          onOpenBook={openBook}
          currentPage={currentPage}
          totalPages={totalPages}
          onNextPage={nextPage}
          onPrevPage={prevPage}
          viewMode={viewMode}
          isFlipping={isFlipping}
          flipDirection={flipDirection}
        />

        {/* Ambient Desk Accessories (Pencil, Coffee, Notes) */}
        <DeskAccessories
          onOpenContact={() => goToPage(12)}
          onPencilClick={playPencilClick}
        />
      </main>

      {/* Bottom Page Navigation Footer */}
      <div className="flex-shrink-0 z-30 w-full">
        <BookNavFooter
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevPage={prevPage}
          onNextPage={nextPage}
          canPrev={canPrev}
          canNext={canNext}
          isOpen={isOpen}
        />
      </div>

      {/* Table of Contents Drawer Modal */}
      <TableOfContents
        isOpen={isContentsOpen}
        onClose={() => setIsContentsOpen(false)}
        onSelectPage={goToPage}
        currentPage={currentPage}
      />

      {/* Custom Wooden Pencil Cursor for Desktop */}
      <CustomCursor />
    </div>
  );
}
