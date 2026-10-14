import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-5xl px-4 sm:px-6 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">{children}</p>;
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
      <h2 id={id} className="mt-2 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
        {title}
      </h2>
      {intro ? <p className="mt-3 text-base leading-relaxed text-fg-muted">{intro}</p> : null}
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-bg-subtle px-2 py-0.5 text-xs font-medium text-fg-muted">
      {children}
    </span>
  );
}
