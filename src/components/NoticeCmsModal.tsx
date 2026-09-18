/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Check, RotateCcw, Clock, Calendar, AlertTriangle, 
  Sparkles, Bell, Save, Eye
} from 'lucide-react';
import { ShopNotice, ShopStatusType } from '../types';

export const DEFAULT_SHOP_NOTICE: ShopNotice = {
  statusType: 'normal',
  badgeText: '本日の営業案内',
  title: '本日も通常通り営業中（08:30〜19:00）',
  detailText: '最終受付 18:00 / 予約優先・当日飛び込みも歓迎いたします（月曜も営業）',
  periodText: '',
  updatedAt: new Date().toLocaleDateString('ja-JP'),
};

export const NOTICE_PRESETS: Array<{
  label: string;
  category: string;
  sourceNote?: string;
  notice: Omit<ShopNotice, 'updatedAt'>;
}> = [
  {
    label: '通常営業 (平常時)',
    category: '平常',
    sourceNote: '通常日の基本設定',
    notice: {
      statusType: 'normal',
      badgeText: '本日の営業案内',
      title: '本日も通常通り営業中（08:30〜19:00）',
      detailText: '最終受付 18:00 / 予約優先・当日飛び込みも歓迎いたします（月曜も休まず営業）',
      periodText: '',
    },
  },
  {
    label: '5月の4・5日はGW休み',
    category: 'GW連休',
    sourceNote: 'Instagram過去投稿例',
    notice: {
      statusType: 'holiday',
      badgeText: 'GW休業のお知らせ',
      title: '5月の4・5日はGW休みとなります。',
      detailText: '5月6日(水)より通常通り8:30から営業いたします。連休前後のご予約はお早めにお願いいたします。',
      periodText: '休業日: 5月4日(月)・5月5日(火)',
    },
  },
  {
    label: 'お盆休みは8月の13・14・15日',
    category: 'お盆休み',
    sourceNote: 'Instagram過去投稿例',
    notice: {
      statusType: 'holiday',
      badgeText: 'お盆休みのお知らせ',
      title: 'お盆休みは8月の13・14・15日。',
      detailText: '8月16日(日)より通常営業を再開いたします。お盆前のご予約はお電話にてお早めにどうぞ。',
      periodText: '休業日: 8月13日(木)〜8月15日(土)',
    },
  },
  {
    label: '9月21日(月)はお休み',
    category: '臨時休業',
    sourceNote: 'Instagram過去投稿例',
    notice: {
      statusType: 'holiday',
      badgeText: '臨時休業のお知らせ',
      title: '9月21日(月)はお休みとなります。',
      detailText: '翌日9月22日(火)より平常通り朝8:30より営業いたします。ご不便をおかけいたします。',
      periodText: '休業日: 9月21日(月)',
    },
  },
  {
    label: '年末年始休業 (12/31〜1/3)',
    category: '年末年始',
    sourceNote: '季節休業の定番',
    notice: {
      statusType: 'holiday',
      badgeText: '年末年始休業のお知らせ',
      title: '12月31日〜1月3日は年末年始のお休みとなります。',
      detailText: '年内は12月30日まで営業、年始は1月4日(月)朝8:30より初商いとなります。',
      periodText: '休業期間: 12月31日(木)〜1月3日(日)',
    },
  },
  {
    label: '本日は17:00で早期閉店',
    category: '時短営業',
    sourceNote: '研修・所用などの早仕舞い',
    notice: {
      statusType: 'early_close',
      badgeText: '本日の時短営業案内',
      title: '本日は都合により17:00（最終受付16:00）で営業終了となります。',
      detailText: '明日は朝8:30より通常通り営業いたします。お客様にはご不便をおかけいたします。',
      periodText: '本日限定（17:00閉店）',
    },
  },
];

interface NoticeCmsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentNotice: ShopNotice;
  onSaveNotice: (notice: ShopNotice) => void;
  onResetNotice: () => void;
}

export default function NoticeCmsModal({
  isOpen,
  onClose,
  currentNotice,
  onSaveNotice,
  onResetNotice,
}: NoticeCmsModalProps) {
  const [formNotice, setFormNotice] = useState<ShopNotice>(currentNotice);
  const [showSaveFeedback, setShowSaveFeedback] = useState(false);

  // Sync state and lock body scroll when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setFormNotice(currentNotice);
      setShowSaveFeedback(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, currentNotice]);

  if (!isOpen || typeof document === 'undefined') return null;

  const handleApplyPreset = (presetNotice: Omit<ShopNotice, 'updatedAt'>) => {
    setFormNotice({
      ...presetNotice,
      updatedAt: new Date().toLocaleDateString('ja-JP'),
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: ShopNotice = {
      ...formNotice,
      updatedAt: new Date().toLocaleDateString('ja-JP'),
    };
    onSaveNotice(updated);
    setShowSaveFeedback(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  const handleReset = () => {
    onResetNotice();
    setFormNotice(DEFAULT_SHOP_NOTICE);
    setShowSaveFeedback(true);
    setTimeout(() => {
      onClose();
    }, 600);
  };

  return createPortal(
    <AnimatePresence>
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-4 overflow-y-auto" id="cms-modal-overlay">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          id="cms-modal-backdrop"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-2xl bg-neutral-950 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]"
          id="cms-modal-window"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-neutral-850 bg-neutral-900/60 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Bell className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-white text-base sm:text-lg">
                  営業案内・お知らせ管理 CMS
                </h3>
                <p className="text-neutral-400 text-xs font-sans">
                  トップのお知らせカードの文面を即座に変更できます
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="閉じる"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body with scrolling */}
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
            
            {/* Quick Presets Section */}
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-gold-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>よく使うテンプレート（Instagram過去投稿例より）</span>
                </label>
                <span className="text-[11px] text-neutral-500">ワンクリックで自動入力</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {NOTICE_PRESETS.map((preset, idx) => {
                  const isSelected = formNotice.title === preset.notice.title;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplyPreset(preset.notice)}
                      className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? 'bg-gold-500/15 border-gold-400/80 text-white shadow-md shadow-gold-500/10'
                          : 'bg-neutral-900/70 border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                          preset.notice.statusType === 'normal'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : preset.notice.statusType === 'holiday'
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                            : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}>
                          {preset.category}
                        </span>
                        {preset.sourceNote && (
                          <span className="text-[10px] text-neutral-500 font-sans">
                            {preset.sourceNote}
                          </span>
                        )}
                      </div>
                      <p className="text-xs font-medium text-neutral-200 line-clamp-1 font-serif">
                        {preset.notice.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Edit Form */}
            <form id="notice-cms-form" onSubmit={handleSave} className="space-y-4 pt-4 border-t border-neutral-850">
              
              {/* Status Type Selector */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-2">
                  営業ステータス種別
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'normal', label: '🟢 通常営業', desc: '平常時の営業案内' },
                    { id: 'holiday', label: '🔴 臨時・連休休業', desc: 'GW・お盆・年末年始' },
                    { id: 'early_close', label: '🟠 時短・早仕舞い', desc: '時間短縮や早期閉店' },
                    { id: 'special', label: '🔵 お知らせ', desc: '重要なお知らせ' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setFormNotice({ ...formNotice, statusType: type.id as ShopStatusType })}
                      className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
                        formNotice.statusType === type.id
                          ? 'bg-gold-500/15 border-gold-400 text-white font-semibold'
                          : 'bg-neutral-900 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      <div className="text-xs">{type.label}</div>
                      <div className="text-[10px] text-neutral-500 mt-0.5">{type.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Badge Text */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  バッジラベル（カード上部タグ）
                </label>
                <input
                  type="text"
                  value={formNotice.badgeText}
                  onChange={(e) => setFormNotice({ ...formNotice, badgeText: e.target.value })}
                  placeholder="例: 本日の営業案内 / GW休業 / お盆休み / 臨時休業"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-gold-400 font-sans"
                  required
                />
              </div>

              {/* Title / Main headline */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  お知らせ本文（メイン見出し）
                </label>
                <input
                  type="text"
                  value={formNotice.title}
                  onChange={(e) => setFormNotice({ ...formNotice, title: e.target.value })}
                  placeholder="例: 5月の4・5日はGW休みとなります。"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-gold-400 font-serif"
                  required
                />
              </div>

              {/* Detail Text */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  詳細・補足説明（再開日時や予約案内など）
                </label>
                <textarea
                  value={formNotice.detailText}
                  onChange={(e) => setFormNotice({ ...formNotice, detailText: e.target.value })}
                  placeholder="例: 5月6日(水)より通常通り8:30から営業いたします。ご予約はお早めにどうぞ。"
                  rows={2}
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-gold-400 font-sans"
                  required
                />
              </div>

              {/* Period / Dates */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 mb-1">
                  対象期間・特記情報（任意）
                </label>
                <input
                  type="text"
                  value={formNotice.periodText || ''}
                  onChange={(e) => setFormNotice({ ...formNotice, periodText: e.target.value })}
                  placeholder="例: 休業日: 5月4日(月)・5月5日(火) / お盆休み: 8月13日〜15日"
                  className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3.5 py-2 text-xs text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-gold-400 font-sans"
                />
              </div>

              {/* Real-time Preview */}
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-2 font-mono">
                  <Eye className="w-3.5 h-3.5 text-gold-400" />
                  <span>公開プレビュー（ホームページでの表示イメージ）:</span>
                </div>
                
                <div className={`p-4 rounded-xl border ${
                  formNotice.statusType === 'holiday'
                    ? 'bg-rose-950/20 border-rose-500/30'
                    : formNotice.statusType === 'early_close'
                    ? 'bg-amber-950/20 border-amber-500/30'
                    : 'bg-neutral-900/90 border-neutral-800'
                }`}>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`w-2 h-2 rounded-full ${
                      formNotice.statusType === 'holiday'
                        ? 'bg-rose-400 animate-pulse'
                        : formNotice.statusType === 'early_close'
                        ? 'bg-amber-400 animate-pulse'
                        : 'bg-emerald-400 animate-pulse'
                    }`} />
                    <span className="text-[11px] font-bold tracking-wider uppercase text-gold-300">
                      {formNotice.badgeText || 'お知らせ'}
                    </span>
                    {formNotice.periodText && !formNotice.periodText.includes('月曜') && (
                      <span className="text-[10px] text-neutral-400 bg-neutral-850 px-2 py-0.5 rounded">
                        {formNotice.periodText}
                      </span>
                    )}
                  </div>
                  <h4 className="font-serif font-bold text-white text-sm sm:text-base leading-snug">
                    {formNotice.title || 'お知らせタイトル'}
                  </h4>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    {formNotice.detailText || '詳細案内メッセージがここに表示されます。'}
                  </p>
                </div>
              </div>

            </form>
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-neutral-850 bg-neutral-900/80 shrink-0 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white px-3 py-2 rounded-lg border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>通常営業の初期設定に戻す</span>
            </button>

            <div className="flex items-center gap-2.5 ml-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-medium text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                キャンセル
              </button>
              <button
                type="submit"
                form="notice-cms-form"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-950 font-bold px-5 py-2 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-gold-500/10 cursor-pointer"
              >
                {showSaveFeedback ? (
                  <>
                    <Check className="w-4 h-4 text-neutral-950 animate-bounce" />
                    <span>反映完了！</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4 text-neutral-950" />
                    <span>変更を保存して公開</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
}
