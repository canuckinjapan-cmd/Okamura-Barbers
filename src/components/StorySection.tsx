/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, History, ChevronDown, ChevronUp } from 'lucide-react';
import { TimelineEvent } from '../types';

interface StorySectionProps {
  timelineEvents: TimelineEvent[];
}

function SepiaPhotos({ timelineEvents }: { timelineEvents: TimelineEvent[] }) {
  return (
    <div className="space-y-10">
      {/* Old Sepia Photo 1: Vintage Tools (Generated Image) */}
      <motion.div
        initial={{ rotate: -2, scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="bg-stone-100 p-4 pb-8 rounded shadow-lg border border-stone-300 max-w-sm mx-auto relative group"
      >
        {/* Vintage paper masking tape */}
        <div className="absolute -top-4 left-1/3 -translate-x-1/2 w-24 h-6 bg-amber-200/50 backdrop-blur-xs border border-amber-300/30 rotate-2 shadow-xs z-10" />
        
        <div className="relative overflow-hidden aspect-square bg-stone-900 border border-stone-200">
          <img
            src={timelineEvents[0]?.image}
            alt="Nostalgic Barber Tools"
            className="w-full h-full object-cover grayscale sepia contrast-115 hover:grayscale-0 hover:sepia-0 hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <p className="text-center font-serif text-xs italic text-stone-500 mt-4 tracking-wider">
          初代から受け継がれるハサミと剃刀 (1950)
        </p>
      </motion.div>

      {/* Old Sepia Photo 2: Shop Exterior (Generated Image) */}
      <motion.div
        initial={{ rotate: 3, scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="bg-stone-100 p-4 pb-8 rounded shadow-lg border border-stone-300 max-w-sm mx-auto relative group"
      >
        {/* Vintage paper masking tape */}
        <div className="absolute -top-3 right-1/4 translate-x-1/2 w-20 h-6 bg-amber-200/40 backdrop-blur-xs border border-amber-300/30 -rotate-3 shadow-xs z-10" />
        
        <div className="relative overflow-hidden aspect-4/3 bg-stone-900 border border-stone-200">
          <img
            src={timelineEvents[1]?.image}
            alt="Retro Shop Exterior"
            className="w-full h-full object-cover grayscale sepia contrast-110 hover:grayscale-0 hover:sepia-0 hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
        </div>
        <p className="text-center font-serif text-xs italic text-stone-500 mt-4 tracking-wider">
          豊前の地で佇む、懐かしの佇まい
        </p>
      </motion.div>
    </div>
  );
}

function renderTimelineCard(event: TimelineEvent, index: number) {
  return (
    <motion.div
      key={event.year}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      {/* Timeline bullet circle */}
      <div className="absolute -left-[30px] sm:-left-[35px] top-1 w-5 h-5 rounded-full border-4 border-amber-50 bg-gold-600 group-hover:bg-gold-500 group-hover:scale-125 transition-all duration-300 z-10 shadow-sm" />
      
      {/* Event content box */}
      <div className="bg-amber-100/35 hover:bg-amber-100/60 border border-gold-800/10 hover:border-gold-800/20 p-5 sm:p-6 rounded-2xl transition-all duration-300 shadow-xs relative">
        {/* Year badge */}
        <div className="inline-flex items-center gap-1.5 bg-gold-900 text-gold-100 px-3 py-1 rounded-full text-xs font-mono font-bold shadow-sm mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>{event.year}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-serif font-bold text-neutral-900 tracking-tight mb-2">
          {event.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-serif">
          {event.description}
        </p>

        {event.badge && (
          <div className="absolute top-4 right-4 hidden sm:block bg-gold-200/50 border border-gold-800/10 px-2.5 py-0.5 rounded text-[10px] text-gold-950 font-bold tracking-wider">
            {event.badge}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function StorySection({ timelineEvents }: StorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="history" className="py-16 md:py-24 bg-amber-50 text-neutral-900 border-t-4 border-b-4 border-gold-400 relative overflow-hidden font-sans scroll-mt-20">
      
      {/* Background paper texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4a753_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.06]" />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/30 via-transparent to-amber-100/30" />
      
      {/* Top and Bottom decorative Japanese border lines */}
      <div className="absolute top-4 left-4 right-4 h-0.5 border-t border-dashed border-gold-800/30" />
      <div className="absolute bottom-4 left-4 right-4 h-0.5 border-b border-dashed border-gold-800/30" />

      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Vintage Graphics & Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 md:mb-12">
          
          <div className="inline-flex items-center gap-1 text-gold-800 mb-2 font-serif text-sm tracking-widest font-bold">
            <History className="w-4 h-4" />
            <span>SINCE 1950</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            <span className="block sm:inline">豊前の地と共に</span><span className="block sm:inline">歩んだ歴史</span>
          </h2>
          <span className="text-xs font-mono tracking-widest text-gold-700 font-bold uppercase mt-1">Our Story</span>
          <p className="text-xs text-neutral-600 font-sans mt-2">
            ※掲載画像はすべてイメージです。沿革・文章はご提案用の仮原稿であり、正式な内容はクライアント様からのご提供データに差し替えます。
          </p>
          <div className="h-0.5 w-24 bg-gold-800/60 mx-auto mt-4" />
        </div>

        {/* Desktop Layout (lg and above): Always visible 2 columns */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Old-school scrap photo collage with tape borders */}
          <div className="lg:col-span-5 space-y-10 lg:sticky lg:top-24">
            <SepiaPhotos timelineEvents={timelineEvents} />
          </div>

          {/* Right Column: Timeline component */}
          <div className="lg:col-span-7 relative pl-8 sm:pl-12">
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-3.5 sm:left-5 top-2 bottom-2 w-1 bg-gradient-to-b from-gold-600 via-gold-400 to-gold-800 rounded-full" />

            {/* Timeline items loop */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => renderTimelineCard(event, index))}
            </div>
          </div>

        </div>

        {/* Mobile Layout (below lg): Collapsed by default */}
        <div className="block lg:hidden">
          <div className="relative pl-8 sm:pl-10">
            
            {/* Continuous Vertical Timeline Line */}
            <div className="absolute left-3.5 sm:left-4 top-2 bottom-2 w-1 bg-gradient-to-b from-gold-600 via-gold-400 to-gold-800 rounded-full" />

            {/* Always visible: First timeline entry (1950, founding) */}
            {timelineEvents[0] && renderTimelineCard(timelineEvents[0], 0)}

            {/* Collapsible remaining entries + sepia photos */}
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  key="mobile-timeline-expanded"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-10 pt-10">
                    {timelineEvents.slice(1).map((event, index) => renderTimelineCard(event, index + 1))}

                    {/* Both Sepia Photos on mobile */}
                    <div className="pt-6 pb-2">
                      <SepiaPhotos timelineEvents={timelineEvents} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Toggle Button: 続きを読む / 閉じる */}
            <div className="mt-8 flex justify-center sm:justify-start">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 hover:from-amber-200 hover:to-amber-100 text-gold-950 font-serif font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full border border-gold-800/30 shadow-sm transition-all duration-200 cursor-pointer active:scale-95 group"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? '閉じる' : '続きを読む'}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4 text-gold-800 group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-gold-800 group-hover:translate-y-0.5 transition-transform" />
                )}
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* Styled keyframe CSS for barber pole striping scroll */}
      <style>{`
        @keyframes shimmypole {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 -120px;
          }
        }
      `}</style>
    </section>
  );
}
