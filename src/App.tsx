/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, Award, Clock, Star, Instagram, Facebook, ChevronDown, ChevronUp, 
  Sparkles, CheckCircle2, ShieldAlert, Heart, Shield, CalendarCheck, 
  ArrowUpRight, Users, Compass, HelpCircle, Phone, ArrowDown, MapPin, Navigation,
  ExternalLink
} from 'lucide-react';

// Google Maps Place URL for オシャレヘアーオカムラ
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/%E3%82%AA%E3%82%B7%E3%83%A3%E3%83%AC%E3%83%98%E3%82%A2%E3%83%BC%E3%82%AA%E3%82%AB%E3%83%A0%E3%83%A9/@33.6021594,131.1268357,17z/data=!4m18!1m9!3m8!1s0x3543facecf444a01:0x581b0456e84edfae!2z44Kq44K344Oj44Os44OY44Ki44O844Kq44Kr44Og44Op!8m2!3d33.6021079!4d131.1266645!9m1!1b1!16s%2Fg%2F1vfp5_rk!3m7!1s0x3543facecf444a01:0x581b0456e84edfae!8m2!3d33.6021079!4d131.1266645!9m1!1b1!16s%2Fg%2F1vfp5_rk?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D";

// Type Imports
import { Service, TimelineEvent, Review, FaqItem } from './types';

// Component Imports
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import ServicesSection from './components/ServicesSection';
import StorySection from './components/StorySection';
import CouponSection from './components/CouponSection';
import AccessSection from './components/AccessSection';

// Image Imports (Vite handles base path automatically for imported assets)
import modelFadeImg from './assets/images/model_fade_1783583114507.jpg';
import kidsCutImg from './assets/images/kids_student_haircut_1783608030948.jpg';
import modelPermImg from './assets/images/model_perm_1783583125432.jpg';
import vintageToolsImg from './assets/images/vintage_tools_1783583095952.jpg';
import vintageStorefrontImg from './assets/images/vintage_storefront_1950s_1784452556901.jpg';
import okamuraExteriorImg from './assets/images/Okamura-exterior.jpg';
import okamuraInteriorImg from './assets/images/Okamura-interior.jpg';
import heroBarberCutImg from './assets/images/hero_barber_cut_1783583051614-new01.jpg';
import okamuraLogoImg from './assets/images/Okamura-logo02.svg';
import okamura10Img from './assets/images/Okamura-10.jpg';
import okamuraInsta01Img from './assets/images/Okamura-Insta01.jpg';
import okamuraInsta02Img from './assets/images/Okamura-Insta02.jpg';
import okamuraInsta03Img from './assets/images/Okamura-Insta03.jpg';
import okamuraInsta04Img from './assets/images/Okamura-Insta04.jpg';

// Static Data Definitions
const SERVICES: Service[] = [
  {
    id: 'haircut',
    name: 'スタンダードカットコース',
    nameEn: 'Standard Haircut Course',
    price: 3660,
    duration: 45,
    description: '三世代にわたり磨かれた岡村伝統のカット。シャンプー、丁寧なブロー、襟剃り、さらには心地よい眉カットまでがすべて含まれた基本コースです。',
    image: modelFadeImg,
    isPopular: true,
  },
  {
    id: 'kids',
    name: 'キッズ＆学生カット',
    nameEn: 'Student & Youth Cut',
    price: 2500,
    duration: 30,
    description: '幼児から高校生までを対象としたカット。動いてしまう小さなお子様でも優しくあやしながらスピーディに仕上げ、校則に合わせた爽やかな髪型を提供します。',
    image: kidsCutImg,
  },
  {
    id: 'fade',
    name: 'プレミアムフェードカット',
    nameEn: 'Premium Skin Fade Cut',
    price: 4500,
    duration: 50,
    description: 'ミリ単位で色彩を調整する高難度フェードスタイル。伝統的なカミソリによる輪郭調整と、現代のバーバースタイルの融合をご体感ください。',
    image: modelPermImg,
  },
  {
    id: 'beard',
    name: '髭デザイン＆トリム',
    nameEn: 'Beard Design & Shave',
    price: 2000,
    duration: 20,
    description: 'お客様の顔立ち、顎の骨格に最適な髭のデザインをご提案します。長さを均一にし、カミソリで境界線をきれいに整えて大人の品格を引き出します。',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
  },
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1950,
    title: '初代・岡村一郎が豊前市千束に「岡村理容店」を創業',
    description: '昭和25年、豊前市で最初の第一歩を踏み出しました。当時としては珍しい最先端のカットハサミを導入し、街で親しまれる理容店として愛され始めました。',
    badge: '創業 (1950)',
    image: vintageToolsImg,
  },
  {
    year: 1965,
    title: '理容椅子増台と、伝統の「和式シェービング」の確立',
    description: '宇島港や工場で働く方々のためにサービスを拡大。肌にやさしい深剃り「マイルド直刃剃り」と自家製石鹸ラザーがこの頃誕生しました。',
    badge: '発展期',
    image: vintageStorefrontImg,
  },
  {
    year: 1985,
    title: '二代目・岡村二郎が継承。モダンバーバー要素の追加',
    description: '初代の技を受け継いだ二代目が就任。伝統を守りつつ流行スタイルやパーマ、カラーを取り入れ、幅広い世代が通える店へと進化しました。',
    badge: '二代目継承',
    image: okamuraExteriorImg,
  },
  {
    year: 2025,
    title: '店舗をリニューアル。レトロモダンな空間へ昇華',
    description: '店舗をリニューアル。伝統技術に現代のフェードカットやスカルプスパを融合し、豊前の地域に寄り添い進化し続けています。',
    badge: '75周年・リニュアル'
  }
];

const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'たみやん 様',
    rating: 5,
    years: 'Google Review',
    reviewText: '初めての所で心配でしたが、行って良かったです。今までの所はコスパがいいから行ってたけど、どっちが客か分からないような店員だったので変えて正解です。これから通おうと思います。',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 'rev-2',
    name: 'ばりしばり 様',
    rating: 5,
    years: 'Google Review',
    reviewText: `基本的に面白いし楽しい気分になれる床屋さん。
何がって？色々(笑)　元気にもなれます。`,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
  },
  {
    id: 'rev-3',
    name: '久元美広 様',
    rating: 5,
    years: 'Google Review',
    reviewText: '今日髪切とヒゲソリ気遣いが最高でした。',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=100&q=80',
  }
];

const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '予約をしなくても散髪できますか？',
    answer: '空きがある場合はご案内可能ですが、当店は「完全予約優先制」となっておりませんが、お待たせせずスムーズにご案内するため、事前にお電話（0979-82-5007）またはホームページ上の「ネット予約」をご活用いただくことをおすすめいたします。',
  },
  {
    id: 'faq-3',
    question: '駐車場はありますか？何台とめられますか？',
    answer: 'はい、店舗のすぐ横（隣接）に無料の専用駐車場を「4台分」完備しております。また、郵便局の反対側にある広めの駐車場にも駐車スペースがございますので、大きめのミニバンやセダンでも安心してお越しいただけます。',
  },
  {
    id: 'faq-5',
    question: '小さな子どもや、車椅子での利用は可能ですか？',
    answer: 'はい、喜んでお迎えいたします。小さなお子様には専用の補助シートを用意しており、安心してカットを受けられます。また、店内は入り口にスロープを設けており、車椅子のまま理容椅子の横までご案内が可能です。サポートが必要な際はお気軽にスタッフにお申し付けください。',
  },
  {
    id: 'faq-6',
    question: 'お支払いはキャッシュレスに対応していますか？',
    answer: 'はい、現金に加えて、各種クレジットカード（Visa, Mastercard, JCB, AMEX）、PayPay、各種電子マネー（交通系IC、iDなど）に対応しております。お会計時にお気軽にご指定ください。',
  }
];

const INSTAGRAM_POSTS = [
  { url: okamuraInteriorImg, caption: '#OkamuraInterior #BarberShop' },
  { url: okamura10Img, caption: '#OkamuraBarber #Craftsmanship' },
  { url: okamuraInsta01Img, caption: '#OkamuraStyle #BarberLife' },
  { url: okamuraInsta02Img, caption: '#ClassicCut #Grooming' },
  { url: okamuraInsta03Img, caption: '#TraditionalBarber #Buzen' },
  { url: okamuraInsta04Img, caption: '#OkamuraBarbers #FreshStyle' },
];

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  
  // Accordion active state for FAQ
  const [faqActiveIndex, setFaqActiveIndex] = useState<number | null>(null);

  const openBookingWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setCouponApplied(false);
    setIsBookingOpen(true);
  };

  const openBookingWithCoupon = () => {
    setSelectedServiceId('');
    setCouponApplied(true);
    setIsBookingOpen(true);
  };

  const toggleFaq = (index: number) => {
    if (faqActiveIndex === index) {
      setFaqActiveIndex(null);
    } else {
      setFaqActiveIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-gold-500 selection:text-neutral-950 font-sans">
      
      {/* Sticky Header */}
      <Navbar onOpenBooking={() => openBookingWithService('')} />

      {/* 1. Hero Section */}
      <section id="home" className="pt-28 md:pt-36 pb-20 md:pb-28 relative overflow-hidden flex items-center min-h-[90vh]">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center" id="hero-layout">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left max-w-3xl">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest text-gold-400"
              >
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>Since 1950 — Buzen, Fukuoka</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-[2.2rem] lg:text-[2.65rem] xl:text-[3.25rem] font-serif font-bold text-white leading-tight tracking-tighter"
                id="hero-headline"
              >
                <span className="inline-block whitespace-nowrap">豊前市で、髪を切るなら。</span><br />
                <span className="inline-block whitespace-nowrap">昭和から地域に寄り添ってきた</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-400 inline-block whitespace-nowrap">オシャレヘアー岡村</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm md:text-base text-neutral-400 leading-relaxed font-sans max-w-2xl"
              >
                福岡県豊前市千束。昭和25年の創業以来、脈々と受け継がれてきた「手仕事のぬくもり」と「職人のこだわり」。
                三代目が紡ぐ洗練されたフェードスタイルと伝統のカミソリ技で、あなた史上最高の清潔感とリラックスした時間をお約束します。
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
              >
                <a
                  href="tel:0979-82-5007"
                  className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-950 font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 shadow-xl shadow-gold-500/10 border-t border-white/10 uppercase tracking-widest text-center cursor-pointer flex items-center justify-center gap-2 group"
                  id="hero-phone-btn"
                >
                  <Phone className="w-4 h-4 text-neutral-950 group-hover:scale-110 transition-transform" />
                  <span>電話で予約する</span>
                </a>

                <a
                  href="#access"
                  className="bg-neutral-900 hover:bg-neutral-850 text-gold-300 hover:text-gold-200 border border-neutral-800 hover:border-gold-400/40 text-center py-4 px-8 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 group"
                  id="hero-access-btn"
                >
                  <Navigation className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                  <span>アクセスを見る</span>
                </a>
              </motion.div>

              {/* Business hours summary bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="pt-6 border-t border-neutral-900/60 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-neutral-500 font-medium"
              >
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gold-400" />
                  <span>営業時間: 08:30 - 19:00 (最終受付 18:00)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                  <span>定休日: なし (ほぼ年中無休)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400" />
                  <span>福岡県豊前市千束256 (駐車場4台完備、別途駐車場あり)</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold-400" />
                  <span>0979-82-5007</span>
                </span>
              </motion.div>

            </div>

            {/* Hero Right Media */}
            <div className="lg:col-span-5 h-full relative" id="hero-media-wrapper">
              
              {/* Back decoration: Golden frame border offset */}
              <div className="absolute -inset-2 border border-gold-400/10 rounded-2xl -translate-x-2 translate-y-2 pointer-events-none" />
              
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative aspect-3/4 md:aspect-4/5 lg:aspect-3/4 overflow-hidden rounded-2xl border border-neutral-800/80 shadow-2xl bg-neutral-900"
              >
                <img
                  src={heroBarberCutImg}
                  alt="Okamura Barbers Traditional Craftsmanship"
                  className="w-full h-full object-cover brightness-[0.85] scale-[1.35] sm:scale-[1.4] origin-[50%_30%] hover:scale-[1.45] transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Vintage vignette shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                {/* Overlaid Floating Label */}
                <div className="absolute bottom-6 left-6 right-6 bg-neutral-950/80 border border-neutral-850 backdrop-blur-md rounded-xl p-4 flex items-center justify-between shadow-xl">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest">ESTABLISHED 1950</p>
                    <h3 className="font-serif font-bold text-white text-sm sm:text-base">手仕事のあたたかみ、今も。</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[10px] text-neutral-500 font-semibold uppercase font-sans">Three Generations</p>
                    <p className="text-xs text-gold-300 font-medium mt-0.5">三代続く技術継承</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Bar (Social Proof Statistics) */}
      <section className="py-12 bg-neutral-950 border-t border-b border-neutral-900 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center" id="trust-metrics">
            
            <div className="space-y-1">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-gold-400 tracking-tight">75+</span>
              <span className="block text-[11px] md:text-xs text-neutral-400 font-bold tracking-widest uppercase">
                豊前で親しまれる歳月
              </span>
            </div>

            <div className="space-y-1 border-l border-neutral-900 md:border-neutral-850/80">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-gold-400 tracking-tight">1950</span>
              <span className="block text-[11px] md:text-xs text-neutral-400 font-bold tracking-widest uppercase">
                昭和25年 創業
              </span>
            </div>

            <div className="space-y-1 border-l border-neutral-900 md:border-neutral-850/80">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-gold-400 tracking-tight">3代</span>
              <span className="block text-[11px] md:text-xs text-neutral-400 font-bold tracking-widest uppercase">
                受け継がれる極上技術
              </span>
            </div>

            <div className="space-y-1 border-l border-neutral-900 md:border-neutral-850/80">
              <span className="block text-3xl md:text-4xl font-serif font-bold text-gold-400 tracking-tight">100%</span>
              <span className="block text-[11px] md:text-xs text-neutral-400 font-bold tracking-widest uppercase">
                地域密着・家族運営
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Services Grid Section */}
      <ServicesSection
        services={SERVICES}
        reviews={REVIEWS}
        onSelectService={openBookingWithService}
      />

      {/* 4. Why Choose Us (Value Proposition & Interior photo) */}
      <section id="about" className="py-20 md:py-28 bg-neutral-900/40 relative overflow-hidden font-sans">
        
        {/* Decorative background circle */}
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center" id="why-choose-layout">
            
            {/* Left: Why Choose Us Headline & list */}
            <div className="lg:col-span-7 space-y-6 md:space-y-8">
              
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 text-gold-400 bg-neutral-950 border border-neutral-850 px-3 py-1 rounded-full">
                  <Award className="w-3.5 h-3.5 text-gold-400" />
                  <span className="font-serif text-xs uppercase tracking-widest font-semibold">Why Choose Us</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                  「昔ながらの安心感。今どきのスタイル。」
                </h2>
                <div className="h-0.5 w-16 bg-gradient-to-r from-gold-500 to-gold-700 mt-4" />
              </div>

              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                オカムラ理容館は、アットホームな昭和の懐かしさを残しつつ、洗練された現代のトレンドを取り入れた不思議な居心地の良さがあるお店です。
                「散髪屋は緊張して話しづらい…」「おしゃれな美容室は気後れしてしまう…」といったお悩みを解決する、親しみやすく丁寧な理容体験を大切にしています。
              </p>

              {/* Feature Bullet Checklist Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                
                <div className="p-4 bg-neutral-950/40 border border-neutral-850 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-200 text-sm">シニア・お身体の不自由な方の<span className="text-gold-400 font-bold">無料送迎</span></h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">ご自身でのご来店が難しいシニアのお客様やお身体の不自由なお客様のために、安心の無料送迎サービスを行っております。お気軽にご相談ください。</p>
                  </div>
                </div>

                <div className="p-4 bg-neutral-950/40 border border-neutral-850 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-200 text-sm">二代目・三代目の親子営業</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">1950年創業。現在は二代目と三代目が力を合わせて、地域のみなさまをお出迎えしています。</p>
                  </div>
                </div>

                <div className="p-4 bg-neutral-950/40 border border-neutral-850 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-200 text-sm">三代目の最旬フェード</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">都内一流メンズサロンでの経験を活かし、流行のフェードカットやニュアンスパーマを豊前で提供。</p>
                  </div>
                </div>

                <div className="p-4 bg-neutral-950/40 border border-neutral-850 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-neutral-200 text-sm">英語フレンドリー (English Available)</h4>
                    <p className="text-xs text-neutral-400 mt-1 leading-relaxed">三代目は英語対応も可能。近隣の英語指導助手(ALT)や外国人の方々も数多くご利用頂いています。</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right: Traditional Japanese Shop Interior (Generated Image) */}
            <div className="lg:col-span-5 relative" id="why-choose-media">
              
              {/* Back decoration: Golden frame border offset */}
              <div className="absolute -inset-2 border border-gold-400/10 rounded-2xl translate-x-2 -translate-y-2 pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl aspect-4/3 bg-neutral-950"
              >
                <img
                  src={okamuraInteriorImg}
                  alt="Okamura Barbers Retro Shop Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.75] hover:brightness-90"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Visual Label Tag */}
                <div className="absolute bottom-4 left-4 right-4 bg-neutral-950/80 border border-neutral-850 backdrop-blur-md rounded-xl p-3 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-white">店内の雰囲気</h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">昭和レトロな青い革張り理容椅子と心地よい温かな空間</p>
                  </div>
                  <span className="font-mono text-gold-400 font-bold uppercase tracking-widest text-[9px] bg-gold-400/10 border border-gold-400/30 px-2 py-0.5 rounded">Our Salon</span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Story Section (Since 1950) */}
      <StorySection timelineEvents={TIMELINE_EVENTS} />

      {/* 6. Highlighted Coupon Section */}
      <CouponSection onBookWithCoupon={openBookingWithCoupon} />

      {/* 7. Instagram Gallery Grid */}
      <section className="py-20 md:py-28 bg-neutral-900/20 relative overflow-hidden font-sans">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 md:mb-16">
            <div className="space-y-3 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 text-gold-400 bg-neutral-950 border border-neutral-850 px-3 py-1 rounded-full">
                <Instagram className="w-3.5 h-3.5" />
                <span className="font-serif text-xs uppercase tracking-widest font-semibold">Instagram Gallery</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
                インスタグラムで最旬スタイルを公開中
              </h2>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                三代目が手がけるリアルなフェードスタイル、日々の店舗の様子、昭和の懐かしい道具たち。
                アカウント（<a href="https://www.instagram.com/osyare_okamura/" target="_blank" rel="noopener noreferrer" className="text-gold-300 hover:underline">@osyare_okamura</a>）をぜひフォローしてください。
              </p>
            </div>
            
            <a
              href="https://www.instagram.com/osyare_okamura/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-neutral-900 hover:bg-neutral-850 text-neutral-200 border border-neutral-800 hover:border-neutral-700 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2 shrink-0"
            >
              <Instagram className="w-4 h-4 text-gold-400" />
              <span>Instagram を見る</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
            </a>
          </div>

          {/* Instagram Photos Grid (using realistic high quality unsplash links) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4" id="instagram-grid">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <motion.a
                key={idx}
                href="https://www.instagram.com/osyare_okamura/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="aspect-square relative overflow-hidden rounded-xl bg-neutral-950 group border border-neutral-850/80 block shadow-md"
              >
                <img
                  src={post.url}
                  alt={`Instagram Post ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-[0.8] group-hover:brightness-95"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white scale-90 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </motion.a>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Interactive FAQ Accordion */}
      <section className="py-20 md:py-28 bg-neutral-950 border-t border-neutral-900 overflow-hidden font-sans">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-400 mb-3 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="font-serif text-xs uppercase tracking-widest font-semibold">Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-white tracking-tight">
              よくあるご質問（FAQ）
            </h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto mt-4 mb-3" />
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
              お客様からよくいただくご質問とそのお答えをまとめました。
              こちらに記載のないご不明点がございましたら、お気軽にお電話にてお問い合わせください。
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4" id="faq-accordion-list">
            {FAQS.map((faq, index) => {
              const isActive = faqActiveIndex === index;
              return (
                <div
                  key={faq.id}
                  className="bg-neutral-900 border border-neutral-850 hover:border-neutral-800 rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-5 sm:p-6 flex justify-between items-center gap-4 cursor-pointer"
                    aria-expanded={isActive}
                  >
                    <span className="font-serif text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-gold-300">
                      {faq.question}
                    </span>
                    <span className="text-gold-400 shrink-0 bg-neutral-950 p-1.5 rounded-full border border-neutral-850">
                      {isActive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 pt-0 border-t border-neutral-950/50 text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. Access Section */}
      <AccessSection exteriorImage={okamuraExteriorImg} />

      {/* 11. Footer Section */}
      <footer className="bg-neutral-950 border-t border-neutral-900/60 py-16 md:py-20 relative overflow-hidden font-sans text-neutral-400 text-xs md:text-sm">
        
        {/* Decorative corner borders inside footer */}
        <div className="absolute top-0 left-0 w-1/3 h-[1px] bg-gradient-to-r from-gold-500/10 to-transparent pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 items-start mb-12 md:mb-16" id="footer-layout">
            
            {/* Logo and Contact Details Column */}
            <div className="md:col-span-4 space-y-6">
              <a href="#home" className="inline-block" aria-label="Okamura Barbers home">
                {/* Visual Custom Logo with white color text */}
                <div className="flex items-center select-none" id="footer-logo">
                  <img
                    src={okamuraLogoImg}
                    alt="Okamura Barbers"
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </a>
              
              <p className="text-neutral-500 leading-relaxed text-xs">
                昭和25年創業。福岡県豊前市千束で三世代にわたり地域のみなさまの髪を整え、心を癒し続けてきた老舗理容室です。
              </p>

              <div className="space-y-3">
                <p className="flex items-center gap-2 text-neutral-300">
                  <Phone className="w-4 h-4 text-gold-400" />
                  <a href="tel:0979-82-5007" className="font-serif font-bold text-base hover:text-gold-300">電話予約</a>
                </p>
                <p className="text-xs text-neutral-500">
                  営業時間: 08:30 〜 19:00 | 定休日: なし
                </p>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-4 md:col-start-6 space-y-4">
              <h4 className="font-serif font-bold text-white uppercase tracking-wider text-xs border-b border-neutral-900 pb-2">
                メニューリンク
              </h4>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                <li><a href="#home" className="hover:text-gold-300 transition-colors">ホーム</a></li>
                <li><a href="#about" className="hover:text-gold-300 transition-colors">店舗紹介</a></li>
                <li><a href="#services" className="hover:text-gold-300 transition-colors">施術メニュー</a></li>
                <li><a href="#history" className="hover:text-gold-300 transition-colors">75年の歩み</a></li>
                <li><a href="#coupon" className="hover:text-gold-300 transition-colors">限定クーポン</a></li>
                <li><a href="#access" className="hover:text-gold-300 transition-colors">アクセス</a></li>
              </ul>
            </div>

            {/* Social & Reservation info Column */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-serif font-bold text-white uppercase tracking-wider text-xs border-b border-neutral-900 pb-2">
                ソーシャルメディア
              </h4>
              <p className="text-neutral-500 text-xs leading-relaxed">
                インスタグラムやフェイスブックでも情報発信しています。お気軽にフォローしてください。
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/osyare_okamura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-850 flex items-center justify-center text-neutral-400 hover:text-gold-300 hover:border-gold-400/30 transition-all duration-200"
                  aria-label="Instagram Page"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                
                {/* Facebook Page Link */}
                <a
                  href="https://www.facebook.com/profile.php?id=100064740484712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-850 flex items-center justify-center text-neutral-400 hover:text-gold-300 hover:border-gold-400/30 transition-all duration-200"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Sub Footer Copyright */}
          <div className="pt-8 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs text-neutral-500 font-medium">
            <p className="font-mono">
              &copy; {new Date().getFullYear()} Okamura Barbers. All Rights Reserved.
            </p>
            <p className="flex items-center gap-1">
              <span>EST. 1950 in Buzen, Fukuoka</span>
              <Scissors className="w-3.5 h-3.5 text-gold-400" />
              <span>Three Generations of Craftsmanship</span>
            </p>
          </div>

        </div>
      </footer>

      {/* 12. Responsive Sticky Footer CTA for Mobile reservation */}
      <div className="fixed bottom-0 left-0 w-full z-30 p-4 bg-gradient-to-t from-neutral-950 via-neutral-950/95 to-transparent border-t border-white/5 md:hidden">
        <button
          onClick={() => openBookingWithService('')}
          className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-neutral-950 font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-widest shadow-xl flex items-center justify-center gap-2"
          id="sticky-mobile-booking-btn"
        >
          <CalendarCheck className="w-4 h-4 text-neutral-950" />
          <span>今すぐネットでご来店予約</span>
        </button>
      </div>

      {/* 13. Interactive Booking Modal Integration */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedServiceId={selectedServiceId}
        couponAppliedByDefault={couponApplied}
        services={SERVICES}
      />

    </div>
  );
}
