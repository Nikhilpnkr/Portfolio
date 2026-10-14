import Link from "next/link";
import { Container } from "@/components/ui";
import { buttonStyles } from "@/components/contact-buttons";

export default function NotFound() {
  return (
    <Container className="py-24 text-center sm:py-32">
      <p className="text-sm font-semibold text-accent">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-fg sm:text-4xl">This page doesn&apos;t exist</h1>
      <p className="mx-auto mt-4 max-w-md text-fg-muted">
        The link may be old or mistyped. Here are some places to go instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={buttonStyles.primary}>
          Go home
        </Link>
        <Link href="/work" className={buttonStyles.secondary}>
          See my work
        </Link>
        <Link href="/services" className={buttonStyles.secondary}>
          Services
        </Link>
      </div>
    </Container>
  );
}
