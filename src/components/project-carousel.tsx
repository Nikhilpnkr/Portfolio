"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Lines the first card up with the page content, while the row itself runs to
// the edge of the screen.
const GUTTER = "var(--gutter)";

// Pinned horizontal scroller: while the section is in view, scrolling the page
// down slides the cards sideways. Without JavaScript, or with reduced motion,
// it falls back to a normal swipeable row.
export function ProjectCarousel({
  children,
  label,
  header,
}: {
  children: ReactNode;
  label: string;
  header?: ReactNode;
}) {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = section.current;
    const row = track.current;
    if (!sec || !row) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let distance = 0;
    let frame = 0;

    function measure() {
      if (!sec || !row) return;
      row.style.transform = "";
      sec.dataset.pinned = "false";
      sec.style.height = "";
      // Only pin when the whole block fits on screen below the 64px header.
      const fits = (sec.firstElementChild as HTMLElement).offsetHeight <= window.innerHeight - 64;
      distance = fits ? Math.max(0, row.scrollWidth - row.clientWidth) : 0;
      sec.dataset.pinned = distance > 0 ? "true" : "false";
      sec.style.height = distance > 0 ? `${window.innerHeight - 64 + distance}px` : "";
      update();
    }

    function update() {
      frame = 0;
      if (!sec || !row || distance === 0) return;
      const progress = Math.min(1, Math.max(0, (64 - sec.getBoundingClientRect().top) / distance));
      row.style.transform = `translate3d(${-progress * distance}px, 0, 0)`;
      if (bar.current) bar.current.style.transform = `scaleX(${progress})`;
    }

    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update);
    }

    // Keyboard users: bring a focused card into view by scrolling the page.
    function onFocus(e: FocusEvent) {
      if (!sec || !row || distance === 0) return;
      const card = (e.target as HTMLElement).closest("li");
      if (!card) return;
      const target = Math.min(distance, Math.max(0, card.offsetLeft - row.offsetLeft - 24));
      const top = sec.getBoundingClientRect().top + window.scrollY - 64 + target;
      window.scrollTo({ top, behavior: "instant" as ScrollBehavior });
    }

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    row.addEventListener("focusin", onFocus);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", onScroll);
      row.removeEventListener("focusin", onFocus);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={section} className="pinned-carousel">
      <div className="pinned-carousel-sticky">
        {header}
        <ul
          ref={track}
          aria-label={label}
          className="carousel mt-8 flex gap-6 pt-2 pb-6"
          style={{ paddingInline: GUTTER, scrollPaddingInline: GUTTER }}
        >
          {children}
        </ul>
        <div className="mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-12" aria-hidden="true">
          <div className="pinned-progress h-0.5 overflow-hidden rounded-full bg-border">
            <div ref={bar} className="h-full origin-left scale-x-0 bg-primary" />
          </div>
        </div>
      </div>
    </div>
  );
}
