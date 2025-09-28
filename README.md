Frontend Engineer Portfolio
デザイナーからフロントエンドエンジニアに転身したプロフェッショナルのポートフォリオサイト

🌐 Live Demo
https://your-portfolio-url.vercel.app

📋 概要
8年間のフリーランス経験と2.5年のフロントエンド開発経験を活かし
UI/UXを理解した実装で「デザインと開発の橋渡し」を得意とするエンジニアのポートフォリオです。

🛠️ 技術スタック
フロントエンド

Next.js 14 (App Router)
TypeScript - 型安全性の確保
React - コンポーネント設計
Tailwind CSS - 効率的なスタイリング
Framer Motion - 洗練されたアニメーション

バックエンド・CMS

microCMS - ヘッドレスCMS
EmailJS - メール送信機能
React Hook Form - フォーム処理・バリデーション

開発・デプロイ

Vercel - 本番環境デプロイ
Git/GitHub - バージョン管理
ESLint/Prettier - コード品質管理

✨ 主な機能
📱 レスポンシブデザイン

モバイルファーストのアプローチ
デスクトップ・タブレット・スマートフォン対応
ダークテーマで統一されたUI

📝 ブログ機能

microCMSとの統合
記事一覧・詳細表示
カテゴリ・タグ機能
ISR（Incremental Static Regeneration）対応

📧 お問い合わせフォーム

React Hook Formによるバリデーション
EmailJSによる実際のメール送信
エラーハンドリング・成功通知

🎬 インタラクション

Framer Motionによる滑らかなアニメーション
ページ遷移エフェクト
ホバーアニメーション

🎯 技術的なポイント
パフォーマンス最適化

Next.js Image Optimizationの活用
静的生成（SSG）とISRの適切な使い分け
Code Splittingによる最適化

型安全性

TypeScriptによる厳密な型定義
API レスポンスの型安全性確保
コンポーネントのPropsタイピング

SEO対応

メタタグの最適化
構造化データの実装
サイトマップ自動生成

🚀 ローカル開発
前提条件

Node.js 18.0以上
npm または yarn

セットアップ
bash# リポジトリのクローン
git clone https://github.com/your-username/frontend-portfolio.git
cd frontend-portfolio

# 依存関係のインストール
npm install

# 環境変数の設定
cp .env.local.example .env.local
# .env.localファイルに必要な値を設定

# 開発サーバーの起動
npm run dev
環境変数
bash# microCMS
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your-public-key
📁 プロジェクト構造
├── src/
│   ├── app/                 # App Router
│   │   ├── blog/           # ブログページ
│   │   ├── contact/        # お問い合わせページ
│   │   └── about/          # About ページ
│   ├── components/         # 再利用可能コンポーネント
│   ├── lib/               # ユーティリティ・設定
│   │   └── microcms.ts    # microCMS クライアント
│   └── types/             # TypeScript 型定義
├── public/                # 静的ファイル
└── styles/               # グローバルスタイル
🎨 デザインアプローチ
カラーパレット

背景: #0F0F0F, #1A1A1A (ダークテーマ)
テキスト: #FFFFFF, #E5E5E5
アクセント: #3B82F6 (ブルー系)

デザイン原則

ミニマリズム: 情報の階層化と視認性重視
一貫性: 統一されたスペーシング・タイポグラフィ
アクセシビリティ: 適切なコントラスト・フォーカス管理

🔧 実装の特徴
デザイナー視点の技術選定

UI/UXを理解したアニメーション実装
ユーザビリティを考慮したローディング状態
デザインシステムを意識したコンポーネント設計

フロントエンド技術力

モダンなReact Hooksの活用
型安全性を重視した実装
パフォーマンスを考慮した最適化

📈 今後の拡張予定

 ダークモード切り替え機能
 ブログ記事の全文検索
 Core Web Vitals スコア表示
 PWA対応

👤 制作者について
フリーランス フロントエンドエンジニア

8年間のフリーランス経験
2.5年のフロントエンド開発経験
デザイナーからエンジニアへの転身経験
UI/UXを理解した実装が強み

📄 ライセンス
このプロジェクトは個人ポートフォリオとして作成されています。

Contact: [your-email@example.com]
Portfolio: [https://your-portfolio-url.vercel.app]