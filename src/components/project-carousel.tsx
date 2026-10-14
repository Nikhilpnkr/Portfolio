"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

// Lines the first card up with the page content, while the row itself runs to
// the edge of the screen.
const GUTTER = "max(1rem, calc((100vw - 64rem) / 2 + 1.5rem))";

// Horizontal, snap-scrolling row of cards with previous/next buttons.
export function ProjectCarousel({ children, label }: { children: ReactNode; label: string }) {
  const track = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft + el.clientWidth > el.scrollWidth - 8);
  }, []);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  function scroll(dir: 1 | -1) {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    el.scrollBy({ left: dir * (card.clientWidth + 24), behavior: "smooth" });
  }

  const btn =
    "grid size-11 place-items-center rounded-full border border-border bg-surface text-fg transition-colors hover:border-primary hover:text-accent disabled:pointer-events-none disabled:opacity-35";

  return (
    <div>
      <div className="mx-auto mb-6 flex max-w-5xl justify-end gap-2 px-4 sm:px-6">
        <button type="button" className={btn} onClick={() => scroll(-1)} disabled={atStart} aria-label="Previous project">
          <ArrowRightIcon className="size-5 rotate-180" />
        </button>
        <button type="button" className={btn} onClick={() => scroll(1)} disabled={atEnd} aria-label="Next project">
          <ArrowRightIcon className="size-5" />
        </button>
      </div>
      <ul
        ref={track}
        onScroll={update}
        aria-label={label}
        className="carousel flex snap-x snap-mandatory gap-6 overflow-x-auto pt-2 pb-8"
        style={{ paddingInline: GUTTER, scrollPaddingInline: GUTTER }}
      >
        {children}
      </ul>
    </div>
  );
}
