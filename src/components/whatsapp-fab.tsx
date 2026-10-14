import { whatsappLink } from "@/content/profile";
import { TrackedLink } from "./tracked-link";
import { WhatsAppIcon } from "./icons";

// Mobile-only floating WhatsApp button. Hidden when no number is configured.
export function WhatsAppFab() {
  const href = whatsappLink("Hi Nikhil, I saw your portfolio and would like to talk about a project.");
  if (!href) return null;
  return (
    <TrackedLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      event="whatsapp_click"
      location="sticky"
      aria-label="Chat on WhatsApp"
      data-print-hide
      className="fixed right-4 bottom-4 z-30 grid size-14 place-items-center rounded-full bg-[#1fa855] text-white shadow-lg md:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </TrackedLink>
  );
}
