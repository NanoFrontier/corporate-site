# NanoFrontier コーポレートサイト

NanoFrontier株式会社のコーポレートサイトのソースコードです。Astro.jsを使用して構築されています。

## 技術スタック

- [Astro.js](https://astro.build/) - 静的サイトジェネレーター
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- TypeScript - 型安全な開発

## 開発環境のセットアップ

1. リポジトリをクローン
```bash
git clone [repository-url]
cd corporate-site
```

2. 依存関係のインストール
```bash
npm install
```

3. 開発サーバーの起動
```bash
npm run dev
```

4. ブラウザで確認
- 開発サーバーが起動したら、ブラウザで `http://localhost:4321` にアクセス
- ファイルを編集すると、自動的にブラウザが更新されます（ホットリロード）


## 開発フロー

詳細なブランチ戦略とGitワークフローについては、[BRANCH_STRATEGY.md](./BRANCH_STRATEGY.md)を参照してください。

### 基本的な開発フロー

1. 新しい機能や修正を開発する際は、`dev` ブランチから新しいブランチを作成
```bash
git checkout dev
git pull origin dev
git checkout -b feature/your-feature-name
```
2. 変更をコミットしてプッシュ
```bash
git add .
git commit -m "feat: 変更内容の説明"
git push origin feature/your-feature-name
```
3. GitHubでプルリクエストを作成
   - まず `dev` ブランチに向けてプルリクエストを作成
   - レビュー後に `dev` ブランチにマージ
   - その後、`dev` ブランチから `main` ブランチへのプルリクエストを作成
   - レビュー後に `main` ブランチにマージ

## デプロイメント

このプロジェクトは自動デプロイメントが設定されています：

1. `main` ブランチへのプルリクエストがマージされると、自動的にビルドが実行されます
2. ビルドが成功すると、自動的に本番環境のウェブサイトが更新されます
3. デプロイの状態はGitHub Actionsで確認できます

手動でビルドを確認したい場合：

```bash
npm run build
npm run preview
```

## 注意事項

- PDFファイルは必ず `public/pdfs/` ディレクトリに配置してください
- 画像ファイルは `src/images/` ディレクトリに配置してください
- コンテンツの更新は、対応するMarkdownファイルを編集してください
- コミットメッセージは変更内容が分かりやすいように記述してください

## プロジェクト構造

```
corporate-site/
├── public/          # 静的ファイル（画像、PDF等）
│   └── pdfs/       # PDFファイル
├── src/
│   ├── components/ # 再利用可能なコンポーネント
│   ├── content/    # コンテンツファイル（ニュース等）
│   ├── images/     # 画像ファイル
│   ├── layouts/    # レイアウトコンポーネント
│   └── pages/      # ページコンポーネント
└── styles/         # グローバルスタイル
```

## 編集方法

### 1. ニュース記事の追加・編集（devブランチ経由推奨）

#### 基本的な手順
1. **devブランチを選択**
   - GitHub上で「dev」ブランチを選択
2. **ファイルを編集**
   - `src/content/news/ja/` フォルダで新しいファイルを作成
   - ファイル名: `YYYY-MM-DD.md` 形式（例: `2025-01-15.md`）
3. **テンプレートを利用**
   - `src/content/news/templates/news-template-ja.md` を参考に記述
4. **プルリクエスト作成**
   - コミット後、「Compare & pull request」をクリック
   - プルリクエストの詳細を入力
5. **レビュー・マージ**
   - レビュー完了後、「Merge pull request」をクリック
   - 数分後にサイトに反映

#### 記事の形式例
```markdown
---
title: "記事のタイトル"
date: "2025-01-15"
summary: "記事の要約（100字程度）"
---

# 記事のタイトル

ここに記事の本文を書きます。

## 見出し2

段落を分ける場合は空行を入れます。

### 見出し3

- リスト項目1
- リスト項目2

**太字**や*斜体*も使えます。
```

---

### 2. PDFの追加・更新

1. PDFファイルを `public/pdfs/` ディレクトリに配置
2. `src/pages/index.astro` のPDFビューアーセクションで、`data` 属性のパスを更新：

```astro
<object
  data="/pdfs/your-pdf-file.pdf"
  type="application/pdf"
  width="100%"
  height="600px"
  class="rounded-lg"
>
  <p>PDFを表示できません。<a href="/pdfs/your-pdf-file.pdf" class="text-[#04666c] hover:underline">PDFをダウンロード</a></p>
</object>
```

### 3. 画像の追加・更新

1. 画像ファイルを `src/images/` ディレクトリに配置
2. コンポーネントで画像をインポートして使用：

```astro
---
import myImage from '../images/my-image.jpg?url';
---
<img src={myImage} alt="説明" />
```

### 4. スタイルのカスタマイズ

- グローバルスタイル: `src/styles/globals.css`
- コンポーネント固有のスタイル: 各コンポーネントファイル内の `<style>` タグ
- Tailwind CSSの設定: `tailwind.config.mjs`

### 5. OGP（Open Graph Protocol）の設定

各ページのOGP設定は、`Layout.astro` コンポーネントで行います：

```astro
---
// src/layouts/Layout.astro
interface Props {
  title: string;
  description?: string;
  image?: string;
}

const { 
  title,
  description = "NanoFrontier株式会社は、ナノ粒子化技術を用いて、さまざまな分野の課題解決に取り組んでいます。",
  image = "/images/ogp-default.jpg"
} = Astro.props;
---

<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    
    <!-- OGP設定 -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={Astro.url} />
    <meta property="og:image" content={new URL(image, Astro.url)} />
    <meta property="og:site_name" content="NanoFrontier" />
    <meta name="twitter:card" content="summary_large_image" />
    
    <!-- その他のメタタグ -->
    <link rel="icon" type="image/svg+xml" href={favicon} />
    <link rel="stylesheet" href="/src/styles/globals.css" />
  </head>
  <body>
    <Nav />
    <slot />
  </body>
</html>
```

ページごとにOGPを設定する場合：

```astro
---
// 各ページのコンポーネント
import Layout from '../layouts/Layout.astro';
---

<Layout 
  title="ページタイトル"
  description="ページの説明文"
  image="/images/page-specific-ogp.jpg"
>
  <!-- ページのコンテンツ -->
</Layout>
```

注意事項：
- OGP画像は `public/images/` ディレクトリに配置してください
- 画像サイズは1200x630ピクセルを推奨
- 各ページで適切なタイトルと説明文を設定してください