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
        <div className="rounded-2xl bg-primary px-6 py-12 text-primary-fg sm:px-12">
          <h2 id="contact-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl opacity-85">{body}</p>
          <div className="mt-8">
            <ContactButtons location={location} message={message} inverted />
          </div>
        </div>
      </Container>
    </section>
  );
}
