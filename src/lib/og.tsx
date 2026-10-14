import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Shared Open Graph card: ink-violet background, eyebrow, title and footer line.
export function renderOgCard({ eyebrow, title, footer, mark = "DL" }: { eyebrow: string; title: string; footer: string; mark?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #2a1670 0%, #160c3d 60%, #09080f 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#ffffff",
              color: "#2a1670",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {mark}
          </div>
          <div style={{ fontSize: 28, opacity: 0.85, letterSpacing: 2, textTransform: "uppercase" }}>{eyebrow}</div>
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1.5, maxWidth: 1000 }}>{title}</div>
        <div style={{ fontSize: 28, opacity: 0.8 }}>{footer}</div>
      </div>
    ),
    ogSize,
  );
}
