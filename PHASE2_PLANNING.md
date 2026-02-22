# Enterprise OS - Phase 2 計画

## 概要

Phase 1（企業向けEnterprise OSサイト）の完成を受けて、個人向けAI活用コンテンツとの統合を計画。

**ステータス**: 計画段階（YouTube動画完成待ち）

---

## コンセプト

### 上位概念

> **Enterprise OS は組織のOS。Planning Sheet はあなた個人のOS。**

- **Enterprise OS**: 企業・組織向けナレッジマネジメント（Phase 1で公開済み）
- **Planning Sheet**: 個人向けAI活用フレームワーク（Phase 2で統合予定）

### ターゲット

| モジュール | 対象 | 内容 |
|-----------|------|------|
| A (Personal OS) | 個人・実務者 | 逆算思考、Planning Sheet、一人セントラルキッチン |
| B (Enterprise OS) | 経営者・意思決定者 | 組織のナレッジOS、GitHub Enterprise活用 |
| C (Demo) | 全員 | 実践デモ、ツール紹介 |

---

## 統合予定コンテンツ

### ソースファイル

1. **PDF資料**: 個人AI活用プレゼン（20ページ）
2. **Planning Sheet**: `Planning_Sheet_by_Dave_v3.2.xlsx`
3. **YouTube動画**: 制作中

### 主要コンテンツ（PDFより）

#### 1. 逆算思考 + Planning Sheet
- A/B/C/D フレームワーク
- 最終ゴールから逆算して計画

#### 2. 情報の4分類
| 分類 | AIでの扱い |
|------|-----------|
| Public | 使える |
| General | 注意して使える |
| Confidential | 抽象化すれば可 |
| Restricted | 絶対ダメ |

#### 3. 抽象化テクニック
- 匿名化の具体例
- 安全にAIを活用するための情報変換

#### 4. 一人セントラルキッチン方式
- 個人でも「工場」のように効率化
- コンテンツの一括生成・展開

#### 5. 3役体制
| 役割 | ツール | 責務 |
|------|--------|------|
| 工場長 | Claude | 戦略・設計 |
| 職人 | Claude Code | 実装・制作 |
| 品質保証部 | レビューツール | チェック・検証 |

#### 6. AIハラスメント
- AI時代の新しい課題
- 適切なAI活用の啓発

---

## サイト構造オプション

### Option A: タブ切替UI
```
enterprise-os.davetanaka.net/
├── [タブ: 組織向け] → 現在のEnterprise OSコンテンツ
└── [タブ: 個人向け] → Planning Sheet / 個人AI活用
```

### Option B: 別ページ
```
enterprise-os.davetanaka.net/
├── /en, /ja → Enterprise OS（現状維持）
└── /personal → 個人向けコンテンツ
```

### Option C: 講演用のみ
- サイトは現状維持
- 講演時にA/B/Cモジュールを組み合わせ
- 個人向けコンテンツは別媒体（YouTube等）で展開

---

## 講演モジュール設計

### 構成パターン

| 講演タイプ | 構成 | 想定時間 |
|-----------|------|---------|
| 企業向けフル | B + C | 60分 |
| 個人向けフル | A + C | 60分 |
| 総合版 | A + B + C | 90分 |
| ショート | B のみ or A のみ | 30分 |

### モジュール詳細

**A: Personal OS（個人向け）**
- 逆算思考とPlanning Sheet
- 情報分類と抽象化
- 一人セントラルキッチン
- 3役体制

**B: Enterprise OS（組織向け）**
- なぜ企業AIは失敗するのか
- 3レイヤーアーキテクチャ
- GitHub Enterpriseの活用
- 導入ステップ

**C: Demo**
- 実際のツールデモ
- Claude / Claude Code の使い分け
- 質疑応答

---

## 次のステップ

### Phase 2 トリガー
- [ ] YouTube動画の完成
- [ ] Planning Sheet の最終版確定
- [ ] 講演スケジュール確定

### 実装タスク（トリガー後）
1. 個人向けコンテンツの翻訳ファイル作成（en.json / ja.json）
2. サイト構造の決定（Option A/B/C）
3. 新セクションのコンポーネント実装
4. Planning Sheet のダウンロード/紹介ページ
5. デプロイ・SEO更新

---

## 関連ファイル

- サイト: `/site/`
- Planning Sheet: `Planning_Sheet_by_Dave_v3.2.xlsx`
- Phase 1 計画: `.claude/plans/abstract-stirring-anchor.md`

---

*Last updated: 2026-02-22*
