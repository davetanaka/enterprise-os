# 意味を所有し、統治する — Owning & Governing the Ontology

> Enterprise OS の主張の後半＝「**箱（GitHub）で、意味を育て・統治する**」を、このリポジトリ自身で実演する。
> The second half of the Enterprise OS thesis — *cultivate & govern your meaning in a box (GitHub)* — demonstrated by this repo itself.

## 正本 / Source of truth

このリポジトリは、デモの **Entity Graph（オントロジー）の意味そのもの**を schema-as-code として所有する：

| ファイル | 何の意味か |
|---|---|
| [`powerbank_kg.json`](./powerbank_kg.json) | モバイルバッテリー市場のオントロジー（製品・ブランド・ターゲット層・利用文脈・技術・規制と、その**関係**） |
| `site/public/demos/anker/data/` | Anker 発表会のオントロジー |

スペック表でもDBでもベンダーのモデルでもなく、**「誰に・どの場面で・何が要る・何に縛られる」という関係＝意味**を、ここで所有する。

## Git＝意味の統治モデル / Governance model

| 操作 | 意味の統治における役割 |
|---|---|
| `commit` | **意味が変わった記録**（いつ・何が・なぜ） |
| `branch` | 地域・部門・用途ごとの**意味の版**（壊さず分岐） |
| `pull request` | **意味の変更をレビューする**（人が信頼性を守る） |
| `merge` | 承認された意味が**本番に反映** |
| `fork` | パートナー／自社版へ**意味を展開** |
| version (`meta.version`) | オントロジーの版（例 `1.1.0`） |

AI は構造（グラフ）を生成・活用する。**人は、その意味が信頼に足るかを統治する。**

## 実例 / A governed change

世界で意味が変わったとき、オントロジーをレビューして更新する——その実演：

- **PR #1**: [ontology: add the 100Wh airline approval line](https://github.com/davetanaka/enterprise-os/pull/1)
  2026-04-24 の国土交通省・航空機リチウム電池規制の施行を受け、「100Wh 事前承認ライン」を Regulation ノードとして追加し、102.3Wh の製品に `limited_by` を結び、version を `1.0.0 → 1.1.0` に。
  ＝ `commit`（意味の変化）→ `PR`（レビュー）→ `merge`（本番反映）の一周。

## 自社で / For your organization

このグラフは [fork](https://github.com/davetanaka/enterprise-os/fork) して自社の製品・顧客・規制で置き換えられる。**借りるのはAI。所有するのは、意味。**
*Rent the AI. Own the meaning.*
