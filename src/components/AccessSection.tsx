/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Info, ExternalLink } from 'lucide-react';
import { AccessMap } from './AccessMap';

interface AccessSectionProps {
  exteriorImage: string;
}

export default function AccessSection({ exteriorImage }: AccessSectionProps) {
  const shopDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />,
      label: '住所',
      value: '〒828-0053 福岡県豊前市千束256',
      subtext: '※千束郵便局すぐ隣。店舗横に無料駐車場4台分。満車の場合は、千束郵便局の反対側にある駐車場もご利用いただけます。'
    },
    {
      icon: <Phone className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />,
      label: '電話番号',
      value: '0979-82-5007',
      subtext: '※施術中はお電話に出られない場合がございます。ネット予約が便利です。',
      link: 'tel:0979-82-5007'
    },
    {
      icon: <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />,
      label: '営業時間',
      value: '08:30 〜 19:00',
      subtext: '（最終受付：カット18:00、パーマ・カラー17:00）'
    },
    {
      icon: <Info className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />,
      label: '定休日',
      value: 'ありません',
      subtext: '※ほぼ年中無休でやっています。'
    }
  ];

  const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/%E3%82%AA%E3%82%B7%E3%83%A3%E3%83%AC%E3%83%98%E3%82%A2%E3%83%BC%E3%82%AA%E3%82%AB%E3%83%A0%E3%83%A9/@33.6021594,131.1268357,17z/data=!4m18!1m9!3m8!1s0x3543facecf444a01:0x581b0456e84edfae!2z44Kq44K344Oj44Os44OY44Ki44O844Kq44Kr44Og44Op!8m2!3d33.6021079!4d131.1266645!9m1!1b1!16s%2Fg%2F1vfp5_rk!3m7!1s0x3543facecf444a01:0x581b0456e84edfae!8m2!3d33.6021079!4d131.1266645!9m1!1b1!16s%2Fg%2F1vfp5_rk?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D";

  const handleMapClick = () => {
    // Open in Google Maps
    window.open(GOOGLE_MAPS_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="access" className="py-20 md:py-28 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden font-sans text-neutral-300 scroll-mt-20">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 text-gold-400 mb-3 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-serif text-xs uppercase tracking-widest font-semibold">Access</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            店舗情報・アクセス
          </h2>
          <div className="h-0.5 w-16 bg-gradient-to-r from-gold-500 to-gold-700 mt-5 mb-4" />
          <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
            JR日豊本線「宇島駅（うのしまえき）」から徒歩約30分。豊前市役所のすぐ近くで営業しております。お車でお越しの際は、店舗横の専用駐車場（4台分・無料）および郵便局反対側の広めの駐車場をご利用ください。
          </p>
        </div>

        {/* Access Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-x-10 lg:gap-y-6 xl:gap-x-12 items-start" id="access-grid">
          
          {/* 1. Shop Details Cards */}
          <div className="order-2 lg:order-1 lg:col-span-5 lg:col-start-1 lg:row-start-1 space-y-4 bg-neutral-900/40 border border-neutral-800/80 p-5 sm:p-6 md:p-7 rounded-2xl">
            <h3 className="text-lg md:text-xl font-serif font-bold text-white border-b border-neutral-800 pb-3">
              岡村理容美容館 (Okamura Barbers)
            </h3>
            
            <div className="space-y-4">
              {shopDetails.map((detail, idx) => (
                <div key={idx} className="flex gap-3.5">
                  {detail.icon}
                  <div className="space-y-0.5">
                    <span className="block text-xs text-neutral-500 font-bold tracking-wider uppercase">
                      {detail.label}
                    </span>
                    {detail.link ? (
                      <a
                        href={detail.link}
                        className="text-base font-serif font-semibold text-gold-300 hover:text-gold-200 transition-colors duration-200 flex items-center gap-1.5"
                      >
                        {detail.value}
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-500" />
                      </a>
                    ) : (
                      <span className="text-base text-neutral-200 font-medium font-serif">
                        {detail.value}
                      </span>
                    )}
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {detail.subtext}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Shop Exterior Photo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-3 lg:order-3 lg:col-span-5 lg:col-start-1 lg:row-start-2 relative overflow-hidden rounded-2xl border border-neutral-800 group shadow-lg aspect-4/3"
          >
            <img
              src={exteriorImage}
              alt="Okamura Barbers Shop Exterior"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.8] group-hover:brightness-95"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Glassmorphic description tag */}
            <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/70 border border-neutral-800 backdrop-blur-md rounded-xl p-3 text-xs text-left">
              <h4 className="font-semibold text-white">岡村理容美容館 外観</h4>
              <p className="text-neutral-400 mt-0.5 w-full">イエロー壁とグリーンのオーニングが目印です</p>
            </div>
          </motion.div>

          {/* 3. Custom Interactive Map */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-2 w-full">
            <div className="bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col shadow-xl">
              
              {/* Interactive map bar */}
              <div className="bg-neutral-950 px-5 py-3 border-b border-neutral-850 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-gold-400 rounded-full animate-ping" />
                  <span className="font-semibold text-neutral-200">豊前市千束 周辺マップ (Buzen Map)</span>
                </div>
                <span className="text-[11px] text-neutral-500">※地図は縮尺通りではありません</span>
              </div>

              {/* Custom SVG Local Area Map */}
              <AccessMap onShopClick={handleMapClick} />

              {/* Map Footer */}
              <button
                onClick={handleMapClick}
                className="bg-neutral-950 hover:bg-neutral-850 text-gold-400 hover:text-gold-300 py-3 text-xs font-semibold uppercase tracking-wider text-center border-t border-neutral-850 cursor-pointer transition-all flex items-center justify-center gap-1"
                id="interactive-map-external-link"
              >
                <span>Google Maps アプリで道順を表示</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
