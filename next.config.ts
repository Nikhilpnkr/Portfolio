import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // The site moved from the old name-based address to devdenlabs.vercel.app.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "nikhilpnkr.vercel.app" }],
        destination: "https://devdenlabs.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
