# Express + Next.js Monorepo App

このリポジトリは、フロントエンド（Next.js）とバックエンド（Express）を同一リポジトリ（Monorepo）で管理するWebアプリケーションです。

## 📁 プロジェクト構成
expressapp/
├── frontend/      # フロントエンド (Next.js + TypeScript)
├── backend/       # バックエンド (Express + TypeScript)
└── README.md

---

## 🚀 技術スタック

| 分類       | 使用技術                          |
|------------|-----------------------------------|
| フロント   | Next.js (App Router), React, TypeScript |
| バックエンド | Express.js, TypeScript, CORS     |
| ツール類   | Git, npm, nodemon, ts-node        |

---

## 🧩 セットアップ手順

### 1. リポジトリのクローン

```bash
git clone https://github.com/your-name/your-repo-name.git
cd your-repo-name

2. フロントエンドのセットアップ

cd frontend
npm install
npm run dev

ローカルサーバー: http://localhost:3000

3. バックエンドのセットアップ
cd backend
npm install
npm run dev

📌 主なエンドポイント
✅ 使用方法（概要）
	1.	frontend を起動してUIを表示
	2.	backend からAPIを起動
	3.	フロントエンドからAPIを叩いて動作確認


