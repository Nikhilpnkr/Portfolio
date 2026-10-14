"use client";

import { useRef } from "react";

// Exploded 3D view of a full stack: database, server, web app, Android app.
// Pure CSS 3D; this component only feeds pointer position into CSS variables.
export function StackHero() {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--tx", ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    ref.current.style.setProperty("--ty", ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  }

  function onLeave() {
    ref.current?.style.setProperty("--tx", "0");
    ref.current?.style.setProperty("--ty", "0");
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="stack-scene"
      role="img"
      aria-label="An exploded view of a full software stack: database, server, web app and Android app, built and run by one developer"
    >
      <div className="stack">
        <div className="stack-layer" style={{ "--i": 0 } as React.CSSProperties}>
          <span className="stack-label">PostgreSQL + row-level security</span>
          <div className="stack-db">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>
        </div>
        <div className="stack-layer" style={{ "--i": 1 } as React.CSSProperties}>
          <span className="stack-label">Server, workflows and payments</span>
          <div className="stack-code">
            <span style={{ width: "62%" }} />
            <span style={{ width: "44%", marginLeft: "12%" }} />
            <span style={{ width: "70%", marginLeft: "12%" }} />
            <span style={{ width: "36%", marginLeft: "24%" }} />
            <span style={{ width: "52%", marginLeft: "12%" }} />
            <span style={{ width: "28%" }} />
          </div>
        </div>
        <div className="stack-layer" style={{ "--i": 2 } as React.CSSProperties}>
          <span className="stack-label">Web app</span>
          <div className="stack-web">
            <div className="stack-web-bar">
              <i />
              <i />
              <i />
            </div>
            <div className="stack-web-body">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
        <div className="stack-layer stack-layer-top" style={{ "--i": 3 } as React.CSSProperties}>
          <span className="stack-label">Android app</span>
          <div className="stack-phone">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="stack-shadow" aria-hidden="true" />
    </div>
  );
}
