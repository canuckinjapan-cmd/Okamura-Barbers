# 💈 オシャレヘアーオカムラ (Okamura Barbers)

[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

> **75年の歴史と職人技が息づく、福岡県豊前市のレトロモダンバーバー**  
> 1950年創業。三代にわたり継承されてきた伝統の理容技術と、現代のメンズカット・フェードスタイルを融合させた「オシャレヘアーオカムラ」の公式Webアプリケーションです。

---

## 📖 概要 (Project Overview)

「オシャレヘアーオカムラ (Okamura Barbers)」は、福岡県豊前市千束で創業75年を迎えた老舗理容店です。  
高度経済成長期から地域に根差し、初代・岡村一郎から二代目・二郎、そして三代目へと親子の温かいもてなしと確かな技術が継承されてきました。

本Webアプリケーションは、店舗のクラシックかつ洗練された雰囲気を伝えるモダンなデザインシステム、24時間対応のWeb来店予約システム、Web限定クーポン、75年の歩みを振り返るヒストリータイムライン、店舗アクセス情報（Google Map連携）を備えています。

---

## ✨ 主な機能 (Key Features)

### 1. 💈 ヒーローセクション & バーバーポール演出
- レトロモダンなバーバーポールアニメーションと、一目でわかる営業時間・定休日・店舗情報。
- 「Web予約する」「お電話でのご予約」へのスムーズなアクセス。

### 2. ✂️ 精密なメニュー案内 (Services Catalog)
- **大人総合カット (Gentleman's Full Cut)**: カット、シャンプー、顔剃り、ブロー含む看板フルコース (¥3,800)。
- **中・高校生・キッズカット (Junior & Student Cut)**: 成長に合わせた丁寧なスタイリング (¥2,200〜)。
- **プレミアムフェードカット (Premium Skin Fade)**: 0.1mm以下の色彩美にこだわるミリタリー&モダンフェード (¥4,500)。
- **メンズヒゲデザイン&シェービング (Beard Styling)**: 骨格に合わせたヒゲラインと伝統の直刃シェービング (¥1,500)。

### 3. 📅 オンラインWeb予約モーダル (Web Reservation System)
- 日時・コース選択・お客様情報の入力がワンストップで完了。
- Web限定「500円OFFクーポン」の適用チェックボックス付き。
- スマホ・PC両対応の完全レスポンシブダイアログ。

### 4. 📜 75年の軌跡 タイムライン (Heritage Timeline Since 1950)
- **1950年**: 初代・岡村一郎が豊前市千束に「岡村理容店」を創業。
- **1965年**: 理容椅子増台、伝統の「マイルド直刃剃り」確立。
- **1985年**: 二代目・岡村二郎が継承、流行スタイルとパーマ導入。
- **2025年**: 店舗リニューアル。二代目・三代目の親子営業で新たな時代へ。

### 5. 🎟️ Web限定オープン記念クーポン (Web Limited Offer)
- 初めてのご来店時に使える500円割引クーポンコード表示&ワンタップコピー機能。

### 6. 🗺️ アクセス・店舗情報 (Access & Map)
- Google Maps埋め込み、駐車場4台完備案内、電話発信リンク (`tel:0979-82-5007`)。

---

## 🛠️ 技術スタック (Tech Stack)

| カテゴリ | 使用技術 / ライブラリ |
| :--- | :--- |
| **フロントエンド** | React 19, TypeScript, Vite 6 |
| **スタイリング** | Tailwind CSS v4, Custom CSS (Google Fonts integration) |
| **アニメーション** | Motion (`motion/react`) |
| **アイコン** | Lucide React |
| **サーバー/配信** | Express, Node.js (Cloud Run 互換) |
| **フォント** | Playfair Display, Noto Serif JP, Inter, Noto Sans JP |

---

## 📁 プロジェクト構造 (Directory Structure)

```text
okamura-barbers/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions 自動デプロイ設定 (GitHub Pages)
├── public/
│   └── assets/              # 静的アセット配信用ミラーディレクトリ
│       └── images/
├── src/
│   ├── assets/              # 高解像度画像・ロゴ・写真アセット
│   │   └── images/
│   ├── components/          # 再利用可能なUIコンポーネント
│   │   ├── AccessSection.tsx    # アクセス・マップ・店舗情報
│   │   ├── BookingModal.tsx     # Web予約フォームダイアログ
│   │   ├── CouponSection.tsx    # Web限定クーポンセクション
│   │   ├── Logo.tsx             # バーバーサイン風ロゴ
│   │   ├── Navbar.tsx           # ヘッダーナビゲーション
│   │   ├── ServicesSection.tsx  # メニュー＆口コミ一覧
│   │   └── StorySection.tsx     # 75年ヒストリータイムライン
│   ├── App.tsx              # メインアプリケーションコンポーネント
│   ├── index.css            # Tailwind CSS v4 設定 & カスタムアニメーション
│   ├── main.tsx             # アプリケーションエントリーポイント
│   ├── types.ts             # TypeScript型定義
│   └── vite-env.d.ts        # Vite画像モジュール型定義 (.jpg, .svg 等)
├── .env.example             # 環境変数サンプル
├── .gitignore               # Git除外設定
├── AGENTS.md                # AIエージェント向けの開発ガイドライン
├── DESIGN.md                # デザインシステム＆トークン仕様書
├── metadata.json            # アプリケーションメタデータ
├── package-lock.json        # 依存パッケージロックファイル
├── package.json             # 依存関係＆npmスクリプト
└── vite.config.ts           # Vite設定ファイル (base: '/Okamura-Barbers/')
```

---

## 🖼️ 画像アセットの管理ルール (Asset Management)

- **配置場所**: 画像ファイルは `src/assets/images/` 配下に格納します。
- **インポート方式**: Reactコンポーネント内では文字列パス (`"/assets/..."`) を直接記述するのではなく、**ViteのESモジュールインポート**を使用します。
  ```tsx
  import heroImg from './assets/images/hero_barber_cut_1783583051614-new01.jpg';
  
  <img src={heroImg} alt="Hero" />
  ```
  ※ これにより、ローカル環境・AI Studioプレビュー・GitHub Pages (`/Okamura-Barbers/`) のいずれの配信パスでも自動的に正しいURLへ解決されます。
- **型定義**: 画像ファイルのインポートをTypeScriptで安全に扱うため、`src/vite-env.d.ts` に各種拡張子 (`*.jpg`, `*.png`, `*.svg` など) のモジュール定義を含めています。

---

## 🚀 開発・起動手順 (Getting Started)

### 前提条件
- Node.js 18.x 以上
- npm または bun

### インストール & 開発サーバー起動

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動 (Port 3000)
npm run dev
```

ブラウザで `http://localhost:3000` にアクセスして確認できます。

### ビルド & 検証

```bash
# TypeScript型チェック
npm run lint

# プロダクションビルド
npm run build

# プレビュー起動
npm run preview
```

---

## 🌐 GitHub Pages への公開手順 (Deployment)

### 方法 1: GitHub Actions による自動デプロイ（推奨）
このリポジトリには `.github/workflows/deploy.yml` が含まれています。

1. GitHub リポジトリの **Settings**（設定）を開きます。
2. 左メニューの **Pages** を選択します。
3. **Build and deployment** > **Source** を **`GitHub Actions`** に変更します。
4. `main` ブランチにプッシュするだけで、GitHub Actions が自動的に Vite プロダクションビルドを行い、GitHub Pages に即座に公開されます。

### 方法 2: 手動デプロイ (gh-pages)
ローカルから手動でデプロイする場合：

```bash
# ビルドを行い、gh-pages ブランチに公開
npm run deploy
```

※ 方法2を使用する場合は、GitHub リポジトリの **Settings** > **Pages** で **Source** を **`Deploy from a branch`**、ブランチを **`gh-pages / (root)`** に設定してください。

---

## 📍 店舗情報 (Store Details)

- **屋号**: オシャレヘアーオカムラ (Okamura Barbers)
- **所在地**: 〒828-0021 福岡県豊前市千束256
- **電話番号**: 0979-82-5007
- **営業時間**: 08:30 - 19:00 (最終受付 18:00)
- **定休日**: なし (ほぼ年中無休)
- **駐車場**: 4台完備（別途駐車場あり）

---

© 1950 - 2026 Okamura Barbers. All Rights Reserved.
