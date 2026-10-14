import Link from "next/link";
import { brand, mailtoLink, profile, whatsappLink } from "@/content/profile";
import { TrackedLink } from "./tracked-link";
import { navItems } from "./site-header";

export function SiteFooter() {
  const wa = whatsappLink("Hi Nikhil, I found you through your portfolio.");
  const label = "text-xs font-semibold text-fg-subtle";
  const link = "text-fg hover:text-accent";

  return (
    <footer data-print-hide className="relative mt-24 overflow-hidden border-t border-border">
      <div className="footer-glow" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[88rem] px-5 pt-16 sm:px-8 lg:px-12">
        <p className="footer-name" aria-hidden="true">
          {profile.name}
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className={label}>Email</p>
            <TrackedLink
              href={mailtoLink("Hello from your portfolio")}
              event="email_click"
              location="footer"
              className={`mt-2 block break-all text-lg font-medium ${link}`}
            >
              {profile.email}
            </TrackedLink>
            {wa ? (
              <TrackedLink
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                event="whatsapp_click"
                location="footer"
                className={`mt-1 block text-lg font-medium ${link}`}
              >
                WhatsApp +91 {profile.whatsapp.slice(2, 7)} {profile.whatsapp.slice(7)}
              </TrackedLink>
            ) : null}
          </div>

          <div>
            <p className={label}>Location</p>
            <address className="mt-2 text-sm leading-relaxed text-fg-muted not-italic">
              {profile.address.lines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>

          <div>
            <p className={label}>Pages</p>
            <ul className="mt-2 space-y-1.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={label}>Elsewhere</p>
            <ul className="mt-2 space-y-1.5">
              <li>
                <a href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>
                  GitHub
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm text-fg-muted">{profile.availability}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-border py-6 text-xs text-fg-subtle sm:flex-row sm:justify-between">
          <p>
            Designed and developed by {profile.name} · {brand.name} · 2026
          </p>
          <p>
            Built with AI-assisted development.
            {process.env.NEXT_PUBLIC_GA_ID ? " Google Analytics counts visits and contact clicks." : null}
          </p>
        </div>
      </div>
    </footer>
  );
}
