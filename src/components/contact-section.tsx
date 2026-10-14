import { Container } from "./ui";
import { ContactButtons } from "./contact-buttons";

export function ContactSection({
  title = "Have a project or a role in mind?",
  body = "Send me a message with what you need, and a rough budget or timeline if you have one.",
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
            <ContactButtons location={location} message={message} inverted />
          </div>
        </div>
      </Container>
    </section>
  );
}
