import Link from "next/link";
import { brand } from "@/content/profile";
import { ThemeToggle } from "./theme";
import { MobileNav } from "./mobile-nav";

export const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
] as const;

export function SiteHeader() {
  return (
    <header
      data-print-hide
      className="sticky top-0 z-40 border-b border-border/70 bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70"
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-fg">
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-lg bg-primary text-xs font-bold text-primary-fg"
          >
            {brand.mark}
          </span>
          <span>{brand.name}</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <MobileNav items={navItems} />
        </div>
      </div>
    </header>
  );
}
