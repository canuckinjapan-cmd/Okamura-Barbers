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
    { name: '店舗紹介', href: '#about' },
    { name: 'メニュー', href: '#services' },
    { name: '歴史', href: '#history' },
    { name: '口コミ', href: '#reviews' },
    { name: 'クーポン', href: '#coupon' },
    { name: 'アクセス', href: '#access' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      // Find the first heading, badge, or prominent content element inside the section
      const contentTarget = element.querySelector<HTMLElement>('.inline-flex, h2, h3, h4, .section-header') || (element as HTMLElement);
      const navHeader = document.getElementById('main-header');
      const navHeight = navHeader ? navHeader.offsetHeight : 64;
      
      // Position the target with very little excess space (12px) below the fixed navbar
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
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-900 shadow-lg py-2.5 md:py-3'
          : 'bg-transparent border-b border-white/5 py-3.5 md:py-5'
      }`}
      id="main-header"
    >
      <div className="w-full max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Left */}
        <a href="#home" onClick={() => handleLinkClick('#home')} className="flex items-center shrink-0" aria-label="Okamura Barbers Home">
          <Logo />
        </a>

        {/* Desktop / Tablet / Mobile Landscape Navigation */}
        <nav className="hidden md:flex landscape:flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-7" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.href)}
              className="text-xs md:text-sm text-neutral-300 hover:text-gold-300 font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              {link.name}
            </button>
          ))}
          
          {/* Social Links (shown on larger screens / tablets) */}
          <div className="hidden xl:flex items-center gap-2 pl-2 border-l border-neutral-800">
            <a
              href="https://www.instagram.com/osyare_okamura/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-gold-300 transition-colors duration-200 p-1"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100064740484712"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-gold-300 transition-colors duration-200 p-1"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>

            <a
              href="https://page.line.me/xvm8157z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-gold-300 transition-colors duration-200 p-1"
              aria-label="LINE Official Account"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-14.888 2.213h-1.745c-.328 0-.594-.265-.594-.593V7.279c0-.328.266-.593.594-.593.328 0 .593.265.593.593v3.612h1.152c.328 0 .593.265.593.593 0 .328-.265.593-.593.593zm3.176-.593c0 .328-.265.593-.593.593-.328 0-.594-.265-.594-.593V7.279c0-.328.266-.593.594-.593.328 0 .593.265.593.593v4.205zm4.188 0c0 .328-.266.593-.594.593-.198 0-.374-.097-.482-.246l-2.072-2.775v2.428c0 .328-.266.593-.594.593-.328 0-.593-.265-.593-.593V7.279c0-.328.265-.593.593-.593.199 0 .375.097.483.246l2.072 2.775V7.279c0-.328.266-.593.594-.593.328 0 .594.265.594.593v4.205zm4.188-3.019h-1.745v.852h1.745c.328 0 .593.265.593.593 0 .328-.265.593-.593.593h-1.745v.981h1.745c.328 0 .593.265.593.593 0 .328-.265.593-.593.593h-2.339c-.328 0-.593-.265-.593-.593V7.279c0-.328.265-.593.593-.593h2.339c.328 0 .593.265.593.593 0 .328-.265.593-.593.593z" />
              </svg>
            </a>
          </div>
        </nav>

        {/* Desktop / Tablet / Mobile Landscape CTA Button */}
        <div className="hidden md:flex landscape:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenBooking}
            className="bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-950 text-xs font-semibold px-4 md:px-5 py-2 md:py-2.5 rounded-full transition-all duration-300 shadow-md shadow-gold-500/5 hover:shadow-gold-500/10 border-t border-white/10 uppercase tracking-widest cursor-pointer flex items-center gap-1.5 whitespace-nowrap"
            id="nav-reservation-btn"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>予約する</span>
          </button>
        </div>

        {/* Mobile Portrait Menu Trigger */}
        <div className="flex md:hidden landscape:hidden items-center gap-2.5">
          <button
            onClick={onOpenBooking}
            className="bg-gold-400 hover:bg-gold-500 text-neutral-950 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 transition-all"
            aria-label="Quick reservation"
          >
            <CalendarCheck className="w-3 h-3" />
            <span>予約する</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-neutral-300 hover:text-white p-1.5"
            id="mobile-menu-btn"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Portrait Menu Drawer Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden landscape:hidden w-full bg-neutral-950 border-b border-neutral-900 overflow-hidden"
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
                    href="https://page.line.me/xvm8157z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-gold-300"
                    aria-label="LINE Official Account"
                  >
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.303.079.778.039 1.085l-.171 1.027c-.053.303-.242 1.186 1.039.647 1.281-.54 6.911-4.069 9.428-6.967 1.739-1.907 2.572-3.843 2.572-5.992zm-14.888 2.213h-1.745c-.328 0-.594-.265-.594-.593V7.279c0-.328.266-.593.594-.593.328 0 .593.265.593.593v3.612h1.152c.328 0 .593.265.593.593 0 .328-.265.593-.593.593zm3.176-.593c0 .328-.265.593-.593.593-.328 0-.594-.265-.594-.593V7.279c0-.328.266-.593.594-.593.328 0 .593.265.593.593v4.205zm4.188 0c0 .328-.266.593-.594.593-.198 0-.374-.097-.482-.246l-2.072-2.775v2.428c0 .328-.266.593-.594.593-.328 0-.593-.265-.593-.593V7.279c0-.328.265-.593.593-.593.199 0 .375.097.483.246l2.072 2.775V7.279c0-.328.266-.593.594-.593.328 0 .594.265.594.593v4.205zm4.188-3.019h-1.745v.852h1.745c.328 0 .593.265.593.593 0 .328-.265.593-.593.593h-1.745v.981h1.745c.328 0 .593.265.593.593 0 .328-.265.593-.593.593h-2.339c-.328 0-.593-.265-.593-.593V7.279c0-.328.265-.593.593-.593h2.339c.328 0 .593.265.593.593 0 .328-.265.593-.593.593z" />
                    </svg>
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
