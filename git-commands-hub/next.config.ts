import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Important for route refreshes on GitHub Pages
  trailingSlash: true,

  // Disable image optimization (not supported on GitHub Pages)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
