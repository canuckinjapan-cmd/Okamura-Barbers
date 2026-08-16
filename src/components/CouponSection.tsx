/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Sparkles, Ticket, Scissors, AlertCircle, Info, CalendarCheck } from 'lucide-react';

interface CouponSectionProps {
  onBookWithCoupon: () => void;
}

export default function CouponSection({ onBookWithCoupon }: CouponSectionProps) {
  return (
    <section id="coupon" className="py-20 md:py-28 bg-neutral-900 border-t border-neutral-950 relative overflow-hidden font-sans">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-10 w-48 h-48 bg-gold-400/5 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 text-gold-400 mb-3 bg-neutral-950 border border-neutral-800 px-3 py-1 rounded-full">
            <Ticket className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-serif text-xs uppercase tracking-widest font-semibold">Special Offer</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
            ホームページ開設記念キャンペーン（案）
          </h2>
          <div className="h-0.5 w-12 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto mt-4" />
        </div>

        {/* Highlighted Gold-Gilded Coupon Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden border-2 border-gold-400/50 bg-neutral-950 shadow-2xl p-0.5"
          id="coupon-card-container"
        >
          {/* Animated Gold Shimmer Border Background */}
          <div className="absolute inset-0 shimmer-bg opacity-40 pointer-events-none" />
          
          <div className="bg-gradient-to-br from-neutral-950 via-neutral-950 to-neutral-900 rounded-[14px] p-6 sm:p-10 relative overflow-hidden">
            
            {/* Corner Bracket Decors */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold-400/30" />
            <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold-400/30" />
            <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold-400/30" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold-400/30" />

            {/* Sparkles Floating Background */}
            <div className="absolute top-6 left-12 text-gold-400/10 animate-pulse"><Sparkles className="w-8 h-8" /></div>
            <div className="absolute bottom-8 right-16 text-gold-400/10 animate-bounce"><Sparkles className="w-10 h-10" /></div>
            <div className="absolute top-1/2 right-12 text-gold-400/5 animate-pulse"><Sparkles className="w-12 h-12" /></div>

            {/* Main Content Layout */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative z-10">
              
              {/* Coupon details left */}
              <div className="flex-1 text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start gap-2 text-gold-400">
                  <Scissors className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-widest font-bold font-mono">OKAMURA BARBERS SPECIAL TICKET</span>
                </div>
                
                <h3 className="text-lg md:text-xl text-neutral-300 font-medium">
                  Webサイトを見てはじめてご来店の方
                </h3>
                
                {/* Gigantic Price text */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-1 sm:gap-4">
                  <span className="text-3xl sm:text-5xl font-serif font-black text-white tracking-wider flex items-baseline gap-1">
                    ¥1,000 <span className="text-xl font-sans font-bold text-gold-300">OFF</span>
                  </span>
                  <span className="bg-gold-400/10 border border-gold-400/30 px-3 py-1 rounded-md text-[11px] font-bold text-gold-300 tracking-wider">
                    🎉 新規ご来店特典
                  </span>
                </div>
                
                <p className="text-xs text-neutral-400 max-w-md leading-relaxed">
                  当店を初めてご利用いただくすべてのお客様を対象に、お会計から<strong>1,000円を割引</strong>いたします。お会計時に「ホームページを見ました」とお伝え、またはご予約チケットをご提示ください。
                </p>
              </div>

              {/* Dashed vertical separator (folded coupon card aesthetic) */}
              <div className="hidden md:block w-0.5 h-44 border-r-2 border-dashed border-neutral-800 relative">
                <div className="absolute -top-1 -right-1.5 w-3 h-3 bg-neutral-900 border-b border-l border-gold-400/50 rounded-full" />
                <div className="absolute -bottom-1 -right-1.5 w-3 h-3 bg-neutral-900 border-t border-l border-gold-400/50 rounded-full" />
              </div>

              {/* Action Button & Instructions Right */}
              <div className="flex flex-col items-center justify-center p-2 text-center shrink-0 w-full md:w-64 space-y-4">
                <div className="font-serif text-[10px] text-neutral-500 font-semibold tracking-widest">PROMOTION CODE: OKM1000</div>
                
                <button
                  onClick={onBookWithCoupon}
                  className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-950 font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest transition-all duration-300 shadow-xl shadow-gold-500/10 border-t border-white/20 cursor-pointer flex items-center justify-center gap-2 group"
                  id="coupon-book-btn"
                >
                  <CalendarCheck className="w-4 h-4 text-neutral-950 group-hover:scale-110 transition-transform" />
                  <span>予約して利用する</span>
                </button>
                
                <p className="text-[10px] text-neutral-500 leading-none">
                  ※ネット予約で自動的に適用されます
                </p>
              </div>

            </div>

            {/* Terms and conditions block */}
            <div className="mt-8 pt-6 border-t border-neutral-800/60 text-[10px] sm:text-xs text-neutral-500 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
              <div className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                <span>初めてご来店のお客様に限りご利用いただけます。</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                <span>お一人様1回限りの適用となります。</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                <span>他の割引やクーポンとの併用はできません。</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                <span>ご来店時に、このページをご提示いただくかご予約完了画面をお見せください。</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
