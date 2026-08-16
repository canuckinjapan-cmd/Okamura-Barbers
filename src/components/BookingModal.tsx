/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, Check, Scissors, AlertCircle, Sparkles } from 'lucide-react';
import { Service, BookingForm } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedServiceId?: string;
  couponAppliedByDefault?: boolean;
  services: Service[];
}

export default function BookingModal({
  isOpen,
  onClose,
  selectedServiceId = '',
  couponAppliedByDefault = false,
  services,
}: BookingModalProps) {
  const [formData, setFormData] = useState<BookingForm>({
    name: '',
    phone: '',
    email: '',
    serviceId: selectedServiceId || services[0]?.id || '',
    date: '',
    time: '',
    useCoupon: couponAppliedByDefault,
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // Mobile portrait (<768px width) or Mobile landscape (<1024px width & <500px height)
      const mobile = window.innerWidth < 768 || (window.innerWidth < 1024 && window.innerHeight < 500);
      setIsMobile(mobile);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getServiceOptionLabel = (service: Service) => {
    if (isMobile) {
      let shortName = service.name;
      if (service.id === 'haircut' || service.id === 'standard') shortName = 'スタンダードカット';
      else if (service.id === 'kids') shortName = 'キッズ＆学生カット';
      else if (service.id === 'fade') shortName = 'プレミアムフェード';
      else if (service.id === 'beard') shortName = '髭デザイン＆トリム';

      return `${shortName} — ¥${service.price.toLocaleString()}`;
    }

    return `${service.name} — ¥${service.price.toLocaleString()} (${service.duration}分)`;
  };

  // Update selected service if the prop changes
  useEffect(() => {
    if (selectedServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: selectedServiceId }));
    }
  }, [selectedServiceId]);

  // Update coupon state if the prop changes
  useEffect(() => {
    setFormData((prev) => ({ ...prev, useCoupon: couponAppliedByDefault }));
  }, [couponAppliedByDefault]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  // Store is open every day
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dateVal = e.target.value;
    if (!dateVal) return;

    setError('');
    setFormData((prev) => ({ ...prev, date: dateVal }));
  };

  const selectedService = services.find((s) => s.id === formData.serviceId);
  const basePrice = selectedService ? selectedService.price : 0;
  const finalPrice = formData.useCoupon ? Math.max(0, basePrice - 1000) : basePrice;

  // Generate a mock ticket ID
  const generateTicketId = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `OKM-${new Date().getFullYear()}${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${rand}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.date || !formData.time) {
      setError('必須項目をすべてご入力ください。');
      return;
    }

    // Save to localStorage as a real booking record
    const newId = generateTicketId();
    setBookingId(newId);
    
    const existingBookings = JSON.parse(localStorage.getItem('okamura_bookings') || '[]');
    const newBooking = {
      id: newId,
      ...formData,
      serviceName: selectedService?.name || '',
      price: finalPrice,
      createdAt: new Date().toISOString(),
    };
    
    localStorage.setItem('okamura_bookings', JSON.stringify([...existingBookings, newBooking]));
    setIsSubmitted(true);
    setError('');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceId: services[0]?.id || '',
      date: '',
      time: '',
      useCoupon: false,
      notes: '',
    });
    setIsSubmitted(false);
    onClose();
  };

  // Today's date as min for date input
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto my-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md"
            id="modal-backdrop"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-xl max-h-[92vh] sm:max-h-[90vh] flex flex-col bg-neutral-900 border border-gold-400/20 rounded-2xl overflow-hidden shadow-2xl z-10 font-sans text-neutral-200 my-auto"
            id="booking-modal-content"
          >
            {/* Header decor */}
            <div className="h-1.5 w-full bg-gradient-to-r from-gold-600 via-gold-400 to-gold-800 shrink-0" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors duration-200 p-1.5 bg-neutral-800/80 rounded-full border border-neutral-700/50 z-20"
              id="close-modal-btn"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div className="p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[calc(92vh-0.375rem)] sm:max-h-[calc(90vh-0.375rem)]">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-gold-400 mb-1">
                    <Scissors className="w-4 h-4" />
                    <span className="font-serif text-xs uppercase tracking-widest font-semibold">RESERVATION</span>
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-white tracking-tight">
                    ご来店予約・相談
                  </h3>
                  <p className="text-sm text-neutral-400 mt-1">
                    以下に必要事項をご記入ください。お支払いは店頭にて承ります。
                  </p>
                </div>

                {/* Error Banner */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-950/40 border border-red-500/30 text-red-200 rounded-lg flex items-start gap-3 text-sm"
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </motion.div>
                )}

                {/* Booking Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service Selection */}
                  <div>
                    <label htmlFor="serviceId" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                      メニューを選択 <span className="text-gold-400">*</span>
                    </label>
                    <select
                      id="serviceId"
                      name="serviceId"
                      value={formData.serviceId}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-400/50 rounded-lg px-3 py-2.5 text-xs sm:text-sm text-neutral-200 outline-none transition-all duration-200"
                      required
                    >
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {getServiceOptionLabel(service)}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Date & Time Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        ご希望日 <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          id="date"
                          name="date"
                          min={todayStr}
                          value={formData.date}
                          onChange={handleDateChange}
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-400/50 rounded-lg px-3 py-2.5 text-sm text-neutral-200 outline-none transition-all duration-200 pl-9"
                          required
                        />
                        <Calendar className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        ご希望時間帯 <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-400/50 rounded-lg px-3 py-2.5 text-sm text-neutral-200 outline-none transition-all duration-200 pl-9"
                          required
                        >
                          <option value="">時間を選択してください</option>
                          <option value="08:30">08:30 (始業)</option>
                          <option value="09:00">09:00</option>
                          <option value="09:30">09:30</option>
                          <option value="10:00">10:00</option>
                          <option value="10:30">10:30</option>
                          <option value="11:00">11:00</option>
                          <option value="11:30">11:30</option>
                          <option value="12:00">12:00</option>
                          <option value="12:30">12:30</option>
                          <option value="13:00">13:00</option>
                          <option value="13:30">13:30</option>
                          <option value="14:00">14:00</option>
                          <option value="14:30">14:30</option>
                          <option value="15:00">15:00</option>
                          <option value="15:30">15:30</option>
                          <option value="16:00">16:00</option>
                          <option value="16:30">16:30</option>
                          <option value="17:00">17:00</option>
                          <option value="17:30">17:30</option>
                          <option value="18:00">18:00 (最終受付)</option>
                        </select>
                        <Clock className="w-4 h-4 text-neutral-500 absolute left-3 top-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="space-y-3">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                        お名前 <span className="text-gold-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="山田 太郎"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-400/50 rounded-lg px-3 py-2.5 text-sm text-neutral-200 outline-none transition-all duration-200"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                          電話番号 <span className="text-gold-400">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="090-1234-5678"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-400/50 rounded-lg px-3 py-2.5 text-sm text-neutral-200 outline-none transition-all duration-200"
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                          メールアドレス <span className="text-gold-400">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="taro.yamada@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-400/50 rounded-lg px-3 py-2.5 text-sm text-neutral-200 outline-none transition-all duration-200"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Coupon Toggle */}
                  <div className="p-3.5 bg-gold-950/25 border border-gold-400/10 rounded-xl flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="useCoupon"
                      name="useCoupon"
                      checked={formData.useCoupon}
                      onChange={handleCheckboxChange}
                      className="accent-gold-400 mt-1 cursor-pointer w-4 h-4 rounded border-neutral-700 bg-neutral-950 focus:ring-0 focus:ring-offset-0"
                    />
                    <div className="flex-1 cursor-pointer" onClick={() => setFormData(p => ({ ...p, useCoupon: !p.useCoupon }))}>
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-semibold text-gold-300">Web限定 1,000円OFFクーポンを適用する</span>
                        <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                      </div>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        初めてご来店のお客様に限り、お会計から1,000円割引いたします。
                      </p>
                    </div>
                  </div>

                  {/* Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-xs uppercase tracking-wider text-neutral-400 mb-1.5 font-semibold">
                      ご要望・ご相談事項 (任意)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={2}
                      placeholder="「パーマの相談をしたい」「静かに過ごしたい」など"
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-400/50 rounded-lg px-3 py-2 text-sm text-neutral-200 outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Dynamic Pricing Summary */}
                  <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-sm">
                    <span className="text-neutral-400">お見積り金額 (店頭支払):</span>
                    <div className="text-right">
                      {formData.useCoupon && (
                        <span className="text-xs text-neutral-500 line-through mr-2">
                          ¥{basePrice.toLocaleString()}
                        </span>
                      )}
                      <span className="text-lg font-serif font-semibold text-gold-300">
                        ¥{finalPrice.toLocaleString()}
                      </span>
                      <span className="text-xs text-neutral-400 ml-1">(税込)</span>
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-950 font-semibold py-3 px-4 rounded-xl text-sm transition-all duration-300 shadow-lg shadow-gold-500/10 border-t border-white/20 uppercase tracking-wider mt-4"
                    id="submit-booking-btn"
                  >
                    上記の内容で予約を確定する (予約する)
                  </button>
                </form>
              </div>
            ) : (
              /* Success / Ticket Screen */
              <div className="p-6 md:p-8 text-center flex flex-col items-center">
                {/* Success Banner */}
                <div className="w-14 h-14 bg-gold-400/10 border border-gold-400/20 rounded-full flex items-center justify-center mb-4 text-gold-400 animate-bounce">
                  <Check className="w-7 h-7" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-white mb-1">
                  予約のお申し込みありがとうございます
                </h3>
                <p className="text-sm text-neutral-400 max-w-sm mb-6">
                  ご入力いただいた内容を確認のうえ、メールまたはお電話にて予約確定のご連絡をいたします。
                </p>

                {/* Old-School Vintage Styling Ticket */}
                <div className="w-full max-w-sm bg-neutral-950 border border-gold-400/30 rounded-xl overflow-hidden shadow-inner text-left mb-6 relative">
                  {/* Ticket edge notch styling (CSS) */}
                  <div className="absolute top-1/2 -left-3 w-6 h-6 bg-neutral-900 border-r border-gold-400/30 rounded-full -translate-y-1/2" />
                  <div className="absolute top-1/2 -right-3 w-6 h-6 bg-neutral-900 border-l border-gold-400/30 rounded-full -translate-y-1/2" />
                  
                  {/* Ticket Header */}
                  <div className="p-4 bg-neutral-900/60 border-b border-neutral-800 flex justify-between items-center text-xs">
                    <span className="font-serif tracking-widest text-gold-400 font-bold">OKAMURA BARBERS</span>
                    <span className="font-mono text-neutral-500">{bookingId}</span>
                  </div>

                  {/* Ticket Details */}
                  <div className="p-5 space-y-3.5 text-xs">
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-neutral-500 font-semibold">お名前:</span>
                      <span className="col-span-2 text-neutral-200 font-medium">{formData.name} 様</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-neutral-500 font-semibold">メニュー:</span>
                      <span className="col-span-2 text-neutral-200 font-medium">{selectedService?.name}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-neutral-500 font-semibold">日時:</span>
                      <span className="col-span-2 text-gold-300 font-serif font-semibold text-sm">
                        {formData.date.replace(/-/g, '/')} at {formData.time}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 border-t border-neutral-900 pt-3">
                      <span className="text-neutral-500 font-semibold">お支払金額:</span>
                      <span className="col-span-2 text-gold-400 font-serif font-bold text-base">
                        ¥{finalPrice.toLocaleString()} <span className="text-[10px] text-neutral-500 font-normal">(店頭支払い)</span>
                      </span>
                    </div>

                    {formData.useCoupon && (
                      <div className="flex items-center gap-1 bg-gold-950/30 border border-gold-400/10 px-2 py-1 rounded text-[10px] text-gold-300">
                        <Sparkles className="w-3 h-3" />
                        <span>初めてのお客様限定：1,000円割引適用済み</span>
                      </div>
                    )}
                  </div>

                  {/* Ticket Bottom QR code decor */}
                  <div className="border-t border-dashed border-neutral-800 p-4 bg-neutral-900/40 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-neutral-500 font-mono">TICKET STUB</p>
                      <p className="text-[10px] text-neutral-400 mt-1">当日、受付にてこの画面をご提示ください。</p>
                    </div>
                    {/* SVG QR code */}
                    <svg className="w-12 h-12 text-neutral-300 opacity-80" viewBox="0 0 100 100" fill="currentColor">
                      <rect x="5" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="8" />
                      <rect x="12" y="12" width="11" height="11" />
                      <rect x="70" y="5" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="8" />
                      <rect x="77" y="12" width="11" height="11" />
                      <rect x="5" y="70" width="25" height="25" fill="none" stroke="currentColor" strokeWidth="8" />
                      <rect x="12" y="77" width="11" height="11" />
                      <rect x="40" y="40" width="20" height="20" />
                      <rect x="70" y="70" width="10" height="10" />
                      <rect x="85" y="70" width="10" height="10" />
                      <rect x="70" y="85" width="15" height="10" />
                      <rect x="45" y="10" width="10" height="15" />
                      <rect x="10" y="45" width="15" height="10" />
                      <rect x="45" y="75" width="10" height="15" />
                    </svg>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 font-medium py-2.5 px-6 rounded-lg text-sm transition-all duration-200"
                  id="close-success-btn"
                >
                  閉じる
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
