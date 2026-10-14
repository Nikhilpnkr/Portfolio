import { Container } from "./ui";
import { ContactButtons } from "./contact-buttons";
import { profile } from "@/content/profile";

export function ContactSection({
  title = "Have a project or a role in mind?",
  body = "Start with a free 20-minute call. Tell me what you need, and I'll suggest the simplest way to get there. No commitment.",
  message,
  location = "contact-cta",
}: {
  title?: string;
  body?: string;
  message?: string;
  location?: string;
}) {
  return (
    <section aria-labelledby="contact-heading" data-print-hide>
      <Container>
        <div className="cta-panel relative overflow-hidden rounded-3xl px-6 py-14 text-white sm:px-14 sm:py-16">
          <h2 id="contact-heading" className="relative z-10 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="relative z-10 mt-3 max-w-xl text-white/80">{body}</p>
          <div className="relative z-10 mt-8">
            <ContactButtons
              location={location}
              message={message ?? profile.freeCall.message}
              whatsappLabel={profile.freeCall.label}
              inverted
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
