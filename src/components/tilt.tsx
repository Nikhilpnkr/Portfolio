"use client";

import { useRef, type ReactNode } from "react";

// Tilts its child towards the mouse in 3D. Mouse only; CSS disables it for
// reduced motion.
export function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`tilt ${className}`}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        ref.current.style.setProperty("--rx", `${(0.5 - (e.clientY - r.top) / r.height) * 7}deg`);
        ref.current.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 9}deg`);
      }}
      onPointerLeave={() => {
        ref.current?.style.setProperty("--rx", "0deg");
        ref.current?.style.setProperty("--ry", "0deg");
      }}
    >
      {children}
    </div>
  );
}
