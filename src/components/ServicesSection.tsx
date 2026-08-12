/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Clock, Scissors, Users, Star, ExternalLink } from 'lucide-react';
import { Service, Review } from '../types';

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/%E3%82%AA%E3%82%B7%E3%83%A3%E3%83%AC%E3%83%98%E3%82%A2%E3%83%BC%E3%82%AA%E3%82%AB%E3%83%A0%E3%83%A9/@33.6021594,131.1268357,17z/data=!4m18!1m9!3m8!1s0x3543facecf444a01:0x581b0456e84edfae!2z44Kq44K344Oj44Os44OY44Ki44O844Kq44Kr44Og44Op!8m2!3d33.6021079!4d131.1266645!9m1!1b1!16s%2Fg%2F1vfp5_rk!3m7!1s0x3543facecf444a01:0x581b0456e84edfae!8m2!3d33.6021079!4d131.1266645!9m1!1b1!16s%2Fg%2F1vfp5_rk?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D";

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
  services: Service[];
  reviews?: Review[];
}

export default function ServicesSection({ onSelectService, services, reviews }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 md:py-28 bg-neutral-950 border-t border-neutral-900 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 text-gold-400 mb-3 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
            <Scissors className="w-3.5 h-3.5" />
            <span className="font-serif text-xs uppercase tracking-widest font-semibold">Precision Services</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-white tracking-tight leading-tight sm:whitespace-nowrap">
            洗練された技術と至福の施術メニュー
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto mt-6 mb-4" />
          <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
            三代にわたり磨き抜かれた伝統の理容技術。お一人おひとりの骨格や髪質、ライフスタイルに合わせ、最高の仕上がりをご提案します。すべてのカットメニューには眉カットとシャンプーが含まれます。
          </p>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" id="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-neutral-900 border ${
                service.isPopular ? 'border-gold-400/40' : 'border-neutral-800/80'
              } hover:border-gold-400/30 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-gold-500/5 transition-all duration-300 flex flex-col h-full`}
            >
              {/* Image Container with Hover zoom */}
              <div className="relative aspect-4/3 overflow-hidden bg-neutral-950">
                {service.isPopular && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-gold-500 to-gold-600 text-neutral-950 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md tracking-wider uppercase">
                    三代目のおすすめ (Popular)
                  </div>
                )}
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.85] group-hover:brightness-95"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent opacity-80" />
                
                {/* Price and Duration Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                  <div className="text-white font-serif font-bold text-xl md:text-2xl drop-shadow-md text-gold-200">
                    ¥{service.price.toLocaleString()} <span className="text-xs font-sans text-neutral-400 font-normal">(税込)</span>
                  </div>
                  <div className="flex items-center gap-1 bg-neutral-950/80 border border-neutral-800 backdrop-blur-sm rounded px-2 py-1 text-[10px] text-neutral-300 font-mono">
                    <Clock className="w-3 h-3 text-gold-400" />
                    <span>{service.duration} MIN</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="mb-2">
                  <span className="font-mono text-[10px] text-gold-400 font-bold uppercase tracking-widest">{service.nameEn}</span>
                  <h3 className="text-xl font-serif font-bold text-white tracking-tight mt-0.5">{service.name}</h3>
                </div>
                
                <p className="text-xs text-neutral-400 leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Card CTA */}
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="w-full sm:w-auto bg-neutral-850 hover:bg-gold-400 text-neutral-300 hover:text-neutral-950 border border-neutral-800 hover:border-gold-400 px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer text-center"
                  >
                    このメニューで予約
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Reviews Section replacing the previous bottom block */}
        {reviews && reviews.length > 0 && (
          <div className="mt-20 md:mt-28 pt-16 border-t border-neutral-900 font-sans" id="customer-reviews-block">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <div className="inline-flex items-center gap-2 text-gold-400 mb-3 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
                <Users className="w-3.5 h-3.5" />
                <span className="font-serif text-xs uppercase tracking-widest font-semibold">Customer Reviews</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                お客様からのお声
              </h2>
              <div className="h-0.5 w-16 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto mt-5 mb-4" />
              <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                常連のお客様から初めてご来店いただいたお客様まで、オカムラ理容館に寄せられた嬉しいお声をご紹介いたします。私たちの励みであり、宝物です。
              </p>
            </div>

            {/* Reviews Cards Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="reviews-grid">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-neutral-900 border border-neutral-850 rounded-2xl p-5 md:p-6 flex flex-col justify-between hover:border-gold-400/20 transition-all duration-300 shadow-lg relative group"
                >
                  {/* Visual quote accent mark */}
                  <div className="absolute top-4 right-6 font-serif text-5xl text-gold-400/5 select-none pointer-events-none group-hover:text-gold-400/10 transition-colors">
                    “
                  </div>

                  <div className="space-y-3">
                    {/* Rating Stars */}
                    <div className="flex gap-1 text-gold-400">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold-400 stroke-gold-400" />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-serif italic">
                      「{review.reviewText}」
                    </p>
                  </div>

                  {/* Reviewer Meta Details */}
                  <div className="mt-5 pt-4 border-t border-neutral-800 flex items-center justify-between gap-3">
                    <h4 className="text-sm font-serif font-bold text-white tracking-tight">{review.name}</h4>
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] sm:text-xs text-gold-300 hover:text-gold-200 font-semibold bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/20 hover:border-gold-400/40 px-2 py-0.5 rounded inline-flex items-center gap-1 transition-all duration-200 cursor-pointer shrink-0"
                    >
                      <span>{review.years}</span>
                      <ExternalLink className="w-3 h-3 text-gold-400" />
                    </a>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

