import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { StickyNote } from '../UI/StickyNote';
import { HighlightText } from '../UI/HighlightText';
import { HandDrawnArrow, LightbulbDoodle } from '../UI/HandDrawnDoodles';
import { Calendar, Award, ChevronRight, Milestone } from 'lucide-react';

export function Page03Journey() {
  const [selectedMilestone, setSelectedMilestone] = useState(portfolioData.journey[portfolioData.journey.length - 1]);

  return (
    <div className="w-full h-full p-6 sm:p-10 flex flex-col justify-between paper-ruled relative overflow-y-auto notebook-scroll">
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-sky-400/40 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
          <span className="font-mono text-xs text-zinc-700 font-bold uppercase tracking-wider">
            PAGE 03 • ENGINEERING JOURNEY & TIMELINE
          </span>
        </div>
        <span className="font-script text-xs text-zinc-500">Click any milestone for details</span>
      </div>

      {/* Main Timeline Content */}
      <div className="my-auto py-3 space-y-4">
        <div>
          <h2 className="text-2xl sm:text-4xl font-marker text-zinc-900">
            MY JOURNEY SO FAR
          </h2>
          <p className="font-script text-base text-sky-700">
            From university algorithms to enterprise distributed microservices.
          </p>
        </div>

        {/* Hand-Drawn Interactive Timeline Track */}
        <div className="space-y-2.5 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[2px] before:bg-sky-400/60 before:border-r before:border-dashed before:border-sky-600/40">
          {portfolioData.journey.map((item, idx) => {
            const isSelected = selectedMilestone.year === item.year && selectedMilestone.title === item.title;
            return (
              <div
                key={idx}
                onClick={() => setSelectedMilestone(item)}
                className={`relative pl-9 cursor-pointer transition-all duration-150 group ${
                  isSelected ? 'scale-[1.01]' : 'hover:translate-x-1'
                }`}
              >
                {/* Hand-Drawn Marker Node */}
                <div
                  className={`absolute left-2.5 top-2.5 w-4 h-4 rounded-full border-2 transition-all flex items-center justify-center -translate-x-1/2 ${
                    isSelected
                      ? 'bg-sky-500 border-zinc-900 shadow-md ring-2 ring-sky-300'
                      : 'bg-white border-zinc-700 group-hover:bg-sky-200'
                  }`}
                >
                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white"></div>}
                </div>

                {/* Milestone Summary Row */}
                <div
                  className={`p-2.5 rounded-lg border transition-all ${
                    isSelected
                      ? 'bg-white border-sky-400 shadow-sm'
                      : 'bg-white/60 border-zinc-200/80 hover:bg-white/90'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-sm bg-sky-100 text-sky-900 border border-sky-300">
                        {item.year}
                      </span>
                      <span className="text-sm font-hand font-bold text-zinc-900">
                        {item.title}
                      </span>
                    </div>

                    <span className="text-xs font-script text-zinc-500">
                      {item.institution}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Milestone Inspection Sheet */}
        {selectedMilestone && (
          <div className="sketch-border-blue bg-sky-50/90 p-4 relative shadow-sm transition-all duration-200">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl">{selectedMilestone.doodle}</span>
                  <h3 className="font-marker text-lg text-zinc-900">
                    {selectedMilestone.title} ({selectedMilestone.year})
                  </h3>
                </div>
                <p className="font-script text-base font-semibold text-sky-800 mt-0.5">
                  {selectedMilestone.institution} • <span className="text-zinc-600 font-normal">{selectedMilestone.tag}</span>
                </p>
                <p className="font-script text-base text-zinc-800 leading-snug mt-1.5">
                  {selectedMilestone.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-dashed border-zinc-300 flex items-center justify-between text-xs font-mono text-zinc-500">
        <span>NOTEBOOK #03 • TIMELINE ARCHIVE</span>
        <span className="font-script text-sm text-sky-700">"Learn → Build → Ship"</span>
      </div>
    </div>
  );
}
