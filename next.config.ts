import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignore ESLint errors during Vercel builds
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ignore TypeScript type errors during builds
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
