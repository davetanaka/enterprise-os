"use client";

import { useEffect, useRef } from "react";
import { useLocale } from "next-intl";

// vis-network を CDN から一度だけロード
function loadVis(): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const w = window as unknown as { vis?: unknown };
    if (w.vis) return resolve(w.vis);
    const existing = document.getElementById("vis-net-cdn");
    if (existing) {
      existing.addEventListener("load", () => resolve(w.vis));
      return;
    }
    const s = document.createElement("script");
    s.id = "vis-net-cdn";
    s.src =
      "https://unpkg.com/vis-network@9.1.9/standalone/umd/vis-network.min.js";
    s.onload = () => resolve(w.vis);
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

export default function HeroGraph() {
  const ref = useRef<HTMLDivElement>(null);
  const locale = useLocale();

  useEffect(() => {
    let cancelled = false;
    let drift: ReturnType<typeof setInterval> | undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let net: any;

    const ja = locale === "ja";
    // Enterprise OS コンセプトグラフ（意味のグラフ）
    const L = (j: string, e: string) => (ja ? j : e);
    const C = {
      blue: "#4361ee",
      teal: "#2a9d8f",
      gold: "#e9c46a",
      pink: "#f472b6",
      red: "#e63946",
    };
    const NODES = [
      { id: "core", label: "Entity Graph", color: C.blue, size: 26 },
      { id: "customer", label: L("顧客", "Customer"), color: C.teal, size: 16 },
      { id: "product", label: L("製品", "Product"), color: C.gold, size: 16 },
      { id: "region", label: L("地域", "Region"), color: C.pink, size: 15 },
      { id: "campaign", label: L("キャンペーン", "Campaign"), color: C.red, size: 15 },
      { id: "knowledge", label: L("ナレッジ", "Knowledge"), color: C.gold, size: 15 },
      { id: "translation", label: L("翻訳", "Translation"), color: C.blue, size: 14 },
      { id: "policy", label: L("ポリシー", "Policy"), color: C.teal, size: 14 },
      { id: "colleague", label: L("同僚", "Colleague"), color: C.pink, size: 14 },
    ];
    const EDGES = [
      ["core", "customer"], ["core", "product"], ["core", "region"],
      ["core", "campaign"], ["core", "knowledge"], ["core", "translation"],
      ["core", "policy"], ["core", "colleague"],
      ["customer", "campaign"], ["product", "region"],
      ["knowledge", "translation"], ["policy", "region"], ["colleague", "knowledge"],
    ];

    loadVis().then((visUnknown) => {
      if (cancelled || !ref.current) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const vis = visUnknown as any;
      const nodes = new vis.DataSet(
        NODES.map((n) => ({
          id: n.id,
          label: n.label,
          shape: "dot",
          size: n.size,
          color: { background: n.color, border: n.color, highlight: { background: "#fff", border: n.color } },
          font: { color: "#dfe3ee", size: n.id === "core" ? 15 : 12, face: "Inter, Noto Sans JP", strokeWidth: 3, strokeColor: "#14172a" },
        }))
      );
      const edges = new vis.DataSet(
        EDGES.map((e, i) => ({
          id: "e" + i,
          from: e[0],
          to: e[1],
          color: { color: "rgba(120,140,200,.35)", highlight: C.blue },
          width: e[0] === "core" ? 1.4 : 1,
          smooth: { type: "continuous", roundness: 0.25 },
        }))
      );
      net = new vis.Network(
        ref.current,
        { nodes, edges },
        {
          physics: {
            barnesHut: { gravitationalConstant: -3200, centralGravity: 0.09, springLength: 95, springConstant: 0.04, damping: 0.5, avoidOverlap: 0.5 },
            minVelocity: 0.01, timestep: 0.4, stabilization: { iterations: 160 },
          },
          interaction: { hover: true, zoomView: false, dragView: false, dragNodes: true, selectConnectedEdges: false },
          nodes: { borderWidth: 2 },
        }
      );
      net.once("stabilizationIterationsDone", () => net.fit({ animation: { duration: 600 } }));
      // 永続うにうに：数ノードを微小に揺らして生かし続ける
      drift = setInterval(() => {
        if (document.hidden || cancelled) return;
        const ids = nodes.getIds();
        const pos = net.getPositions();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const upd: any[] = [];
        for (let k = 0; k < 3; k++) {
          const id = ids[Math.floor(Math.random() * ids.length)];
          if (!pos[id]) continue;
          upd.push({ id, x: pos[id].x + (Math.random() * 26 - 13), y: pos[id].y + (Math.random() * 26 - 13) });
        }
        if (upd.length) { nodes.update(upd); net.startSimulation(); }
      }, 1600);
    });

    return () => {
      cancelled = true;
      if (drift) clearInterval(drift);
      if (net) net.destroy();
    };
  }, [locale]);

  return (
    <div
      ref={ref}
      aria-label="Enterprise OS — live Entity Graph"
      className="w-full aspect-[3/2] rounded-xl shadow-2xl overflow-hidden border border-accent-blue/20"
      style={{
        background:
          "radial-gradient(ellipse 600px 400px at 70% 30%, rgba(67,97,238,.14), transparent 60%), radial-gradient(ellipse 500px 350px at 25% 80%, rgba(42,157,143,.10), transparent 60%), linear-gradient(135deg,#1e2235,#14172a 60%)",
      }}
    />
  );
}
