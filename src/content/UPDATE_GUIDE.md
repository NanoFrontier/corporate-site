# コンテンツ更新ガイド（ニュース記事）

このガイドは、サイトのニュース記事などを追加・編集するための手順をまとめたものです。

**GitHubリポジトリ**: [NanoFrontier/corporate-site](https://github.com/NanoFrontier/corporate-site)

## 基本手順

### 1. devブランチを選択
- GitHub上で「dev」ブランチを選択してください
- ![ブランチ選択](https://github.com/NanoFrontier/corporate-site/blob/dev/src/images/guide/branch-selection.png)

### 2. ファイルを編集
- **日本語版**: `src/content/news/ja/` フォルダで新しいファイルを作成
- **英語版**: `src/content/news/en/` フォルダで新しいファイルを作成
- ファイル名は `YYYY-MM-DD.md` 形式（例: `2025-1-15md`）
- **重要**: 日本語版と英語版の両方を作成してください
- ![ファイル作成](https://github.com/NanoFrontier/corporate-site/blob/dev/src/images/guide/add-file.png)

###3 テンプレートを利用
- **日本語版**: `src/content/news/templates/news-template-ja.md` をコピー
- **英語版**: `src/content/news/templates/news-template-en.md` をコピー
- ![テンプレートコピー](https://github.com/NanoFrontier/corporate-site/blob/dev/src/images/guide/copy-template.png)

### 4. Markdownプレビューで確認
- 編集内容を確認するには、外部のMarkdownプレビューサイトを使用
- おすすめ: https://stackedit.io/
- ![Markdownプレビュー](https://github.com/NanoFrontier/corporate-site/blob/dev/src/images/guide/markdown-preview.png)

### 5. コミット（保存）
- 編集完了後、「Commit changes」をクリック
- ![コミット](https://github.com/NanoFrontier/corporate-site/blob/dev/src/images/guide/commit-changes.png)

### 6. プルリクエスト作成
- コミット後、「Compare & pull request」をクリック
- プルリクエストの詳細を入力
- ![プルリクエスト作成](https://github.com/NanoFrontier/corporate-site/blob/dev/src/images/guide/create-pr.png)
- ![プルリクエスト詳細](https://github.com/NanoFrontier/corporate-site/blob/dev/src/images/guide/pr-details.png)

### 7 レビュー・マージ
- レビュー完了後、「Merge pull request」をクリック
- 数分後にサイトに反映されます
- ![マージ](https://github.com/NanoFrontier/corporate-site/blob/dev/src/images/guide/merge-pr.png)

## 重要なMarkdown記法ルール

### 見出しの書き方
**重要**: Astroでは最初の`#`はページタイトルとして扱われます。実際の見出しは`##`から始めてください。

```markdown
---
title: "記事のタイトル"
date: "2025-01-15"
summary: "記事の要約"
---

# 記事のタイトル（ページタイトル）

ここに記事の本文を書きます。

## 見出し1（実際の見出し）

段落を分ける場合は空行を入れます。

## 見出し2

### 見出し3（サブ見出し）

- リスト項目1
- リスト項目2
```

### 箇条書きの書き方
```markdown
- 箇条書き項目
  説明文は適切にインデントします

- 次の箇条書き項目
  説明文は適切にインデントします
```

### キー・バリューペアの書き方
```markdown
**イベント名：** DATERISE！2025

**日時：** 2025年8月23日（土）

**会場：** ウェスティンホテル仙台
```

### リンクの書き方
```markdown
[リンクテキスト](https://example.com)
```

## 記事ファイルの例
```markdown
---
title:記事のタイトル"
date: "202501-15
summary: "記事の要約（10字程度）---

# 記事のタイトル

ここに記事の本文を書きます。

## 見出し2

段落を分ける場合は空行を入れます。

### 見出し3

- リスト項目1
- リスト項目2

**太字**や*斜体*も使えます。

## 画像の追加

![画像の説明](/images/news/example-image.jpg)

## 画像の追加方法

### 画像ファイルの配置場所
- **ニュース記事用の画像**: `src/images/news/` フォルダに配置
- **その他の画像**: `src/images/` フォルダに配置
- **推奨ファイル形式**: JPG, PNG, WebP
- **ファイルサイズ**: 1MB以下を推奨（読み込み速度のため）

### 画像の指定方法
```markdown
<!-- 基本的な画像表示 -->
![画像の説明](/src/images/news/example-image.jpg)

<!-- サイズ指定（HTMLタグを使用） -->
<img src="/src/images/news/example-image.jpg" alt="画像の説明" width="500" height="300">

<!-- レスポンシブ画像 -->
<img src="/src/images/news/example-image.jpg" alt="画像の説明" style="max-width: 100%; height: auto;">
```

### 画像ファイルの命名規則
- ファイル名は英語で記述（例: `product-launch-2025.jpg`）
- スペースは使用せず、ハイフン（-）で区切る
- 日付を含める場合は `YYYY-MM-DD-` を先頭に付ける

### 画像の最適化
- 画像サイズは適切にリサイズしてからアップロード
- 画質とファイルサイズのバランスを考慮
- 必要に応じて複数サイズの画像を用意

## リンク
[公式サイト](https://nanofrontier.jp)
[GitHubリポジトリ](https://github.com/NanoFrontier/corporate-site)
[コンテンツディレクトリ](https://github.com/NanoFrontier/corporate-site/tree/main/src/content)

## テンプレート
- **日本語版**: `src/content/news/templates/news-template-ja.md` を参考にしてください
- **英語版**: `src/content/news/templates/news-template-en.md` を参考にしてください

## Markdownプレビューサイト
- **StackEdit**: https://stackedit.io/ (推奨)
- **Dillinger**: https://dillinger.io/
- **Markdown Live Preview**: https://markdownlivepreview.com/
- **HackMD**: https://hackmd.io/ (日本語対応)

---

困ったときは開発チームまでご相談ください。 