# コンテンツ更新ガイド（ニュース記事）

このガイドは、サイトのニュース記事などを追加・編集するための手順をまとめたものです。

**GitHubリポジトリ**: [NanoFrontier/corporate-site](https://github.com/NanoFrontier/corporate-site)

## 基本手順

### 1. devブランチを選択
- GitHub上で「dev」ブランチを選択してください
- ![ブランチ選択](https://github.com/NanoFrontier/corporate-site/blob/main/images/guide/branch-selection.png)

### 2. ファイルを編集
- **日本語版**: `src/content/news/ja/` フォルダで新しいファイルを作成
- **英語版**: `src/content/news/en/` フォルダで新しいファイルを作成
- ファイル名は `YYYY-MM-DD.md` 形式（例: `2025-1-15md`）
- **重要**: 日本語版と英語版の両方を作成してください
- ![ファイル作成](https://github.com/NanoFrontier/corporate-site/blob/main/images/guide/add-file.png)

###3 テンプレートを利用
- **日本語版**: `src/content/news/templates/news-template-ja.md` をコピー
- **英語版**: `src/content/news/templates/news-template-en.md` をコピー
- ![テンプレートコピー](https://github.com/NanoFrontier/corporate-site/blob/main/images/guide/copy-template.png)

###4. Markdownプレビューで確認
- 編集内容を確認するには、外部のMarkdownプレビューサイトを使用
- おすすめ: https://stackedit.io/
- ![Markdownプレビュー](https://github.com/NanoFrontier/corporate-site/blob/main/images/guide/markdown-preview.png)

### 5. コミット（保存）
- 編集完了後、「Commit changes」をクリック
- ![コミット](https://github.com/NanoFrontier/corporate-site/blob/main/images/guide/commit-changes.png)

###6. プルリクエスト作成
- コミット後、「Compare & pull request」をクリック
- プルリクエストの詳細を入力
- ![プルリクエスト作成](https://github.com/NanoFrontier/corporate-site/blob/main/images/guide/create-pr.png)
- ![プルリクエスト詳細](https://github.com/NanoFrontier/corporate-site/blob/main/images/guide/pr-details.png)

### 7 レビュー・マージ
- レビュー完了後、「Merge pull request」をクリック
- 数分後にサイトに反映されます
- ![マージ](https://github.com/NanoFrontier/corporate-site/blob/main/images/guide/merge-pr.png)

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
```

## リンクの例
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