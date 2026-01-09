import type { NextConfig } from "next";

const repoName = "git-commands-hub";

const nextConfig: NextConfig = {
  output: "export",

  // Required for GitHub Pages (repo is NOT a user site)
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,

  // Important for route refreshes on GitHub Pages
  trailingSlash: true,

  // Disable image optimization (not supported on GitHub Pages)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
