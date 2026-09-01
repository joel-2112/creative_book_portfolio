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
    <div className="min-h-screen w-full bg-[#181412] text-[#2c2825] flex flex-col justify-between relative overflow-hidden selection:bg-amber-300 selection:text-amber-950">
      {/* Ambient Wood / Leather Desk Texture & Vignette */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-950/30 via-[#181412] to-black"></div>
      
      {/* Top Navigation Header */}
      <BookNavHeader
        soundEnabled={soundEnabled}
        onToggleSound={toggleSound}
        viewMode={viewMode}
        onToggleViewMode={toggleViewMode}
        onOpenContents={() => setIsContentsOpen(true)}
        onCloseBook={closeBook}
        isOpen={isOpen}
      />

      {/* Main 3D Desk Stage with Book */}
      <main className="flex-1 flex items-center justify-center relative z-10 px-2 sm:px-4 py-2">
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

        {/* Ambient Desk Accessories (Pencil, Coffee, Notes, Stickers) */}
        <DeskAccessories
          onOpenContact={() => goToPage(12)}
          onPencilClick={playPencilClick}
        />
      </main>

      {/* Bottom Page Navigation Footer */}
      <BookNavFooter
        currentPage={currentPage}
        totalPages={totalPages}
        onPrevPage={prevPage}
        onNextPage={nextPage}
        canPrev={canPrev}
        canNext={canNext}
        isOpen={isOpen}
      />

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
