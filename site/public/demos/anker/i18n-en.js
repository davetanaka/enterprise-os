window.EN = {
  chrome: {
    subtitle: "Walk through Anker's product launch. Start by hitting the \"Next\" button below to check out the new products!",
    madeBy: "Created by Dave Tanaka (unofficial / personal project)",
    tourHeading: "Themed tours",
    mode_products_title: "Check out the latest products!",
    mode_products_copy: "Step through the new products in order",
    mode_brand_title: "One Anker",
    mode_brand_copy: "Explore the brand-integration topics",
    mode_safety_title: "Safety Context",
    mode_safety_copy: "The safety topics Anker is doubling down on",
    mode_free_title: "Free explore",
    mode_free_copy: "Click whatever topic you like",
    mobileTapHint: "💡 Tap a node for details / use ◀ ▶ to move through them",
    prev: "Back",
    next: "Next",
    autoplay: "Autoplay",
    autoplayStop: "Stop",
    lensHeading: "Axis lens",
    lensThemeCap: "View by theme (the same entity shows up on several axes)",
    lensCatCap: "View by product category",
    lensClear: "Clear",
    lensHint: "Colors the nodes and edges by axis. Reading the same launch through different lenses — that's the value of an Entity Graph.",
    legend_core: "Central hypothesis / hub node",
    legend_strategy: "Brand / corporate strategy",
    legend_tech: "Tech / AI / safety",
    legend_product: "Product",
    legend_partner: "Partnership / external environment",
    legend_external: "External context / society",
    legend_person: "Person",
    helpTitle: "Hit \"Next\" first",
    helpBody: "Rather than throwing the whole graph at you at once, it shifts focus one node at a time, in the order of the launch. Once you're comfortable, try \"Explore from products\" or \"Free explore.\"",
    detailTitleDefault: "Walk the Anker launch",
    detailLeadDefault: "Start the tour from \"Next\" on the left, and safety, AI, partnerships, and brand integration come into view as one throughline.",
    axisToggle: "⊕ Axis lens",
    modeLabelDefault: "5-minute tour",
    modeHintDefault: "Walks the launch in order",
    h_facts: "Official facts / briefing",
    h_spec: "Specs",
    h_vsPrev: "vs predecessor",
    h_sameCat: "Compare with same-category new products",
    h_take: "Dave's take",
    h_sources: "External sources",
    h_links: "Related nodes",
    priceLabel: "Price (incl. tax)",
    common: "Same",
    same: "Same",
    tagNew: "New",
    tagOld: "Old",
    predecessorSuffix: "(predecessor)",
    needCheck: "Needs check",
    sourceFallback: "Organizing",
    freeTime: "Free",
    freeTitle: "Click any node",
    freeCopy: "Drag, zoom, and click nodes to walk the conference."
  },
  nodes: {
    core: {
      label: "One Anker\nTowards one Anker",
      lead: "The theme running through the whole launch. The hub that binds this year's posture into three pillars.",
      facts: [
        "Not an official fact, but Dave's structuring built off CEO Ayumu Endo's \"One Anker\" and \"Innovation Faster.\"",
        "The three pillars = ① true safety is built across the whole product ② own the foundation, source the best from outside ③ category expansion and brand integration."
      ],
      take: "An annual new-product launch, sure — but the sheer spread, from safety measures to partnerships to AI collaboration, is exactly what made **One Anker** stand out. A strong statement of intent, reaffirming who they are as a manufacturer. That's what stuck with me."
    },
    safety: {
      label: "True safety is built\nacross the whole product",
      lead: "Safety isn't just cell chemistry — it's cell quality, the casing, the BMS, and the manufacturing/validation system, all of it.",
      facts: [
        "The gist: \"A good cell means safety — we don't believe that.\"",
        "Safety is delivered across the whole product, including the cell, the casing, and software control."
      ],
      take: "Opening with safety was very this-year. I liked how they placed it: build safety across the whole product. Not a cheap technical fix, but an honest answer to what's actually needed, and how to keep it going. That stuck with me."
    },
    nlb: {
      label: "Neo Lithium-ion Battery\nis the answer",
      lead: "NLB is Anker's new safety cell. Not a substitute material — a choice to evolve lithium-ion on multiple fronts.",
      facts: [
        "Impurities removed, stable against degradation, 100% pass rate on the nail-penetration test.",
        "Also clears the 135°C thermal-runaway test, pressure tests, and more."
      ],
      take: "Neo Lithium-ion Battery didn't reach for a flashy gimmick — it looks like an answer found by polishing the battery right at their feet. That's the Anker way of digging in: not riding the trend, but being the maker who makes it."
    },
    maggo: {
      label: "Nano Power Bank\n(MagGo, Plus)",
      lead: "The flagship power bank carrying NLB. Safety, convenience, and compactness all at once.",
      facts: [
        "Planned price 11,990 yen.",
        "Pre-orders open May 27, 2026; general sale around summer 2026.",
        "USB-C up to 30W, wireless up to 15W."
      ],
      take: "Instead of leaving safety as an abstraction, they first dropped it onto the Nano Power Bank (MagGo, Plus) — one device you can hold. Real thing before the explanation: the order is smart."
    },
    starflyer: {
      label: "StarFlyer\npartnership",
      lead: "Against the backdrop of new aviation rules restricting in-flight power-bank use, they're partnering on in-flight cable lending and awareness.",
      facts: [
        "From June 1, 2026, Anker USB cable lending planned across all StarFlyer routes and flights.",
        "Also planning knowledge-sharing and training support on safe use for cabin and ground crew."
      ],
      take: "The StarFlyer partnership takes the headwind of in-flight rules head-on. You can't make a safety philosophy real in the skies just by asking users to do their part — you need a partnership."
    },
    thus: {
      label: "Thus\nCiM-type AI chip",
      lead: "A proprietary AI chip in the Soundcore Liberty 5 Pro series. Higher compute while staying small.",
      facts: [
        "Compute-in-Memory AI chip.",
        "Sharply raises in-earbud processing performance.",
        "The tech behind Ultra Noise Cancelling 4.0."
      ],
      take: "If the battery is Neo Lithium-ion Battery, then for sound there's **Thus** (a CiM-type AI chip). Same throughline: hold the core of the experience yourselves."
    },
    libertymax: {
      label: "Liberty 5\nPro Max",
      lead: "A next-gen business earbud with a built-in AI voice recorder. Also a connection point to Azure AI.",
      facts: [
        "Planned price 36,990 yen.",
        "AI voice recorder, large-display control, 8 mics + bone-conduction sensor.",
        "SBC/AAC/LDAC support."
      ],
      take: "On top of the Liberty 5 Pro's already high performance, they bolted on an AI recorder for the strongest model yet. It shifts you from the passive \"listening to sound\" to a partner that supports your whole workday. The large display covers the entire case face. I'd recommend it to the forgetful, and to anyone who doesn't want to carry multiple devices."
    },
    libertypro: {
      label: "Liberty 5\nPro",
      lead: "The practical version, dropping the display from the Pro Max. The audio and AI inside are the real heart of the Pro series.",
      facts: [
        "Pro-level performance across silence, sound quality, and calls.",
        "Ultra Noise Cancelling 4.0.",
        "Audio optimized for Dolby Atmos.",
        "8 mics and a bone-conduction sensor.",
        "SBC/AAC/LDAC support.",
        "Midnight Black, Pearl White, Sky Blue, Silver Pink."
      ],
      take: "Smaller than the Max, but the display is still rich enough to operate with the case closed. It carries Anker's best-ever noise cancelling and call quality (these genuinely sounded great) and excellent Dolby Atmos sound. If you don't need the AI recorder separately, this might be the answer — on both price and sound."
    },
    work: {
      label: "Soundcore Work\n(64GB)",
      lead: "One of the world's smallest, lightest AI voice recorders. An Azure-AI product alongside the Liberty 5 Pro Max.",
      facts: [
        "Planned price 26,990 yen.",
        "On sale from early June 2026.",
        "Supports 150+ languages, with AI transcription and summarization."
      ],
      take: "Soundcore Work (64GB) is an AI recorder that plays to Anker's strengths. Being a late entrant, it's packed with Anker-ness — from the design to how the app feels to use. With their audio-visual chops, I expect even more from Anker in this genre: AI devices."
    },
    azure: {
      label: "Microsoft\nAzure AI",
      lead: "An AI platform that, rather than leaning on a single model, can tap OpenAI, Anthropic, and specialized models together.",
      facts: [
        "Azure AI powers the AI voice recorder features of the Liberty 5 Pro Max and Soundcore Work.",
        "Azure AI Speech supports 150+ languages/accents."
      ],
      take: "Microsoft Azure AI looks like a choice to pull in a strong outside engine and rebuild it into their own experience. Reinforcing this point through a partnership is exactly right, I think. What and how they implement on top of it — that's Anker's strength."
    },
    pokemon: {
      label: "Pokémon\n30th-anniversary collab",
      lead: "Not just function — a market-expansion move that adds everyday delight to gadgets.",
      facts: [
        "Four products: USB fast charger, travel adapter, C50i, and travel pouch.",
        "The concept: \"With Pokémon along, everyday life and travel turn into an adventure.\""
      ],
      take: "The Pokémon 30th-anniversary collab is just so well-judged that even an old guy like me suddenly wanted one. Classic Anker — and for things you use every day, a design you grow attached to really matters."
    },
    omnis2: {
      label: "Eufy Omni S2",
      lead: "Anker's highest-end robot vacuum. The flagship of the smart-home category.",
      facts: [
        "Planned price 249,900 yen.",
        "Up to 30,000Pa, CleanMind AI, 3D MatrixEye 2.0, HydroJet 2.0."
      ],
      take: "Every spec is appealing — full-auto cleaning, real-time mop washing, 30,000Pa — but above all it's beautiful to look at. Even on the show floor, it glowed."
    },
    solix: {
      label: "Anker Solix\nS2000",
      lead: "A portable power station aimed at disaster prep and home backup.",
      facts: [
        "Planned price 179,900 yen.",
        "On sale September 23, 2026.",
        "Prismatic LiFePO4 cell, 6,000+ cycles, with OptiSave."
      ],
      take: "The Anker Solix S2000 stretches the story from a palm-sized battery to your home's power infrastructure. The read on safety reaches all the way to the lifeline of daily life."
    },
    oneanker: {
      label: "Category expansion &\nbrand integration",
      lead: "Pillar ③. Widen the categories, then consolidate Soundcore/Eufy into Anker. The biggest corporate-strategy announcement this time.",
      facts: [
        "New corporate mission: Innovation Faster.",
        "Refreshed logo.",
        "Soundcore/Eufy to be consolidated into Anker."
      ],
      take: "It looks like they came to fold the categories up after spreading them out — binding the brand's scattered strengths back into one name. That's the consolidation phase."
    },
    theme_foundation: {
      label: "Own the foundation,\nsource the best from outside",
      lead: "Pillar ②. The battery (NLB) and AI chip (Thus) are made in-house; the AI and specialist areas they lack come via partnerships with Microsoft and StarFlyer. Hold the foundation, choose the best engine.",
      facts: [
        "In-house: NLB (cells), Thus (AI chip).",
        "Partnerships: Microsoft Azure (multi-model AI), StarFlyer (in-flight safety)."
      ],
      take: "Battery and chip they hold themselves; AI and partnerships they bring in from outside. That split looks like the backbone of Anker this time around."
    },
    soundcore: {
      label: "Soundcore\n→ Anker",
      lead: "Soundcore, grown as the audio & visual brand, gets integrated into Anker.",
      facts: ["Carries the Liberty series and the AI-voice-recorder context."],
      take: "Folding Soundcore into the Anker banner looks like a move to get closer to how users already say it. The sound experience, too, has come inside One Anker."
    },
    eufy: {
      label: "Eufy\n→ Anker",
      lead: "The smart-home brand Eufy is also slated to consolidate into Anker.",
      facts: ["Spans categories like Omni S2, SmartTrack, and eufyCam."],
      take: "By binding Eufy under the Anker name too, they came to show even the in-home experience along the same line. The \"Anker for daily life\" read gets stronger."
    },
    saruwatari: {
      label: "Anker Japan\nAyumu Endo\nRepresentative Director & CEO",
      lead: "The central figure who spoke to both the opening safety philosophy and the closing brand integration (One Anker, Innovation Faster).",
      facts: [
        "\"Saruwatari\" is read \"Endo Ayumu\" — the reason ASR misheard it as \"Endo.\"",
        "In the public version, unified as Ayumu Endo."
      ],
      take: "What stuck with me is that Ayumu Endo voiced both the opening safety and the closing **One Anker** in his own words. More than the wow of the numbers, he came to convey the weight — and that left an impression."
    },
    motoi: {
      label: "StarFlyer\nShinji Motoi\nHead of Sales Division",
      lead: "Executive Officer and Head of Sales Division at StarFlyer. A guest speaker who explained the Anker partnership (safety-minded cable lending, awareness, crew training) as a response to in-flight power-bank restrictions.",
      facts: [],
      take: "Shinji Motoi's talk was striking for framing in-flight usability and passenger safety on the same line. The reason to team up with Anker was right there."
    },
    uchiyama: {
      label: "Microsoft Japan\nTaku Uchiyama\nHead of Azure GTM",
      lead: "Business Executive Officer and Head of the Azure GTM Division (Sales Enablement & Operations) at Microsoft Japan. A guest speaker who explained how the Liberty 5 Pro Max / Soundcore Work AI uses Azure AI, with a structure that picks the best AI model rather than depending on a single one.",
      facts: [],
      take: ""
    },
    shibahara: {
      label: "Anker Japan\nWataru Shibahara\nBusiness Strategy Lead",
      lead: "Business Strategy Lead at Anker Japan. Announced the Soundcore Liberty 5 Pro / Pro Max, the in-house AI chip Thus, and the AI voice recorder feature.",
      facts: [],
      take: ""
    },
    kato: {
      label: "Anker Japan\nHitoaya Kato\nHead of Marketing",
      lead: "Executive Officer and Head of Marketing at Anker Japan. Announced the four Pokémon 30th-anniversary collab products, the Eufy Omni S2, and the Anker Solix S2000.",
      facts: [],
      take: ""
    },
    ida: {
      label: "Anker Japan\nMasato Ida\nHead of CX",
      lead: "Executive Officer and Head of Customer Experience at Anker Japan. Announced NLB (Neo Lithium-ion Battery), the Nano Power Bank, and the Style Pouch.",
      facts: [],
      take: ""
    },
    batteryTrend: {
      label: "Power-bank safety\nbecomes a social issue",
      lead: "Smoke and fire risk is now a societal theme — not just individual user caution, but aviation, disposal, and manufacturer responsibility.",
      facts: [
        "Anker's official article explains NLB against a backdrop of fire incidents and tightening aviation rules.",
        "MLIT materials also touch on domestic and overseas smoke/fire cases and risk management."
      ],
      take: "Why open by hammering on safety? Once you know the air outside the venue — fire, regulation, recalls — it clicks."
    },
    flightRule: {
      label: "April 24, 2026\nnew in-flight rules",
      lead: "From April 24, 2026, new rules apply at domestic airlines for carrying/using power banks on board.",
      facts: [
        "Up to 2 power banks carried on board (160Wh or less).",
        "Don't charge the power bank itself in-flight.",
        "Don't charge other devices from a power bank in-flight."
      ],
      take: "The StarFlyer partnership isn't a spur-of-the-moment tie-up. Seen as a concrete reply to this rule change, it lands."
    },
    recycle: {
      label: "Proper disposal\ncollection & recycling",
      lead: "Power banks must be handled safely all the way through post-use collection and recycling.",
      facts: [
        "Manufacturers/importers have collection obligations under the Act on the Promotion of Effective Utilization of Resources.",
        "Anker offers a collection service for used Anker power banks and portable power stations."
      ],
      take: "Make it, use it, toss it. This node is where you can stretch the safety story all the way to the throwing-away part."
    },
    recallTrust: {
      label: "Recall response &\nrebuilding trust",
      lead: "Anker is running collection/exchange intake for some power banks. Treated here as a market environment where the safety posture is being tested.",
      facts: [
        "Anker's official site hosts a power-bank collection/exchange intake form.",
        "An added note dated June 26, 2025 says ongoing investigation expanded the scope of affected units."
      ],
      take: "It's a market that also has collection-and-exchange news. That's exactly why the order — speaking to safety head-on — makes sense, the way I read it."
    },
    grp_power: { label: "Other Power products" },
    grp_audio: { label: "Other Audio products" },
    grp_smarthome: { label: "Other Smart Home products" },
    grp_pokemon: { label: "Pokémon collab" },
    anker_style_pouch: {
      label: "Anker Style Pouch",
      lead: "Flame-retardant material used on the pouch interior",
      facts: [
        "Flame-retardant material used on the pouch interior",
        "UL 94 V-0 compliance applies to the pouch interior only",
        "About 180 x 100 x 60mm, about 130g",
        "Holds gadgets, passports, and more"
      ],
      take: "A gadget pouch with a nice soft-leather feel. They locked down the inside with flame-retardant material, too. Trapezoidal, with a deeper base than it looks — it held a 5cm item. Double zipper, two stretchy net pockets that wrap your cables, one inner and one outer pocket — looks easy to keep organized."
    },
    anker_nano_power_strip_10in1_70w_clamp: {
      label: "Nano Power Strip (10-in-1, 70W, clamp)",
      lead: "A power strip you can install just by clamping it to a desk",
      facts: [
        "A power strip you can install just by clamping it to a desk",
        "10 ports total",
        "Up to 70W per port, up to 70W total",
        "6x AC outlets, 2x USB-C, 2x USB-A"
      ],
      take: "I'm buying this. The clamp mount that fixes it to your desk is the killer feature. 10 ports total — USB-C x2, USB-A x2, AC x6 — and 70W total output is great too. Feels like Anker's answer to cable hell."
    },
    anker_nano_usb_c_hub_10in1_240hz_display: {
      label: "Nano USB-C Hub (10-in-1, 240Hz)",
      lead: "A 10-in-1 USB-C hub with a built-in display",
      facts: [
        "A 10-in-1 USB-C hub with a built-in display",
        "Supports high refresh rates up to 240Hz",
        "HDMI 2.1 up to 4K@144Hz, DisplayPort 1.4 up to 4K@144Hz",
        "PD-capable USB-C charging port, up to 100W input"
      ],
      take: "A 10-in-1 hub with 240Hz output and a smart display. They sweated the usability of the dock gear you touch every day, Anker-style."
    },
    anker_solix_s2000: {
      label: "Solix S2000",
      lead: "2010Wh",
      facts: [
        "2010Wh",
        "About 20.8 x 28.2 x 32.3cm, about 16.2kg",
        "World's smallest and lightest in the 2000Wh class (per Anker, as of May 2026)",
        "Prismatic LiFePO4 cell",
        "Battery cell life of 6,000+ cycles",
        "Electronics lifespan of about 50,000 hours",
        "Fastest charge about 108 min in ultra-fast mode",
        "With OptiSave"
      ],
      take: "The Anker Solix S2000 stretches the story from a palm-sized battery to your home's power infrastructure. The read on safety reaches all the way to the lifeline of daily life."
    },
    soundcore_aerofit_2_pro: {
      label: "AeroFit 2 Pro",
      lead: "A 2-in-1 model combining open-ear and in-ear use",
      facts: [
        "A 2-in-1 model combining open-ear and in-ear use",
        "Ear hook adjustable to 5 angle settings",
        "11.8mm dynamic driver with an LCP diaphragm",
        "IP55",
        "SBC/AAC/LDAC support"
      ],
      take: "An aggressive design that works two ways: open-ear that leaves your ears unblocked, and in-ear that cuts ambient sound. One device that goes for both the comfort of listening-while-you-do-other-things and sound quality."
    },
    soundcore_boom_go_3i: {
      label: "Boom Go 3i",
      lead: "Compact speaker",
      facts: [
        "Compact speaker",
        "15W",
        "BassUp 2.0",
        "Up to 24 hours normal, up to 40 hours in eco mode",
        "IP68",
        "Bluetooth 6.0",
        "4800mAh power-bank function"
      ],
      take: "A small portable speaker. The LED lighting effects are fun, and the silicone strap makes it easy to set up anywhere. That signature Soundcore sound — the bass especially has real punch. 8,990 yen is maybe a touch pricey."
    },
    eufy_eufycam_c37: {
      label: "eufyCam C37",
      lead: "Security camera with 360-degree capture and auto-tracking",
      facts: [
        "Security camera with 360-degree capture and auto-tracking",
        "2K (about 3 megapixels)",
        "Built-in battery and solar panel",
        "IP65",
        "microSD card up to 256GB"
      ],
      take: "A security camera with a built-in solar panel. The 360-degree coverage is handy, and the AI motion-tracking that leans on it is reassuring. The 2K and 8x zoom strike a good balance."
    },
    eufy_smarttrack_card_e40: {
      label: "SmartTrack Card E40",
      lead: "Works on both iOS and Android",
      facts: [
        "Works on both iOS and Android",
        "About 1.7mm thin, about 12.0g",
        "Wireless charging support",
        "Bluetooth range up to 80m",
        "Up to 5 months on a single charge"
      ],
      take: "The card-type anti-loss tag finally gets wireless charging. About 1.7mm thin so it slips into your wallet — a quiet upgrade that works. You can never have too many of these."
    },
    soundcore_c50i_pokemon: {
      label: "Soundcore C50i Pikachu/Eevee",
      lead: "Ear-cuff wireless earbuds",
      facts: [
        "Ear-cuff wireless earbuds",
        "12mm dynamic driver",
        "IP55",
        "SBC/AAC/LDAC support",
        "Up to 7 hours, up to 28 hours with the charging case"
      ],
      take: "A playful entry putting Pokémon on an ear-cuff earbud. Less about function — one device that sells you on the attachment of wanting to carry it every day."
    },
    anker_usb_charger_70w_pikachu: {
      label: "USB Fast Charger 70W Pikachu",
      lead: "Up to 70W per port",
      facts: [
        "Up to 70W per port",
        "3 ports",
        "About 53 x 43 x 32mm, about 120g",
        "Special Pikachu and Poké Ball design"
      ],
      take: "A practical 70W charger with Pikachu's playful touch. Set it on your desk and your mood lifts — the royal road of collabs."
    },
    anker_travel_adapter_pikachu: {
      label: "Travel Adapter Pikachu",
      lead: "Usable in 200+ countries and regions",
      facts: [
        "Usable in 200+ countries and regions",
        "The Poké Ball section lights up when powered",
        "About 86 x 51 x 31mm, about 128g",
        "Up to 15W total when using multiple ports"
      ],
      take: "Makes the conversion adapter you always need on a trip fun, with Pokémon. A good example of how design matters most on practical items."
    },
    anker_travel_pouch_pikachu: {
      label: "Travel Pouch Pikachu",
      lead: "Special Pokémon and Poké Ball design",
      facts: [
        "Special Pokémon and Poké Ball design",
        "About 180 x 100 x 80mm, about 101g",
        "Holds Pokémon-design chargers and earbuds",
        "Back pocket handy for storing passports and the like"
      ],
      take: "The collab version of a pouch for bundling cables and chargers. There's a joy in matching even the small stuff to one world."
    }
  },
  edges: {
    "柱": "Pillar",
    "技術化": "Tech",
    "搭載": "Built-in",
    "信頼化": "Trust",
    "内製": "In-house",
    "兄弟モデル": "Sibling",
    "AI基盤": "AI platform",
    "協業AI": "Partner AI",
    "市場拡張": "Market expansion",
    "ライン": "Line",
    "カテゴリ拡張": "Category expansion",
    "電力基盤": "Power base",
    "内製セル": "In-house cell",
    "協業": "Partner",
    "年内集約": "Consolidating",
    "発言": "Statement",
    "発表": "Announced",
    "代表": "CEO",
    "登壇": "On stage",
    "背景": "Context",
    "公式解説": "Official note",
    "規制": "Regulation",
    "ライフサイクル": "Lifecycle",
    "信頼": "Trust",
    "その他": "Others",
    "前モデル": "Predecessor"
  },
  tours: {
    brand: {
      label: "One Anker",
      hint: "Brand-integration topics",
      sequence: [
        ["oneanker", "00:54:36", "Brand integration", "The big announcement consolidating Soundcore/Eufy into Anker."],
        ["soundcore", "Confirmed", "Soundcore → Anker", "The audio products come back to Anker too."],
        ["eufy", "Confirmed", "Eufy → Anker", "Smart Home comes back to Anker too."],
        ["core", "Dave's read", "The brand as foundation, too", "After widening the categories, the entry point returns to Anker."]
      ]
    },
    products: {
      label: "Check out the latest products",
      hint: "Step through the new products in order",
      sequence: [
        ["maggo", "Power", "Nano Power Bank (MagGo, Plus)", "The flagship power bank carrying NLB. Carry your safety with you."],
        ["anker_style_pouch", "Power", "Anker Style Pouch", "A gadget pouch flame-retardant down to the lining. Safety philosophy, even in the small stuff."],
        ["anker_nano_power_strip_10in1_70w_clamp", "Power", "Nano Power Strip (10-in-1, 70W)", "10 ports, 70W, clamped to your desk. An answer to cable hell."],
        ["anker_nano_usb_c_hub_10in1_240hz_display", "Power", "Nano USB-C Hub (10-in-1, 240Hz)", "A 10-in-1 hub with 240Hz output and a smart display."],
        ["solix", "Power", "Anker Solix S2000", "From a palm-sized battery to your home's power infrastructure."],
        ["libertymax", "Audio", "Liberty 5 Pro Max", "With an AI voice recorder. An AI work tool you wear in your ears."],
        ["libertypro", "Audio", "Liberty 5 Pro", "The pick for people who don't need a display. The inside is pure Pro."],
        ["work", "AI", "Soundcore Work (64GB)", "A compact AI recorder that turns voice into knowledge. 150 languages."],
        ["soundcore_aerofit_2_pro", "Audio", "Soundcore AeroFit 2 Pro", "An aggressive open/in-ear 2-way design."],
        ["soundcore_boom_go_3i", "Audio", "Soundcore Boom Go 3i", "A small speaker selling on LED flair and punchy bass."],
        ["omnis2", "Smart Home", "Eufy Omni S2", "The flagship vacuum: 30,000Pa, CleanMind AI."],
        ["eufy_eufycam_c37", "Smart Home", "Eufy eufyCam C37", "A solar-powered, 360-degree AI motion-tracking camera."],
        ["eufy_smarttrack_card_e40", "Smart Home", "Eufy SmartTrack Card E40", "An anti-loss tag about 1.7mm thin with wireless charging."],
        ["soundcore_c50i_pokemon", "Collab", "Soundcore C50i Pikachu/Eevee", "A playful entry putting Pokémon on an ear-cuff earbud."],
        ["anker_usb_charger_70w_pikachu", "Collab", "USB Fast Charger 70W Pikachu", "A practical 70W charger with Pikachu's playful touch."],
        ["anker_travel_adapter_pikachu", "Collab", "Travel Adapter Pikachu", "Makes the travel adapter you always need fun with Pokémon."],
        ["anker_travel_pouch_pikachu", "Collab", "Travel Pouch Pikachu", "A travel pouch that matches even the small stuff to one world."]
      ]
    },
    safetyContext: {
      label: "Safety Context",
      hint: "The safety topics Anker is doubling down on",
      sequence: [
        ["batteryTrend", "Social context", "Safety became a social issue", "Power-bank safety now spans aviation, disposal, and manufacturer responsibility."],
        ["flightRule", "2026-04-24", "In-flight rules change", "See the StarFlyer partnership as a concrete response to the rule change."],
        ["recycle", "Disposal/collection", "Safety includes tossing it properly", "Power banks are safe only when you include post-use collection and recycling."],
        ["recallTrust", "Trust", "Recall response & rebuilding trust", "Read the meaning of the NLB launch within a market where the safety posture is tested."],
        ["safety", "Back to the launch", "True safety is built across the whole product", "After the external context, return to the opening safety message."]
      ]
    },
    free: { label: "Free explore", hint: "Click any topic" }
  },
  axes: {
    price_jpy_tax_in: "Price (incl. tax)",
    size_mm: "Size",
    size_cm: "Size",
    size_robot_cm: "Size (unit)",
    size_station_cm: "Size (station)",
    weight_g: "Weight",
    weight_kg: "Weight",
    weight_robot_kg: "Weight (unit)",
    weight_station_kg: "Weight (station)",
    weight_earbud_g: "Weight (per earbud)",
    weight_case_g: "Weight (with case)",
    weight_mic_g: "Weight (mic unit)",
    max_output_w: "Max output (per port)",
    total_output_w: "Total max output",
    max_input_w: "Max input",
    wireless_charge_w: "Wireless output",
    ac_rated_output_w: "AC rated output",
    audio_output_w: "Audio output",
    battery_capacity_wh: "Battery capacity",
    battery_capacity_mah: "Battery capacity",
    storage_gb: "Built-in storage",
    port_count: "Port count",
    ports_detail: "Port layout",
    min_charge_time_min: "Fastest charge (ultra-fast)",
    battery_cycle_life: "Battery cell life",
    electronics_lifespan_h: "Electronics lifespan",
    charge_time_min: "Charge time",
    noise_cancelling: "Noise cancelling",
    mic_count: "Mic count",
    codecs: "Supported codecs",
    hires_audio: "Hi-Res audio playback",
    spatial_audio: "Spatial audio",
    driver: "Driver",
    bluetooth: "Connectivity",
    control: "Controls",
    multipoint: "Multipoint connection",
    ambient_sound: "Ambient sound",
    display: "Display",
    ai_voice_recorder: "AI voice recorder",
    quick_charge: "Quick charge",
    frequency_range: "Frequency range",
    bassup: "BassUp technology",
    equalizer: "Equalizer",
    call_noise_reduction: "Call noise reduction",
    two_in_one_mode: "2-in-1 mode",
    dual_pairing: "Dual pairing",
    power_bank_function: "Power-bank function",
    playtime_anc_on_h: "Playtime (ANC on, buds)",
    playtime_anc_off_h: "Playtime (ANC off, buds)",
    playtime_case_anc_on_h: "Playtime (ANC on, with case)",
    playtime_case_anc_off_h: "Playtime (ANC off, with case)",
    playtime_h: "Playtime (buds)",
    playtime_case_h: "Playtime (with case)",
    playtime_normal_h: "Playtime (normal)",
    playtime_eco_h: "Playtime (eco mode)",
    recording_time_h: "Continuous recording time",
    water_resistance: "Dust/water rating",
    colors: "Colors",
    color_count: "Color count",
    suction_pa: "Suction (max)",
    mop_type: "Mop type",
    navigation: "Navigation system",
    obstacle_avoidance: "Obstacle avoidance",
    matter_support: "Matter support",
    cleaning_time_min: "Cleaning time",
    mop_lift_mm: "Mop lift",
    auto_dust_collection: "Auto dust collection",
    auto_detergent: "Auto detergent dispensing",
    extendable_side_brush: "Extendable side brush",
    ozone_water_sanitizing: "Ozone-water sanitizing",
    anti_tangle: "Anti-tangle",
    mop_auto_wash_dry: "Mop auto wash & dry",
    mop_wash_while_running: "Mop wash while running",
    camera_resolution: "Camera resolution",
    field_of_view_deg: "Field of view",
    pan_tilt: "Pan/tilt",
    solar_panel: "Solar panel",
    storage_media: "Storage media",
    supported_os: "Supported OS",
    bluetooth_range_m: "Bluetooth max range",
    alarm_volume_db: "Alarm volume",
    battery_life: "Battery life",
    charging: "Charging method",
    wireless_charging: "Wireless charging",
    ai_model: "AI model",
    multilingual: "Multilingual support",
    ai_features: "AI features",
    battery_chemistry: "Battery type",
    lfp_battery: "LiFePO4 battery",
    technologies: "Built-in technologies",
    expansion_battery: "Expansion battery support",
    app_support: "App support",
    clamp_mount: "Clamp mount",
    ac_input_rating: "AC rated voltage/current",
    flame_retardant_standard: "Flame-retardant standard",
    ear_hook_adjustment: "Ear hook angle adjustment",
    video_output: "Video output",
    max_refresh_rate_hz: "Max refresh rate",
    standby_days: "Standby time (mic unit)",
    recording_time_case_h: "Recording time (with case)",
    input: "Input",
    output: "Output",
    country_coverage: "Countries/regions",
    single_port_max_w: "Single-port max output",
    normal_charge_time_min: "Charge time (normal)",
    playtime_openear_h: "Playtime (open-ear)",
    playtime_innerear_h: "Playtime (in-ear)",
    size_case_mm: "Size (case)",
    mic: "Mic",
    standby_case_days: "Standby (with case)"
  },
  themeAxes: { safety: "🛡 Safety", inhouse: "🔧 In-house", partnership: "🤝 Partnership", ai: "🤖 AI", brand: "🏢 Brand integration" },
  catAxes: { power: "🔌 Power", audio: "🎧 Audio", smarthome: "🏠 Smart Home", pokemon: "⚡ Pokémon" }
};
