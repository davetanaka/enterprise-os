export default function StructuredData({ locale }: { locale: string }) {
  const isJapanese = locale === "ja";

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Enterprise OS",
    description: isJapanese
      ? "会社のインテリジェンス（意味）をEntity Graphとして所有し、育て・統治するためのAI時代の知のOS"
      : "Own your company's intelligence as an Entity Graph — cultivate and govern it in the AI era",
    url: "https://enterprise-os.davetanaka.net",
    author: {
      "@type": "Person",
      name: "Dave Tanaka / 田中訓",
      url: "https://github.com/davetanaka",
      jobTitle: isJapanese
        ? "デジタルマーケティング＆AIプラクティショナー"
        : "Digital Marketing & AI Practitioner",
      sameAs: [
        "https://github.com/davetanaka",
        "https://www.youtube.com/davetanaka",
        "https://linkedin.com/in/davetanaka",
        "https://x.com/davetanaka",
      ],
    },
    inLanguage: locale === "ja" ? "ja-JP" : "en-US",
  };

  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: isJapanese
      ? "Enterprise OS - なぜ企業のAIは失敗するのか"
      : "Enterprise OS - Why Your Enterprise AI Is Failing",
    description: isJapanese
      ? "足りないのはAIじゃない。インテリジェンスを、所有せよ。会社のインテリジェンスをEntity Graphとして育て・統治する、AI時代の知のOS。"
      : "It's Not the AI You're Missing. Own Your Intelligence. Cultivate and govern your company's intelligence as an Entity Graph.",
    author: {
      "@type": "Person",
      name: "Dave Tanaka / 田中訓",
      url: "https://github.com/davetanaka",
    },
    datePublished: "2026-02-01",
    dateModified: "2026-02-22",
    publisher: {
      "@type": "Person",
      name: "Dave Tanaka / 田中訓",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://enterprise-os.davetanaka.net/${locale}`,
    },
    image: "https://enterprise-os.davetanaka.net/images/og-image.png",
    keywords: isJapanese
      ? "Enterprise AI, ナレッジマネジメント, GitHub Enterprise, DX, AI戦略"
      : "Enterprise AI, Knowledge Management, GitHub Enterprise, Digital Transformation, AI Strategy",
  };

  const speakerData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dave Tanaka / 田中訓",
    url: "https://github.com/davetanaka",
    image: "https://enterprise-os.davetanaka.net/images/dave-tanaka.jpg",
    jobTitle: isJapanese
      ? "デジタルマーケティング＆AIプラクティショナー"
      : "Digital Marketing & AI Practitioner",
    description: isJapanese
      ? "ASCII、Adobe、Apple、3Mで30年以上のデジタルマーケティング経験。3M Global Marketing Excellence Award 2025受賞。"
      : "30+ years of digital marketing experience at ASCII, Adobe, Apple, and 3M. Winner of 3M Global Marketing Excellence Award 2025.",
    knowsAbout: [
      "Enterprise AI",
      "Knowledge Management",
      "Digital Marketing",
      "Marketing Automation",
      "Video Production",
    ],
    award: "3M Global Marketing Excellence Award 2025",
    sameAs: [
      "https://github.com/davetanaka",
      "https://www.youtube.com/davetanaka",
      "https://linkedin.com/in/davetanaka",
      "https://x.com/davetanaka",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakerData) }}
      />
    </>
  );
}
