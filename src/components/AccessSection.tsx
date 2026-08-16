/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Info, ShieldCheck, SquareTerminal, Navigation, ExternalLink } from 'lucide-react';

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
    <section id="access" className="py-20 md:py-28 bg-neutral-950 border-t border-neutral-900 relative overflow-hidden font-sans text-neutral-300">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start" id="access-grid">
          
          {/* Left Column: Details & Shop exterior photo */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Shop Details Cards */}
            <div className="space-y-6 bg-neutral-900/40 border border-neutral-800/80 p-6 md:p-8 rounded-2xl">
              <h3 className="text-xl font-serif font-bold text-white border-b border-neutral-800 pb-3">
                岡村理容美容館 (Okamura Barbers)
              </h3>
              
              <div className="space-y-6">
                {shopDetails.map((detail, idx) => (
                  <div key={idx} className="flex gap-4">
                    {detail.icon}
                    <div className="space-y-1">
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

              {/* CTAs buttons */}
              <div className="pt-6 border-t border-neutral-800 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:0979-82-5007"
                  className="flex-1 bg-neutral-950 hover:bg-neutral-850 text-gold-300 hover:text-gold-200 border border-gold-400/20 hover:border-gold-400/40 text-center py-3 px-2 sm:px-3 md:px-4 rounded-xl text-[11px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>電話をかける</span>
                </a>
                
                <button
                  onClick={handleMapClick}
                  className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-950 text-center py-3 px-2 sm:px-3 md:px-4 rounded-xl text-[11px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md shadow-gold-500/5 cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5 text-neutral-950" />
                  <span>Google Maps で開く</span>
                </button>
              </div>
            </div>

            {/* Shop Exterior Photo Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-neutral-800 group shadow-lg aspect-4/3"
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

          </div>

          {/* Right Column: Custom Interactive Map Placeholder */}
          <div className="lg:col-span-7 h-full">
            <div className="bg-neutral-900 border border-neutral-800/80 rounded-2xl overflow-hidden h-full flex flex-col shadow-xl">
              
              {/* Interactive map bar */}
              <div className="bg-neutral-950 px-5 py-3.5 border-b border-neutral-850 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-gold-400 rounded-full animate-ping" />
                  <span className="font-semibold text-neutral-200">豊前市千束 周辺マップ (Buzen Map)</span>
                </div>
                <span className="font-mono text-neutral-500">ZOOM: 15x</span>
              </div>

              {/* Custom SVG Local Area Map */}
              <div className="relative flex-grow bg-[#131313] w-full aspect-[800/1050] overflow-hidden">
                <svg className="w-full h-full text-neutral-800" viewBox="0 0 800 1050" fill="none">
                  {/* Base styling definitions or gradients */}
                  <rect width="800" height="1050" fill="#131313" />

                  {/* Water bodies (Buzen Sea at the top) */}
                  <rect x="0" y="210" width="800" height="45" fill="#101a26" opacity="0.6" />
                  <text x="400" y="237" fill="#2c3a4e" fontSize="11" textAnchor="middle" fontFamily="sans-serif" letterSpacing="4" fontWeight="bold">周防灘 (SUO-NADA SEA)</text>

                  {/* Area Grids & Block Labels */}
                  <text x="160" y="380" fill="#777" fontSize="11" fontFamily="sans-serif" fontWeight="bold">八屋エリア (HACHIYA)</text>
                  <text x="640" y="380" fill="#777" fontSize="11" fontFamily="sans-serif" fontWeight="bold">赤熊エリア (AKAGUMA)</text>
                  
                  <g>
                    <text x="140" y="530" fill="#777" fontSize="11" fontFamily="sans-serif" fontWeight="bold">千束西エリア</text>
                    <text x="140" y="546" fill="#777" fontSize="10" fontFamily="sans-serif" fontWeight="bold">(CHIZUKA)</text>
                  </g>
                  
                  <text x="640" y="555" fill="#777" fontSize="11" fontFamily="sans-serif" fontWeight="bold">吉木エリア (YOSHIKI)</text>

                  {/* JR Nippo Main Line railway track at the top */}
                  <path d="M-50,310 L850,310" stroke="#1f1f1f" strokeWidth="12" />
                  <path d="M-50,310 L850,310" stroke="#333" strokeWidth="6" />
                  <path d="M-50,310 L850,310" stroke="#fff" strokeWidth="2" strokeDasharray="10 10" />
                  <text x="40" y="332" fill="#888" fontSize="10" fontFamily="monospace" fontWeight="bold">JR日豊本線 (JR NIPPO MAIN LINE)</text>

                  {/* JR Unoshima Station (宇島駅) at the top center-left */}
                  <g>
                    <rect x="250" y="285" width="190" height="40" rx="6" fill="#1a1a1a" stroke="#ef4444" strokeWidth="2" />
                    <rect x="250" y="285" width="190" height="14" rx="4" fill="#dc2626" />
                    <text x="345" y="296" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">STATION</text>
                    <text x="345" y="316" fill="#fff" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">JR 宇島駅 (Unoshima)</text>
                    <circle cx="430" cy="310" r="4" fill="#ef4444" />
                  </g>

                  {/* Route 113 / Route 222 near the station */}
                  <path d="M-50,345 L850,345" stroke="#181818" strokeWidth="16" />
                  <path d="M-50,345 L850,345" stroke="#222" strokeWidth="6" />
                  <text x="75" y="360" fill="#777" fontSize="9" fontFamily="sans-serif">県道113号線</text>

                  {/* Route 103 crossing in the middle */}
                  <path d="M-50,460 L850,460" stroke="#181818" strokeWidth="16" />
                  <path d="M-50,460 L850,460" stroke="#222" strokeWidth="6" />
                  <text x="120" y="450" fill="#777" fontSize="9" fontFamily="sans-serif">県道103号線</text>

                  {/* Main North-South road (Route 32 / 千束通り) */}
                  <path d="M470,310 L470,850" stroke="#1c1c1c" strokeWidth="28" />
                  <path d="M470,310 L470,850" stroke="#262626" strokeWidth="16" />
                  
                  {/* Route 32 Shield/Badge */}
                  <g>
                    <path d="M470,395 L482,400 L482,412 L470,420 L458,412 L458,400 Z" fill="#1d3557" stroke="#457b9d" strokeWidth="1" />
                    <text x="470" y="410" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">32</text>
                  </g>
                  <text x="445" y="420" fill="#888" fontSize="9" textAnchor="end" fontFamily="sans-serif">県道32号線</text>

                  {/* Route 10 Diagonal Highway (Fukuoka Highway) at the bottom */}
                  <path d="M-50,750 L850,820" stroke="#1c1c1c" strokeWidth="48" strokeLinecap="square" />
                  <path d="M-50,750 L850,820" stroke="#2a2a2a" strokeWidth="32" strokeLinecap="square" />
                  <path d="M-50,750 L850,820" stroke="#c18e38" strokeWidth="2" strokeDasharray="12 12" />
                  <text x="60" y="730" fill="#c18e38" fontSize="12" fontFamily="monospace" fontWeight="bold" transform="rotate(4.5, 60, 730)">国道10号線 (ROUTE 10)</text>
                  <text x="120" y="795" fill="#999" fontSize="9" fontFamily="sans-serif" transform="rotate(4.5, 120, 795)">← 至 苅田・行橋 To Yukuhashi</text>
                  <text x="760" y="788" fill="#999" fontSize="9" fontFamily="sans-serif" textAnchor="end" transform="rotate(4.5, 760, 788)">To Nakatsu 至 豊前・中津 →</text>

                  {/* Landmark: Udon Restaurant 豊前屋 官べえ (on south side of Route 10) */}
                  <g>
                    <rect x="660" y="845" width="125" height="50" rx="6" fill="#1a1210" stroke="#c18e38" strokeWidth="1" />
                    <text x="722" y="865" fill="#d5a86a" fontSize="11" fontWeight="bold" textAnchor="middle">豊前屋 官べえ</text>
                    <text x="722" y="880" fill="#999" fontSize="8" textAnchor="middle">うどん店</text>
                  </g>

                  {/* Landmark: Family Mart */}
                  <g>
                    <rect x="495" y="380" width="140" height="60" rx="8" fill="#112214" stroke="#15803d" strokeWidth="1" />
                    <rect x="495" y="380" width="140" height="18" rx="4" fill="#15803d" />
                    <text x="565" y="392" fill="#fff" fontSize="9" fontWeight="black" textAnchor="middle" letterSpacing="0.5">FAMILY MART</text>
                    <text x="565" y="412" fill="#fff" fontSize="10" fontWeight="bold" textAnchor="middle">ファミリーマート</text>
                    <text x="565" y="427" fill="#9fdfb0" fontSize="8" textAnchor="middle">豊前市役所前店</text>
                  </g>

                  {/* Landmark: 豊前市役所 */}
                  <g>
                    <rect x="495" y="500" width="140" height="50" rx="6" fill="#181818" stroke="#444" strokeWidth="1" />
                    <text x="565" y="520" fill="#ccc" fontSize="10" textAnchor="middle">豊前市役所</text>
                    <text x="565" y="535" fill="#999" fontSize="8" textAnchor="middle">BUZEN CITY HALL</text>
                  </g>

                  {/* Landmark: Lawson (ローソン 豊前千束店) on the south side of Route 10 & Route 32 */}
                  <g>
                    <rect x="510" y="830" width="140" height="60" rx="8" fill="#121d30" stroke="#2563eb" strokeWidth="1.5" />
                    <rect x="510" y="830" width="140" height="15" rx="4" fill="#2563eb" />
                    <text x="580" y="841" fill="#fff" fontSize="9" fontWeight="black" textAnchor="middle" letterSpacing="0.5">LAWSON</text>
                    <text x="580" y="859" fill="#93c5fd" fontSize="10" fontWeight="bold" textAnchor="middle">ローソン 豊前千束店</text>
                    <text x="580" y="874" fill="#60a5fa" fontSize="8" textAnchor="middle">（交差点角）</text>
                  </g>

                  {/* Landmark: Senzoku Post Office (千束郵便局) next to the Barber */}
                  <g>
                    <rect x="230" y="570" width="140" height="60" rx="8" fill="#221515" stroke="#ef4444" strokeWidth="1" />
                    <rect x="230" y="570" width="140" height="18" rx="4" fill="#ef4444" />
                    <text x="300" y="582" fill="#fff" fontSize="9" fontWeight="extrabold" textAnchor="middle">〒 千束郵便局</text>
                    <text x="300" y="604" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">千束郵便局</text>
                    <text x="300" y="619" fill="#f87171" fontSize="9" textAnchor="middle">（当店のすぐ隣）</text>
                  </g>

                  {/* OUR SHOP: 岡村理容美容館 next to the Post Office */}
                  <g className="cursor-pointer" onClick={handleMapClick}>
                    <rect x="185" y="640" width="210" height="70" rx="10" fill="#1e1a12" stroke="#c18e38" strokeWidth="1.5" />
                    <rect x="185" y="640" width="210" height="18" rx="6" fill="#c18e38" />
                    <text x="290" y="652" fill="#131313" fontSize="10" fontWeight="extrabold" textAnchor="middle">岡村理容美容館</text>
                    <text x="290" y="674" fill="#fbf7ee" fontSize="12" fontWeight="bold" textAnchor="middle">Okamura Barbers</text>
                    <text x="290" y="694" fill="#d4af37" fontSize="10" fontWeight="extrabold" textAnchor="middle">★ 当店はここです ★</text>
                  </g>

                  {/* HAIR SALON IWASAKI */}
                  <g>
                    <rect x="280" y="715" width="130" height="30" rx="4" fill="#151515" stroke="#444" strokeWidth="1" />
                    <text x="345" y="734" fill="#999" fontSize="9" textAnchor="middle">HAIR SALON IWASAKI</text>
                  </g>

                  {/* Floating Address Header at the very top */}
                  <g className="cursor-pointer" onClick={handleMapClick}>
                    <rect x="330" y="150" width="310" height="60" rx="12" fill="#181818" stroke="#c18e38" strokeWidth="1" opacity="0.95" />
                    {/* Circle arrow */}
                    <circle cx="365" cy="180" r="16" fill="rgba(193,142,56,0.15)" stroke="#c18e38" strokeWidth="1" />
                    <path d="M361,184 L369,176 M369,176 L364,176 M369,176 L369,181" stroke="#c18e38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Text */}
                    <text x="395" y="174" fill="#fff" fontSize="13" fontWeight="bold">岡村理容美容館</text>
                    <text x="395" y="193" fill="#aaa" fontSize="10">〒828-0053 福岡県豊前市千束256</text>
                  </g>

                  {/* Compass Indicator */}
                  <g>
                    <circle cx="740" cy="290" r="22" fill="#161616" stroke="#2c2c2c" strokeWidth="1.5" />
                    <path d="M740,274 L745,290 L740,286 L735,290 Z" fill="#c18e38" />
                    <path d="M740,306 L745,290 L740,286 L735,290 Z" fill="#444" />
                    <text x="740" y="267" fill="#c18e38" fontSize="10" textAnchor="middle" fontWeight="extrabold" fontFamily="sans-serif">N</text>
                  </g>

                  {/* Okamura Barbers Location Highlight Pin - Animated Retro Barber Pole on Map */}
                  <g className="cursor-pointer" onClick={handleMapClick}>
                    {/* Ring aura pulse */}
                    <circle cx="415" cy="675" r="22" fill="rgba(193,142,56,0.25)" className="animate-pulse" />
                    <circle cx="415" cy="675" r="6" fill="#c18e38" />

                    {/* Foreign Object containing the Miniature Animated Barber Pole */}
                    <foreignObject x="395" y="605" width="40" height="95" className="overflow-visible">
                      <div 
                        className="relative w-7 h-20 mx-auto bg-amber-50 border-2 border-gold-800 rounded-full overflow-hidden shadow-xl flex flex-col justify-between cursor-pointer group hover:scale-110 transition-transform duration-300"
                        title="岡村理容美容館"
                      >
                        {/* Spinning barber pole stripes */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                          <div 
                            className="w-full h-[200%] bg-amber-50"
                            style={{
                              backgroundImage: `repeating-linear-gradient(45deg, #cc2a2a, #cc2a2a 8px, #fbf7ee 8px, #fbf7ee 16px, #2a52be 16px, #2a52be 24px, #fbf7ee 24px, #fbf7ee 32px)`,
                              animation: 'shimmypole 3s infinite linear'
                            }}
                          />
                        </div>
                        {/* Antique brass/gold collars */}
                        <div className="h-2 w-full bg-gradient-to-r from-gold-800 via-gold-400 to-gold-900 z-10 border-b border-gold-950 shrink-0" />
                        <div className="h-2 w-full bg-gradient-to-r from-gold-800 via-gold-400 to-gold-900 z-10 border-t border-gold-950 shrink-0" />
                        {/* Chrome/gold dome caps */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-b from-gold-300 to-gold-700 border border-gold-900 shadow-md z-20" />
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-t from-gold-300 to-gold-700 border border-gold-900 shadow-md z-20" />
                      </div>
                    </foreignObject>
                  </g>

                  {/* Smaller animated pulsing dot moving from Station to Okamura along Route 32, turning off to Okamura Barbers */}
                  <motion.circle
                    cx={430}
                    cy={310}
                    r={5}
                    fill="#d4af37"
                    stroke="#fff"
                    strokeWidth={1.5}
                    animate={{
                      cx: [430, 430, 470, 470, 415, 415],
                      cy: [310, 310, 310, 675, 675, 675],
                      opacity: [0, 1, 1, 1, 1, 0]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.1, 0.3, 0.7, 0.8, 1.0]
                    }}
                  />

                  {/* Access Info Overlay Card inside the SVG (Moved to Bottom Left side as requested) */}
                  <g>
                    <rect x="80" y="830" width="280" height="135" rx="12" fill="#111" stroke="#333" strokeWidth="1" opacity="0.9" />
                    <text x="105" y="860" fill="#fff" fontSize="13" fontWeight="bold">📍 周辺からのアクセス：</text>
                    <text x="105" y="885" fill="#aaa" fontSize="11">• JR宇島駅から徒歩約30分</text>
                    <text x="105" y="910" fill="#aaa" fontSize="11">• 豊前市役所から北に車で1分</text>
                    <text x="105" y="935" fill="#aaa" fontSize="11">• 東九州自動車道 豊前ICから車で8分</text>
                  </g>
                </svg>
              </div>

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
