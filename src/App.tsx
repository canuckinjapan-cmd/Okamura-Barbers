/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, Award, Clock, Star, Instagram, Facebook, ChevronDown, ChevronUp, 
  Sparkles, CheckCircle2, ShieldAlert, Heart, Shield, CalendarCheck, 
  Users, Compass, HelpCircle, Phone, ArrowDown, MapPin,
  ExternalLink, Info, Settings2
} from 'lucide-react';

// Google Maps Place URL for 岡村理容美容館
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/%E3%82%AA%E3%82%B7%E3%83%A3%E3%83%AC%E3%83%98%E3%82%A2%E3%83%BC%E3%82%AA%E3%82%AB%E3%83%A0%E3%83%A9/@33.6021594,131.1268357,17z/data=!4m18!1m9!3m8!1s0x3543facecf444a01:0x581b0456e84edfae!2z44Kq44K344Oj44Os44OY44Ki44O844Kq44Kr44Og44Op!8m2!3d33.6021079!4d131.1266645!9m1!1b1!16s%2Fg%2F1vfp5_rk!3m7!1s0x3543facecf444a01:0x581b0456e84edfae!8m2!3d33.6021079!4d131.1266645!9m1!1b1!16s%2Fg%2F1vfp5_rk?entry=ttu&g_ep=EgoyMDI2MDcyMi4wIKXMDSoASAFQAw%3D%3D";

// Type Imports
import { Service, TimelineEvent, Review, FaqItem, ShopNotice } from './types';

// Component Imports
import Navbar from './components/Navbar';
import BookingModal from './components/BookingModal';
import ServicesSection from './components/ServicesSection';
import StorySection from './components/StorySection';
import CouponSection from './components/CouponSection';
import AccessSection from './components/AccessSection';
import NoticeCard from './components/NoticeCard';
import NoticeCmsModal, { DEFAULT_SHOP_NOTICE } from './components/NoticeCmsModal';

// Image Imports (Vite handles base path automatically for imported assets)
import modelFadeImg from './assets/images/model_fade_1783583114507.jpg';
import kidsCutImg from './assets/images/kids_student_haircut_1783608030948.jpg';
import modelPermImg from './assets/images/model_perm_1783583125432.jpg';
import vintageToolsImg from './assets/images/vintage_tools_1783583095952.jpg';
import vintageStorefrontImg from './assets/images/vintage_storefront_1950s_1784452556901.jpg';
import okamuraExteriorImg from './assets/images/Okamura-exterior.jpg';
import okamuraInteriorImg from './assets/images/Okamura-interior-crop.jpg';
import heroBarberCutImg from './assets/images/hero_barber_cut_1783583051614-new01a.jpg';
import okamuraLogoImg from './assets/images/Okamura-logo02.svg';

// Static Data Definitions
const SERVICES: Service[] = [
  {
    id: 'haircut',
    name: 'スタンダードカットコース',
    nameEn: 'Standard Haircut Course',
    price: 3660,
    duration: 45,
    description: '創業以来受け継がれてきた丁寧なカット。シャンプー、ブロー、襟剃り、眉カットまで一通りそろった基本のコースです。',
    image: modelFadeImg,
    isPopular: true,
  },
  {
    id: 'kids',
    name: 'キッズ＆学生カット',
    nameEn: 'Student & Youth Cut',
    price: 2500,
    duration: 30,
    description: '幼児から高校生までを対象としたカット。小さなお子様も安心していただけるよう優しく手早く仕上げ、校則に合わせた爽やかな髪型に整えます。',
    image: kidsCutImg,
  },
  {
    id: 'fade',
    name: 'プレミアムフェードカット',
    nameEn: 'Premium Skin Fade Cut',
    price: 4500,
    duration: 50,
    description: 'グラデーションの美しい刈り上げスタイル。際（きわ）の処理までカミソリできれいに整え、清潔感のある短髪に仕上げます。',
    image: modelPermImg,
  },
  {
    id: 'beard',
    name: '髭デザイン＆トリム',
    nameEn: 'Beard Design & Shave',
    price: 2000,
    duration: 20,
    description: '髭の長さを均等に整え、輪郭をカミソリでくっきりと剃り揃えます。毎朝のお手入れが楽になり、清潔感のある印象に整えます。',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
  },
];

const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: 1950,
    title: '初代・岡村一郎が豊前市千束に「岡村理容美容館」を創業',
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
    title: '二代目・岡村博澄が継承。モダンバーバー要素の追加',
    description: '初代の技を受け継いだ二代目が就任。伝統を守りつつ流行スタイルやパーマ、カラーを取り入れ、幅広い世代が通える店へと進化しました。',
    badge: '二代目継承',
    image: okamuraExteriorImg,
  },
  {
    year: 2021,
    title: '店舗をリニューアル。快適で清潔感のある空間へ',
    description: '店舗をリニューアル。長年の技術にフェードカットや頭皮ケアも取り入れ、地域に寄り添い続けています。',
    badge: '71周年・リニュアル'
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
    answer: '空きがあれば予約なしでもご案内できますが、予約のお客様を優先しております。待ち時間を少なくするため、事前にお電話またはネット予約をご利用ください。',
  },
  {
    id: 'faq-confirm-status',
    question: 'ネットで予約すると、すぐに来店確定になりますか？',
    answer: 'ネットからのご予約は仮のお申し込みとなります。内容確認のため、担当者より折り返しお電話またはメールにてご連絡し、正式に確定させていただきます。',
  },
  {
    id: 'faq-3',
    question: '駐車場はありますか？何台とめられますか？',
    answer: 'はい、店舗のすぐ隣（隣接）に無料の専用駐車場を「4台分」完備しております。また、郵便局の反対側にある広めの駐車場にも駐車スペースがございますので、大きめのミニバンやセダンでも安心してお越しいただけます。',
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

const NOTICE_STORAGE_KEY = 'okamura_shop_notice_v2';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  
  // Accordion active state for FAQ (first item expanded by default)
  const [faqActiveIndex, setFaqActiveIndex] = useState<number | null>(0);

  // Lifted shop notice state (drives NoticeCard & NoticeCmsModal)
  const [shopNotice, setShopNotice] = useState<ShopNotice>(DEFAULT_SHOP_NOTICE);
  const [isCmsOpen, setIsCmsOpen] = useState(false);

  // Load notice from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(NOTICE_STORAGE_KEY) || localStorage.getItem('okamura_shop_notice_v1');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.title) {
          if (parsed.periodText && parsed.periodText.includes('月曜')) {
            parsed.periodText = '';
          }
          setShopNotice(parsed);
        }
      }
    } catch (e) {
      console.warn('Could not read shop notice from localStorage', e);
    }
  }, []);

  const handleSaveNotice = (updatedNotice: ShopNotice) => {
    setShopNotice(updatedNotice);
    try {
      localStorage.setItem(NOTICE_STORAGE_KEY, JSON.stringify(updatedNotice));
    } catch (e) {
      console.warn('Could not save shop notice to localStorage', e);
    }
  };

  const handleResetNotice = () => {
    setShopNotice(DEFAULT_SHOP_NOTICE);
    try {
      localStorage.removeItem(NOTICE_STORAGE_KEY);
    } catch (e) {
      console.warn('Could not reset shop notice in localStorage', e);
    }
  };

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

  const scrollToAnchor = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const contentTarget = element.querySelector<HTMLElement>('.inline-flex, h2, h3, h4, .section-header') || (element as HTMLElement);
      const navHeader = document.getElementById('main-header');
      const navHeight = navHeader ? navHeader.offsetHeight : 64;
      const gap = 12;
      const elementRect = contentTarget.getBoundingClientRect();
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const targetTop = elementRect.top + currentScroll - navHeight - gap;

      window.scrollTo({
        top: Math.max(0, targetTop),
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-gold-500 selection:text-neutral-950 font-sans">
      
      {/* Sticky Header */}
      <Navbar onOpenBooking={() => openBookingWithService('')} />

      {/* 1. Hero Section */}
      <section id="home" className="pt-24 md:pt-32 md:landscape:pt-28 pb-12 sm:pb-16 md:pb-20 md:landscape:pb-16 relative overflow-hidden flex items-center min-h-[85vh] md:landscape:min-h-0">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold-500/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:landscape:grid-cols-12 lg:grid-cols-12 gap-8 md:landscape:gap-8 lg:gap-8 items-stretch" id="hero-layout">
            
            {/* Hero Left Content */}
            <div className="md:landscape:col-span-7 lg:col-span-7 space-y-6 md:space-y-8 md:landscape:space-y-6 lg:space-y-6 text-left max-w-3xl">
              
              {/* Notice & Business Hours Card with simple CMS */}
              <NoticeCard notice={shopNotice} />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-[2.2rem] md:landscape:text-[2rem] lg:text-[2.65rem] xl:text-[3.25rem] font-serif font-bold text-white leading-tight tracking-tighter"
                id="hero-headline"
              >
                <span className="inline-block whitespace-nowrap">豊前市で、髪を切るなら。</span><br />
                <span className="inline-block whitespace-nowrap">昭和から地域に寄り添ってきた</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-100 to-gold-400 inline-block whitespace-nowrap">岡村理容美容館</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs landscape:text-sm sm:text-sm md:text-base md:landscape:text-sm lg:text-base font-medium sm:font-normal landscape:font-normal text-neutral-300 leading-relaxed font-sans max-w-2xl"
              >
                福岡県豊前市千束にある理容本店です。1950年の創業以来、二代目・三代目が中心となり、男性・女性・お子様まで幅広く髪を整えてまいりました。月曜日も年中無休で営業中、当日の飛び込みご来店も大歓迎です。（隣には美容室、築城にも姉妹店の美容室がございます。）
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

                <button
                  type="button"
                  onClick={() => openBookingWithService('')}
                  className="bg-neutral-900 hover:bg-neutral-850 text-gold-300 hover:text-gold-200 border border-neutral-800 hover:border-gold-400/40 text-center py-4 px-8 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  id="hero-booking-btn"
                >
                  <CalendarCheck className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                  <span>予約する</span>
                </button>
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
            <div className="md:landscape:col-span-5 lg:col-span-5 relative w-full aspect-square md:landscape:aspect-auto lg:aspect-auto md:landscape:h-full lg:h-full min-h-0" id="hero-media-wrapper">
              
              {/* Back decoration: Golden frame border offset */}
              <div className="absolute -inset-2 border border-gold-400/10 rounded-2xl -translate-x-2 translate-y-2 pointer-events-none" />
              
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="w-full h-full relative md:landscape:absolute lg:absolute md:landscape:inset-0 lg:inset-0 overflow-hidden rounded-2xl border border-neutral-800/80 shadow-2xl bg-neutral-900"
              >
                <img
                  src={heroBarberCutImg}
                  alt="Okamura Barbers Traditional Craftsmanship"
                  className="w-full h-full object-cover object-center brightness-[0.85] hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                {/* Vintage vignette shade */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                {/* Overlaid Floating Label */}
                <div className="absolute bottom-3 sm:bottom-3.5 left-3 sm:left-3.5 right-3 sm:right-3.5 bg-neutral-950/80 border border-neutral-850 backdrop-blur-md rounded-xl p-2.5 sm:p-3 flex items-center justify-between gap-2 shadow-xl">
                  <div className="space-y-0.5 min-w-0">
                    <p className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-widest whitespace-nowrap">ESTABLISHED 1950</p>
                    <h3 className="font-serif font-bold text-white text-xs sm:text-sm md:landscape:text-xs lg:text-sm whitespace-nowrap">手仕事のあたたかみ、今も。</h3>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[10px] text-neutral-500 font-semibold uppercase font-sans whitespace-nowrap">Three Generations</p>
                    <p className="text-xs text-gold-300 font-medium mt-0.5 whitespace-nowrap">三代続く技術継承</p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. Services Grid Section */}
      <ServicesSection
        services={SERVICES}
        reviews={REVIEWS}
        onSelectService={openBookingWithService}
      />

      {/* 4. Why Choose Us (Value Proposition & Interior photo) */}
      <section id="about" className="py-20 md:py-28 bg-neutral-900/40 relative overflow-hidden font-sans scroll-mt-20">
        
        {/* Decorative background circle */}
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch" id="why-choose-layout">
            
            {/* Header: Full width on desktop */}
            <div className="lg:col-span-12 space-y-3 mb-2 lg:mb-4">
              <div className="inline-flex items-center gap-2 text-gold-400 bg-neutral-950 border border-neutral-850 px-3 py-1 rounded-full">
                <Award className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-serif text-xs uppercase tracking-widest font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight leading-tight w-full">
                「昔ながらの安心感。今どきのスタイル。」
              </h2>
              <div className="h-0.5 w-16 lg:w-full bg-gradient-to-r from-gold-500 via-gold-600/50 to-neutral-900 mt-4" />
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-4xl pt-1">
                1950年の創業以来、地域のみなさまに親しまれてきた理容店です。
                昔ながらの丁寧な理容技術を大切にしながら、フェードカットなど現代のスタイルにも対応しています。
              </p>
            </div>

            {/* Left: Feature Bullet Checklist Cards (2x2 grid) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 h-full">
              
              <div className="p-3 sm:py-3.5 sm:px-4 bg-neutral-950/40 border border-neutral-850 rounded-xl flex items-start gap-2.5 sm:gap-3 h-full">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-neutral-200 text-xs sm:text-sm leading-snug">シニア・お身体の不自由な方の<span className="text-gold-400 font-bold">無料送迎</span></h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 leading-relaxed">ご自身でのご来店が難しいシニアのお客様やお身体の不自由なお客様のために、安心の無料送迎サービスを行っております。お気軽にご相談ください。</p>
                </div>
              </div>

              <div className="p-3 sm:py-3.5 sm:px-4 bg-neutral-950/40 border border-neutral-850 rounded-xl flex items-start gap-2.5 sm:gap-3 h-full">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-neutral-200 text-xs sm:text-sm leading-snug">二代目・三代目の親子営業</h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 leading-relaxed">1950年創業。現在は二代目と三代目が力を合わせて、地域のみなさまをお出迎えしています。</p>
                </div>
              </div>

              <div className="p-3 sm:py-3.5 sm:px-4 bg-neutral-950/40 border border-neutral-850 rounded-xl flex items-start gap-2.5 sm:gap-3 h-full">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-neutral-200 text-xs sm:text-sm leading-snug">三代目が手がけるフェードスタイル</h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 leading-relaxed">伝統の理容技術を受け継ぎながら、人気のフェードカットやニュアンスパーマなど、現代のスタイルにも幅広く対応しています。</p>
                </div>
              </div>

              <div className="p-3 sm:py-3.5 sm:px-4 bg-neutral-950/40 border border-neutral-850 rounded-xl flex items-start gap-2.5 sm:gap-3 h-full">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-neutral-200 text-xs sm:text-sm leading-snug">英語フレンドリー (English Available)</h4>
                  <p className="text-[11px] sm:text-xs text-neutral-400 mt-1 leading-relaxed">三代目は英語対応も可能。近隣の英語指導助手(ALT)や外国人の方々もご利用頂いています。</p>
                </div>
              </div>

            </div>

            {/* Right: Traditional Japanese Shop Interior (Cropped Photo) */}
            <div className="lg:col-span-5 relative h-full flex flex-col justify-center" id="why-choose-media">
              
              {/* Back decoration: Golden frame border offset */}
              <div className="absolute -inset-2 border border-gold-400/10 rounded-2xl translate-x-2 -translate-y-2 pointer-events-none hidden sm:block" />

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl border border-neutral-800 shadow-2xl aspect-[1928/1562] w-full bg-neutral-950 flex flex-col justify-end h-full"
              >
                <img
                  src={okamuraInteriorImg}
                  alt="Okamura Barbers Modern Shop Interior"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-[0.75] hover:brightness-90"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Visual Label Tag */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-neutral-950/80 border border-neutral-850 backdrop-blur-md rounded-xl p-2.5 sm:p-3 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-semibold text-white text-xs sm:text-sm">店内の雰囲気</h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">清潔感あふれるモダンな設備と心地よい温かな空間</p>
                  </div>
                  <span className="font-mono text-gold-400 font-bold uppercase tracking-widest text-[9px] bg-gold-400/10 border border-gold-400/30 px-2 py-0.5 rounded">Our Salon</span>
                </div>
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 5. Our Story Section*/}
      <StorySection timelineEvents={TIMELINE_EVENTS} />

      {/* 6. Highlighted Coupon Section */}
      <CouponSection onBookWithCoupon={openBookingWithCoupon} />

      {/* 7. Interactive FAQ Accordion */}
      <section className="py-20 md:py-28 bg-neutral-950 border-t border-neutral-900 overflow-hidden font-sans">
        <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-gold-400 mb-3 bg-neutral-900 border border-neutral-800 px-3 py-1 rounded-full">
              <HelpCircle className="w-3.5 h-3.5" />
              <span className="font-serif text-xs uppercase tracking-widest font-semibold">FAQ</span>
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
                <li><a href="#home" onClick={(e) => scrollToAnchor(e, '#home')} className="hover:text-gold-300 transition-colors">ホーム</a></li>
                <li><a href="#about" onClick={(e) => scrollToAnchor(e, '#about')} className="hover:text-gold-300 transition-colors">店舗紹介</a></li>
                <li><a href="#services" onClick={(e) => scrollToAnchor(e, '#services')} className="hover:text-gold-300 transition-colors">メニュー</a></li>
                <li><a href="#history" onClick={(e) => scrollToAnchor(e, '#history')} className="hover:text-gold-300 transition-colors">歴史</a></li>
                <li><a href="#reviews" onClick={(e) => scrollToAnchor(e, '#reviews')} className="hover:text-gold-300 transition-colors">口コミ</a></li>
                <li><a href="#coupon" onClick={(e) => scrollToAnchor(e, '#coupon')} className="hover:text-gold-300 transition-colors">クーポン</a></li>
                <li><a href="#access" onClick={(e) => scrollToAnchor(e, '#access')} className="hover:text-gold-300 transition-colors">アクセス</a></li>
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
              <div className="flex items-center gap-5 pt-1">
                <a
                  href="https://www.instagram.com/osyare_okamura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-gold-300 transition-colors duration-200 p-1 inline-flex items-center justify-center"
                  aria-label="Instagram Page"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                
                {/* Facebook Page Link */}
                <a
                  href="https://www.facebook.com/profile.php?id=100064740484712"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-gold-300 transition-colors duration-200 p-1 inline-flex items-center justify-center"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-6 h-6" />
                </a>

                {/* LINE Official Page Link */}
                <a
                  href="https://page.line.me/xvm8157z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-gold-300 transition-colors duration-200 p-1 inline-flex items-center justify-center"
                  aria-label="LINE Official Account"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-14.888 2.213h-1.745c-.328 0-.594-.265-.594-.593V7.279c0-.328.266-.593.594-.593.328 0 .593.265.593.593v3.612h1.152c.328 0 .593.265.593.593 0 .328-.265.593-.593.593zm3.176-.593c0 .328-.265.593-.593.593-.328 0-.594-.265-.594-.593V7.279c0-.328.266-.593.594-.593.328 0 .593.265.593.593v4.205zm4.188 0c0 .328-.266.593-.594.593-.198 0-.374-.097-.482-.246l-2.072-2.775v2.428c0 .328-.266.593-.594.593-.328 0-.593-.265-.593-.593V7.279c0-.328.265-.593.593-.593.199 0 .375.097.483.246l2.072 2.775V7.279c0-.328.266-.593.594-.593.328 0 .594.265.594.593v4.205zm4.188-3.019h-1.745v.852h1.745c.328 0 .593.265.593.593 0 .328-.265.593-.593.593h-1.745v.981h1.745c.328 0 .593.265.593.593 0 .328-.265.593-.593.593h-2.339c-.328 0-.593-.265-.593-.593V7.279c0-.328.265-.593.593-.593h2.339c.328 0 .593.265.593.593 0 .328-.265.593-.593.593z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* Proposal & Image Disclaimer Notice Box */}
          <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-neutral-900/80 border border-gold-500/20 text-xs text-neutral-400 leading-relaxed shadow-lg">
            <div className="flex items-center gap-2 text-gold-400 font-bold mb-3">
              <Info className="w-4 h-4 shrink-0 text-gold-400" />
              <span className="font-serif text-sm text-gold-300">【サイト制作ご提案用サンプルおよび画像に関する免責事項】</span>
            </div>
            <div className="space-y-2.5 text-neutral-300 font-sans text-xs">
              <p>
                <span className="text-gold-400 font-bold">※ 掲載画像について：</span>
                本ウェブサイト内に掲載されているすべての写真・画像・グラフィックはイメージおよびイラストレーション（完成イメージ参考）です。
              </p>
              <p>
                <span className="text-gold-400 font-bold">※ 掲載コンテンツについて：</span>
                本サイトに掲載されている文章、メニュー内容、料金、歴史等のコンテンツは、Webサイト制作・デザインのご提案を目的とした仮のサンプル情報です（口コミは実際のGoogleレビューを使用しています）。実際の公開時には、文章・メニュー・料金・歴史等はクライアント様よりご提供いただく正式な原稿・データへ差し替えられます。
              </p>
            </div>
          </div>

          {/* Sub Footer Copyright & CMS link */}
          <div className="pt-8 border-t border-neutral-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-xs text-neutral-500 font-medium">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <p className="font-mono">
                &copy; {new Date().getFullYear()} Okamura Barbers. All Rights Reserved.
              </p>
              <span className="text-neutral-700 hidden sm:inline">|</span>
              <button
                type="button"
                onClick={() => setIsCmsOpen(true)}
                className="inline-flex items-center gap-1.5 text-[11px] text-neutral-500 hover:text-gold-400 transition-colors cursor-pointer py-0.5 px-1.5 rounded hover:bg-neutral-900/60"
                title="店舗のお知らせ・営業案内を変更する（簡易CMS）"
                aria-label="店舗お知らせの編集 (簡易CMS)"
                id="footer-cms-btn"
              >
                <Settings2 className="w-3 h-3 text-neutral-500 hover:text-gold-400 transition-colors" />
                <span className="font-sans">お知らせ編集 [CMS]</span>
              </button>
            </div>
            <p className="flex items-center gap-1">
              <span>EST. 1950 in Buzen, Fukuoka</span>
              <Scissors className="w-3.5 h-3.5 text-gold-400" />
              <span>Three Generations of Craftsmanship</span>
            </p>
          </div>

        </div>
      </footer>

      {/* 12. Interactive Booking Modal Integration */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        selectedServiceId={selectedServiceId}
        couponAppliedByDefault={couponApplied}
        services={SERVICES}
      />

      {/* 14. Notice CMS Modal Integration */}
      <NoticeCmsModal
        isOpen={isCmsOpen}
        onClose={() => setIsCmsOpen(false)}
        currentNotice={shopNotice}
        onSaveNotice={handleSaveNotice}
        onResetNotice={handleResetNotice}
      />

    </div>
  );
}
