import type { MDXComponents } from "mdx/types";
import Image, { type StaticImageData } from "next/image";

function Figure({
  src,
  alt,
  caption,
  phone = false,
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  phone?: boolean;
}) {
  return (
    <figure className="my-8">
      <div
        className={
          phone
            ? "mx-auto max-w-[260px] overflow-hidden rounded-[1.75rem] border-4 border-border bg-bg-subtle"
            : "overflow-hidden rounded-xl border border-border bg-bg-subtle"
        }
      >
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          sizes={phone ? "260px" : "(min-width: 768px) 720px, 100vw"}
          className="w-full"
        />
      </div>
      {caption ? <figcaption className="mt-3 text-center text-sm text-fg-subtle">{caption}</figcaption> : null}
    </figure>
  );
}

function PhoneRow({ children }: { children: React.ReactNode }) {
  return <div className="my-8 grid grid-cols-1 gap-6 sm:grid-cols-3 [&_figure]:my-0">{children}</div>;
}

function Problem({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="my-6 rounded-xl border border-border bg-bg-subtle p-5 sm:p-6 [&>p:last-child]:mb-0">
      <h3 className="!mt-0 text-lg font-semibold text-fg">{title}</h3>
      {children}
    </section>
  );
}

const components: MDXComponents = { Figure, PhoneRow, Problem };

export function useMDXComponents(): MDXComponents {
  return components;
}
