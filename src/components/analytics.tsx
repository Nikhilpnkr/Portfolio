import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

// GA4, loaded after the page is interactive. Skipped entirely when no ID is set
// (local dev and previews), so test traffic never reaches the real property.
export function Analytics() {
  if (!GA_ID || process.env.VERCEL_ENV === "preview") return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_ID}');`}
      </Script>
    </>
  );
}
