
import type { NextConfig } from "next";

const repoName = "nextbites";

const isGitHubActions =
  process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",

  basePath: isGitHubActions
    ? `/${repoName}`
    : "",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
