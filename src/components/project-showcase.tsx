"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Item = { key: string; label: string; accent: string; content: ReactNode };

const HEADER = 64;

// Shows one project at a time. On tall desktop screens the section pins and
// each scroll step swaps to the next project; elsewhere the tabs switch them.
export function ProjectShowcase({ items, header }: { items: Item[]; header?: ReactNode }) {
  const section = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);
  const step = useRef(0);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const sec = section.current;
    if (!sec) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    function measure() {
      if (!sec) return;
      sec.style.height = "";
      const view = window.innerHeight - HEADER;
      const fits = (sec.firstElementChild as HTMLElement).offsetHeight <= view;
      const pin = !reduced && fits && window.innerWidth >= 768;
      setPinned(pin);
      step.current = view * 0.75;
      if (pin) sec.style.height = `${view + step.current * (items.length - 1)}px`;
      onScroll();
    }

    function update() {
      frame = 0;
      if (!sec || !step.current || sec.style.height === "") return;
      const scrolled = HEADER - sec.getBoundingClientRect().top;
      const index = Math.min(items.length - 1, Math.max(0, Math.round(scrolled / step.current)));
      setActive(index);
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [items.length]);

  function select(index: number) {
    const sec = section.current;
    if (pinned && sec) {
      const top = sec.getBoundingClientRect().top + window.scrollY - HEADER + step.current * index;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setActive(index);
  }

  return (
    <div ref={section} className="showcase" data-pinned={pinned}>
      <div className="showcase-sticky">
        {header}
        <div className="mx-auto mt-8 w-full max-w-[88rem] px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Projects"
            onKeyDown={(e) => {
              if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
              e.preventDefault();
              const next = (active + (e.key === "ArrowRight" ? 1 : items.length - 1)) % items.length;
              select(next);
              document.getElementById(`tab-${items[next].key}`)?.focus();
            }}
          >
            {items.map((item, i) => (
              <button
                key={item.key}
                type="button"
                role="tab"
                id={`tab-${item.key}`}
                aria-selected={active === i}
                aria-controls={`panel-${item.key}`}
                tabIndex={active === i ? 0 : -1}
                onClick={() => select(i)}
                style={{ "--tone": item.accent } as React.CSSProperties}
                className="showcase-tab rounded-full border px-4 py-2 text-sm font-semibold transition-colors"
              >
                <span className="mr-1.5 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {item.label}
              </button>
            ))}
            <span className="ml-auto text-sm font-medium text-fg-subtle tabular-nums" aria-hidden="true">
              {active + 1} / {items.length}
            </span>
          </div>

          <div
            className="showcase-stage mt-6"
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) < 50) return;
              select(Math.min(items.length - 1, Math.max(0, active + (dx < 0 ? 1 : -1))));
            }}
          >
            {items.map((item, i) => (
              <div
                key={item.key}
                id={`panel-${item.key}`}
                role="tabpanel"
                aria-labelledby={`tab-${item.key}`}
                data-state={i === active ? "active" : i < active ? "before" : "after"}
                className="showcase-panel"
              >
                {item.content}
              </div>
            ))}
          </div>

          <div className="mt-6 flex gap-1.5" aria-hidden="true">
            {items.map((item, i) => (
              <span
                key={item.key}
                style={{ "--tone": item.accent } as React.CSSProperties}
                className={`showcase-dot h-1 rounded-full transition-all duration-500 ${i === active ? "w-10" : "w-4"}`}
                data-active={i === active}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
