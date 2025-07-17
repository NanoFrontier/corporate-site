# コンテンツ更新ガイド（ニュース記事）

このガイドは、サイトのニュース記事などを追加・編集するための手順をまとめたものです。

## 基本手順

1. **devブランチを選択**
   - GitHub上で「dev」ブランチを選択してください
2. **ファイルを編集**
   - **日本語版**: `src/content/news/ja/` フォルダで新しいファイルを作成
   - **英語版**: `src/content/news/en/` フォルダで新しいファイルを作成
   - ファイル名は `YYYY-MM-DD.md` 形式（例: `20251-15.md`）
   - **重要**: 日本語版と英語版の両方を作成してください
3. **テンプレートを利用**
   - **日本語版**: `src/content/news/templates/news-template-ja.md` をコピー
   - **英語版**: `src/content/news/templates/news-template-en.md` をコピー
4. **プルリクエスト作成**
   - コミット後、「Compare & pull request」をクリック
   - プルリクエストの詳細を入力
5. **レビュー・マージ**
   - レビュー完了後、「Merge pull request」をクリック
   - 数分後にサイトに反映されます

## 記事ファイルの例
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

## リンクの例
[公式サイト](https://nanofrontier.jp)
[GitHubリポジトリ](https://github.com/NanoFrontier/corporate-site)

## テンプレート
- **日本語版**: `src/content/news/templates/news-template-ja.md` を参考にしてください
- **英語版**: `src/content/news/templates/news-template-en.md` を参考にしてください

---

困ったときは開発チームまでご相談ください。 