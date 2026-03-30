import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // outputFileTracingRoot intentionally removed:
  // Setting this to path.resolve(__dirname, '../../') on Vercel escapes
  // the sandbox root (/vercel/path0) causing a doubled path at runtime:
  // /vercel/path0/vercel/path0/.next/routes-manifest.json (ENOENT)
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
