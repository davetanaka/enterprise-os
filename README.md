# Enterprise OS

**Using GitHub Enterprise as a version-controlled knowledge operating system for the AI era.**

企業の知識をバージョン管理する — AI時代のためのオペレーティングシステム構想

📢 **[MANIFESTO.md](./MANIFESTO.md)** — **The Gold Rush Is Over.** AIの学習教材を売ることが「AIの本質」なのか？我々が目指すべきはそこではない。

---

## The Problem / 問題

88% of organizations use AI, but only 39% see measurable business impact (McKinsey, Nov 2025). The gap isn't the AI — it's the fragmented data infrastructure underneath.

88%の企業がAIを導入しているが、実際の効果を実感しているのはわずか39%。AIの問題ではない。その下にあるデータ基盤の問題だ。

## The Concept / コンセプト

Enterprise OS proposes using **Git + GitHub Enterprise** as a unified knowledge management layer across the entire organization — not just for code, but for all corporate knowledge.

Enterprise OSは **Git + GitHub Enterprise** を全社的な統合知識管理レイヤーとして活用する構想。コードだけでなく、すべての企業ナレッジを対象とする。

### Three Layers / 3つのレイヤー

| Layer                 | Role                                                         | 役割                                        |
| --------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| **Infrastructure**    | Git as the versioned file system for ALL corporate knowledge | Gitを全社の知識のバージョン管理基盤に       |
| **Intelligence**      | AI reads from a unified, structured knowledge base           | 統一された知識基盤からAIが読み取る          |
| **Human Flourishing** | Time freed from routine → creative, human, innovative work   | 定型業務からの解放 → 創造的で人間的な仕事へ |

## Presentation / プレゼンテーション資料

📄 **[Enterprise_OS_Public_EN.pdf](./slides/Enterprise_OS_Public_EN.pdf)** — English (18 slides)

📄 **[Enterprise_OS_Public_JP.pdf](./slides/Enterprise_OS_Public_JP.pdf)** — 日本語版 (18 slides)

## Key Data Points / 主要データ

- **1.8 hrs/day** per employee spent searching for information (McKinsey)
- **$31.5B/yr** lost by Fortune 500 from failure to share knowledge (IDC)
- **376% ROI** from GitHub Enterprise Cloud over 3 years (Forrester, July 2025)
- **92%** of Fortune 100 already use GitHub Enterprise
- **40–60 min/day** saved per enterprise AI user (OpenAI, 2025)

## Why GitHub Enterprise? / なぜGitHub Enterpriseなのか

Software engineers solved the knowledge management problem 20 years ago with Git. Enterprise OS simply applies it company-wide:

- **commit** → Every change recorded with history & reason
- **branch** → Regional/department variants without breaking source
- **pull request** → Review & approval before changes go live
- **merge** → Approved changes deploy everywhere
- **fork** → Partner customization enabled

## Who Is This For / 対象

- CIOs, CTOs, and IT leaders evaluating enterprise knowledge management
- Marketing & operations leaders frustrated with fragmented systems
- Innovation teams looking for practical AI infrastructure frameworks
- Anyone who's asked: _"Why is our enterprise AI so... stupid?"_

## About the Author / 著者

**田中訓 / Dave Tanaka**
Automation & Innovation Manager at a global manufacturing company

30+ years at the intersection of marketing and technology — ASCII (MacPower) → Adobe → Apple → 3M. Currently building AI-powered enterprise tools from the inside. Not an outside consultant's theory; a practitioner's framework.

- 🎬 [DAVE Channel (YouTube)](https://youtube.com/@davetanaka) — ミドル・シニア世代向けガジェット・AI・Digital DIY
- 📝 [note](https://note.com/davetanaka) — 日本語での詳細解説
- 💼 [LinkedIn](https://linkedin.com/in/davetanaka)
- 🐦 [X / Twitter](https://x.com/davetanaka)

## How to Use This / 使い方

⭐ **Star** this repo if you find the concept valuable

🍴 **Fork** to adapt the framework for your organization

💬 **Issues** — Questions, feedback, and discussion welcome

🔀 **Pull Requests** — Improvements and translations welcome

## Tech Stack / 技術スタック

### Website

| Category | Technology | Version |
|----------|------------|---------|
| **Framework** | [Next.js](https://nextjs.org/) (App Router) | 16.1.6 |
| **React** | React | 19.2.3 |
| **Language** | TypeScript | 5.x |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | 4.x |
| **Animation** | [Framer Motion](https://www.framer.com/motion/) | 12.x |
| **i18n** | [next-intl](https://next-intl.dev/) | 4.8.3 |
| **Hosting** | [Cloudflare Pages](https://pages.cloudflare.com/) | — |
| **Domain** | [enterprise-os.davetanaka.net](https://enterprise-os.davetanaka.net) | — |

### Build & Export

- **Static Export**: `output: "export"` で完全静的サイト生成
- **SEO**: sitemap.xml, robots.txt, JSON-LD 構造化データ
- **Dark/Light Mode**: CSS変数 + localStorage

### AI Crawler Support

robots.txt で以下のAIクローラーを明示的に許可:
- GPTBot (OpenAI)
- PerplexityBot
- ClaudeBot (Anthropic)
- Google-Extended (Gemini)
- Bytespider (ByteDance)

---

## License / ライセンス

This work is licensed under [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).

You are free to share and adapt this material for non-commercial purposes, with attribution, under the same license. For commercial use or speaking engagements, please contact the author.

© 2026 Dave Tanaka. All rights reserved.

---

_Enterprise OS is being developed as a live "Digital DIY" project — building, documenting, and sharing the journey in real time._

_Enterprise OSは「Digital DIY」のライブプロジェクトとして開発中 — 構築し、記録し、リアルタイムで共有しています。_
