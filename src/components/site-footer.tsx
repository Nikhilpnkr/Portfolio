import Link from "next/link";
import { brand, mailtoLink, profile, whatsappLink } from "@/content/profile";
import { TrackedLink } from "./tracked-link";
import { navItems } from "./site-header";

export function SiteFooter() {
  const wa = whatsappLink("Hi Nikhil, I found you through your portfolio.");
  return (
    <footer data-print-hide className="mt-24 border-t border-border bg-bg-subtle">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-semibold text-fg">{brand.name}</p>
          <p className="mt-2 text-sm text-fg-muted">
            The studio of {profile.name}, {profile.role.toLowerCase()} in {profile.location}.
          </p>
          <p className="mt-1 text-sm text-fg-muted">{profile.availability}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-fg-muted hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2 text-sm">
          {wa ? (
            <li>
              <TrackedLink
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                event="whatsapp_click"
                location="footer"
                className="text-fg-muted hover:text-accent"
              >
                WhatsApp
              </TrackedLink>
            </li>
          ) : null}
          <li>
            <TrackedLink
              href={mailtoLink("Hello from your portfolio")}
              event="email_click"
              location="footer"
              className="text-fg-muted hover:text-accent"
            >
              {profile.email}
            </TrackedLink>
          </li>
          <li>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-fg-muted hover:text-accent">
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-5xl px-4 py-5 text-xs text-fg-subtle sm:px-6">
          © 2026 {brand.name}. Built with AI-assisted development.
          {process.env.NEXT_PUBLIC_GA_ID
            ? " This site uses Google Analytics to count visits and contact clicks."
            : null}
        </p>
      </div>
    </footer>
  );
}
