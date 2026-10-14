import { mailtoLink, profile, whatsappLink } from "@/content/profile";
import { TrackedLink } from "./tracked-link";
import { MailIcon, WhatsAppIcon } from "./icons";

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors";
export const buttonStyles = {
  primary: `${base} bg-primary text-primary-fg hover:bg-primary-hover`,
  secondary: `${base} border border-border bg-surface text-fg hover:border-primary hover:text-accent`,
  invertedPrimary: `${base} bg-primary-fg text-primary hover:opacity-90`,
  invertedSecondary: `${base} border border-primary-fg/40 text-primary-fg hover:bg-primary-fg/10`,
};

type Props = {
  location: string;
  message?: string;
  subject?: string;
  // Which button gets the primary style when both are shown.
  lead?: "whatsapp" | "email";
  // For use on a solid primary-coloured background.
  inverted?: boolean;
};

export function ContactButtons({
  location,
  message = "Hi Nikhil, I saw your portfolio and would like to talk about a project.",
  subject = "Enquiry from your portfolio",
  lead = "whatsapp",
  inverted = false,
}: Props) {
  const primary = inverted ? buttonStyles.invertedPrimary : buttonStyles.primary;
  const secondary = inverted ? buttonStyles.invertedSecondary : buttonStyles.secondary;
  const wa = whatsappLink(message);
  const whatsappPrimary = Boolean(wa) && lead === "whatsapp";

  return (
    <div className="flex flex-wrap gap-3">
      {wa ? (
        <TrackedLink
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          event="whatsapp_click"
          location={location}
          className={whatsappPrimary ? primary : secondary}
        >
          <WhatsAppIcon className="size-4" />
          WhatsApp me
        </TrackedLink>
      ) : null}
      <TrackedLink
        href={mailtoLink(subject)}
        event="email_click"
        location={location}
        className={whatsappPrimary ? secondary : primary}
      >
        <MailIcon className="size-4" />
        Email {profile.shortName}
      </TrackedLink>
    </div>
  );
}
