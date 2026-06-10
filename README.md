# 麺匠 龍神 — ホームページ制作

ラーメン専門店「麺匠 龍神」のホームページ制作案件（架空）。  
和モダン・高級感をテーマにした1ページスクロール型のWebサイトです。

**🌐 本番URL：** https://ryu-jin.vercel.app

---

## 📋 プロジェクト概要

| 項目 | 内容 |
|---|---|
| クライアント | 麺匠 龍神（架空） |
| 制作期間 | 2026年6月 |
| 担当範囲 | 企画・デザイン・実装・納品 |
| サイト形式 | 1ページスクロール型 |

---

## 🛠 使用技術

| 技術 | 用途 |
|---|---|
| Next.js 16 | フレームワーク（App Router） |
| TypeScript | 型安全な実装 |
| Tailwind CSS v4 | スタイリング |
| sharp | 画像最適化・WebP変換 |
| Vercel | ホスティング・デプロイ |

---

## 📁 ページ構成

| セクション | 内容 |
|---|---|
| Hero（FV） | キービジュアル・キャッチコピー・CTA |
| Concept | こだわり3項目 |
| Menu | 看板メニュー4品 |
| Gallery | 写真ギャラリー5枚 |
| Staff | 店主プロフィール |
| News | お知らせ一覧 |
| Access | 店舗情報・Google Maps |

---

## 🎨 デザインコンセプト

- **カラー：** ダークブラウン × ウォームゴールド（和モダン）
- **フォント：** Noto Serif JP（Googleフォント）
- **方針：** 余白を広く取り、高級感・静けさを演出

```
ベース    #0e0c09（深みのある黒）
アクセント #c9a96e（和モダンゴールド）
テキスト  #ede8de（クリームホワイト）
```

---

## 🖼 画像最適化

- 全画像をWebP形式に変換（約25%容量削減）
- FV画像はPC用（1920×1080）・モバイル用（390×852）を自動出し分け
- Next.js `<Image>` コンポーネントで遅延読み込み・サイズ最適化

---

## 🚀 ローカル起動

```bash
# パッケージインストール
npm install

# 開発サーバー起動
npm run dev
```

http://localhost:3000 で確認できます。

---

## 📂 フォルダ構成

```
ryu-jin/
├── src/
│   ├── app/          # レイアウト・グローバルCSS
│   └── components/   # 各セクションコンポーネント
├── public/images/    # Web配信用画像（WebP）
├── assets/original/  # 元画像データ
└── docs/             # 運用ドキュメント・納品資料
```

---

## 📄 ドキュメント

| ファイル | 内容 |
|---|---|
| `docs/proposal.md` | 企画・提案書 |
| `docs/client-handover.md` | 納品まとめ |
| `docs/image-guideline.md` | 画像管理ガイドライン |
| `docs/naming-rule.md` | ファイル命名規則 |
| `docs/seo-image-strategy.md` | SEO画像戦略 |

---

制作：murayamakatsumi
