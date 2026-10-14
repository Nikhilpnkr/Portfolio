"use client";

import { MoonIcon, SunIcon } from "./icons";

// Runs in <head> before first paint: saved choice, else dark.
export const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t="dark"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // Both icons render on the server; CSS picks one, so there is no hydration mismatch.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="inline-flex size-10 items-center justify-center rounded-lg text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
    >
      <SunIcon className="hidden size-5 dark:block" />
      <MoonIcon className="size-5 dark:hidden" />
    </button>
  );
}
