/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone, CalendarCheck } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ホーム', href: '#home' },
    { name: '店舗紹介', href: '#about' },
    { name: '施術メニュー', href: '#services' },
    { name: '1950年から続く', href: '#history' },
    { name: '限定クーポン', href: '#coupon' },
    { name: 'アクセス', href: '#access' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 shadow-lg py-3'
          : 'bg-transparent border-b border-white/5 py-5'
      }`}
      id="main-header"
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Left */}
        <a href="#home" onClick={() => handleLinkClick('#home')} className="flex items-center" aria-label="Okamura Barbers Home">
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Desktop navigation">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm text-neutral-300 hover:text-gold-300 font-medium transition-colors duration-200 cursor-pointer"
            >
              {link.name}
            </button>
          ))}
          
          {/* Instagram link */}
          <a
            href="https://www.instagram.com/osyare_okamura/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-gold-300 transition-colors duration-200 p-1"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Facebook link */}
          <a
            href="https://www.facebook.com/profile.php?id=100064740484712"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-gold-300 transition-colors duration-200 p-1"
            aria-label="Facebook"
          >
            <Facebook className="w-4 h-4" />
          </a>
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-950 text-xs font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-gold-500/5 hover:shadow-gold-500/10 border-t border-white/10 uppercase tracking-widest cursor-pointer flex items-center gap-1.5"
            id="nav-reservation-btn"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>予約する</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center lg:hidden gap-3">
          <button
            onClick={onOpenBooking}
            className="bg-gold-400 hover:bg-gold-500 text-neutral-950 text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1 transition-all"
            aria-label="Quick reservation"
          >
            <CalendarCheck className="w-3 h-3" />
            <span>予約する</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-300 hover:text-white p-2"
            id="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-neutral-950 border-b border-neutral-900 overflow-hidden"
            id="mobile-menu-panel"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-left py-2.5 text-neutral-300 hover:text-gold-300 font-medium border-b border-neutral-900 text-sm cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
              
              <div className="pt-4 flex items-center justify-between">
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/osyare_okamura/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-gold-300"
                    aria-label="Instagram link"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=100064740484712"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-gold-300"
                    aria-label="Facebook link"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="tel:0979-82-5007"
                    className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-gold-300"
                    aria-label="Phone call"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="bg-gradient-to-r from-gold-500 to-gold-600 text-neutral-950 text-xs font-bold px-5 py-3 rounded-xl flex items-center gap-1.5 shadow-lg"
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>ネット予約する</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
