/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShopNotice } from '../types';

interface NoticeCardProps {
  notice: ShopNotice;
}

export default function NoticeCard({ notice }: NoticeCardProps) {
  // NOTE: Status dot & card tint are intentionally simplified to a binary indicator:
  // - Open (Green): 'normal' and 'early_close' are both treated as open/green.
  // - Closed (Red): 'holiday' is treated as closed/red.
  // If a distinct "closing early" amber visual treatment is desired in the future,
  // evaluate notice.statusType === 'early_close' here.
  const isClosed = notice.statusType === 'holiday';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full rounded-2xl border transition-all duration-300 p-3.5 sm:py-3 sm:px-4.5 md:py-3.5 md:px-5 backdrop-blur-md shadow-xl ${
        isClosed
          ? 'bg-gradient-to-br from-rose-950/40 via-neutral-900/90 to-neutral-950 border-rose-500/40 shadow-rose-950/20'
          : 'bg-gradient-to-br from-neutral-900/95 via-neutral-900/80 to-neutral-950 border-neutral-800 hover:border-gold-500/40 shadow-black/40'
      }`}
      id="shop-notice-card"
    >
      {/* First line: Binary status indicator + Notice Title (inline on tablet and desktop) */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:gap-2 mb-1 sm:mb-1.5">
        <div className="flex items-center gap-2 shrink-0 mb-0.5 sm:mb-0">
          <span className="relative flex h-2.5 w-2.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isClosed ? 'bg-rose-400' : 'bg-emerald-400'
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isClosed ? 'bg-rose-500' : 'bg-emerald-500'
              }`}
            />
          </span>
          <span
            className={`text-[11px] font-bold tracking-wider font-mono uppercase ${
              isClosed ? 'text-rose-400' : 'text-emerald-400'
            }`}
          >
            {isClosed ? '休業・店休日' : '営業案内'}
          </span>
          <span className="hidden sm:inline text-neutral-600 font-normal">|</span>
        </div>

        <h2 className="font-serif font-bold text-white text-sm sm:text-sm md:text-base leading-snug tracking-tight">
          {notice.title}
        </h2>
      </div>

      {/* Second line: Detail text */}
      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
        {notice.detailText}
      </p>
    </motion.div>
  );
}
