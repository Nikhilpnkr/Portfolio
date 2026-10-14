import type React from "react";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-sm font-semibold text-accent">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="mt-2 text-3xl font-bold tracking-[-0.025em] text-balance text-fg sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-lg leading-relaxed text-pretty text-fg-muted">{intro}</p> : null}
    </div>
  );
}

export function Chip({ children, tone }: { children: ReactNode; tone?: string }) {
  if (tone) {
    return (
      <span
        style={{ "--tone": tone } as React.CSSProperties}
        className="tone-chip inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold"
      >
        {children}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-bg-subtle px-2 py-0.5 text-xs font-medium text-fg-muted">
      {children}
    </span>
  );
}
