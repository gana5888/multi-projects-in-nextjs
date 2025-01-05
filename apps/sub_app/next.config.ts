import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir: '../../build/sub_app/_next',
  productionBrowserSourceMaps: false, // Disables source maps in production to prevent code debugging
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  assetPrefix: '/main',
  experimental: {
    cssChunking: true, // default
  },
};

export default nextConfig;
